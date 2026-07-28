---
layout: splash
permalink: /
hidden: true
lang: en
title: "WheelDash | The smartwatch companion for EUC riders"
excerpt: "Live EUC telemetry, safety alerts, offline maps, connected accessories and ride analysis for Garmin and Amazfit."
classes: wheeldash-home
---

{% assign product = site.data.product %}

<section class="wd-hero" aria-labelledby="wd-hero-title">
  <div class="wd-hero__copy">
    <p class="wd-eyebrow"><span></span> Built for electric unicycles</p>
    <h1 id="wd-hero-title">Your ride.<br><em>At a glance.</em></h1>
    <p class="wd-hero__lead">WheelDash is the complete smartwatch companion for electric unicycle riders. Keep essential EUC data and warnings visible while your phone stays in your pocket.</p>
    <div class="wd-actions">
      <a class="wd-button wd-button--primary" href="#platforms">Choose your platform <span aria-hidden="true">→</span></a>
      <a class="wd-button wd-button--ghost" href="{{ product.urls.public_rides }}">Explore public rides</a>
    </div>
    <p class="wd-hero__note">Available for Garmin and Amazfit. Features vary by implementation.</p>
  </div>
  <div class="wd-hero__visual" aria-label="Electric unicycle rider using the WheelDash ecosystem">
    <img src="/assets/images/mikolaj-zeman-unsplash.jpg" alt="Electric unicycle rider on a wooded path">
    <div class="wd-watch-card"><img src="/assets/images/WD_reworked.png" alt="WheelDash app icon"><div><strong>Garmin + Amazfit</strong><span>Three ways to ride</span></div></div>
    <span class="wd-hero__signal">LIVE</span>
  </div>
</section>

<section class="wd-proof" aria-label="WheelDash highlights">
  <p><strong>Live EUC information</strong><span>Useful data on your wrist</span></p>
  <p><strong>Phone stays away</strong><span>Direct connection to supported EUCs</span></p>
  <p><strong>Rider-built</strong><span>Independent development, no advertising</span></p>
</section>

<section class="wd-section wd-problem" aria-labelledby="why-title">
  <div class="wd-section__intro wd-section__intro--row">
    <div><p class="wd-kicker">Why WheelDash exists</p><h2 id="why-title">The information matters.<br>The phone does not belong in your hand.</h2></div>
    <p>Generic sports-watch apps do not understand EUC telemetry. WheelDash keeps wheel data, safety warnings and ride tools visible without adding another distraction.</p>
  </div>
</section>

<section class="wd-section" id="features" aria-labelledby="features-title">
  <div class="wd-section__intro"><p class="wd-kicker">Core experience</p><h2 id="features-title">Built around the ride.</h2><p>These capabilities are available across the Garmin App, Garmin Datafield and Amazfit implementations.</p></div>
  <div class="wd-feature-grid wd-feature-grid--shared">
    <article class="wd-feature"><span class="wd-feature__icon">⌁</span><h3>Live telemetry</h3><p>See speed, battery, temperature, PWM and other essential EUC information.</p></article>
    <article class="wd-feature"><span class="wd-feature__icon">⚠</span><h3>Safety alerts</h3><p>Use visual warnings and Bluetooth audio alerts for the conditions you configure.</p></article>
    <article class="wd-feature"><span class="wd-feature__icon">▧</span><h3>Offline maps</h3><p>Keep map context on the watch. Offline map display is separate from navigation.</p></article>
    <article class="wd-feature wd-feature--image"><img src="/assets/images/Engo2.png" alt="ENGO smart glasses supported by WheelDash"><div><span class="wd-feature__icon">＋</span><h3>Connected accessories</h3><p>Use supported ENGO glasses and Garmin Varia radar across all three implementations.</p></div></article>
    <article class="wd-feature wd-feature--wide"><span class="wd-feature__number">05</span><div><h3>Phone-free riding</h3><p>WheelDash connects supported watches directly to your EUC, so key information remains visible while the phone stays in your pocket.</p></div><img src="/assets/images/no-phone.jpg" alt="A rider putting a phone into a pocket"></article>
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
      {% if platform_id == 'garmin_app' %}<ul><li>Standalone riding display</li><li>Offline maps, no navigation</li><li>Garmin Connect recording</li></ul>{% endif %}
      {% if platform_id == 'garmin_datafield' %}<ul><li>Runs inside a Garmin activity</li><li>Garmin-native navigation</li><li>Garmin Connect recording</li></ul>{% endif %}
      {% if platform_id == 'amazfit' %}<ul><li>Custom dashboards</li><li>Navigation in {{ product.navigation_regions | array_to_sentence_string }}</li><li>WheelDash Ride Portal</li></ul>{% endif %}
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
