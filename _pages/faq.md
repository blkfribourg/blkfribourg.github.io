---
title: "FAQ"
permalink: /wheeldash_faq/
author_profile: false
author: BlkFri
last_modified_at: 2026-10-08
classes: wd-doc wd-faq
---

## I can't find WheelDash on the Garmin store, or the store page says it doesn't exist

WheelDash only appears for watches it supports. Check the [Connect IQ Store]({{ site.data.product.urls.garmin_app }}) for the current list of compatible Garmin watches. For Amazfit, see the [compatible Amazfit watches](/about_wheeldash/#compatible-amazfit-watches) and the [installation guide](/install_amazfit/).

## I can't connect to my wheel

Make sure you selected the right profile and that its wheel brand matches your EUC. Only your wheel should be powered on nearby during the first connection. On Garmin, if you own a KingSong, also try the "Kingsong (old)" brand, especially if your wheel is from before 2021.

## WheelDash shows a different battery percentage from other apps

Battery percentage is calculated from the pack voltage, and every app uses its own voltage-to-percentage curve, so readings can differ by a few percent. WheelDash leans towards the cautious side: a lower number that turns out to be pessimistic is better than running out of battery unexpectedly. On Amazfit, you can adjust the curve with the Minimum Cell Voltage setting in your wheel profile.

## Is there a manual?

The setup guides cover installation and first use: [WheelDash for Garmin](/wheeldash_quickstart/) and [WheelDash for Amazfit](/install_amazfit/). The original [Garmin manual (PDF, 2023)](/assets/pdf/WheelDash_Manual_v0.1.pdf) is still available, but some settings have changed since.

## My watch keeps disconnecting from my EUC while riding

{{ site.data.product.garmin_latency_note }} WheelDash cannot remove latency introduced by the watch platform. If the issue persists, include your watch model and firmware version when [contacting support](/contact/).
