---
title: "Compare WheelDash platforms"
permalink: /platforms/
excerpt: "Compare the Garmin App, Garmin Datafield and Amazfit versions of WheelDash."
author_profile: false
classes: wd-doc wd-platform-detail
---

WheelDash has three implementations. Start with the watch you own, then choose the experience that matches how you record, navigate and review rides. Features are not identical across platforms.

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

## What “phone-free” means

In direct EUC mode, the watch makes the Bluetooth connection, decodes the wheel data, updates the dashboard and evaluates alarms. Recording also stays on the watch: the standalone applications manage their own sessions, while the Garmin Datafield contributes EUC fields to the host Garmin activity. A phone is not the live-data middleman while riding.

A phone can still be part of setup and transfer workflows. On Amazfit, the Zepp phone app is used for installation and settings, to transfer route and map data before a ride, and to upload a recording afterwards. The optional EUC World mode also receives data through the phone instead of connecting the watch directly to the EUC.

Once an Amazfit route has been transferred, the navigation engine, GPS tracking, map display and turn instructions run on the watch during the ride.
{: .notice--info}

## Practical Garmin note

{{ site.data.product.garmin_latency_note }} Check the [Connect IQ Store]({{ site.data.product.urls.garmin_app }}) for the current list of compatible Garmin watches.
{: .notice--warning}

## Amazfit navigation coverage

WheelDash navigation is currently supported in {{ site.data.product.navigation_regions | array_to_sentence_string }}. Route and raster map data are transferred to the Amazfit watch before the ride. The standalone Garmin App does not include maps or navigation. The Garmin Datafield does not draw maps or run a navigation engine; it lives beside the map and navigation screens provided by a compatible Garmin activity. It can also forward compatible Garmin turn information to ENGO glasses.
{: .notice--info}
