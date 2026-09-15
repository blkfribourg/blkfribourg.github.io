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
    <p class="wd-hero__availability">For supported Garmin and Amazfit watches. Amazfit's optional EUC World mode is phone-relayed. Features vary by implementation. <a href="#platforms">Compare platforms <span aria-hidden="true">→</span></a></p>
  </div>
  <div class="wd-hero__visual wd-connection" aria-label="Connection comparison: phone companion apps send data from the electric unicycle through a phone to the watch. WheelDash sends data directly from the electric unicycle to the watch.">
    <svg class="wd-connection__symbols" aria-hidden="true">
      <symbol id="wd-icon-euc" viewBox="0 0 48 48"><path d="M17 19c0-6 3-10 7-10s7 4 7 10v4"/><circle cx="24" cy="29" r="13"/><circle cx="24" cy="29" r="6"/><path d="M9 36h7m16 0h7"/></symbol>
      <symbol id="wd-icon-phone" viewBox="0 0 48 48"><rect x="13" y="4" width="22" height="40" rx="5"/><path d="M20 9h8M22 39h4"/></symbol>
      <symbol id="wd-icon-watch" viewBox="0 0 48 48"><path d="M19 3h10l2 8H17l2-8Zm0 42h10l2-8H17l2 8Z"/><rect x="9" y="9" width="30" height="30" rx="8"/><rect x="15" y="15" width="18" height="18" rx="3"/></symbol>
    </svg>
    <div class="wd-connection__header">
      <div><span class="wd-connection__step">The key difference</span><h2>How data reaches your wrist</h2></div>
      <span class="wd-connection__signal"><i></i> Live Bluetooth</span>
    </div>

    <div class="wd-connection__route wd-connection__route--relay">
      <div class="wd-connection__route-label">
        <span>Phone companion apps</span>
        <strong>Relayed through <span>a phone</span></strong>
        <small>EUC World · DarknessBot · EUC Planet</small>
      </div>
      <div class="wd-connection__flow">
        <div class="wd-connection__device"><span class="wd-connection__icon"><svg aria-hidden="true"><use href="#wd-icon-euc"></use></svg></span><strong>EUC</strong><small>Sends data</small></div>
        <span class="wd-connection__arrow" aria-hidden="true"><i></i></span>
        <div class="wd-connection__device wd-connection__device--middle"><span class="wd-connection__icon"><svg aria-hidden="true"><use href="#wd-icon-phone"></use></svg></span><strong>Phone</strong><small>Processes</small></div>
        <span class="wd-connection__arrow" aria-hidden="true"><i></i></span>
        <div class="wd-connection__device"><span class="wd-connection__icon"><svg aria-hidden="true"><use href="#wd-icon-watch"></use></svg></span><strong>Watch</strong><small>Mirrors</small></div>
      </div>
    </div>

    <div class="wd-connection__route wd-connection__route--direct">
      <div class="wd-connection__route-label">
        <span>WheelDash · Direct EUC mode</span>
        <strong>Direct to <span>the watch</span></strong>
        <small>Watch-side EUC processing</small>
      </div>
      <div class="wd-connection__flow">
        <div class="wd-connection__device"><span class="wd-connection__icon"><svg aria-hidden="true"><use href="#wd-icon-euc"></use></svg></span><strong>EUC</strong><small>Sends data</small></div>
        <span class="wd-connection__arrow wd-connection__arrow--direct" aria-hidden="true"><i></i><em>Direct</em></span>
        <div class="wd-connection__device"><span class="wd-connection__icon"><svg aria-hidden="true"><use href="#wd-icon-watch"></use></svg></span><strong>Watch</strong><small>Processes data</small></div>
      </div>
    </div>

    <div class="wd-connection__features">
      <strong>Handled on the watch</strong>
      <div><span>Live telemetry</span><span>Safety alerts</span><span>Ride recording</span><span>Accessories</span></div>
    </div>
  </div>
</section>

