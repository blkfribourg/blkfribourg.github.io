---
layout: splash
permalink: /
hidden: true
lang: en
title: "WheelDash | The EUC app that runs on your watch"
excerpt: "Free EUC app for Garmin and Amazfit smartwatches. Connects to your electric unicycle for live data, alarms, ENGO and Varia, with no phone needed while riding."
classes: wheeldash-home
seo_title: "WheelDash – EUC app for Garmin and Amazfit smartwatches"
---

{% assign product = site.data.product %}

<section class="wd-hero" aria-labelledby="wd-hero-title">
  <div class="wd-hero__copy">
    <p class="wd-eyebrow"><span></span> The EUC app that runs on your watch</p>
    <h1 id="wd-hero-title">Direct to<br>your <em>wrist.</em></h1>
    <p class="wd-hero__lead">WheelDash connects your Garmin or Amazfit smartwatch straight to your electric unicycle. Live data, alarms, wheel controls and ride recording all run on the watch, so your phone can stay in your pocket, or at home.</p>
    <div class="wd-actions">
      <a class="wd-button wd-button--primary" href="#platforms">Choose your platform <span aria-hidden="true">→</span></a>
      <a class="wd-button wd-button--ghost" href="/why-wheeldash/">Why WheelDash</a>
    </div>
    <ul class="wd-hero__facts" aria-label="At a glance">
      <li><strong>Free</strong> No ads, no subscription</li>
      <li><strong>Garmin · Amazfit</strong> with iPhone or Android · <a href="/platforms/#compatibility">Watches</a></li>
      <li><strong>Begode · Extreme Bull · Leaperkim · NOSFET · KingSong · InMotion</strong> · <a href="/platforms/#compatibility">InMotion is limited on Garmin</a></li>
    </ul>
  </div>
  <div class="wd-hero__visual wd-hero__watch">
    <img src="/assets/images/wheeldash-hero-watches.webp" width="1078" height="1280" fetchpriority="high" alt="The WheelDash EUC app on a Garmin fēnix 7 Pro and an Amazfit Active 2: speed, battery and temperature">
    <p class="wd-hero__model" style="--x:26.1%">Garmin fēnix 7 Pro</p>
    <p class="wd-hero__model" style="--x:75.1%">Amazfit Active 2</p>
  </div>
</section>

<section class="wd-trace" aria-label="Real ride telemetry: speed, battery and temperature">
{% include ride-plot.html %}
</section>

<section class="wd-section wd-direct" aria-labelledby="direct-title">
  <div class="wd-section__intro wd-section__intro--row">
    <div><p class="wd-kicker">The key difference</p><h2 id="direct-title">Every hop can break.<br>We removed the hop.</h2></div>
    <p>Most EUC apps run on your phone and send their data on to the watch. WheelDash runs on the watch itself: no phone app the system can put to sleep, no second Bluetooth link to drop, no phone battery to watch.</p>
  </div>
  <div class="wd-hops">
    <div class="wd-hop">
      <p class="wd-hop__label">Phone apps with a watch companion</p>
      <ol class="wd-hop__flow" aria-label="EUC to phone to watch"><li>EUC</li><li>Phone</li><li>Watch</li></ol>
      <p class="wd-hop__note">2 hops · the watch is a second screen · if the phone app sleeps, drops or runs flat, the watch goes blank</p>
    </div>
    <div class="wd-hop wd-hop--direct">
      <p class="wd-hop__label">WheelDash</p>
      <ol class="wd-hop__flow" aria-label="EUC to watch"><li>EUC</li><li>Watch</li></ol>
      <p class="wd-hop__note">1 hop · the watch does it all · data, alarms, wheel controls and recording without a phone</p>
    </div>
  </div>
  <ul class="wd-direct__points">
    <li><strong>Leave the phone at home</strong>Or in a bag, switched off. Nothing on it needs to keep running while you ride.</li>
    <li><strong>Any phone</strong>WheelDash works the same with an iPhone or an Android phone, used only before and after the ride.</li>
    <li><strong>Glasses and radar included</strong>ENGO glasses and a Garmin Varia radar connect to the watch, with nothing to unlock or subscribe to.</li>
  </ul>
  <p class="wd-direct__more"><a class="wd-text-link" href="/why-wheeldash/">Why WheelDash <span aria-hidden="true">→</span></a></p>
