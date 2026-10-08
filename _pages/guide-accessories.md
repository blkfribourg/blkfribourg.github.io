---
title: "ENGO glasses and Garmin Varia radar"
permalink: /guides/accessories/
excerpt: "Connect ENGO smart glasses and a Garmin Varia radar to WheelDash on Garmin and Amazfit."
last_modified_at: 2026-10-08
toc: true
author_profile: false
author: BlkFri
classes: wd-doc
---

WheelDash connects directly to ENGO smart glasses, which show your ride data in your field of view, and to a Garmin Varia radar, which warns you of vehicles approaching from behind. All three implementations support both.

## On Amazfit

### Add the accessories

On Amazfit, the glasses and the radar are registered in WheelDash itself, not in the watch's own settings, the same way you add a wheel.

1. Switch the glasses or the radar on and keep them close to the watch.
2. In WheelDash's main menu, choose **Accessories**.
3. Select the device to register it.

WheelDash then connects to them when you start a ride. If one is not found, the watch asks whether to skip it for this ride.

### ENGO glasses

ENGO settings are in the **ENGO Smartglasses** section of the WheelDash settings in the Zepp app. Settings apply to all your wheel profiles.

- **Pages:** choose the pages the glasses show. Built-in pages include Standard (PWM, speed, temperature, battery), High Refresh (PWM and speed, with Varia alerts) and Session Stats. Custom pages, including racing templates such as Speed Hero and Split Gauge, are built in the ENGO layout editor, in the Zepp app or on the [Ride Portal's layout editor](https://wd.nijalabs.com/layout-editor#engo).
- **Alarms:** an alarm can switch the glasses to an alarm layout, or show a banner. Turn on its ENGO display in the **Alerts** section.
- **Navigation:** routes you import come with turn scenes, sent to the glasses turn by turn while you navigate. See [navigation](/guides/amazfit-navigation/).
- **Switching pages:** with the glasses' proximity or touch sensor, a swipe on the watch, or a mapped button.
- **Brightness:** fixed, or automatic with the glasses' light sensor.

On ENGO 3 glasses, pages can use colour.

### Garmin Varia radar

When the radar tracks a vehicle, a band appears on the dashboard. In the **Alerts** section, Varia alarms warn you when a vehicle is far, close, or has passed, with their own sound and vibration. Custom dashboards can also include a Varia indicator. See [dashboards](/guides/amazfit-dashboards/).

## On Garmin

Both the Garmin App and the Garmin Datafield have the same two settings, in Connect IQ on your phone. ENGO support is not available on watches with very little memory.

### ENGO glasses

1. Turn on **ActiveLook Engo support** (Garmin App) or **ActiveView Engo support** (Datafield).
2. Choose the **Switch view mode**: the glasses' proximity sensor, or their capacitive button.

In the Garmin App, you can also map watch buttons to the glasses' next view and brightness, and choose what the glasses show for the Varia radar: number, speed or distance of vehicles. The Datafield can forward compatible Garmin navigation turns to the glasses.

### Garmin Varia radar

1. Pair the radar with your watch in Garmin's own sensor settings. WheelDash uses the radar paired with the watch.
2. Turn on **Varia radar (or supported ANT+ radar)**.
3. Set the far and close **alarm distance thresholds**.

In the Garmin App, the datafield-like view can also show the nearest vehicle's speed and distance, the number of vehicles and the radar's battery.