<section class="wd-proof" aria-label="WheelDash highlights">
  <p><strong>Direct Bluetooth connection</strong><span>Your EUC talks to your watch</span></p>
  <p><strong>No phone relay in direct mode</strong><span>Responsive data processed on your wrist</span></p>
  <p><strong>A complete riding toolkit</strong><span>Telemetry, alerts, recording and platform-specific extras</span></p>
</section>

<section class="wd-section wd-problem" aria-labelledby="why-title">
  <div class="wd-section__intro wd-section__intro--row">
    <div><p class="wd-kicker">Why WheelDash exists</p><h2 id="why-title">Not a phone mirror.<br>A complete app on your wrist.</h2></div>
    <p>WheelDash handles direct EUC telemetry on the watch itself, then adds configurable safety warnings, ride recording and supported accessories. Mapping, navigation and post-ride tools depend on the platform you choose.</p>
  </div>
</section>

<section class="wd-section" id="features" aria-labelledby="features-title">
  <div class="wd-section__intro"><p class="wd-kicker">Core experience</p><h2 id="features-title">Built around the ride.</h2><p>Direct telemetry, configurable alerts and recording form the core experience. Mapping, navigation, customization and post-ride tools differ by implementation.</p></div>
  <div class="wd-feature-grid wd-feature-grid--shared">
    <article class="wd-feature"><span class="wd-feature__icon">⌁</span><h3>Live telemetry</h3><p>See speed, battery, temperature, PWM and other essential EUC information.</p></article>
    <article class="wd-feature"><span class="wd-feature__icon">⚠</span><h3>Safety alerts</h3><p>Configure visual warnings plus watch sounds or vibration where the device supports them.</p></article>
    <article class="wd-feature"><span class="wd-feature__icon">▧</span><h3>On-watch navigation</h3><p>On Amazfit, route and map data can be loaded onto the watch before the ride. Navigation availability is platform- and region-specific.</p></article>
    <article class="wd-feature wd-feature--image wd-feature--accessories"><img src="/assets/images/gallery/engo4.jpg" alt="ENGO glasses showing WheelDash navigation while riding"><div><span class="wd-feature__icon">＋</span><h3>Connected accessories</h3><p>Supported implementations can connect directly to ENGO glasses and Garmin Varia radar.</p></div></article>
    <article class="wd-feature wd-feature--image wd-feature--image-reverse"><div><span class="wd-feature__icon">⌁</span><h3>Phone-free riding</h3><p>In direct EUC mode, telemetry, alarms and recording run on the watch. Amazfit uses the phone for setup, route transfer, ride upload and optional EUC World mode.</p></div><img src="/assets/images/no-phone.jpg" alt="A rider putting a phone into a pocket"></article>
  </div>
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

<section class="wd-portal" id="ride-portal" aria-labelledby="portal-title">
  <div class="wd-portal__copy"><p class="wd-kicker">After the ride</p><h2 id="portal-title">Explore the wider ecosystem.</h2><p>Amazfit riders can upload and review WheelDash recordings. Everyone can browse intentionally shared public rides, view the community leaderboard and discover segments where riders have shared activity.</p><div class="wd-actions"><a class="wd-button wd-button--primary" href="{{ product.urls.public_rides }}">Explore public rides</a><a class="wd-button wd-button--ghost" href="{{ product.urls.portal_login }}">Sign in</a></div></div>
  <div class="wd-portal__preview"><img src="/assets/images/record-feature.png" alt="Route imagery representing WheelDash ride maps"><span>WheelDash Ride Portal</span></div>
</section>

<section class="wd-section wd-community-tools" aria-labelledby="community-tools-title">
  <div class="wd-section__intro"><p class="wd-kicker">Public community tools</p><h2 id="community-tools-title">See what riders share.</h2></div>
  <div class="wd-resource-grid wd-resource-grid--three">
    <a href="{{ product.urls.public_rides }}"><span>Discovery</span><strong>Public ride maps and statistics</strong><em>→</em></a>
    <a href="{{ product.urls.leaderboard }}"><span>Community</span><strong>Leaderboard</strong><em>→</em></a>
    <a href="{{ product.urls.segments }}"><span>Growing feature</span><strong>Segments shared by the community</strong><em>→</em></a>
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