</section>

<section class="wd-section" id="features" aria-labelledby="features-title">
  <div class="wd-section__intro"><p class="wd-kicker">What you get</p><h2 id="features-title">Built around the ride.</h2><p>Everything here runs on the watch, with no ads and no subscription. Some features are Amazfit only; they are marked, and the <a href="#platforms">platform comparison</a> has the details.</p></div>
  <div class="wd-feature-grid wd-feature-grid--shared">
    <article class="wd-feature wd-feature--visual"><img class="wd-feature__visual" src="/assets/images/features/watch-live-telemetry.webp" width="800" height="600" loading="lazy" alt="Amazfit Active 2 showing the WheelDash Large dashboard: PWM, speed, battery and temperature"><svg class="wd-feature__icon is-green" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg><h3>Live wheel data</h3><p>Speed, PWM, battery, voltage, current and temperatures, plus motor temperature or tyre pressure on wheels that report them.</p></article>
    <article class="wd-feature wd-feature--visual"><img class="wd-feature__visual" src="/assets/images/features/watch-safety-alert.webp" width="800" height="600" loading="lazy" alt="Amazfit Active 2 showing a WheelDash PWM alarm: red banner and red PWM arc"><svg class="wd-feature__icon is-red" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/></svg><h3>Alarms you can feel</h3><p>PWM, speed and temperature alarms with sound and vibration. On Amazfit, build your own: combine readings, set when they clear, design the vibration. <a href="/guides/amazfit-alarms/">Alarms</a></p></article>
    <article class="wd-feature wd-feature--visual"><img class="wd-feature__visual" src="/assets/images/features/watch-navigation.webp" width="800" height="600" loading="lazy" alt="Amazfit Active 2 showing WheelDash navigation: route on the map and a left turn in 80 m"><svg class="wd-feature__icon is-blue" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/></svg><h3>Navigation on the watch <span class="wd-badge wd-badge--amazfit">Amazfit only</span></h3><p>Amazfit, in {{ product.navigation_regions | array_to_sentence_string }}, for every account. Load a route and its map before you leave, then follow it turn by turn with the watch's own GPS. <a href="/guides/amazfit-navigation/">Navigation</a></p></article>
    <article class="wd-feature wd-feature--image wd-feature--accessories"><img src="/assets/images/features/engo-racing-road.webp" width="1200" height="1200" loading="lazy" alt="Through ENGO glasses: the WheelDash racing page with speed, top speed, motor temperature, PWM and phase current over a tree-lined road"><div><svg class="wd-feature__icon is-blue" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.5" cy="14" r="3.5"/><circle cx="17.5" cy="14" r="3.5"/><path d="M10 14h4M3 14V9l2-3M21 14V9l-2-3"/></svg><h3>ENGO and Varia, included</h3><p>Ride data in your field of view on ENGO glasses, and cars behind you from a Garmin Varia radar. Both connect to the watch, on every version, at no cost. <a href="/guides/accessories/">Accessories</a></p></div></article>
    <article class="wd-feature wd-feature--image wd-feature--image-reverse"><div><svg class="wd-feature__icon is-green" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M3 3l18 18"/></svg><h3>Leave the phone</h3><p>Riding needs only the watch. On Amazfit, the phone is for settings, loading routes and uploading rides, before and after.</p></div><img src="/assets/images/no-phone.webp" width="1138" height="809" loading="lazy" alt="A rider putting a phone into a pocket before riding"></article>
    <article class="wd-feature wd-feature--text"><svg class="wd-feature__icon is-red" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h3l5 4V6L7 10H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg><h3>Control the wheel</h3><p>Sound the horn, cycle the lights or switch a speed limiter on and off, from a watch button (Garmin App and Amazfit). The Garmin App adds a wheel settings menu on the watch.</p></article>
    <article class="wd-feature wd-feature--text"><svg class="wd-feature__icon is-green" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h10M4 12h6M4 18h10"/><circle cx="17" cy="6" r="2"/><circle cx="13" cy="12" r="2"/><circle cx="17" cy="18" r="2"/></svg><h3>Wheel presets <span class="wd-badge wd-badge--amazfit">Amazfit only</span></h3><p>Save up to four sets of wheel settings, such as tiltback speed and pedal mode, and switch with one button. <a href="/install_amazfit/#wheel-presets">Presets</a></p></article>
    <article class="wd-feature wd-feature--text"><svg class="wd-feature__icon is-blue" viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="16" r="4"/><circle cx="17" cy="16" r="4"/><path d="M7 12V5M17 12V5"/></svg><h3>One profile per wheel</h3><p>Each wheel keeps its own alarms and settings. Start straight into your usual one, and on Amazfit, locked wheels unlock with their PIN.</p></article>
  </div>
