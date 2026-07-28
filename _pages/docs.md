---
title: "Documentation"
permalink: /docs/
excerpt: "Choose your WheelDash platform and find the right installation and setup guide."
author_profile: false
classes: wd-doc wd-doc-hub
---

WheelDash works differently on Garmin and Amazfit. Start with your watch platform to get the correct installation steps, configuration instructions, and platform-specific notes.

<div class="wd-doc-choices wd-doc-choices--three">
{% for platform_id in site.data.product.platform_order %}
{% assign platform = site.data.product.platforms[platform_id] %}
  <article class="wd-doc-choice{% if platform_id == 'amazfit' %} wd-doc-choice--accent{% endif %}">
    <p class="wd-doc-choice__label">{{ platform.name }}</p>
    <h2>{{ platform.short }}</h2>
    <p>{{ platform.explanation }}</p>
    <a class="wd-button wd-button--primary" href="{% if platform_id == 'amazfit' %}/install_amazfit/{% else %}/wheeldash_quickstart/{% endif %}">Open setup guide <span aria-hidden="true">→</span></a>
  </article>
{% endfor %}
</div>

## Shared resources

<div class="wd-doc-links">
  <a href="/about_wheeldash/#compatible-eucs"><span>Compatibility</span><strong>Supported EUCs and watches</strong><em>→</em></a>
  <a href="/wheeldash_faq/"><span>Help</span><strong>Frequently asked questions</strong><em>→</em></a>
  <a href="/contact/"><span>Support</span><strong>Community and contact</strong><em>→</em></a>
</div>
