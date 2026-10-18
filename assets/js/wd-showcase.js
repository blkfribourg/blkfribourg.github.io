// Live Ride Portal block on the home page: the Discover totals and a few public rides from
// GET <portal>/api/public/showcase (public, GPS-verified rides only; see the portal's
// publicShowcase.js). The block ships hidden and is only shown once real data has arrived, so if
// the portal is slow or unreachable the section stays as the static copy and links.
(function () {
  const block = document.querySelector('[data-wd-showcase]');
  if (!block || !window.fetch) return;
  const endpoint = block.getAttribute('data-wd-showcase');
  const portal = block.getAttribute('data-wd-portal');

  // Route thumbnail, the same drawing as the portal's Discover rows (public/shared/route-svg.js
  // in WheelDash_Amazfit_Server): glow, dark casing, body shaded steel → crimson along the route,
  // pale core, steel start square and crimson end square. Keep the two in step.
  const PAD = 60;
  const BUCKETS = 14;
  const STEEL = [159, 180, 204];
  const RED = [239, 68, 68];
  const HOT = [255, 107, 91];
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const colorAt = (t) => {
    const c = t < 0.5 ? mix(STEEL, RED, t * 2) : mix(RED, HOT, (t - 0.5) * 2);
    return 'rgb(' + c.join(',') + ')';
  };
  const point = (p) => (Number(p[0]) | 0) + ' ' + (Number(p[1]) | 0);
  const pathOf = (points) => 'M' + points.map(point).join('L');

  function chunks(runs) {
    const lengths = runs.map((run) => run.slice(1).map((p, i) => Math.hypot(p[0] - run[i][0], p[1] - run[i][1])));
    const total = lengths.flat().reduce((a, b) => a + b, 0) || 1;
    const out = [];
    let travelled = 0;
    runs.forEach((run, r) => {
      let current = null;
      run.slice(1).forEach((p, i) => {
        const mid = (travelled + lengths[r][i] / 2) / total;
        const bucket = Math.min(BUCKETS - 1, Math.floor(mid * BUCKETS));
        if (!current || current.bucket !== bucket) {
          current = { bucket, mid, points: [run[i]] };
          out.push(current);
        }
        current.points.push(p);
        travelled += lengths[r][i];
      });
    });
    return out;
  }

  function routeSvg(route) {
    const w = Number(route && route.w);
    const h = Number(route && route.h);
    const runs = route && Array.isArray(route.runs) ? route.runs.filter((run) => Array.isArray(run) && run.length >= 2) : [];
    if (!runs.length || !Number.isFinite(w) || !Number.isFinite(h)) return '';
    const all = runs.map(pathOf).join('');
    const body = chunks(runs).map((c) => '<path d="' + pathOf(c.points) + '" stroke="' + colorAt(c.mid) + '"/>').join('');
    const first = runs[0][0];
    const lastRun = runs[runs.length - 1];
    const last = lastRun[lastRun.length - 1];
    // Diamonds, as in the portal: a near-zero diagonal stroke with square caps is a square
    // turned 45°. The start is an outline (steel with a dark hole), the finish solid crimson.
    const mark = (p, cls) => '<path class="' + cls + '" d="M' + (Number(p[0]) | 0) + ' ' + (Number(p[1]) | 0) + 'l.01 .01"/>';
    return '<svg class="wd-route" viewBox="' + -PAD + ' ' + -PAD + ' ' + (w + 2 * PAD) + ' ' + (h + 2 * PAD) + '" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">'
      + '<g fill="none" stroke-linecap="round" stroke-linejoin="round">'
      + '<path class="wd-route__glow" d="' + all + '"/>'
      + '<path class="wd-route__casing" d="' + all + '"/>'
      + '<g class="wd-route__body">' + body + '</g>'
      + '<path class="wd-route__core" d="' + all + '"/>'
      + '</g><g class="wd-route__markers">'
      + mark(first, 'wd-route__pin') + mark(last, 'wd-route__pin')
      + mark(first, 'wd-route__start') + mark(first, 'wd-route__start-hole') + mark(last, 'wd-route__end')
      + '</g></svg>';
  }

  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const finite = (v) => v !== null && v !== undefined && v !== '' && Number.isFinite(Number(v));
  const fixed = (v, digits) => (finite(v) ? Number(v).toFixed(digits) : '—');
  const hoursMinutes = (minutes) => {
    if (!finite(minutes)) return '—';
    const total = Math.round(Number(minutes));
    return Math.floor(total / 60) + ':' + String(total % 60).padStart(2, '0');
  };
  const compact = (n) => (n >= 10000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : Math.round(n).toLocaleString('en'));
  const day = (value) => {
    const date = new Date(Number(value) || value);
    return Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  function stat(value, unit, label) {
    const cell = el('div', 'wd-live__stat');
    cell.append(el('span', 'wd-live__stat-label', label), el('strong', null, value), el('small', null, unit));
    return cell;
  }

  function row(session) {
    const m = session.metrics || {};
    const item = el('li', 'wd-live__ride');
    const trace = el('div', 'wd-live__route');
    trace.innerHTML = routeSvg(session.route);
    const main = el('div', 'wd-live__main');
    const title = el('a', 'wd-live__title', session.title || session.sessionName);
    title.href = portal + '/visualize/' + encodeURIComponent(session.sessionId);
    const meta = el('p', 'wd-live__meta');
    const rider = el('a', 'wd-live__rider', '@' + session.username);
    rider.href = portal + '/riders/' + encodeURIComponent(session.username);
    const wheel = [session.wheelBrand, session.wheelModel].filter(Boolean).join(' ') || session.profileName || '';
    meta.append(rider);
    if (wheel) meta.append(el('span', null, wheel));
    const date = day(session.recordingDate);
    if (date) meta.append(el('span', null, date));
    meta.append(el('span', 'wd-live__chip', 'GPS verified'));
    main.append(title, el('p', 'wd-live__place', session.locationName || session.countryName || ''), meta);
    const stats = el('div', 'wd-live__stats');
    stats.append(
      stat(fixed(m.distanceKm, 1), 'km', 'Distance'),
      stat(hoursMinutes(m.durationMinutes), 'h:mm', 'Time'),
      stat(fixed(m.maxSpeedKmh, 1), 'km/h', 'Top speed'),
      stat(fixed(m.elevationGainM, 0), 'm', 'Climb')
    );
    item.append(trace, main, stats);
    return item;
  }

  function render(data) {
    const totals = data && data.totals;
    if (!totals || !(totals.rides > 0)) return;
    const values = { rides: compact(totals.rides), riders: compact(totals.riders), km: compact(totals.distanceKm) };
    Object.keys(values).forEach((key) => {
      const slot = block.querySelector('[data-wd-total="' + key + '"]');
      if (slot) slot.textContent = values[key];
    });
    const list = block.querySelector('[data-wd-rides]');
    const sessions = Array.isArray(data.sessions) ? data.sessions : [];
    if (list && sessions.length) {
      list.replaceChildren(...sessions.map(row));
      list.hidden = false;
    }
    block.hidden = false;
  }

  function load() {
    const abort = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = abort ? setTimeout(() => abort.abort(), 6000) : null;
    fetch(endpoint, { credentials: 'omit', mode: 'cors', signal: abort ? abort.signal : undefined })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => { if (data && data.success) render(data); })
      .catch(() => {})
      .finally(() => { if (timer) clearTimeout(timer); });
  }

  if ('IntersectionObserver' in window) {
    const watcher = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        watcher.disconnect();
        load();
      }
    }, { rootMargin: '600px 0px' });
    watcher.observe(block.closest('section') || block);
  } else {
    load();
  }
})();