</section>

<section class="wd-section wd-dashboards" id="dashboards" aria-labelledby="dashboards-title">
  <div class="wd-section__intro"><p class="wd-kicker">Your dashboard <span class="wd-badge wd-badge--amazfit">Amazfit only</span></p><h2 id="dashboards-title">Your layout.<br>Your data.</h2><p>On Amazfit, the dashboard is yours to build. Put any value anywhere on the screen, as a big number, a gauge, a bar or plain text, and split it up with separators. Build layouts in WheelDash's settings in the Zepp app, or in the <a href="https://wd.nijalabs.com/layout-editor">Ride Portal's layout editor</a>.</p></div>
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
        <g class="wd-dash-anno__badge"><circle cx="428" cy="285" r="13"/><text x="428" y="290">5</text></g>
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
      <p class="wd-dash-builder__more">Also available: speed-limit indicator and alarm message. Size, colour, alignment, decimals and units are set per block. <a href="/guides/amazfit-dashboards/">Every block and value</a></p>
    </div>
  </div>
  <p class="wd-dash-examples-title">Other layouts built from the same blocks</p>
  <div class="wd-dashboards__grid">
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/minimal.webp" width="720" height="720" loading="lazy" alt="Round layout: large speed, battery bar and recording indicator"></div>
      <figcaption><span>Speed&nbsp;· battery bar&nbsp;· rec</span></figcaption>
    </figure>
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/racing.webp" width="720" height="720" loading="lazy" alt="Round layout: speed arc gauge around the screen with PWM, battery and temperature"></div>
      <figcaption><span>Speed arc&nbsp;· PWM&nbsp;· batt&nbsp;· temp</span></figcaption>
    </figure>
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/commute.webp" width="720" height="720" loading="lazy" alt="Round layout: free-text label, speed, battery and temperature bars, trip, current, Varia radar bar and alarm message"></div>
      <figcaption><span>Free text&nbsp;· Varia&nbsp;· alarm</span></figcaption>
    </figure>
    <figure class="wd-dash-face wd-dash-face--square">
      <div class="wd-dash-face__bezel"><img src="/assets/images/dashboards/stats.webp" width="720" height="829" loading="lazy" alt="Square layout: ride time, trip distance, average moving speed, top speed, battery use per km and voltage"></div>
      <figcaption><span>Square&nbsp;· 6 labelled values</span></figcaption>
    </figure>
  </div>
  <p class="wd-dashboards__note">Example layouts, drawn with the Ride Portal's watch preview.</p>
  <div class="wd-dash-garmin">
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/garmin/garmin-app-main.webp" width="720" height="720" loading="lazy" alt="Garmin App main screen: speed in the centre, PWM on the top arc, battery and temperature on the side arcs, trip distance below"></div>
      <figcaption><span>Garmin App&nbsp;· main</span></figcaption>
    </figure>
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/garmin/garmin-app-fields.webp" width="720" height="720" loading="lazy" alt="Garmin App datafield-like view with six fields: speed, PWM, battery, temperature, trip distance and voltage"></div>
      <figcaption><span>Garmin App&nbsp;· 6 fields</span></figcaption>
    </figure>
    <figure class="wd-dash-face">
      <div class="wd-dash-face__bezel"><img src="/assets/images/garmin/garmin-datafield.webp" width="720" height="720" loading="lazy" alt="Garmin Datafield with eight fields: PWM, speed, battery, temperature, voltage, top temperature, top speed and time"></div>
      <figcaption><span>Datafield&nbsp;· 8 fields</span></figcaption>
    </figure>
    <div class="wd-dash-garmin__copy">
      <p class="wd-dash-garmin__label">On Garmin</p>
      <h3>A set layout, with choices.</h3>
      <p>The Garmin App's main screen keeps its layout: you choose the centre value, whether the top arc shows speed or PWM, and the statistics below. Its second view shows 4, 6 or 8 fields you pick. The Garmin Datafield shows 6 or 8, inside any Garmin activity.</p>
      <p>Fully custom layouts like the ones above are Amazfit only.</p>
    </div>
  </div>
