---
title: "WheelDash for Amazfit: alarms"
permalink: /guides/amazfit-alarms/
excerpt: "Set PWM, speed and temperature alarms for your electric unicycle on an Amazfit watch, or build your own from several readings, with their own sound and vibration."
last_modified_at: 2026-10-14
toc: true
author_profile: false
author: BlkFri
classes: wd-doc
seo_title: "EUC alarms on Amazfit: PWM, speed, temperature – WheelDash"
---

Alarms warn you without you having to look at the watch. An alarm can play a sound, vibrate the watch, show a banner on the dashboard, and show a banner on [ENGO glasses](/guides/accessories/). They run on the watch, so they keep working without the phone.

The banner states the reading, such as "PWM 91%", rather than an instruction.

Alarms are set in the **Alerts** section of the WheelDash settings in the Zepp app. To test a sound or a vibration, open WheelDash on the watch and stay on the profile list.
{: .notice--info}

## Quick alarms

The top of the **Alerts** section has ready-made alarms with one threshold each. Set the value and switch them on:

| Alarm | Fires when | Default |
|---|---|---|
| PWM Alert | PWM is above the value | 80 % |
| Speed Alert | Speed is above the value | 50 km/h (31 mph) |
| Temp Alert | Controller temperature is above the value | 65 °C |
| Varia Close | A vehicle is nearer than the value | 15 m |
| Varia Far | A vehicle is nearer than the value | 50 m |
| Varia Safe | The road behind you clears | |
| Nav Turn Alert | The next turn is nearer than the value | 200 m |

Each one has its own sound and vibration, which you can try with **Test Sound** and **Test Vibration**.

## Build your own

Tap **+ Add Alarm**, then set:

- **Name:** the text on the banner, up to 20 characters.
- **Profile:** all your wheels, or one of them.
- **Conditions:** a reading, a comparison (`>`, `>=`, `<`, `<=`, `==`) and a value. Add more with **+ Add Condition**, and choose whether **all** of them (AND) or **any** of them (OR) must be true.
- **Clear below:** the value at which the alarm stops. Use it for an alarm that would otherwise flicker on and off around its threshold.
- **Sound:** one of nine sounds, or none.
- **Vibration:** Gentle, Strong, Urgent, Click, or your own pattern built from vibrate and pause steps.
- **Repeat while active:** once, or again at an interval you set.
- **ENGO display:** whether the alarm shows on the glasses.

For example, a "Hot and fast" alarm can fire when the temperature is above 60 °C **and** the speed is above 35 km/h, with a strong vibration that repeats every two seconds.

### Readings you can use

PWM, speed, controller temperature, motor temperature, coil temperature, driver board temperature, tyre pressure, battery percentage, voltage, battery current, phase current, power, the distance, speed and number of vehicles tracked by a Varia radar, and the distance to the next navigation turn.

A reading your wheel does not report never fires. Motor, coil and driver board temperature, tyre pressure and phase current depend on the wheel: see [supported wheels](/platforms/#eucs).

## Priority

The list order is the priority, top first. The highest active alarm plays its sound and names itself on the banner. A lower alarm that only vibrates can still fire at the same time. Use the arrows to reorder the list.

Varia alarms show on the radar band and turn alarms on the navigation screen, so they don't also take the banner.

## On Garmin

The Garmin App and the Garmin Datafield have four alarm thresholds per wheel profile: two PWM levels, a speed and a temperature, plus [Varia distance alarms](/guides/accessories/#garmin-varia-radar-1). See the [Garmin App guide](/wheeldash_quickstart/#settings).

Test your alarms before relying on them. WheelDash is a riding aid, not a substitute for watching the road.
{: .notice--warning}
