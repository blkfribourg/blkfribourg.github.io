---
layout: splash
permalink: /
hidden: true
lang: en
title: "WheelDash | Standalone EUC smartwatch app"
excerpt: "In direct EUC mode, WheelDash connects your Garmin or Amazfit watch straight to your electric unicycle for live telemetry, safety alerts and ride recording without a phone relay."
classes: wheeldash-home
---

{% assign product = site.data.product %}

<section class="wd-hero" aria-labelledby="wd-hero-title">
  <div class="wd-hero__copy">
    <p class="wd-eyebrow"><span></span> A standalone EUC app for your watch</p>
    <h1 id="wd-hero-title">Direct to<br>your <em>wrist.</em></h1>
    <p class="wd-hero__lead">WheelDash turns your smartwatch into a complete EUC dashboard. In direct EUC mode, your wheel connects straight to the watch, where live data is received, processed and displayed.</p>
    <div class="wd-actions">
      <a class="wd-button wd-button--primary" href="#platforms">Choose your platform <span aria-hidden="true">→</span></a>
      <a class="wd-button wd-button--ghost" href="{{ product.urls.public_rides }}">Explore public rides</a>
    </div>
    <div class="wd-hero__promise"><span aria-hidden="true">✓</span><p><strong>Fast, reactive telemetry and safety alerts.</strong> No phone relay in direct EUC mode.</p></div>
    <div class="wd-hero__promise"><span aria-hidden="true">✓</span><p><strong>Build your own dashboard.</strong> Custom watch layouts on Amazfit. <a href="#dashboards">See examples <span aria-hidden="true">→</span></a></p></div>
    <p class="wd-hero__availability">For supported Garmin and Amazfit watches. Amazfit's optional EUC World mode is phone-relayed. Features vary by implementation. <a href="#platforms">Compare platforms <span aria-hidden="true">→</span></a></p>
  </div>
  <div class="wd-hero__visual wd-hero__watch">
    <img src="/assets/images/wheeldash-hero-watches.webp" width="1078" height="1280" alt="Amazfit Active 2 and Garmin fēnix 7 Pro running WheelDash">
    <p class="wd-hero__model" style="--x:24.6%">Amazfit Active 2</p>
    <p class="wd-hero__model" style="--x:71.4%">Garmin fēnix 7 Pro</p>
  </div>
</section>