</section>

<section class="wd-section wd-platforms" id="platforms" aria-labelledby="platform-title">
  <div class="wd-section__intro wd-section__intro--row"><div><p class="wd-kicker">Choose your platform</p><h2 id="platform-title">One app.<br>Three versions.</h2></div><p>On Garmin, choose a full-screen app or a datafield inside a Garmin activity; both are free, so you can try both. On Amazfit, one app has the most features: custom dashboards, wheel presets, navigation and the Ride Portal.</p></div>
  <div class="wd-platform-cards wd-platform-cards--three">
  {% for platform_id in product.platform_order %}
  {% assign platform = product.platforms[platform_id] %}
    <article class="wd-platform-card{% if platform_id == 'amazfit' %} wd-platform-card--accent{% endif %}">
      <p class="wd-platform-card__label">{{ platform.name }}</p>
      <h3>{{ platform.short }}</h3><p>{{ platform.explanation }}</p>
      {% if platform_id == 'garmin_app' %}<ul><li>Full-screen dashboard</li><li>Horn, lights and limiter on buttons</li><li>Garmin Connect recording</li></ul>{% endif %}
      {% if platform_id == 'garmin_datafield' %}<ul><li>Direct EUC connection</li><li>6 or 8 configurable fields</li><li>Garmin recording and navigation</li></ul>{% endif %}
      {% if platform_id == 'amazfit' %}<ul><li>Custom dashboards</li><li>Wheel presets</li><li>Navigation in {{ product.navigation_regions | array_to_sentence_string }}</li><li>WheelDash Ride Portal</li><li>Installs from a QR code in the Zepp app</li></ul>{% endif %}
      <a class="wd-text-link" href="{{ platform.install_url }}">{{ platform.install_label }} <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
  </div>
  {% include platform-comparison.html %}
  <div class="wd-comparison-footer"><p>Garmin rides stay in Garmin Connect. Amazfit rides can go to the WheelDash Ride Portal. Battery use depends on the watch.</p><a class="wd-text-link" href="/platforms/">View the detailed comparison <span aria-hidden="true">→</span></a></div>
</section>

