---
permalink: /about_wheeldash/
title: "About WheelDash"
excerpt: "WheelDash is the complete smartwatch companion for electric unicycle riders."
last_modified_at: 2026-07-27
toc: true
author_profile: false
author: BlkFri
classes: wd-doc
---

WheelDash is an independently developed project built by an electric unicycle rider. It puts useful EUC information, warnings and ride tools on compatible Garmin and Amazfit watches. The Garmin apps and VESCDash are open source, while the Amazfit app's source code is not currently public.

If you want to support its development, visit the [WheelDash Ko-fi page]({{ site.data.product.urls.kofi }}).
{: .notice--info}

## Why WheelDash exists

WheelDash began as a personal solution to a simple riding problem: a phone is an inconvenient place for information that needs to remain visible while moving.

The first Garmin version connected directly to the EUC, displayed live telemetry, managed safety alarms and recorded rides. Feedback from other riders helped turn that personal project into a broader set of tools for the EUC community.

## WheelDash today

WheelDash now covers the complete riding workflow:

- live EUC telemetry on the wrist;
- visual and Bluetooth audio safety alerts;
- offline map display;
- ENGO glasses and Garmin Varia integration;
- ride recording;
- platform-specific navigation;
- post-ride analysis and public community features through the WheelDash Ride Portal for Amazfit recordings.

WheelDash connects directly to supported EUCs. It does not require WheelLog, DarknessBot or EUC World, although displaying information supplied by EUC World can be used as an optional setup.

## Three implementations

WheelDash is available as a Garmin App, Garmin Datafield and Amazfit application. They share the core riding experience but differ in navigation, recording workflow, dashboard customization and Ride Portal support.

The [platform comparison](/platforms/) explains these differences before installation. This page is the maintainable source for deciding which implementation fits your watch and riding workflow.

## Compatible EUCs

WheelDash currently supports EUCs from these manufacturers:

{% for brand in site.data.product.supported_euc_brands %}
- {{ brand }}
{% endfor %}

Recent Inmotion models starting with the V11 are supported. If your EUC model is not recognized, [contact the developer](/contact/) with its brand and model.

## Compatible Garmin watches

Garmin compatibility changes as watches and Connect IQ support evolve. Check the [WheelDash Connect IQ page]({{ site.data.product.urls.garmin_app }}) for the current device list rather than relying on a manually maintained table.

{{ site.data.product.garmin_latency_note }}
{: .notice--warning}

## Compatible Amazfit watches

Current WheelDash v0.0.82 packages are available for:

{% for device in site.data.product.amazfit_devices %}
- {{ device }}
{% endfor %}

### Experimental older-device compatibility

An API 3.6 / ZeppOS 3.5 build is also available for older watches:

{% for device in site.data.product.amazfit_experimental_devices %}
- {{ device }}
{% endfor %}

This older-device build has not been tested on real hardware. Some features may not work as intended, so it should be treated as experimental. [View the experimental release]({{ site.data.product.urls.amazfit_experimental_release }}) for installation QR codes and current notes.
{: .notice--warning}

See the [Amazfit installation guide](/install_amazfit/) for current and experimental installation paths.

## Ride recording and review

Garmin App and Garmin Datafield rides are recorded in the Garmin ecosystem and reviewed through Garmin Connect. Amazfit uses WheelDash recording and can upload rides to the WheelDash Ride Portal for maps, detailed statistics and intentional public sharing.

Garmin rides are not uploaded to the WheelDash Ride Portal.

## Development and community

WheelDash remains an independent rider-built project without advertising. Development is informed by real riding needs and community feedback, while platform limitations are documented rather than hidden.

You can [join the WheelDash Telegram group]({{ site.data.product.urls.telegram }}), [contact the developer](/contact/) or follow [project updates](/wheeldash_blog/).