<section class="wd-trace" aria-label="Real ride telemetry overlay: speed, battery and temperature">
  <svg viewBox="0 0 1312 90" preserveAspectRatio="none" role="img" aria-label="Speed, battery and temperature plotted over one real ride">
    <defs><linearGradient id="wd-trace-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b82f6" stop-opacity=".32"/><stop offset="1" stop-color="#3b82f6" stop-opacity="0"/></linearGradient></defs>
    <path class="wd-trace__area" d="M0 46 L13 58 L27 74 L40 36 L53 38 L66 59 L80 70 L93 82 L106 85 L119 77 L133 66 L146 50 L159 24 L172 42 L186 38 L199 26 L212 44 L225 80 L239 86 L252 86 L265 81 L278 49 L292 26 L305 56 L318 10 L331 25 L345 36 L358 44 L371 83 L384 84 L398 84 L411 84 L424 84 L437 84 L451 84 L464 84 L477 84 L490 84 L504 84 L517 84 L530 84 L543 84 L557 84 L570 84 L583 84 L596 84 L610 84 L623 84 L636 84 L649 84 L663 84 L676 84 L689 84 L702 48 L716 4 L729 4 L742 6 L755 31 L769 66 L782 80 L795 77 L808 77 L822 77 L835 77 L848 77 L861 77 L875 85 L888 66 L901 60 L914 34 L928 31 L941 39 L954 14 L967 30 L981 84 L994 86 L1007 84 L1020 23 L1034 52 L1047 82 L1060 63 L1073 70 L1087 29 L1100 44 L1113 71 L1126 57 L1140 53 L1153 86 L1166 86 L1179 46 L1193 23 L1206 23 L1219 39 L1232 48 L1246 25 L1259 48 L1272 50 L1285 24 L1299 86 L1312 86 L1312 90 L0 90 Z"/>
    <path class="wd-trace__line wd-trace__line--battery" d="M0 4 L13 6 L27 5 L40 13 L53 14 L66 13 L80 14 L93 12 L106 14 L119 15 L133 15 L146 17 L159 18 L172 17 L186 17 L199 17 L212 17 L225 15 L239 13 L252 13 L265 14 L278 19 L292 18 L305 17 L318 26 L331 31 L345 28 L358 29 L371 28 L384 28 L398 28 L411 28 L424 28 L437 28 L451 28 L464 28 L477 28 L490 28 L504 28 L517 28 L530 28 L543 28 L557 28 L570 28 L583 27 L596 25 L610 25 L623 25 L636 25 L649 25 L663 25 L676 25 L689 25 L702 28 L716 37 L729 40 L742 43 L755 43 L769 42 L782 40 L795 40 L808 40 L822 40 L835 40 L848 40 L861 40 L875 86 L888 39 L901 16 L914 17 L928 17 L941 16 L954 23 L967 24 L981 20 L994 20 L1007 20 L1020 28 L1034 30 L1047 27 L1060 28 L1073 31 L1087 36 L1100 36 L1113 36 L1126 36 L1140 38 L1153 37 L1166 36 L1179 40 L1193 44 L1206 46 L1219 48 L1232 48 L1246 53 L1259 55 L1272 57 L1285 63 L1299 60 L1312 60"/>
    <path class="wd-trace__line wd-trace__line--temp" d="M0 61 L13 63 L27 80 L40 71 L53 61 L66 60 L80 53 L93 50 L106 39 L119 4 L133 4 L146 17 L159 30 L172 40 L186 44 L199 45 L212 48 L225 48 L239 61 L252 68 L265 52 L278 35 L292 32 L305 38 L318 40 L331 38 L345 41 L358 43 L371 43 L384 43 L398 43 L411 43 L424 43 L437 43 L451 43 L464 43 L477 43 L490 43 L504 43 L517 43 L530 43 L543 43 L557 43 L570 43 L583 49 L596 86 L610 86 L623 86 L636 86 L649 86 L663 86 L676 86 L689 86 L702 67 L716 43 L729 34 L742 33 L755 36 L769 35 L782 52 L795 59 L808 59 L822 59 L835 59 L848 59 L861 59 L875 62 L888 64 L901 39 L914 22 L928 26 L941 30 L954 30 L967 28 L981 30 L994 30 L1007 38 L1020 48 L1034 31 L1047 36 L1060 46 L1073 37 L1087 29 L1100 30 L1113 37 L1126 38 L1140 37 L1153 46 L1166 60 L1179 51 L1193 37 L1206 33 L1219 32 L1232 30 L1246 28 L1259 20 L1272 18 L1285 24 L1299 25 L1312 25"/>
    <path class="wd-trace__line wd-trace__line--speed" d="M0 46 L13 58 L27 74 L40 36 L53 38 L66 59 L80 70 L93 82 L106 85 L119 77 L133 66 L146 50 L159 24 L172 42 L186 38 L199 26 L212 44 L225 80 L239 86 L252 86 L265 81 L278 49 L292 26 L305 56 L318 10 L331 25 L345 36 L358 44 L371 83 L384 84 L398 84 L411 84 L424 84 L437 84 L451 84 L464 84 L477 84 L490 84 L504 84 L517 84 L530 84 L543 84 L557 84 L570 84 L583 84 L596 84 L610 84 L623 84 L636 84 L649 84 L663 84 L676 84 L689 84 L702 48 L716 4 L729 4 L742 6 L755 31 L769 66 L782 80 L795 77 L808 77 L822 77 L835 77 L848 77 L861 77 L875 85 L888 66 L901 60 L914 34 L928 31 L941 39 L954 14 L967 30 L981 84 L994 86 L1007 84 L1020 23 L1034 52 L1047 82 L1060 63 L1073 70 L1087 29 L1100 44 L1113 71 L1126 57 L1140 53 L1153 86 L1166 86 L1179 46 L1193 23 L1206 23 L1219 39 L1232 48 L1246 25 L1259 48 L1272 50 L1285 24 L1299 86 L1312 86"/>
  </svg>
  <p class="wd-trace__legend"><span>Real ride · 14,847 samples</span><i class="is-speed">Speed</i><i class="is-battery">Battery</i><i class="is-temp">Temp</i></p>