<section class="wd-section wd-portal-wrap" id="ride-portal" aria-labelledby="portal-title">
  <div class="wd-portal">
    <div class="wd-portal__copy">
      <p class="wd-kicker">Ride Portal <span class="wd-badge wd-badge--amazfit">Amazfit only</span></p>
      <h2 id="portal-title">Every ride, every segment, one place.</h2>
      <p>Upload your Amazfit rides to see each one on a map with its speed, battery, temperature and PWM, or put two side by side. Rides are encrypted on your phone before upload and stay private unless you share them; privacy zones hide your home from shared maps. Anyone can browse what riders share, no account needed.</p>
      <div class="wd-actions"><a class="wd-button wd-button--primary" href="{{ product.urls.public_rides }}">Explore public rides <span aria-hidden="true">↗</span></a><a class="wd-button wd-button--ghost" href="/guides/ride-portal/">How it works</a></div>
    </div>
    <ul class="wd-portal__links">
      <li><a href="{{ product.urls.public_rides }}"><span>Discover</span><strong>Public rides, riders and wheels</strong><em aria-hidden="true">↗</em></a></li>
      <li><a href="{{ product.urls.segments }}"><span>Segments</span><strong>Wheels compared on the same roads</strong><em aria-hidden="true">↗</em></a></li>
      <li><a href="{{ product.urls.leaderboard }}"><span>Leaderboards</span><strong>Speed, distance and riding streaks</strong><em aria-hidden="true">↗</em></a></li>
      <li><a href="{{ product.urls.portal }}/layouts"><span>Layout gallery</span><strong>Dashboards shared by other riders</strong><em aria-hidden="true">↗</em></a></li>
    </ul>
  </div>
  <div class="wd-live" data-wd-showcase="{{ product.urls.showcase_api }}" data-wd-portal="{{ product.urls.portal }}" hidden>
    <div class="wd-live__head">
      <p class="wd-live__label"><span aria-hidden="true"></span>Live from the Ride Portal</p>
      <dl class="wd-live__totals">
        <div><dt>Public rides</dt><dd data-wd-total="rides"></dd></div>
        <div><dt>Riders</dt><dd data-wd-total="riders"></dd></div>
        <div><dt>Public km</dt><dd data-wd-total="km"></dd></div>
      </dl>
    </div>
    <ul class="wd-live__rides" data-wd-rides hidden></ul>
  </div>
  <script src="{{ '/assets/js/wd-showcase.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
  <p class="wd-fineprint">Segment activity depends on suitable public rides covering the same places. Some areas may have little or no activity yet.</p>
</section>

<section class="wd-section wd-values" aria-labelledby="values-title">
  <div class="wd-section__intro"><p class="wd-kicker">Built by riders. For riders.</p><h2 id="values-title">Independent by design.</h2></div>
  <div class="wd-values__grid"><article><span>01</span><h3>Free, not for profit</h3><p>The watch apps are free and will stay free, with no ads. The Ride Portal and navigation run on servers that cost money every month: free today, they may one day ask for a contribution to cover those costs, never more. <a href="/donate/">Donations</a></p></article><article><span>02</span><h3>Private by default</h3><p>Amazfit rides are encrypted on your phone with a key derived from your password, and stay private unless you share them.</p></article><article><span>03</span><h3>Open and upfront</h3><p>The Garmin versions are open source; the Amazfit source will follow once its development settles. Platform limits are stated before you install.</p></article></div>
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
  <div class="wd-section__intro wd-section__intro--row"><div><p class="wd-kicker">Guides and community</p><h2 id="resources-title">Start with the right path.</h2></div><p>Check compatibility, follow a setup guide, get help or join the rider community.</p></div>
  <div class="wd-resource-grid"><a href="/docs/"><span>Guides</span><strong>Setup and how-to guides</strong><em>→</em></a><a href="/platforms/#garmin-watches"><span>Compatibility</span><strong>Supported Garmin watches</strong><em>→</em></a><a href="/platforms/#compatibility"><span>Compatibility</span><strong>Amazfit watches and EUCs</strong><em>→</em></a><a href="/wheeldash_faq/"><span>Help</span><strong>Frequently asked questions</strong><em>→</em></a><a href="{{ product.urls.telegram }}"><span>Community</span><strong>Join the Telegram group</strong><em>↗</em></a><a href="/why-wheeldash/"><span>Choosing an app</span><strong>Why WheelDash</strong><em>→</em></a></div>
</section>

<section class="wd-final-cta" aria-labelledby="cta-title"><p class="wd-kicker">Ready to install?</p><h2 id="cta-title">Choose how you ride.</h2><div class="wd-final-platforms">{% for platform_id in product.platform_order %}{% assign platform = product.platforms[platform_id] %}<a class="wd-button{% if platform_id == 'amazfit' %} wd-button--light{% else %} wd-button--outline{% endif %}" href="{{ platform.install_url }}">{{ platform.name }}</a>{% endfor %}</div></section>
