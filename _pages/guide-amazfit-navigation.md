---
title: "WheelDash for Amazfit: navigation"
permalink: /guides/amazfit-navigation/
excerpt: "Upload a GPX route to the Ride Portal, send it to your Amazfit watch with its map, and follow it during the ride."
last_modified_at: 2026-10-08
toc: true
author_profile: false
author: BlkFri
classes: wd-doc
---

WheelDash for Amazfit has its own navigation, running in the app on the watch. You prepare a route before the ride; during the ride, the watch follows it with its own GPS, without the phone.

## Before you start

- Navigation is available in {{ site.data.product.navigation_regions | array_to_sentence_string }}.
- It runs on WheelDash's own servers, so it is enabled on request for each account. [Contact us](/contact/) with the email of your WheelDash account to ask for access.
- You need a WheelDash account, logged in in the Zepp app. See [install and first ride](/install_amazfit/#settings).

## 1. Upload a route

1. Sign in to the [Ride Portal]({{ site.data.product.urls.portal_login }}) and open **Navigation**.
2. Choose the **map matching profile**, which decides the roads the route follows: bike paths and lanes, road cycling (avoids cycle lanes) or mountain bike.
3. Choose the **map tile theme**, light or dark.
4. Drop a GPX file (up to 10 MB). The Ride Portal matches it to the roads, finds the turns and prepares the map tiles. You can preview the route before sending it.

## 2. Send it to the watch

1. On the watch, open WheelDash and choose **Data Transfer** in the main menu. Keep the watch on this page during the whole transfer.
2. In the Zepp app, open WheelDash's settings, then the **Navigation** section.
3. Tap **Refresh Route List**, then **Load to Watch** for your route. The watch shows the transfer and says **Route ready!** when it is done.

The same section lists the **Routes on Watch**, where you can delete one or all of them.

## 3. Follow it

1. Start your ride as usual and switch to the navigation screen, by swiping or with a button mapped to **Cycle Page View**.
2. Tap **Navigate** and pick the route.

The watch shows the map, your position and the route. The band at the top shows the next turn and its distance, with the turn after it below. A banner warns you when you are **off route** or going the **wrong way**.

To zoom, map buttons to **Nav Zoom In**, **Nav Zoom Out** or **Nav Cycle Zoom**.

## Options

In the **Navigation** section of the settings:

- **Route Turn Arrows:** arrows at upcoming turn points.
- **Direction Chevrons:** arrow markers along the route ahead.
- **Heading-Up Map:** turn it off for a north-up map, which saves battery.
- **GPS Battery Saver:** skips navigation updates while you are stopped.
- **Nav Screen Timeout:** how long the screen stays on while navigating.

**Navigation alarms**, in the **Alerts** section, warn you at a set distance before each turn.

With ENGO glasses, the route can also send turn-by-turn scenes to the glasses. See [accessories](/guides/accessories/).