</section>

<section class="wd-section wd-direct" aria-labelledby="direct-title">
  <div class="wd-section__intro wd-section__intro--row">
    <div><p class="wd-kicker">The key difference</p><h2 id="direct-title">Every hop adds delay.<br>We removed the hop.</h2></div>
    <p>WheelDash handles direct EUC telemetry on the watch itself, then adds configurable safety warnings, ride recording and supported accessories. Mapping, navigation and post-ride tools depend on the platform you choose.</p>
  </div>
  <div class="wd-hops">
    <div class="wd-hop">
      <p class="wd-hop__label">Phone companion apps</p>
      <ol class="wd-hop__flow" aria-label="EUC to phone to watch"><li>EUC</li><li>Phone</li><li>Watch</li></ol>
      <p class="wd-hop__note">2 hops · relayed through a phone · EUC World, DarknessBot, EUC Planet</p>
    </div>
    <div class="wd-hop wd-hop--direct">
      <p class="wd-hop__label">WheelDash · Direct EUC mode</p>
      <ol class="wd-hop__flow" aria-label="EUC to watch"><li>EUC</li><li>Watch</li></ol>
      <p class="wd-hop__note">1 hop · processed on the watch · telemetry, alerts and recording without a phone</p>
    </div>
  </div>
</section>

<section class="wd-section" id="features" aria-labelledby="features-title">
  <div class="wd-section__intro"><p class="wd-kicker">Core experience</p><h2 id="features-title">Built around the ride.</h2><p>Direct telemetry, configurable alerts and recording form the core experience. Mapping, navigation, customization and post-ride tools differ by implementation.</p></div>
  <div class="wd-feature-grid wd-feature-grid--shared">
    <article class="wd-feature"><svg class="wd-feature__icon is-green" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg><h3>Live telemetry</h3><p>See speed, battery, temperature, PWM and other essential EUC information.</p></article>
    <article class="wd-feature"><svg class="wd-feature__icon is-red" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/></svg><h3>Safety alerts</h3><p>Configure visual warnings plus watch sounds or vibration where the device supports them.</p></article>
    <article class="wd-feature"><svg class="wd-feature__icon is-blue" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/></svg><h3>On-watch navigation</h3><p>On Amazfit, route and map data can be loaded onto the watch before the ride. Navigation availability is platform- and region-specific.</p></article>
    <article class="wd-feature wd-feature--image wd-feature--accessories"><img src="/assets/images/gallery/engo4.jpg" alt="ENGO glasses showing WheelDash navigation while riding"><div><svg class="wd-feature__icon is-blue" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.5" cy="14" r="3.5"/><circle cx="17.5" cy="14" r="3.5"/><path d="M10 14h4M3 14V9l2-3M21 14V9l-2-3"/></svg><h3>Connected accessories</h3><p>Supported implementations can connect directly to ENGO glasses and Garmin Varia radar.</p></div></article>
    <article class="wd-feature wd-feature--image wd-feature--image-reverse"><div><svg class="wd-feature__icon is-green" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M3 3l18 18"/></svg><h3>Phone-free riding</h3><p>In direct EUC mode, telemetry, alarms and recording run on the watch. Amazfit uses the phone for setup, route transfer, ride upload and optional EUC World mode.</p></div><img src="/assets/images/no-phone.jpg" alt="A rider putting a phone into a pocket"></article>
  </div>
</section>

