---
title: "Compare WheelDash platforms"
permalink: /platforms/
excerpt: "Compare the Garmin App, Garmin Datafield and Amazfit versions of WheelDash, and check which watches and EUCs they support."
toc: true
author_profile: false
classes: wd-doc wd-platform-detail
---

WheelDash has three implementations. Start with the watch you own, then choose the experience that matches how you record, navigate and review rides. Features are not identical across platforms.

**Which one?**

- **Amazfit watch:** the Amazfit app. It has the most features: custom dashboards, wheel presets, navigation and the Ride Portal.
- **Garmin watch, WheelDash on the full screen:** the Garmin App. Faster updates, wheel controls, and rides saved to Garmin Connect.
- **Garmin watch, inside a Garmin activity:** the Garmin Datafield. You keep Garmin's maps and navigation; WheelDash adds the wheel data, refreshed once per second.

Both Garmin versions are free, so you can install both and try them, one ride at a time.

<div class="wd-platform-cards wd-platform-cards--three">
{% for platform_id in site.data.product.platform_order %}
{% assign platform = site.data.product.platforms[platform_id] %}
  <article class="wd-platform-card{% if platform_id == 'amazfit' %} wd-platform-card--accent{% endif %}">
    {% if platform_id == 'amazfit' %}<img class="wd-platform-card__watch" src="/assets/images/wheeldash-amazfit-watch.webp" width="170" height="186" alt="Amazfit Active 2 running WheelDash" loading="lazy">{% endif %}
    <p class="wd-platform-card__label">{{ platform.name }}</p>
    <h2>{{ platform.short }}</h2>
    <p>{{ platform.explanation }}</p>
    <a class="wd-text-link" href="{{ platform.install_url }}">{{ platform.install_label }} <span aria-hidden="true">→</span></a>
  </article>
{% endfor %}
</div>

## Detailed comparison

{% include platform-comparison.html full=true %}

## Maps and navigation

Each platform handles maps differently:

- **Garmin App:** no map and no navigation. It focuses on telemetry, alerts and recording.
- **Garmin Datafield:** runs inside a Garmin activity, so you keep Garmin's own maps and navigation on watches that have them. WheelDash can forward compatible turn information to ENGO glasses. Like all Garmin datafields, it refreshes once per second.
- **Amazfit:** WheelDash's own navigation, running in the app. You upload a GPX route to the Ride Portal, send it to the watch with its map tiles before the ride, and follow it on the watch. It is available in {{ site.data.product.navigation_regions | array_to_sentence_string }}, and is enabled on request for each Ride Portal account. See the [navigation guide](/guides/amazfit-navigation/).

## What “phone-free” means

In direct EUC mode, the watch makes the Bluetooth connection, decodes the wheel data, updates the dashboard and evaluates alarms. Recording also stays on the watch: the standalone applications manage their own sessions, while the Garmin Datafield contributes EUC fields to the host Garmin activity. A phone is not the live-data middleman while riding.

A phone can still be part of setup and transfer workflows. On Amazfit, the Zepp phone app is used for installation and settings, to transfer routes before a ride, and to upload a recording afterwards. The optional EUC World mode also receives data through the phone instead of connecting the watch directly to the EUC.

## Compatibility

### EUCs

WheelDash currently supports EUCs from these manufacturers:

{% for brand in site.data.product.supported_euc_brands %}
- {{ brand }}
{% endfor %}

Supported models and telemetry fields vary by implementation, wheel protocol and firmware:

- The Garmin Datafield offers Begode/Gotway/Extreme Bull, Leaperkim/NOSFET and KingSong.
- The Garmin App and Amazfit also support InMotion's V9, V11/V11Y, V12, V13 and V14 families.
- Amazfit only: InMotion's P6, V6, X1 and E20, and the older V5, V8 and V10 families.

Some InMotion models are experimental or have had only limited testing on real wheels.

If your EUC is not recognized, [contact the developer](/contact/) with its brand, model and firmware.

### Garmin watches

Garmin compatibility changes as watches and Connect IQ support evolve. Check the [WheelDash Connect IQ page]({{ site.data.product.urls.garmin_app }}) for the current device list.

{{ site.data.product.garmin_latency_note }}
{: .notice--warning}

### Amazfit watches

Current WheelDash packages are available for:

{% for device in site.data.product.amazfit_devices %}
- {{ device }}
{% endfor %}

#### Experimental build for older watches

An API 3.6 / ZeppOS 3.5 build is also available for:

{% for device in site.data.product.amazfit_experimental_devices %}
- {{ device }}
{% endfor %}

This build has not been tested on real hardware, and some features may not work as intended. Packages are on the [WheelDash Amazfit releases page]({{ site.data.product.urls.amazfit_experimental_release }}).
{: .notice--warning}

Ready to install? Follow the [setup guide for your platform](/docs/).
