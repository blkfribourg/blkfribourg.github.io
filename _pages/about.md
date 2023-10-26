---
permalink: /about/
title: "About WheelDash"
excerpt: "WheelDash is a standalone app for Garmin devices."
last_modified_at: 2022-05-27T11:59:26-04:00
toc: true
author: BlkFri
---

## A few words about WheelDash

This project started as a personal project to meet my needs with my EUC. I wanted a simple and efficient app that would allow me to avoid using both my phone and my watch (if my watch has GPS and supports BLE, why use a third-party app on my smartphone?), have a PWM alarm management, and allow me to record my rides, all for free.

As a longtime Garmin user, I decided to develop a Garmin app for my EUC. Once I had a version that was usable for everyday use, I decided to release the source code for the app as well as publish a release of WheelDash on the Garmin store. The first feedback I received gave me the desire to continue the adventure a little further, so I decided to continue development, supported by the encouragement of a handful of people. While I am the only developer, WheelDash has benefited from the exchanges I have had with the first users. It is a project developed by and for the EUC rider community that we are. This is also why I want WheelDash to be and remain 100% free and open source.

If you want to support this project, visit my <a href="https://ko-fi.com/wheeldash">ko-fi page</a> !

## Features

WheelDash is an app for Garmin devices and offers real-time display of important data such as speed, battery level, temperature, PWM, and various other metrics. It also allows for the management of common wheel settings directly from the watch. In addition, it provides alarms for PWM, speed, and temperature, and allows you to map specific actions on your watch button (like toggling your EUC lights on or off).

It seamlessly integrates with the Garmin environment, making it easy to record your rides and store data transmitted by your wheel. All route information and ride data are readily accessible through the Garmin Connect app or portal.

WheelDash is a standalone app and not a companion for WheelLog, DarknessBot, or EUC World, so WheelDash does not require any of these apps to function.

## Versions

WheelDash exists in two forms: a Garmin application and a datafield that can be added to an existing activity. While the application and datafield versions share a fair amount of code, the datafield version is more restricted due to Garmin's restrictions on memory usage and UI refresh rate. The datafield version is however THE solution to be able to use Garmin native navigation and display or record wheel related data.

## Compatible EUCs

WheelDash currently supports all EUCs model from the following brands :

- Gotway/Begode
- Leaperkim
- KingSong

**Note:** I'm working on inmotion support right now, if you own an Inmotion EUC and a Garmin watch that supports BLE, apply to become a beta tester!
{: .notice--warning}

## Compatible Garmin Devices

All BLE compatible devices supporting CIQ version > 3.1 are compatible with WheelDash. For now most of the devices with square shaped screen are unsupported.

You can check watch models specification here:

[https://developer.garmin.com/connect-iq/compatible-devices/](https://developer.garmin.com/connect-iq/compatible-devices/)

## Activity Recording

WheelDash allows you to track your riding session by saving it as a Garmin activity. Besides saving your ride route, it also records the following metrics of you EUC :

Speed, PWM, Voltage, Current,Motor power and motherboard temperature.

Additional metrics are also available in your activity summary : trip distance, maximum speed, maximum PWM, maximum Current (App only), maximum power (App only), min/max temperature (max on App only), average speed, average power (App only), min/max voltage, min/max battery % (max on App only)

Note : Due to memory restrictions in datafields, less metrics are available in the activity summary in WheelDash: datafield.