<section class="wd-section wd-dashboards" id="dashboards" aria-labelledby="dashboards-title">
  <div class="wd-section__intro"><p class="wd-kicker">Your dashboard</p><h2 id="dashboards-title">Your layout.<br>Your data.</h2><p>On Amazfit, the dashboard is yours to build. Put any value anywhere on the screen, as a big number, a gauge, a bar or plain text, and split it up with separators. Build layouts in WheelDash's settings in the Zepp app, or in the <a href="https://wd.nijalabs.com/layout-editor">Ride Portal's layout editor</a>.</p></div>
  <div class="wd-dash-builder">
    <figure class="wd-dash-anno">
      <svg viewBox="0 0 504 504" role="img" aria-labelledby="wd-dash-anno-title">
        <title id="wd-dash-anno-title">One layout taken apart: each numbered outline is a block placed by the rider.</title>
        <circle cx="252" cy="252" r="250" class="wd-dash-anno__bezel"/>
        <image href="/assets/images/dashboards/showcase.webp" x="12" y="12" width="480" height="480"/>
        <rect class="wd-dash-anno__box" x="189" y="45" width="126" height="40" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="189" cy="45" r="13"/><text x="189" y="50">1</text></g>
        <rect class="wd-dash-anno__box" x="159" y="83" width="186" height="34" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="159" cy="83" r="13"/><text x="159" y="88">2</text></g>
        <rect class="wd-dash-anno__box" x="47" y="149" width="110" height="110" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="47" cy="149" r="13"/><text x="47" y="154">3</text></g>
        <rect class="wd-dash-anno__box" x="347" y="149" width="110" height="110" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="457" cy="149" r="13"/><text x="457" y="154">3</text></g>
        <rect class="wd-dash-anno__box" x="155" y="113" width="194" height="166" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="155" cy="113" r="13"/><text x="155" y="118">4</text></g>
        <rect class="wd-dash-anno__box" x="99" y="278" width="306" height="14" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="405" cy="278" r="13"/><text x="405" y="283">5</text></g>
        <rect class="wd-dash-anno__box" x="105" y="291" width="144" height="82" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="105" cy="291" r="13"/><text x="105" y="296">6</text></g>
        <rect class="wd-dash-anno__box" x="255" y="291" width="144" height="82" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="399" cy="291" r="13"/><text x="399" y="296">6</text></g>
        <rect class="wd-dash-anno__box" x="139" y="375" width="226" height="24" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="139" cy="375" r="13"/><text x="139" y="380">7</text></g>
        <rect class="wd-dash-anno__box" x="129" y="403" width="246" height="30" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="129" cy="433" r="13"/><text x="129" y="438">8</text></g>
        <rect class="wd-dash-anno__box" x="233" y="435" width="38" height="38" rx="6"/>
        <g class="wd-dash-anno__badge"><circle cx="271" cy="435" r="13"/><text x="271" y="440">9</text></g>
      </svg>
    </figure>
    <div class="wd-dash-builder__copy">
      <ol class="wd-dash-steps">
        <li><b>1</b> Add a block</li>
        <li><b>2</b> Pick the data it shows</li>
        <li><b>3</b> Drag, resize, recolour</li>
      </ol>
      <ol class="wd-dash-legend">
        <li><strong>Clock</strong></li>
        <li><strong>Plain text</strong> <span>Your own words, up to 48 characters.</span></li>
        <li><strong>Circular gauge</strong> <span>Any value as an arc, with your colours, range and angles.</span></li>
        <li><strong>Value</strong> <span>A plain number, as large as you like.</span></li>
        <li><strong>Separator</strong> <span>Lines to group what belongs together.</span></li>
        <li><strong>Labelled value</strong> <span>A value with your own caption above it.</span></li>
        <li><strong>Progress bar</strong> <span>Horizontal or vertical.</span></li>
        <li><strong>Varia radar bar</strong> <span>Approaching vehicles from a Garmin Varia.</span></li>
        <li><strong>Recording indicator</strong></li>
      </ol>
      <p class="wd-dash-builder__more">Also available: speed-limit indicator and alarm message. Size, colour, alignment, decimals and units are set per block.</p>
    </div>
  </div>
  <div class="wd-dash-sources">
    <p>Values, gauges and bars can show</p>
    <ul><li>Speed</li><li>PWM</li><li>Battery %</li><li>Temperature</li><li>Motor temperature</li><li>Coil temperature</li><li>Driver board temperature</li><li>Tyre pressure</li><li>Voltage</li><li>Current</li><li>Phase current</li><li>Top speed</li><li>Average speed</li><li>Average moving speed</li><li>Distance</li><li>Total distance</li><li>Profile distance</li><li>Riding time</li><li>Battery/distance</li><li>Active preset</li></ul>
    <small>Motor, coil and driver board temperature and tyre pressure depend on the wheel.</small>
  </div>
  <p class="wd-dash-examples-title">Other layouts built from the same blocks</p>
  <div class="wd-dashboards__grid">
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/minimal.webp" width="720" height="720" loading="lazy" alt="Round layout: large speed, battery bar and recording indicator"></div>
      <figcaption><span>Speed · battery bar · rec</span></figcaption>
    </figure>
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/racing.webp" width="720" height="720" loading="lazy" alt="Round layout: speed arc gauge around the screen with PWM, battery and temperature"></div>
      <figcaption><span>Speed arc · PWM · batt · temp</span></figcaption>
    </figure>
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/commute.webp" width="720" height="720" loading="lazy" alt="Round layout: free-text label, speed, battery and temperature bars, trip, current, Varia radar bar and alarm message"></div>
      <figcaption><span>Free text · Varia · alarm</span></figcaption>
    </figure>
    <figure class="wd-dash-face wd-dash-face--square">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/stats.webp" width="720" height="829" loading="lazy" alt="Square layout: ride time, trip distance, average moving speed, top speed, battery use per km and voltage"></div>
      <figcaption><span>Square · 6 labelled values</span></figcaption>
    </figure>
  </div>
  <div class="wd-dash-garmin">
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/garmin-app.webp" width="720" height="720" loading="lazy" alt="Garmin App dashboard: speed in the centre, PWM on the top arc, battery and temperature on the side arcs"></div>
      <figcaption><span>Garmin App</span></figcaption>
    </figure>
    <div class="wd-dash-garmin__copy">
      <p class="wd-dash-garmin__label">On Garmin</p>
      <h3>One fixed dashboard.</h3>
      <p>The Garmin App shows the same dashboard on every watch: speed in the centre, PWM on the top arc by default, battery and temperature on the side arcs. The Garmin Datafield shows 6 or 8 fields you choose.</p>
      <p>Fully custom layouts like the ones above are Amazfit only.</p>
    </div>
  </div>
  <p class="wd-dashboards__note">Example layouts, drawn with the Ride Portal's watch preview.</p>
