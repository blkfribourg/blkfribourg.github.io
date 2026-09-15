---
title: "WheelDash Amazfit v0.0.95: more data, better glasses support and stronger reliability"
layout: single
permalink: /updates/wheeldash-amazfit-0-0-95/
author: BlkFri
classes: wd-doc wd-update
excerpt: "WheelDash Amazfit v0.0.95 adds new wheel telemetry, ENGO racing views, more capable dashboards and a long list of reliability fixes."
---

[WheelDash Amazfit v0.0.95](https://github.com/blkfribourg/WheelDash_Amazfit_Beta/releases/tag/v0.0.95) is now available. Since v0.0.89, this update adds useful wheel data, improves ENGO smart-glasses support and dashboard flexibility, and fixes issues that could affect recording, alarms and day-to-day reliability.

## More complete wheel data

The dashboard can now show motor temperature separately from controller temperature. It is available on InMotion wheels, Begode wheels running 2022 or later firmware, and Lynx-S custom firmware. Lynx-S custom firmware also gains coil temperature, while the InMotion P6 gains tyre pressure.

Battery current is now separate from motor current, providing a more accurate view of power use.

This release also fixes several wheel-specific data issues:

- InMotion motor temperatures no longer report implausible negative values above 79°C.
- The Leaperkim Oryx battery level no longer remains at 100% for an entire ride.
- Begode trip distance no longer resets during a ride, preserving range and battery-use estimates.
- Begode now retains its incoming data instead of discarding roughly half of it. This restores total-distance updates, keeps the speed limiter active, improves BMS status readings and prevents PWM from getting stuck at 0.
- An unrecognized KingSong wheel now shows battery level as `--` instead of 0%.

## Speed limiter and tiltback

The speed limiter now works correctly on KingSong wheels. Saved tiltback speeds are also applied when connecting, with a confirmation message so riders can see that the setting is active.

## ENGO smart glasses

Two new ENGO views, **Racing** and **Split Gauge**, provide more options for riders who want a focused performance display.

Alarms have been reworked into a banner over the current view instead of a separate page. You can use your own alarm names, enable or disable alarms, and test them on the glasses directly. The website editor preview and app settings now match what the glasses display.

<figure class="align-center">
  <img src="/assets/images/wheeldash-engo-racing-view.gif" alt="Animated WheelDash Racing view on ENGO smart glasses, showing live speed, motor temperature, PWM and tyre pressure as an alarm banner appears">
  <figcaption>The Racing view keeps the key ride data visible while alarms appear over it.</figcaption>
</figure>

The update also fixes silent custom-page upload failures when glasses storage is full, plus a reconnect timing issue after a configuration transfer.

## Recording and transfers

Recordings now warn when there is insufficient storage and report if recording stops during a ride, rather than failing silently. Large ride transfers are more stable, and fixes address a stuck-upload issue and a recording memory leak.

## Dashboards and stats

Custom dashboards gain a free-text widget and support roughly three times more widgets per screen. Opening the editor no longer risks losing a widget or resetting a dashboard to the default layout. The Varia radar indicator now respects its position and colour settings and no longer appears twice.

The stats screen has larger, clearer text and better contrast. All nine selected stats now display, and imperial riders no longer see kilometres labelled as miles.

## Reliability and Bip Max fixes

The update fixes an occasional permanent loading screen, profile-sync problems that could revive deleted profiles or apply the wrong wheel, and a background Bluetooth-service failure that could leave the watch without reconnection or data.

Bip Max-specific layout fixes correct scaling for the debug page and radar indicator.

Visit the [v0.0.95 release](https://github.com/blkfribourg/WheelDash_Amazfit_Beta/releases/tag/v0.0.95) to find the package for your watch, or follow the [Amazfit installation guide](/install_amazfit/).
