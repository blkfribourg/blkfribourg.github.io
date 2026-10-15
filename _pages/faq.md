---
title: "FAQ"
permalink: /wheeldash_faq/
author_profile: false
author: BlkFri
last_modified_at: 2026-10-08
classes: wd-doc wd-faq
seo_title: "WheelDash FAQ: EUC smartwatch app questions"
excerpt: "Answers about WheelDash, the EUC app for Garmin and Amazfit: phone while riding, price, battery use, iPhone, supported watches and wheels, connection issues."
---

## Do I need my phone while riding?

No. The watch connects to the wheel itself, and runs the dashboard, the alarms and the recording. On Amazfit, the phone is used before and after the ride: for settings, to load a navigation route and to upload rides. The optional EUC World mode on Amazfit is the exception: it takes the wheel data from the EUC World app on your phone.

## Is WheelDash free?

Yes, with no ads and no subscription. Everything that runs on the watch, including ENGO glasses and the Garmin Varia radar, is free and will stay free.

The Ride Portal and Amazfit navigation are free too, but they run on servers that cost money every month. Today [donations](/donate/) cover them. If they stop being enough, these two services may ask for a contribution, set to cover their costs and nothing more.

## How much watch battery does WheelDash use?

It depends on the watch, and on what is connected to it.

- **Garmin:** many watches record more than 10 hours of riding. The Garmin Datafield is the lightest version.
- **Amazfit:** on a Bip 6, a 1 h 40 ride with ENGO glasses and a Varia radar connected used 20 % of the watch battery, about 12 % per hour.

On Amazfit, you can save battery by leaving **Always On Mode** off, turning off **Heading-Up Map** and turning on **GPS Battery Saver** for navigation, and setting an **Auto-Exit Timeout** so WheelDash closes when no wheel is connected.

## Do I need an account?

Not to ride. The Garmin versions need no account at all. On Amazfit, a free WheelDash account is needed only to upload rides to the [Ride Portal](/guides/ride-portal/), to use [navigation](/guides/amazfit-navigation/) and to back up your settings.

## Which languages does WheelDash support?

The Amazfit app, on the watch and in its settings, is available in English, French, German, Spanish, Russian and Simplified Chinese. The Garmin versions are in English.

## Does WheelDash work with an iPhone?

Yes. WheelDash works the same with an iPhone or an Android phone: settings, route transfer and ride upload go through Garmin Connect or the Zepp app, both available on iOS and Android.

## Do I need EUC World, WheelLog or another phone app?

No. WheelDash is not a companion to a phone app: the watch connects to the wheel itself. See [why WheelDash](/why-wheeldash/). On Amazfit, EUC World mode is an option for wheels WheelDash does not support directly.

## Does WheelDash work on Apple Watch or Wear OS?

No. WheelDash runs on Garmin and Amazfit watches. See the [supported watches](/platforms/#compatibility).

## Can I use WheelDash and a phone app at the same time?

Usually not. Most wheels accept only one Bluetooth connection at a time, so close the phone app before starting WheelDash. On Amazfit, EUC World mode lets WheelDash show data from EUC World instead.

## Garmin App or Garmin Datafield?

The **Garmin App** is a full-screen WheelDash app with faster updates, wheel controls and its own recording. The **Garmin Datafield** sits inside a Garmin activity, so you keep Garmin's maps and navigation, but it refreshes once per second. See the [platform comparison](/platforms/).

## I can't find WheelDash on the Garmin store, or the store page says it doesn't exist

WheelDash only appears for watches it supports. Check the [Connect IQ Store]({{ site.data.product.urls.garmin_app }}) for the current list of compatible Garmin watches. For Amazfit, see the [compatible Amazfit watches](/platforms/#amazfit-watches) and the [installation guide](/install_amazfit/).

## I can't connect to my wheel

Make sure you selected the right profile and that its wheel brand matches your EUC. Only your wheel should be powered on nearby during the first connection, and no phone app should be connected to it. On Garmin, if you own a KingSong, also try the "Kingsong (old)" brand, especially if your wheel is from before 2021.

## WheelDash shows a different battery percentage from other apps

Battery percentage is calculated from the pack voltage, and every app uses its own voltage-to-percentage curve, so readings can differ by a few percent. WheelDash leans towards the cautious side: a lower number that turns out to be pessimistic is better than running out of battery unexpectedly. On Amazfit, you can adjust the curve with the Minimum Cell Voltage setting in your wheel profile.

## Is there a manual?

The [guides](/docs/) cover installation, first use, dashboards, navigation, accessories and the Ride Portal. On Amazfit, the [settings reference](/guides/amazfit-settings/) explains every setting. The original [Garmin manual (PDF, 2023)](/assets/pdf/WheelDash_Manual_v0.1.pdf) is still available, but some settings have changed since.

## Amazfit navigation says it is not enabled for my account

Navigation runs on WheelDash's own servers and is enabled on request for each account. It is available in {{ site.data.product.navigation_regions | array_to_sentence_string }}. [Contact us](/contact/) with the email of your WheelDash account to ask for access.

## My watch keeps disconnecting from my EUC while riding

{{ site.data.product.garmin_latency_note }} WheelDash cannot remove latency introduced by the watch platform. If the issue persists, include your watch model and firmware version when [contacting support](/contact/).