</section>

<section class="wd-section wd-platforms" id="platforms" aria-labelledby="platform-title">
  <div class="wd-section__intro wd-section__intro--row"><div><p class="wd-kicker">Choose your platform</p><h2 id="platform-title">One ecosystem.<br>Three implementations.</h2></div><p>Garmin riders can choose a standalone app or a datafield inside a Garmin activity. Amazfit provides the most integrated WheelDash workflow.</p></div>
  <div class="wd-platform-cards wd-platform-cards--three">
  {% for platform_id in product.platform_order %}
  {% assign platform = product.platforms[platform_id] %}
    <article class="wd-platform-card{% if platform_id == 'amazfit' %} wd-platform-card--accent{% endif %}">
      <p class="wd-platform-card__label">{{ platform.name }}{% if platform_id == 'amazfit' %}<span>Integrated experience</span>{% endif %}</p>
      <h3>{{ platform.short }}</h3><p>{{ platform.explanation }}</p>
      {% if platform_id == 'garmin_app' %}<ul><li>Standalone riding display</li><li>On-watch alerts</li><li>Garmin Connect recording</li></ul>{% endif %}
      {% if platform_id == 'garmin_datafield' %}<ul><li>Direct EUC connection</li><li>6 or 8 configurable fields</li><li>Garmin recording and navigation</li></ul>{% endif %}
      {% if platform_id == 'amazfit' %}<ul><li>Custom dashboards</li><li>Preloaded navigation in {{ product.navigation_regions | array_to_sentence_string }}</li><li>WheelDash Ride Portal</li></ul>{% endif %}
      <a class="wd-text-link" href="{{ platform.install_url }}">{{ platform.install_label }} <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
  </div>
  {% include platform-comparison.html %}
  <div class="wd-comparison-footer"><p>Garmin rides remain in Garmin Connect. Amazfit rides can use the WheelDash Ride Portal.</p><a class="wd-text-link" href="/platforms/">View the detailed comparison <span aria-hidden="true">→</span></a></div>
</section>

