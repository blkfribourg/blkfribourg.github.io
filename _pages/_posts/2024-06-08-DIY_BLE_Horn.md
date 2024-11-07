---
title: "DIY Bluetooth Horn!"
layout: single
author: BlkFri
header:
  teaser: "/assets/images/DIY_BLEHorn.png"
---

Disclaimer: I'm not an electronics expert, so my design may have some issues or flaws that I'm unaware of. However, it works fine for my specific use case.

Feel free to contact me if you have any suggestions on how to improve this prototype.

As I often commute to work on my EUC, I encounter various road conditions. While a simple "excuse me/thanks" is usually sufficient to politely warn cyclists on bike paths, alerting drivers on roads can be more challenging, especially when they don't notice me and cut me off.

Many electrical horns with remotes are available, but I didn't want to carry an extra device just to trigger a horn. So, I created a simple ESP32-based, battery-powered Bluetooth Low Energy horn and programmed it to be triggered using WheelDash.

Here's the parts list:

- 7.4V (nominal) battery pack
- 2 LM2586 step-down voltage regulators (set to 3.3V and approximately 6.5V for the horn)
- 1 JQC3F-03VDC-C relay
- 1 1N4148 diode (used as a flyback diode)
- 1 ESP32 Dev Kit C v4

<center>
<img src="/assets/images/DIY_BLEHorn.png"/>
</center>

This is still a prototype, and I need to design a case for it. However, it was a fun DIY project!

I plan to share the ESP32 code and schematics of my prototype on my GitHub when I have more time. Feel free to contact me if you need any further information.
