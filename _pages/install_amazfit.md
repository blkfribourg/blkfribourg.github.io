---
permalink: /install_amazfit/
title: "Install WheelDash on an Amazfit watch"
excerpt: "Install WheelDash, a standalone app for Amazfit (and Garmin) devices."
last_modified_at: 2026-01-24
toc: true
author_profile: false
author: nijaba
---

If you want to support this project, visit my <a href="https://ko-fi.com/wheeldash" target="_blank" rel="noopener noreferrer">ko-fi page</a>!
{: .notice--info}

## Prerequisites

* A Compatible Amazfit device
    - Active 2 (Round or Square, with or wthout NFC)
    - Balance 2 (Round or Square)
    - Bip 6
    - T-Rex 3
* Zepp app installed on your phone

## Installation

1. Go to https://github.com/blkfribourg/WheelDash_Amazfit_Beta/tags and pick the version (latest is generally best)
2. Scroll to find your watch model
3. Open the zepp app and go to __Profile > Settings > About__, then repeatedly tap the Zepp app's icon (or version number) about 7-10 times until a confirmation pops up, which unlocks features like scanning QR codes for installing custom apps. 
4. In the Zepp app, go to __Device > General > Developer Mode > Mini Program__ and click on + and select scan
5. Scan the QRcode found at step __2__
6. Wait a bit (leave the watch nearby) and you are done

## Configuration

1. If you just completed the install, you are already there. Otherwise, in the Zepp app, go to __Device > General > Developer Mode > Mini Program__
2. Click on __settings__ for WheelDash
3. If you want to upload your data to the wheeldash server:
    1. Click on __User__, then on __Register__
    1. Enter a valid email and a password, then click on Register.  This is the login and password you will need to enter on https://wd.nijalabs.com to view your data.

The rest of the configuration should be self explanatory. Adding a new wheel configuration is done from the watch.

If you have a Garmin Varia radar or Engo HUD Glasses, you first need to add (pair) the device on the watch. The configuration happens in the Wheeldash Zepp app settings and apply to all the wheel profiles.  If the glasses or the radar are not found when a profile is started, Wheeldash will ask you if you want to skip them for this ride.

## Using the watch app

1. Go to app launcher and find the Wheeldash icon to launch it
    (_Note: you can assign a shortcut in Zepp.  Go to __Device > Device Setting__ and assign Wheeldash, which can be shown as Null, to on of the buttons_).
3. To add a wheel: Click on the + button. (_Note: It is way easier to find your wheel the first time if no other wheel are turned on around you_)
5. The bottom button will allow you to start/stop recording
6. The top button will allow you to exit the app
7. You can leave your phone at home while riding but you will need the phone nearby and Zepp running when you want to upload your ride
8. At the end of the ride, you can decide to immediately updload your data as it is proposed when you do, but if your do not, you can always launch the watch app later and click on __Ride Manager__ as the data is saved on the watch