<section class="wd-section wd-portal-wrap" id="ride-portal" aria-labelledby="portal-title">
  <div class="wd-portal">
    <div class="wd-portal__copy">
      <p class="wd-kicker">Ride Portal</p>
      <h2 id="portal-title">Every ride, every segment, one place.</h2>
      <p>Amazfit riders can upload and review WheelDash recordings. Everyone can browse intentionally shared public rides, view the community leaderboard and discover segments where riders have shared activity.</p>
      <div class="wd-actions"><a class="wd-button wd-button--primary" href="{{ product.urls.public_rides }}">Explore public rides <span aria-hidden="true">↗</span></a><a class="wd-button wd-button--ghost" href="{{ product.urls.portal_login }}">Sign in</a></div>
    </div>
    <ul class="wd-portal__links">
      <li><a href="{{ product.urls.public_rides }}"><span>Discovery</span><strong>Public ride maps and statistics</strong><em aria-hidden="true">↗</em></a></li>
      <li><a href="{{ product.urls.leaderboard }}"><span>Community</span><strong>Leaderboard</strong><em aria-hidden="true">↗</em></a></li>
      <li><a href="{{ product.urls.segments }}"><span>Growing feature</span><strong>Segments shared by the community</strong><em aria-hidden="true">↗</em></a></li>
    </ul>
  </div>
  <p class="wd-fineprint">Segment activity depends on suitable public rides covering the same places. Some areas may have little or no activity yet.</p>
</section>

<section class="wd-section wd-values" aria-labelledby="values-title">
  <div class="wd-section__intro"><p class="wd-kicker">Built by riders. For riders.</p><h2 id="values-title">Independent by design.</h2></div>
  <div class="wd-values__grid"><article><span>01</span><h3>Independently developed</h3><p>No advertising. The Garmin projects are open source; the Amazfit app is currently proprietary.</p></article><article><span>02</span><h3>Private by default</h3><p>Amazfit rides remain private unless the rider intentionally shares them.</p></article><article><span>03</span><h3>Transparent limits</h3><p>Platform differences and regional availability are explained before installation.</p></article></div>
</section>

<section class="wd-section wd-updates" aria-labelledby="updates-title">
  <div class="wd-section__intro wd-section__intro--row"><div><p class="wd-kicker">Project updates</p><h2 id="updates-title">What is new in WheelDash.</h2></div><p>Release highlights, compatibility news and notes from ongoing development across the ecosystem.</p></div>
  <div class="wd-update-grid">
    {% for post in site.posts limit:3 %}
    <article class="wd-update-card">
      <p class="wd-update-card__date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | normalize_whitespace | truncate: 150 }}</p>
      <a class="wd-text-link" href="{{ post.url | relative_url }}">Read update <span aria-hidden="true">→</span></a>
    </article>
    {% endfor %}
  </div>
  <p class="wd-updates__all"><a class="wd-button wd-button--ghost" href="/wheeldash_blog/">View all updates <span aria-hidden="true">→</span></a></p>
</section>

<section class="wd-section wd-resources" id="community" aria-labelledby="resources-title">
  <div class="wd-section__intro wd-section__intro--row"><div><p class="wd-kicker">Guides and community</p><h2 id="resources-title">Start with the right path.</h2></div><p>Choose a platform, check compatibility, get help or join the rider community.</p></div>
  <div class="wd-resource-grid"><a href="/docs/"><span>Guides</span><strong>Choose your platform</strong><em>→</em></a><a href="{{ product.urls.garmin_app }}"><span>Compatibility</span><strong>Current Garmin watch list</strong><em>↗</em></a><a href="/about_wheeldash/#compatible-amazfit-watches"><span>Compatibility</span><strong>Amazfit devices</strong><em>→</em></a><a href="/wheeldash_faq/"><span>Help</span><strong>Frequently asked questions</strong><em>→</em></a><a href="{{ product.urls.telegram }}"><span>Community</span><strong>Join the Telegram group</strong><em>↗</em></a><a href="/wheeldash_blog/"><span>Development</span><strong>News and updates</strong><em>→</em></a></div>
</section>

<section class="wd-final-cta" aria-labelledby="cta-title"><p class="wd-kicker">Ready to install?</p><h2 id="cta-title">Choose how you ride.</h2><div class="wd-final-platforms">{% for platform_id in product.platform_order %}{% assign platform = product.platforms[platform_id] %}<a class="wd-button{% if platform_id == 'amazfit' %} wd-button--light{% else %} wd-button--outline{% endif %}" href="{{ platform.install_url }}">{{ platform.name }}</a>{% endfor %}</div></section>
