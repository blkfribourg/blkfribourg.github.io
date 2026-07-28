---
title: "Compare WheelDash platforms"
permalink: /platforms/
excerpt: "Compare the Garmin App, Garmin Datafield and Amazfit versions of WheelDash."
author_profile: false
classes: wd-doc wd-platform-detail
---

WheelDash has three implementations. Start with the watch you own, then choose the experience that matches how you record and navigate.

<div class="wd-platform-cards wd-platform-cards--three">
{% for platform_id in site.data.product.platform_order %}
{% assign platform = site.data.product.platforms[platform_id] %}
  <article class="wd-platform-card{% if platform_id == 'amazfit' %} wd-platform-card--accent{% endif %}">
    <p class="wd-platform-card__label">{{ platform.name }}</p>
    <h2>{{ platform.short }}</h2>
    <p>{{ platform.explanation }}</p>
    <a class="wd-text-link" href="{{ platform.install_url }}">{{ platform.install_label }} <span aria-hidden="true">→</span></a>
  </article>
{% endfor %}
</div>

## Detailed comparison

{% include platform-comparison.html full=true %}

## Practical Garmin note

{{ site.data.product.garmin_latency_note }} Check the [Connect IQ Store]({{ site.data.product.urls.garmin_app }}) for the current list of compatible Garmin watches.
{: .notice--warning}

## Amazfit navigation coverage

WheelDash navigation is currently supported in {{ site.data.product.navigation_regions | array_to_sentence_string }}. Offline map display is a separate capability and is available across all three implementations.
{: .notice--info}

