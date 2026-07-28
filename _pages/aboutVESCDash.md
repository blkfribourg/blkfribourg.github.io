---
permalink: /vescdash/docs/
title: "VESCDash documentation"
excerpt: "Compatibility, setup, and ride recording information for VESCDash on Garmin devices."
last_modified_at: 2024-10-21
toc: true
author_profile: false
author: BlkFri
classes: wd-doc vesc-product vesc-doc
---

<center>
<img src="/assets/images/VESC_Logo.png"/>
</center>

If you want to support this project, visit my <a href="https://ko-fi.com/wheeldash" target="_blank" rel="noopener noreferrer">ko-fi page</a>!
{: .notice--info}

## About VESCDash

Sometimes, a technical failure can lead to unexpected opportunities. When the motherboard on my old Gotway MCM4 stopped working, I decided to replace it with a VESC controller. This unexpected repair sparked the creation of the VESCDash project.

VESCDash is a standalone Garmin application designed for VESC controllers. It supports riders of VESC-powered one-wheelers, e-foils, electric skateboards, converted EUCs, and other compatible personal electric vehicles. VESCDash and WheelDash initially shared one application, but they are now independent products with different audiences and releases.

**Platform:** VESCDash is currently available only for compatible Garmin watches.
{: .notice--info}

The projects still share some technical foundations, but features and releases should be considered separately.

If you have any specific needs or ideas for either project, please don't hesitate to reach out!

## Compatible VESCs

VESCDash is designed to be compatible with most VESC controllers running firmware 6.2 or later. Due to technical constraints, I have to hardcode some VESC advertising names. If you're using a VESC that isn't recognized by VESCDash, please don't hesitate to contact me. In many cases, adding your VESC's name to the app's configuration can quickly resolve the issue.

## Compatible Garmin Devices

VESCDash is compatible with most BLE-enabled devices that support CIQ version 3.1 or later. If your watch isn't listed in Connect IQ or you're unable to find VESCDash, please feel free to contact me with information about your watch model.

**Note:** Garmin has recently made changes to their Bluetooth stack, which has resulted in increased lag and disconnection issues on several of their smartwatches, particularly the Fenix 7 and Epix series. Unfortunately, there's currently no solution to this problem that I can provide. One potential workaround is to downgrade the watch firmware, but this may have other trade-offs or limitations.
{: .notice--warning}

You can check watch models specification here:

[https://developer.garmin.com/connect-iq/compatible-devices/](https://developer.garmin.com/connect-iq/compatible-devices/)

## Activity Recording

VESCDash allows you to track your riding session by saving it as a Garmin activity. Besides saving your ride route, it also records the following metrics of you PEV :

Speed, PWM, Voltage, Current,Motor power and motherboard temperature.

Additional metrics are also available in your activity summary : trip distance, maximum speed, maximum PWM, maximum Current, maximum power, min/max temperature, average speed, average power, min/max voltage, min/max battery %.
