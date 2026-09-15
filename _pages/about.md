---
permalink: /about_wheeldash/
title: "About WheelDash"
excerpt: "WheelDash includes standalone smartwatch apps and a Garmin Datafield that connect directly to supported electric unicycles."
last_modified_at: 2026-08-27
toc: true
author_profile: false
author: BlkFri
classes: wd-doc
---

WheelDash is an independently developed project built by an electric unicycle rider. It puts useful EUC information, warnings and ride tools on compatible Garmin and Amazfit watches. The Garmin versions and VESCDash are free and open source. The Amazfit version is also free, and its source code will be released once its active development phase is complete.

If you want to support its development, read about [donations and WheelDash's approach to future funding](/donate/).
{: .notice--info}

## Why WheelDash exists

WheelDash began as a personal solution to a simple riding problem: a phone is an inconvenient place for information that needs to remain visible while moving.

The first Garmin version connected directly to the EUC, displayed live telemetry, managed safety alarms and recorded rides. Feedback from other riders helped turn that personal project into a broader set of tools for the EUC community.

## WheelDash today

WheelDash now covers the core ride on the watch, with additional capabilities depending on the implementation:

- live EUC telemetry on the wrist;
- configurable visual, audible and vibration safety alerts, depending on watch capability;
- preloaded maps and navigation on supported implementations;
- ENGO glasses and Garmin Varia integration;
- ride recording;
- platform-specific navigation;
- post-ride analysis and public community features through the WheelDash Ride Portal for Amazfit recordings.

In direct EUC mode, WheelDash connects the watch straight to a supported wheel and handles telemetry, alarms and recording without using a phone as the live-data middleman. It does not require WheelLog, DarknessBot or EUC World. Amazfit also offers an optional EUC World mode; that mode is explicitly phone-relayed rather than a direct watch-to-wheel connection.

## Three implementations

WheelDash is available as a Garmin App, Garmin Datafield and Amazfit application. They share the core riding experience but differ in navigation, recording workflow, dashboard customization and Ride Portal support.

The [platform comparison](/platforms/) explains these differences before installation. This page is the maintainable source for deciding which implementation fits your watch and riding workflow.

## Compatible EUCs

WheelDash currently supports EUCs from these manufacturers:

{% for brand in site.data.product.supported_euc_brands %}
- {{ brand }}
{% endfor %}

Supported models and telemetry fields vary by implementation, wheel protocol and firmware. The Garmin Datafield currently exposes Begode/Gotway, Leaperkim/NOSFET and KingSong wheel choices. The supplied standalone applications contain InMotion decoders for the V9, V11/V11Y, V12, V13 and V14 families; the Amazfit implementation also identifies the P6. Some InMotion paths are marked experimental or have only limited hardware verification. If your EUC model is not recognized, [contact the developer](/contact/) with its brand, model and firmware.

## Compatible Garmin watches

Garmin compatibility changes as watches and Connect IQ support evolve. Check the [WheelDash Connect IQ page]({{ site.data.product.urls.garmin_app }}) for the current device list rather than relying on a manually maintained table.

{{ site.data.product.garmin_latency_note }}
{: .notice--warning}

## Compatible Amazfit watches

Current WheelDash packages are available for:

{% for device in site.data.product.amazfit_devices %}
- {{ device }}
{% endfor %}

### Experimental older-device compatibility

An API 3.6 / ZeppOS 3.5 build is also available for older watches:

{% for device in site.data.product.amazfit_experimental_devices %}
- {{ device }}
{% endfor %}

This older-device build has not been tested on real hardware. Some features may not work as intended, so it should be treated as experimental. [View the WheelDash Amazfit releases]({{ site.data.product.urls.amazfit_experimental_release }}) for installation QR codes and current notes.
{: .notice--warning}

See the [Amazfit installation guide](/install_amazfit/) for current and experimental installation paths.

## Ride recording and review

The standalone Garmin App manages a Garmin recording session. The Garmin Datafield runs inside a host Garmin activity and contributes EUC record and session fields to its FIT file. Both are reviewed through Garmin Connect. Amazfit records on the watch; afterwards, the phone connection is used to upload a ride to the WheelDash Ride Portal for maps, detailed statistics and intentional public sharing.

Garmin rides are not uploaded to the WheelDash Ride Portal.

## Development and community

WheelDash remains an independent rider-built project without advertising. Development is informed by real riding needs and community feedback, while platform limitations are documented rather than hidden.

You can [join the WheelDash Telegram group]({{ site.data.product.urls.telegram }}), [contact the developer](/contact/) or follow [project updates](/wheeldash_blog/).
