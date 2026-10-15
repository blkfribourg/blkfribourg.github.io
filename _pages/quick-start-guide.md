---
title: "WheelDash for Garmin: the Garmin App"
permalink: /wheeldash_quickstart/
excerpt: "Install the WheelDash EUC app on your Garmin watch, connect your electric unicycle and set up profiles, alarms, buttons, horn, lights and Garmin Connect recording."
last_modified_at: 2026-10-08
toc: true
author_profile: false
author: BlkFri
classes: wd-doc
seo_title: "Garmin EUC app: set up the WheelDash Garmin App"
---

The Garmin App is the standalone version of WheelDash: you open it from the watch's app list, and it connects to the wheel, shows the dashboard, runs the alarms and records the ride. If you would rather keep a Garmin activity with its maps and navigation, use the [Garmin Datafield](/guides/garmin-datafield/) instead.

## Install

WheelDash is on the Garmin Connect IQ Store. Stable and development releases are available. The development release includes newer changes but may be less stable, particularly for wheel and watch combinations the developer cannot test directly.

<p><a href="{{ site.data.product.urls.garmin_catalog }}" class="btn btn--success" target="_blank" rel="noopener noreferrer">Find WheelDash on Connect IQ</a></p>

{{ site.data.product.garmin_latency_note }}
{: .notice--warning}

## Settings

WheelDash settings are changed on your phone, in the Connect IQ Store app or Garmin Connect, under the WheelDash app on your watch. Settings are grouped into global options and three wheel profiles.

Before the first ride, set at least, for the profile you will use:

- **Wheel name** and **Wheel brand**. If you own a KingSong from before 2021, also try "Kingsong (old)".
- The **alarm thresholds**: two PWM levels, a speed and a temperature.
- **Miles unit** or **Fahrenheit unit** if you need them.

## First connection

During the first connection, WheelDash records the Bluetooth identity of your EUC, so it will not pair by mistake with another wheel of the same brand.

1. Check that the profile you will use has the right wheel brand.
2. Make sure only your wheel is powered on nearby.
3. Open WheelDash and select the profile. The first connection screen appears.
4. When the confirmation screen says the wheel is connected, wait until the WheelDash main screen is displayed. Then exit WheelDash and power off the wheel.
5. Power the wheel on again and restart WheelDash.

WheelDash now recognises your wheel. To skip the profile choice at each start, set **Profile to use by default**, or turn off **Profile selection on startup**.

## The screens

<p class="wd-doc-screens"><img src="/assets/images/garmin/garmin-app-main.webp" width="260" height="260" loading="lazy" alt="Garmin App main screen: speed, PWM arc, battery and temperature arcs, trip distance"><img src="/assets/images/garmin/garmin-app-fields.webp" width="260" height="260" loading="lazy" alt="Garmin App datafield-like view with six fields"></p>

The main screen keeps its layout. You choose, per profile:

- the **main number** in the centre: speed, PWM, battery percentage or GPS speed;
- the **top bar**: speed or PWM, with orange and red colour thresholds;
- the statistics shown at the bottom, such as top speed, average moving speed, trip and total distance, voltage and watch battery.

The **datafield-like view** shows 4, 6 or 8 fields you pick from a long list (wheel data, ride statistics, heart rate, weather, Varia radar data and more). Open it by sliding left, or with a mapped button. You can also make it the only view.

## Buttons

Each profile can map watch buttons (Start/Stop, Middle or Down) to actions:

- open the activity recording view;
- cycle the wheel's light mode;
- beep the wheel (horn);
- switch the speed limiter on or off;
- open the datafield-like view;
- go to the next ENGO glasses view, or change their brightness.

## Recording

To record every ride automatically, turn on **Automatic activity recording**; **Activity save on exit** saves it when you leave WheelDash. You can also start and stop recording from the activity recording view: swipe up on a touchscreen watch, or map a button to it.

Rides are saved as Garmin activities and reviewed in Garmin Connect. They are not uploaded to the WheelDash Ride Portal.

## Going further

- [Connect ENGO glasses or a Garmin Varia radar](/guides/accessories/).
- See the app on real watches in the [gallery](/wheeldash_gallery/).
- The original [Garmin manual (PDF, 2023)](/assets/pdf/WheelDash_Manual_v0.1.pdf) describes every setting, but some have changed since.
- Something not working? Check the [FAQ](/wheeldash_faq/).
