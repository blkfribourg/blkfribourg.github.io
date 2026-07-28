---
title: "WheelDash has grown into a complete riding ecosystem"
layout: single
permalink: /updates/wheeldash-ecosystem-update/
author: BlkFri
classes: wd-doc wd-update
excerpt: "A look at the Garmin, Amazfit and Ride Portal work that has kept WheelDash development busy."
header:
  teaser: "/assets/images/mikolaj-zeman-unsplash3.jpg"
---

I have been quiet here because most of my available WheelDash time has gone into building and riding. The project has changed considerably since the website last reflected it, so this is a good moment to show what WheelDash has become.

WheelDash is no longer only a watch display. It is a riding ecosystem with three watch implementations, connected accessories, navigation and mapping tools, ride recording, and a web portal for post-ride exploration and community features.

## Three ways to use WheelDash

WheelDash now has three distinct implementations. They share live EUC telemetry, safety alerts, Bluetooth audio alerts, offline maps, ENGO support and Garmin Varia integration, but their workflows are different.

### Garmin App

The Garmin App is a standalone WheelDash experience. It provides a focused EUC dashboard, offline maps, alerts, accessories and Garmin activity recording. It does not provide navigation.

### Garmin Datafield

The Garmin Datafield runs inside a Garmin activity. It combines WheelDash telemetry and alerts with Garmin activity recording and Garmin-native navigation where the watch supports it.

### Amazfit

Amazfit provides the most integrated WheelDash experience. It adds custom dashboards, WheelDash recording, navigation in supported regions, and uploads to the WheelDash Ride Portal.

The [platform comparison](/platforms/) explains the practical differences without hiding the limitations of each option.

## Many more Amazfit watches

WheelDash v0.0.82 considerably expands the current Amazfit device range. Packages are now available for Active 2 variants, Active 3 Premium, Active Max, Balance 2 and Balance 2 XT, Bip 6, Cheetah 2 Pro and Ultra, T-Rex 3, both T-Rex 3 Pro sizes, and T-Rex Ultra 2.

There is also an experimental API 3.6 build for older watches including Active, Balance, older Cheetah models, Falcon, GTR 4, GTS 4 and T-Rex Ultra. This build has not yet been tested on real hardware, so feedback from riders willing to experiment is especially useful.

[View the current Amazfit release]({{ site.data.product.urls.amazfit_release }}) or read the [Amazfit installation guide](/install_amazfit/).

## More than a watch screen

The Amazfit application has received a large amount of work behind the scenes and on the watch itself:

- customizable dashboard layouts;
- offline map display;
- WheelDash navigation in France and the USA;
- ENGO smart-glasses integration;
- Garmin Varia radar support;
- more reliable ride transfers from the watch;
- continued Bluetooth and recording improvements.

The phone can remain in a pocket while riding, then handle route preparation, configuration and ride upload afterward.

<center>
<img src="/assets/images/Engo2.png" alt="ENGO smart glasses supported by WheelDash">
</center>

## The Ride Portal is becoming a community space

The WheelDash Ride Portal began as a place for Amazfit riders to upload and review recordings. It now provides a wider public layer around intentionally shared rides.

Visitors can:

- [explore public rides]({{ site.data.product.urls.public_rides }}) without creating an account;
- open ride maps and detailed statistics;
- view the [community leaderboard]({{ site.data.product.urls.leaderboard }});
- browse [community segments]({{ site.data.product.urls.segments }}).

Segments become more useful as riders share suitable public activity over the same roads and paths. Some areas will naturally have more coverage than others while the community grows.

<center>
<img src="/assets/images/record-feature.png" alt="Map imagery representing WheelDash Ride Portal analysis">
</center>

Private Amazfit rides remain private unless the rider intentionally publishes them. Garmin recordings continue to live in Garmin Connect and are not uploaded to the WheelDash Ride Portal.

## Garmin is still maintained

Most new ecosystem features currently arrive on Amazfit first, but Garmin work continues. Recent Datafield development includes Nosfet battery corrections, additional watch support, connection feedback improvements and Varia-related fixes.

Bluetooth responsiveness can vary by watch firmware, watch model and how frequently a wheel sends data. WheelDash documents this practical limitation so riders can choose a platform with realistic expectations.

## A clearer website for a bigger project

The WheelDash website has also been rebuilt to match the product that exists today. It now separates the Garmin App, Garmin Datafield and Amazfit choices, provides clearer installation guides, and connects directly to the public Ride Portal.

This update is not the end of the work. It is a clearer starting point for riders discovering WheelDash and for existing users who may not have seen how much the project has grown.

You can [choose your platform](/platforms/), read the [installation guides](/docs/), join the [WheelDash Telegram group]({{ site.data.product.urls.telegram }}), or [support development on Ko-fi]({{ site.data.product.urls.kofi }}).

WheelDash. Built by riders. For riders.
