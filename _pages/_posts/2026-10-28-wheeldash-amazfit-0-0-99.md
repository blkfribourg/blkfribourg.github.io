---
title: "WheelDash Amazfit v0.0.99: a new look and navigation for everyone"
layout: single
permalink: /updates/wheeldash-amazfit-0-0-99/
author: BlkFri
classes: wd-doc wd-update
excerpt: "WheelDash Amazfit v0.0.99 redesigns the app, reads every wheel brand more accurately and adds older InMotion wheels. Navigation is now open to everyone, and the Ride Portal has a new look."
---

[WheelDash Amazfit v0.0.99](https://github.com/blkfribourg/WheelDash_Amazfit_Beta/releases/tag/v0.0.99) is now available for Amazfit watches. The Garmin versions are separate and unchanged. Since v0.0.95, it redesigns the app on the watch and on the phone, reworks how wheel data is read, and adds more InMotion wheels. Two other changes come with it: Amazfit navigation is now open to every account, in many more countries, and the Ride Portal has a new look.

## Navigation for everyone

Navigation used to be enabled by hand, account by account, and only in France and the USA. It is now open to every WheelDash account, and covers far more countries:

- **Europe:** Albania, Andorra, Austria, the Azores, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, the Faroe Islands, Finland, France, Georgia, Germany, Great Britain, Greece, Guernsey and Jersey, Hungary, Iceland, Ireland and Northern Ireland, the Isle of Man, Italy, Kosovo, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, the Netherlands, North Macedonia, Norway, Poland, Portugal, Romania, Serbia, Slovakia, Slovenia, Spain and the Canary Islands, Sweden, Switzerland, Turkey and Ukraine;
- **North America:** the USA and Canada;
- **Russia:** the European part, west of the Urals;
- **Asia:** China.

Upload a GPX route on the Ride Portal, load it onto the watch with its map and follow it without your phone. The [navigation guide](/guides/amazfit-navigation/) walks through it. Routes outside these regions cannot be matched to roads, so the Ride Portal rejects them.

## A new look

Most screens have been redrawn: the ride dashboards, the menu, the wheel scan, loading screens, dialogs, data transfer, the phone settings and navigation.

- On the dashboards, the PWM gauge turns orange, then red. During an alarm, only the affected gauge turns red, and a banner names it.
- Speed and PWM no longer scroll when they reach three digits.
- The navigation view has a themed turn band, a status row and an off-route banner.

## Older InMotion wheels

InMotion support grows with the **X1**, **V6** and **E20**, and the older **V5**, **V8** and **V10** families. The V5, V8 and V10 are built from the official protocol and have not been tested on real wheels yet, so tell me how they behave on yours.

InMotion also gets fixes for the V11 and V12 on some firmwares, V12S and V9 tiltback, total distance beyond 655 km and PWM jumping to 110%, and the driver board temperature is now shown.

## Wheel data, read more carefully

WheelDash now reads the data of every brand differently. It was checked against the official apps and real recordings, but not on every model. Please compare speed, battery, voltage, temperatures and distances with what you are used to, and tell me your wheel model if something looks wrong.

- **Battery percentage.** New profiles use a new battery curve. On Leaperkim and KingSong it should match the manufacturer's app or come very close; on Begode it follows WheelLog and EUC World. Existing profiles keep their curve: set the minimum cell voltage to 0 to switch. The percentage also no longer drops when you accelerate and jumps back when you stop.
- **Begode.** The pack voltage is detected automatically on wheels with a smart BMS, speed and distances are right on wheels set to miles, model detection is more reliable, and phase current alarms now work.
- **KingSong.** The motor temperature is shown, the battery percentage is back on the 14D, 14M, 14S and other models that showed none, and a board below 0 °C no longer reads 650 °C.
- **Leaperkim.** Far fewer valid readings are thrown away, and PWM is always positive.

## Wheel presets, buttons and glasses

- **Presets.** Create wheel presets in the phone settings, then switch between them from the watch. They work on Leaperkim, KingSong, Begode and InMotion, and show on the dashboard and on ENGO.
- **Wheel PIN.** KingSong and Leaperkim wheels can be unlocked automatically on connection. This is untested so far.
- **Buttons.** More watch buttons can be assigned an action, and headlight cycling starts from the light's real state (also untested).
- **ENGO.** Brightness can be automatic or manual, and ENGO 3 gets colour and swipe control.

## Custom dashboards

- **Colour by level.** Values, gauges and bars change colour at your own warning and danger thresholds, in either direction: high PWM, low battery.
- **Alarms.** The affected value and gauge turn red during an alarm.
- **REC and speed limiter indicators.** Choose the new look or the original style, which stays the default. Their colours are fixed.
- **Progress bars** get their own text colour.

The phone editor now matches the watch, preview included, and so does the layout editor on the Ride Portal.

## A new look for the Ride Portal

The [Ride Portal](/guides/ride-portal/) has been reworked too. The pages share one frame, header and set of buttons, and the sign-in page was redrawn.

<figure class="align-center">
  <picture>
    <source media="(max-width: 640px)" srcset="/assets/images/news/ride-portal-discover-mobile.webp" width="780" height="1300">
    <img src="/assets/images/news/ride-portal-discover.webp" width="1440" height="616" loading="lazy" alt="The reworked Ride Portal Discover page: community stats, search and filters, and a public ride with its route, distance, time and top speed">
  </picture>
  <figcaption>The Discover page, where anyone can browse public rides without an account.</figcaption>
</figure>

- **Rides.** The ride plot can show a combined chart of every signal you display, with the overview as its navigator, and a library select mode picks several rides at once.
- **Segments and layouts.** Filters follow the same pills everywhere, and the segment chart shows each ride and wheel separately.
- **Dashboard.** Wheel cards were rebuilt, with a long-ride planner.
- **Layout editor.** It has the new dashboard options above, and an alarm message's background colour is now saved correctly.

## Reliability

- Connections and reconnections are more reliable.
- There are fewer low-memory crashes, and the app recovers by itself when it gets stuck in the background.
- Settings, layouts and profiles are no longer lost or overwritten during a sync.
- A full watch storage no longer loses a ride silently, and a route that is too large shows "Watch storage full".
- The stop-recording button keeps working after a swipe closes its dialog, and auto-exit no longer closes the app after you cancel it.

Your password is no longer stored in the Zepp app, accented characters are supported in passwords, and uploaded rides are better protected against tampering.

Visit the [v0.0.99 release](https://github.com/blkfribourg/WheelDash_Amazfit_Beta/releases/tag/v0.0.99) to find the package for your watch, or follow the [Amazfit installation guide](/install_amazfit/).
