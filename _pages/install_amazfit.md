---
permalink: /install_amazfit/
title: "WheelDash for Amazfit: install and first ride"
excerpt: "Install WheelDash on an Amazfit watch, connect your wheel and record your first ride."
last_modified_at: 2026-10-08
toc: true
author_profile: false
author: nijaba
classes: wd-doc
---

## What you need

- A compatible Amazfit watch. Check the [list of supported watches](/platforms/#amazfit-watches), including the experimental build for older models.
- The Zepp app on your phone, paired with the watch.

## Install

WheelDash is installed from a QR code, through the Zepp app's developer mode.

1. Open the [WheelDash Amazfit releases]({{ site.data.product.urls.amazfit_release }}) and find the QR code for your watch model. Owners of older watches should pick the experimental package.
2. In the Zepp app, go to **Profile > Settings > About**, then tap the Zepp icon 7 to 10 times, until a confirmation appears. This unlocks developer mode.
3. In the Zepp app, go to **Device > General > Developer Mode > Mini Program**, tap **+** and choose **Scan**.
4. Scan the QR code from step 1.
5. Keep the watch nearby and wait for the installation to finish.

## Settings

WheelDash's settings are in the Zepp app: **Device > General > Developer Mode > Mini Program**, then **Settings** for WheelDash. They are grouped by topic: profiles, alerts, buttons, display, navigation, ENGO glasses and your WheelDash account.

To upload rides or use navigation, create a WheelDash account in the **User** section: tap **Register**, then enter your email and a password. The same login works on the [Ride Portal]({{ site.data.product.urls.portal_login }}).

## Add your wheel

Wheels are added on the watch.

1. Open WheelDash from the watch's app list.
2. Choose **Add your first wheel** (later: **New profile**).
3. Switch the wheel on and keep the watch close. Adding it is easier when no other wheel is on nearby.
4. Select your wheel and create the profile.

Each wheel gets its own profile, with its own alarms and settings. To connect faster, set a **Startup Profile** in the settings: WheelDash then opens it after a short countdown.

Amazfit also offers an optional EUC World mode, which receives the wheel data through EUC World on your phone instead of connecting the watch to the wheel.
{: .notice--info}

## Ride

Select a profile and WheelDash connects to the wheel. During the ride, you can switch between the dashboard, the statistics screen and the navigation screen.

- **Dashboard:** choose Default, Racing, Large or your own custom layout. See [dashboards](/guides/amazfit-dashboards/).
- **Alarms:** set them in the **Alerts** section, with their own sound and vibration patterns. Check them before riding.
- **Buttons:** map watch buttons to actions such as start/stop recording, toggle the speed limit, cycle the light, switch pages or apply a [wheel preset](#wheel-presets). Mapping a button requires WheelDash to be running on the watch.

You can leave your phone at home while riding.

## Wheel presets

New in WheelDash for Amazfit 0.0.97.
{: .notice--info}

A preset is a named set of wheel settings, such as tiltback speed, speed limiter, pedal mode or pedal hardness, that you switch from the watch instead of the manufacturer's app. Presets work with Begode and Extreme Bull, Leaperkim and NOSFET, KingSong, and the InMotion V9, V11Y, V12, V13, V14 and P6; the settings available depend on the wheel.

1. Connect the wheel once with its profile, so WheelDash knows which settings it has and their ranges.
2. In the Zepp app, open the profile's settings and go to **Presets**. Build up to 4 presets: add the settings each one should change and set their values, or start from the wheel's current settings.
3. Map a watch button to **Presets: pick and apply**, or to **Apply preset 1** to **4**.

A preset only applies when the wheel is stopped. The watch tells you when the wheel has confirmed it, or which settings it could not apply.

## Record

Turn on **Auto Recording** to record every ride, or map a button to **Start/Stop Recording**. Rides are saved on the watch.

To review a ride with maps and statistics, upload it to the Ride Portal. See [upload, review and share rides](/guides/ride-portal/).

## Going further

- [Choose or build your dashboard](/guides/amazfit-dashboards/).
- [Send a route to the watch and follow it](/guides/amazfit-navigation/).
- [Connect ENGO glasses or a Garmin Varia radar](/guides/accessories/).
- Something not working? Check the [FAQ](/wheeldash_faq/) or [contact us](/contact/).

WheelDash for Amazfit is free. If you want to support it, read about [donations](/donate/).
