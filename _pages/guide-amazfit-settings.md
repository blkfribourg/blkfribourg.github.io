---
title: "WheelDash for Amazfit: settings reference"
permalink: /guides/amazfit-settings/
seo_title: "Amazfit EUC app settings reference – WheelDash manual"
excerpt: "Every WheelDash for Amazfit setting explained: profiles, alarms, buttons, presets, recording, navigation, ENGO, Varia, custom dashboards and supported electric unicycles."
last_modified_at: 2026-10-15
toc: true
toc_sticky: true
author_profile: false
author: BlkFri
classes: wd-doc
---

The complete reference for WheelDash on Amazfit and Zepp OS watches, covering every setting, including the advanced ones. For a first setup, start with [install and first ride](/install_amazfit/).

This reference covers WheelDash for Amazfit 0.0.97.
{: .notice--info}

## What you need

- A Zepp OS 4.0 smartwatch with a 480 px wide screen, round or square. An experimental build covers some older watches: see the [supported watches](/platforms/#amazfit-watches).
- A phone with the Zepp app. The watch app is configured from WheelDash
  settings inside the Zepp app, and rides and routes travel between watch and
  server through the phone.
- A supported wheel: Begode / Gotway, KingSong, Leaperkim (Veteran, Nosfet) or
  InMotion. See [supported wheels and what each one reports](#supported-wheels-and-what-each-one-reports).
- Optional: ENGO smartglasses, a Garmin Varia radar.
- Optional: a WheelDash account, needed for cloud backup, ride upload,
  navigation routes and cloud-saved layouts.

You do not need the phone while riding. It is needed to change settings, load
routes, and upload rides.

## Installing and first start

Install WheelDash from a QR code in the Zepp app: see [install and first ride](/install_amazfit/).

On first launch WheelDash shows a short loading screen with a tip, then the
profile list. It is empty until you create a profile.

Before your first ride, open WheelDash settings in the Zepp app and look at the
**Global** and **Alerts** tabs. The defaults are usable, but you will want your
own alarm thresholds.

Keep your phone nearby when you open settings. Settings changes reach the watch
when the app is running on it; changes made while the app is closed are fetched
the next time you start it.

## Profiles: one per wheel

A profile is a saved wheel together with its own settings and, optionally, a
Varia radar and ENGO glasses. If you own several wheels, make one profile for
each.

### Creating a profile

1. On the watch, open WheelDash. On the profile list tap **New profile**
   (**Add your first wheel** on a fresh install).
2. Switch the wheel on and keep the watch close. The watch scans and lists the
   wheels it finds.
3. Tap your wheel, then **Create profile**.

If no wheel appears, check that it is on, that it is not already connected to
another phone, and that it is within a metre or two of the watch. Use **Scan
again**.

The global setting **EUC Name Prefix Filter** limits the list to wheels whose
Bluetooth name starts with the text you enter, which helps in a crowd.

The setting **BLE Scan Duration** (1 to 30 seconds, default 5) is how long each
scan lasts.

### Registering accessories (Varia radar, ENGO glasses)

Accessories are registered once and shared by every profile. They are not
attached to a single wheel: whichever profile you start, every registered
accessory is connected along with the wheel.

To register:

1. On the profile list tap **Accessories** (hint: "ENGO - Varia").
2. Switch the accessory on and keep it close. The watch scans and lists ENGO
   glasses and Varia radars it finds, each with a toggle. Devices you registered
   earlier are listed immediately, even when they are not in range.
3. Switch on the toggles for the devices you want and tap **Save**. A toast
   confirms each one ("Engo device registered", "Varia device registered").
4. To unregister, switch its toggle off and tap **Save** ("Engo device removed",
   "Varia device removed").

If nothing is found, check the accessory is on and close, then **Scan again**.
An unregistered accessory is never connected. The list of registered accessories is also synced to the
phone so it survives a watch restart.

If a registered accessory is not detected during the initial scan when you
connect, the watch asks whether to skip it ("Skip <name>?"), so you can ride
without it for that ride. To stop it being offered every time, unregister it
here.

### Deleting a profile

On the profile list, swipe the profile to the **left**. A "Delete profile?"
dialog asks "Delete <name> and its settings?". Confirm to delete, or cancel to
keep it. A hint toast ("Swipe a profile left to delete it") appears the first
time you have profiles.

What happens:

- The profile is removed from the watch immediately, then the new profile list
  is sent to the phone so both agree. The watch is the owner of which profiles
  exist.
- The profile's own settings go with it: corrections, minimum cell voltage,
  presets, PIN, and its Profile Distance counter.
- Not affected: global settings, alarms, button mappings, registered
  accessories, and rides already recorded.
- If you delete the last profile, the list shows **Add your first wheel** again
  and **Connect!** is disabled.
- If the deleted profile was your **Startup Profile**, the next launch shows
  "Startup profile not found, showing profile menu".
- It cannot be undone on the watch. If you saved a cloud backup earlier,
  **Load from cloud** (User tab) brings back the profiles stored in it, replacing
  the current ones.
- Do not delete or change profiles while the phone is unreachable: the watch
  warns "Phone offline. Using cached data. Avoid profile changes."

There is no rename on the watch. To get a different name, create a new profile
for the same wheel.

### EUC World mode

If you turn on **EUC World Server API (8080)** in the Global tab, an extra
choice named "EUC World mode" appears when you create a profile. The watch then
takes wheel data from the EUC World app on your phone instead of talking to the
wheel itself. Use it for wheels WheelDash does not speak to directly.

### Per-profile settings

Pick the profile in the **Profiles** tab of settings to edit it:

| Setting | What it does |
|---|---|
| Convert to Miles Unit | Show this profile's wheel data in miles and mph. |
| Use GPS Speed | Take speed from the watch GPS instead of the wheel. Can help when a wheel reports speed poorly. |
| Speed & Distance Correction | Multiplies the wheel's speed and distance (0.5 to 1.5). Use it when the wheel is calibrated for a different tyre size. 1.0 = no correction. |
| Speed Limit (tiltback) | The speed the limiter uses when you switch it on (see [wheel presets and speed limiter](#wheel-presets-and-speed-limiter)). 0 = disabled. |
| Normal tiltback speed | The wheel's normal tiltback speed, restored when the limiter is switched off. Leave unset (-1) if you do not want WheelDash to touch it. |
| Minimum Cell Voltage | 0 uses the manufacturer's own battery curve (recommended). A value between 2.6 and 3.8 V makes the battery percentage a straight line from that cell voltage to full. |
| Free-Spin Test Voltage / Cutoff Speed / Correction Factor | Advanced. A Begode-oriented correction of the PWM figure while the wheel is lifted and spinning freely. Leave at 0 unless you know you need it. |
| Begode Voltage Scaling | Advanced. Scale factor for the voltage a Begode reports. 1.0 normally; WheelDash learns the right scale itself on the first frame of data. |
| Wheel PIN | PIN sent automatically to unlock a locked wheel on connect. KingSong uses 4 digits, Leaperkim 6. Leave empty if your wheel has no PIN. The PIN is never included in cloud backups. |
| Wheel presets | Up to 4 saved sets of wheel settings. See [wheel presets and speed limiter](#wheel-presets-and-speed-limiter). |
| Profile Distance Counter | The "Reset Counter" button sets this profile's Profile Distance stat back to zero. |

## Starting a ride

1. Open WheelDash on the watch and tap the profile.
2. Tap **Connect!**.
3. The watch connects to the wheel first, then to the Varia radar and the ENGO
   glasses if the profile has them. A toast says **All devices connected and
   ready!** when everything is up. Allow up to half a minute per device on a
   slow connect.
4. The riding screen opens.

A registered accessory that is not found during the initial scan triggers a
"Skip <name>?" question. Skipping lets you ride without it. If the wheel or a
device fails to connect after several attempts you are asked whether to keep
retrying.

### Autostart

To skip the menu, set **Startup Profile** in the Global tab:

- **None (Manual Selection)** shows the profile list.
- **Last Used Profile** reconnects to the profile you rode last.
- Or pick a specific profile.

When a startup profile is set, a countdown toast ("Autostart: ... in 5s") runs
after launch. Touching a button cancels it and shows the list. **Startup Delay**
(1 to 30 s, default 5) sets the countdown.

### Auto-exit

**Auto-Exit Timeout (No EUC)** closes the app after the given number of minutes
(1 to 240) with no wheel connected, so it does not drain the watch battery in
your pocket. 0 turns it off. Ten seconds before exiting you get a countdown;
any button press cancels it.

## The riding screen

WheelDash has three screens you move between: the **dashboard**, the
**statistics screen** (only if you chose statistics), and the **navigation
screen**.

### Dashboard styles

Choose with **User Interface Layout** (Global tab):

| Style | Look |
|---|---|
| Default | A PWM ring around the edge, short battery and temperature arcs, clock on top, speed in the centre, and a battery / unit / temperature row. |
| Large | Bigger PWM and speed figures and no thin detail, for riders who want to read it at a glance. |
| Racing | Four quadrants, no clock, no PWM bar. |
| Custom | A dashboard you design yourself. See [custom dashboard](#custom-dashboard). |

Every style keeps the same fixed zones that never overlap: the clock (or the
alarm banner, which takes its place), the big figures, the Varia band (only while
the radar sees a vehicle), and a bottom row with the **REC** and **LIM**
indicators.

- **REC** shows that a recording is running.
- **LIM** shows that the speed limiter is engaged.

The PWM ring is coloured by load: green below 70 %, orange from 70 to 85 %, red
above. Colour is used only to carry meaning: green, orange and red for readings,
never blue while riding. When an alarm is active the banner names the alarm in
the clock's slot and only the concerned gauge and value turn red.

When the wheel is not connected the readings show the disconnected state; the
watch keeps trying to reconnect on its own.

### Statistics screen

Swipe up from the dashboard to reach it. It paints your chosen statistics in a
grid, one label over one value. Choose up to eight in **Statistics Screen
Stats** (Global tab):

Total Distance, Trip Distance, Trip Duration, Average Speed, Average Moving
Speed, Top Speed, Voltage, Battery per Distance, Profile Distance.

Total distance is the wheel's odometer. Trip distance counts from the moment you
connected. Profile distance accumulates across rides for the profile until you
reset it. Units follow **Display Miles Unit**.

### Always On Mode

**Always On Mode** keeps the screen dimly lit so the dashboard stays visible
without waking the watch. It uses more battery.

### Miles or kilometres

There are two switches. **Display Miles Unit** (Global tab) changes what the
watch screens show. **Convert to Miles Unit** (per profile) controls whether
that profile's wheel data is converted. If the figures look like they are in the
wrong unit, check both.

## Watch buttons and gestures

### Exit

A short press of the **upper button** always opens the exit confirmation; it
cannot be remapped. Confirming stops the Bluetooth service and closes the app.
On the navigation screen with a route running, the same press first asks whether
to stop navigation.

### Swipes

- **Swipe up / down** moves between the dashboard, statistics and navigation
  screens. This is turned off if you map any button to "Cycle Page View".
- **Swipe left / right** switches ENGO pages, when ENGO is set to "Swipe on
  Watch" (see [ENGO smartglasses](#engo-smartglasses)).

### Button mappings

Open the **Buttons** tab of settings to give button presses a job. Each button
can be mapped separately for a short press and a long press. The only press you
cannot map is the short press of the upper button, which always exits (see
above). To add a mapping:

1. Choose the **action**.
2. Press **Capture...**, then press the watch button you want, short or long.
   WheelDash must be running on the watch, on the profile list, for capture to
   work. The settings page shows "Waiting for Button Press...".
3. Check the button and press type it detected, then **Save**. If that press is
   already assigned you are warned and can **Replace** it.

Watches with more than two buttons: capture accepts whichever button you press.
Buttons other than the upper and lower ones are named by their key code, for
example "Button (Key: 12)", and their mapped actions run on the riding screen
like any other.

Available actions:

| Action | Effect |
|---|---|
| None | Nothing. |
| Cycle Light | Cycles the wheel's lights. |
| Cycle LK Headlight Low/High | Leaperkim headlight beam. Needs custom firmware. |
| Toggle EUC Beep | Sounds the wheel horn. |
| Toggle Speed Limit | Engages or releases the speed limiter. |
| Presets: pick and apply | Opens the preset picker. |
| Apply preset 1 to 4 | Applies that preset directly. |
| Switch Engo Views | Moves to the next ENGO page. |
| Cycle Page View | Moves between dashboard, statistics and navigation. |
| Start/Stop Recording | Starts or stops recording. |
| Nav Zoom In / Out / Cycle | Map zoom on the navigation screen. |

## Alarms

Alarms warn you without you having to look. Each alarm watches one or more
readings and fires when its conditions are true. An alarm can play a sound,
vibrate the watch, show a banner on the watch dashboard, and show a banner on
ENGO glasses.

Alarm text states the reading, not an instruction: you will see "PWM 91%" rather
than "SLOW DOWN".

### The quick alarms

At the top of the **Alerts** tab are ready-made alarms with one threshold each.
Set the number and choose whether it is on:

| Alarm | Fires when | Default threshold |
|---|---|---|
| PWM Alert | PWM is above the value | 80 % |
| Speed Alert | Speed is above the value | 50 km/h (31 mph) |
| Temp Alert | Controller temperature is above the value | 65 C |
| Varia Close | A vehicle is nearer than the value | 15 m (49 ft) |
| Varia Far | A vehicle is nearer than the value | 50 m (164 ft) |
| Varia Safe | No vehicles detected (the road clears) | not applicable |
| Nav Turn Alert | Distance to the next turn is below the value | 200 m (656 ft) |

Each has a sensible default sound and vibration, and each can be tested with the
**Test Sound** and **Test Vibration** buttons. Testing needs WheelDash open on
the watch, on the profile list.

### Advanced alarms: the condition builder

Press **+ Add Alarm** to build your own.

- **Name** (shown on the watch and ENGO, at most 20 characters). Keep it short;
  it is the text on the banner.
- **Profile**: apply to all profiles or just one.
- **Conditions**: pick a variable, an operator (`>`, `>=`, `<`, `<=`, `==`) and a
  value. Add several with **+ Add Condition** and combine them with **AND** (all
  must be true) or **OR** (any).
- **Clear below**: the value at which the alarm stops. Leave off and it stops as
  soon as the condition is no longer true. Use it to stop an alarm that flickers
  around its threshold.
- **Sound**: None, Alarm, Message, Regular, Achieve, Camera, ABN Hi, ABN Lo, SOS.
- **Vibration**: None, Gentle, Strong, Urgent, Click, or a custom pattern built
  from vibrate and pause steps.
- **Repeat while active**: fires once per activation, or repeatedly at an
  interval you set in milliseconds.
- **ENGO display**: whether this alarm shows on the glasses.

Variables you can use:

| Variable | Meaning | Unit |
|---|---|---|
| PWM | Motor duty | % |
| Speed | Wheel speed | km/h or mph |
| Temp | Controller / MOSFET temperature | C |
| Mot temp | Motor winding temperature (wheels that have the sensor) | C |
| Coil temp | Modelled coil temperature (Leaperkim on custom firmware) | C |
| Board temp | Driver board temperature (InMotion) | C |
| Tyre press | Tyre pressure (InMotion P6) | bar |
| Batt | Battery percentage | % |
| Volt | Pack voltage | V |
| Curr | Battery current | A |
| Ph curr | Phase (motor) current | A |
| Power | Battery power | W |
| V.Dist | Distance to a Varia-tracked vehicle | m or ft |
| V.Spd | Speed of a tracked vehicle | km/h or mph |
| V.Cnt | Number of tracked vehicles | count |
| Nav.Dist | Distance to the next turn | m or ft |

A variable the wheel does not report never fires. Which wheel reports what is in
[supported wheels and what each one reports](#supported-wheels-and-what-each-one-reports).

### Alarm priority

The order of the list is the priority, top first. The top active alarm owns the
**sound**. A lower alarm can still fire at the same time if it uses vibration
only. Only one alarm name is shown on the dashboard at a time: the highest
priority active one. Use the arrows to reorder.

Varia-only alarms are shown by the Varia band instead of the banner, and turn
alarms by the turn overlay on the navigation screen, so those do not also
produce a banner.

## Wheel presets and speed limiter

### Speed limiter

Set **Speed Limit (tiltback)** on the profile and map a button to **Toggle Speed
Limit** (or use a preset). Pressing it lowers the wheel's tiltback speed to your
limit; pressing again restores **Normal tiltback speed**. The **LIM** indicator
shows when it is engaged.

The limit must be lower than the normal tiltback speed, otherwise the limiter
will not engage. A message in settings warns you when they conflict.

The watch needs to have read the wheel's current settings first. On KingSong,
this happens automatically a moment after connecting; a toggle pressed too early
asks the wheel again and works on the next press.

### Presets

A preset is a named bundle of wheel settings that WheelDash writes to your wheel
in one go, for example "Commute" and "Fun". You can have four per profile.

To build them, open the profile in settings:

1. Connect the wheel once with this profile. WheelDash learns which settings the
   wheel has and their allowed ranges. Until then presets cannot be edited.
2. Press **New preset**, give it a name, and either pick settings with **Add a
   setting** or **Start from the wheel's current settings**.
3. Set a value for each.

What can be in a preset depends on the brand: pedal mode, hardness and angle,
tiltback speed, speed limiter and alarms for several brands, plus brand-specific
extras such as Leaperkim PWM limit and backlight, Begode alarm level, tilt-off
angle and ambient light, KingSong alarm speeds and riding mode level, and
InMotion overspeed alarm and classic mode.

To use a preset on the watch, map a button to **Presets: pick and apply** or to
**Apply preset N**. A preset only applies while the wheel is stopped; the watch
tells you if you are moving, if the wheel has none of those settings, if only
some applied, or if the wheel did not confirm. Settings a preset changed are
listed in the profile as overrides "until you change them in this profile".

## Recording and uploading rides

### Recording

Start and stop with a mapped **Start/Stop Recording** button, or turn on **Auto
Recording** (Global tab) to record every ride automatically from connect.
**REC** appears on the dashboard while recording.

A recording stores the wheel data and your GPS track every two seconds, in files
of about ten minutes each, on the watch.

Safeguards:

- WheelDash refuses to start a recording with less than about 512 KB of free
  space on the watch and tells you the figure.
- If writing fails during a ride for about a minute the watch tells you once and
  stops buffering; the live dashboard is unaffected.

When you stop, a toast confirms how many files were saved.

### Uploading

Uploading is a transfer from the watch, through the phone, to the WheelDash
server. It needs a WheelDash account (see [User account](#user-account)).

1. On the watch open WheelDash and tap **Data Transfer** on the profile list.
   Keep the watch on this page until the transfer ends.
2. In Zepp, open WheelDash settings and go to the **Ride Manager**.
3. Tap **Refresh** to read the rides on the watch, then **Upload** for one ride
   or **Upload All**.

Files are encrypted on the phone before they leave it. After the server confirms
every file, the ride is removed from the watch. If the link drops the watch
shows "connection lost, upload interrupted"; just start again. A ride that had
already reached the server is detected as complete.

Use **Delete** or **Delete All** to remove rides from the watch without
uploading. You cannot delete while an upload is running.

## Navigation

The navigation screen shows a map of a route you loaded, your position from the
watch GPS, and the next turn.

### Getting a route onto the watch

1. Upload your GPX file on the [Ride Portal](/guides/ride-portal/). Navigation must be
   enabled for your account.
2. On the watch open **Data Transfer** and leave it open.
3. In Zepp WheelDash settings go to the **Nav** tab. Tap **Refresh Route List**,
   then **Load to Watch** next to your route.

The phone downloads the route and turn scenes and, for map routes, map tiles,
and sends them to the watch. Progress shows in settings and on the watch. You
can see what is on the watch under **Routes on Watch**, remove one, or **Clear
All Routes from Watch**.

### Riding with a route

Swipe to the navigation screen (or use the **Cycle Page View** button) and tap
**Navigate**, then choose the route. The map follows you, with:

- A turn band showing the next turn icon, distance, and the turn after it
  ("then").
- A speed and remaining-distance pill, and the REC and LIM indicators.
- An orange **OFF ROUTE** or **WRONG WAY** banner when you leave the route or
  ride the wrong direction.
- Zoom levels 1x, 2x and 4x, changed with the zoom button actions.

To stop, press the upper button and choose **Stop**.

### Navigation settings

| Setting | What it does |
|---|---|
| Route Turn Arrows | Draws directional arrows at upcoming turns. |
| Direction Chevrons | Arrow markers along the route ahead. |
| Heading-Up Map | On: the map rotates to your heading. Off: north is up, which saves battery on raster maps. |
| GPS Battery Saver | Skips navigation updates while you are stationary. |
| Nav Screen Timeout | How long the screen stays on while navigating: default, 30, 60 or 120 s. |
| Navigation API URL | The server the routes come from. Leave at the default unless you run your own. |

The **Nav Turn Alert** alarm warns you before each turn; see
[alarms](#alarms). On ENGO glasses, turn scenes can be shown turn by turn
(see [ENGO smartglasses](#engo-smartglasses)).

## Garmin Varia radar

Register a Varia radar in **Accessories** (see [registering accessories](#registering-accessories-varia-radar-engo-glasses)). Once connected, vehicles
detected behind you appear as dots in a band on the dashboard, nearer vehicles
closer to the bottom. The band appears only while the radar is tracking
something. Up to eight vehicles can be tracked.

Use the Varia alarms (**Varia Close**, **Varia Far**, **Varia Safe**) to be
warned by sound, vibration and the ENGO glasses. You can also place Varia
values on ENGO pages and on a custom dashboard.

## ENGO smartglasses

WheelDash drives ENGO glasses (ActiveLook protocol) and keeps ride data in your
field of view. Register the glasses in **Accessories**. On the first connection
after a new version the glasses re-upload their display configuration, which
takes a couple of minutes.

### Pages

You choose which pages the glasses cycle through in **ENGO Layout Editor**:

- **Standard**: PWM, speed, temperature, battery.
- **High Refresh**: PWM and speed, faster, plus Varia alerts.
- **Turn Scenes**: navigation scenes that come with an imported route, sent turn
  by turn during GPS navigation. No configuration needed.
- **Session Stats**: duration, distance, average speed, top speed.
- **Custom pages**: you choose the fields and place them on a grid. You can
  switch the editor between "Edit" and "Glasses view" to see what the panel will
  really draw.
- **Racing pages**: fixed templates with artwork (Speed Hero and Split Gauge).
  Positions are locked; you choose what each slot shows (value, label and value,
  bar, or gauge) and its full-scale range.

Built-in pages cannot be edited. Fields you can place include speed, top speed,
voltage, temperatures, tyre pressure, battery, PWM, averages, current, distances,
ride time, clock, next turn, ETA, next street, preset, and Varia alerts.

### Switching pages

**Engo Switch mode** (ENGO tab):

- **Engo Proximity/Touch Sensor**: use the sensor on the glasses.
- **Swipe on Watch**: swipe left and right on the watch dashboard.

You can also map a button to **Switch Engo Views**.

### Brightness and colour

- **Auto-brightness** lets the glasses' light sensor pick the level.
- **Brightness** (0 to 15). With auto-brightness on, this adjusts the level the
  sensor picks instead of setting an absolute value. Applied at the next
  connection.
- **ENGO 3 color**: on ENGO 3 glasses pages can use the 81-colour palette. Older
  glasses stay grayscale.

### Alarms on the glasses

An alarm shows on the glasses as a banner drawn over the page you are reading,
centred and at a height you choose, with a flashing border inside the visible
area. Turn it on per alarm with **ENGO display**. A page can also have a
dedicated alarm layer (the editor's Normal / Alarm tabs). If a page has no alarm
layer you can still enable **Alarm banner on pages without an alarm layer**.
Use **Test on glasses** in the editor to see it.

Racing pages draw their own alert on top of the readouts you chose.

### Force ENGO Config Upload

If the glasses show the wrong thing, switch on **Force ENGO Config Upload** to
re-send everything at the next connection, then switch it off again by hand once
the upload is done.

### If the glasses are full

Glasses have limited storage. WheelDash checks free space before uploading and
cleans up its own old configurations. If there is still not enough room it asks
before removing other apps' stored configurations (each app puts its own back
next time it connects).

## Custom dashboard

Choose **Custom** as the User Interface Layout, then open **Custom Dashboard** to
design the riding screen. Pick **Round** or **Square** first, to match your
watch; each shape has its own layout.

You build it from components, moving and resizing them on a preview of your
watch:

| Component | Shows |
|---|---|
| Value | A number from a data source. |
| Labeled value | A number with a caption. |
| Circular gauge | A ring (full or partial arc, reversible), with or without the number inside. |
| Progress bar | A horizontal or vertical bar. |
| Clock | The time. |
| Recording indicator | REC. |
| Speed limiter | LIM. |
| Separator | A dividing line. |
| Alarm message | The alarm name, optionally on a filled panel so it stays readable. |
| Varia indicator | Position and size of the radar band. Without it there is no band. |
| Free text | Fixed text. |

Data sources: speed, PWM, battery, temperature, voltage, current, top speed,
average speed, average moving speed, trip distance, total distance, profile
distance, riding time, battery per distance.

Each component has colours (main, disconnected, background), text size, number
format, and for gauges and bars a minimum and maximum. The list is shown front
to back: the component at the top is drawn over the ones below it.

Limits: at most 28 components and about 64 on-screen widgets per shape. The
editor tells you when you are out of room. The Varia band adds several widgets
of its own on top, so leave some margin. If a custom layout cannot load, the
watch falls back to the default dashboard.

Layout changes apply the next time the riding screen starts. Layouts can be
saved to and loaded from your account.

## Settings reference

Open WheelDash settings in the Zepp app. Tabs:

### Global {#global-settings}

| Setting | Default | Notes |
|---|---|---|
| EUC Name Prefix Filter | empty | Only show wheels whose name starts with this. |
| BLE Scan Duration | 5 s | 1 to 30. |
| Auto-Exit Timeout (No EUC) | 0 (off) | Minutes, up to 240. |
| Display Miles Unit | off | Watch screens in miles and mph. |
| User Interface Layout | Default | Default, Racing, Large, Custom. |
| Always On Mode | off | Dim always-on dashboard. |
| Statistics Screen Stats | eight stats | Up to eight of nine. |
| Auto Recording | off | Record every ride. |
| Startup Profile | None | None, last used, or a profile. |
| Startup Delay | 5 s | Autostart countdown. |
| Server Address | the WheelDash server | Change only for a private server. |
| EUC World Server API (8080) | off | Enables EUC World mode. |

### Alerts

Quick alarms and the advanced alarm builder , with sound and
vibration test buttons.

### Buttons

Button mappings .

### Profiles

Per-profile settings, presets and the startup profile .

### Nav

Route list, transfer, and navigation options .

### ENGO

Engo Switch mode, auto-brightness, brightness, force upload, and the page and
layout editor .

### Recordings (Ride Manager)

List, upload and delete rides .

### User account

Log in or register with an email and password (at least 8 characters).

- **Settings Backup**: **Save to cloud** and **Load from cloud** back up your
  settings, profiles, devices and custom dashboard to your account. Passwords,
  PINs and login tokens are never included.
- Ride upload and navigation routes need to be logged in.
- Recordings are encrypted on your phone with a key derived from your password.
  Keep your password safe.

### Developer and debug

These are for diagnosing a problem with help; leave them off for normal riding.

| Setting | What it does |
|---|---|
| Memory Leak Logs | Logs the watch's memory use to a file. Uses storage and a little CPU. |
| BLE Packet Logging | Records the raw Bluetooth packets from the wheel. Heavy; can destabilise a ride. |
| Connection status log | Logs connect/disconnect events (the BLE event log). |
| Profile Store Log | Press **Fetch** with the watch connected to read the log of profile changes (created, deleted, restored). Shows when it was last fetched. |
| Send to server | Sends every diagnostic log to the server, with an optional description of the problem ("EUC keeps disconnecting"). |

Diagnostic logs live on the watch and reach the phone only when you open **Data
Transfer** on the watch; until then the log panels show "Empty - open Data
Transfer on the watch to upload the logs".

### Alarm editor details

- **Custom vibration pattern**: build a pattern from **+ VIB** steps (a duration
  in ms, continuous or pulsed) and **+ PAUSE** steps. Use **Test Pattern** to
  feel it, **Copy All** to reuse it elsewhere and **Clear** to start over.
- **Repeat interval**: milliseconds between repeats when "Fires repeatedly at
  interval" is chosen.
- Alarms can be reordered with arrows, expanded or collapsed, and deleted with
  **Delete Alarm**.

### ENGO layout editor details

- Choose a page, then **Add Selected** fields from the available list.
- Fields snap to a 38 x 32 cell grid (8 px cells) inside the glasses' safe area.
  Click a field then a cell to move it, or use the arrow buttons; **Step (px)**
  sets how far each arrow press moves.
- Per field: font size (Small, Medium, Large), rounded or precise number
  display, and a custom label where offered.
- **Auto Arrange** lays the fields out for you; **Clear Current View** empties
  the page; **Remove** takes out one field.
- Page names can be changed (Page name). The **Normal** and **Alarm** tabs edit
  the page and its alarm layer; **Preview** shows glasses view.
- Layouts can be saved to and loaded from your account.

### Button mapping details

- **Capture...** listens for the next press on the watch; **Recapture** replaces
  it. The upper button's short press cannot be captured, as it is the exit key.
- Short and long presses are separate mappings. **Copy All** and **Test** are
  available for vibration patterns.

## Supported wheels and what each one reports

WheelDash picks the protocol from the wheel's Bluetooth name:

| Brand | Name starts with | Notes |
|---|---|---|
| Begode / Gotway / ExtremeBull | GW, GotWay | Voltage scale is learned on connect. |
| KingSong | KS | The wheel's model name gives the cell count and so the battery percentage. |
| Leaperkim (Veteran, Nosfet, Sherman, Lynx, Oryx...) | LK, NF | Pack size is chosen per model. |
| InMotion V2 | V9, V11, V12, V13, V14, P6, V6, X1, E20, Adventure | Uses an encrypted handshake. |
| InMotion V1 | V5, V8, V10 | Built from the official protocol; not yet confirmed on every wheel. |

A reading is shown only when the wheel actually sends it. In general:

- **Speed, voltage, battery %, PWM, trip and total distance**: all brands.
- **Controller temperature**: all brands. It is the MOSFET / main board sensor.
- **Motor temperature**: KingSong, InMotion and Leaperkim custom firmware.
- **Coil temperature**: Leaperkim custom firmware only.
- **Driver board temperature, tyre pressure**: InMotion (tyre pressure on the
  P6 only).
- **Current**: battery current where the wheel gives it; phase current only where
  the wheel measures it. Alarms on a reading a wheel does not send never fire.

Battery percentage uses each brand's official curve unless you set **Minimum Cell
Voltage** on the profile. Do not be surprised if it differs by a few percent
from another app.

Presets and the wheel PIN are available per brand as described above. Wheels that need a PIN are unlocked automatically if you enter it.

## Troubleshooting

**The wheel is not found.** Make sure it is on, in range, and not connected to
another phone or app. Try **Scan again**. Remove the name filter in Global if you
set one.

**It connects, then drops during a ride.** Keep the phone out of the way: it
does not need to be connected during a ride. Keep logging features off, since
they use memory. Restart the watch if devices stop reconnecting.

**"Zombie background service detected."** The previous session did not shut down.
Turn the watch off and on again.

**Dashboard changes do not appear.** Layout changes apply the next time the riding
screen starts. Exit and reopen.

**Settings changes do not reach the watch.** Open WheelDash on the watch and keep
the phone close. Changes made while the app is closed are fetched the next time
it starts. While you are riding, the watch answers settings pushes but defers the
phone's start-up sync; this is normal.

**"Phone offline. Using cached data."** The watch could not reach the phone. Your
profiles and settings come from the copy stored on the watch. Avoid changing
profiles until the phone is back.

**Upload fails or says interrupted.** Make sure Data Transfer is open on the
watch and the watch stays on that page. Keep the phone close and retry. Rides
already on the server are detected, and are removed from the watch.

**Not enough storage to record.** Free space on the watch (upload and delete old
rides) and start again.

**Glasses show only a logo or the wrong page.** Use **Force ENGO Config Upload**
for one connection, then switch it off. If the glasses report storage full,
accept the cleanup prompt on the watch.

**Preset did not apply.** Stop the wheel first. A preset can apply partially if
the wheel does not have all of its settings.

**Speed limiter does not engage.** Check the profile's limit is lower than the
normal tiltback speed.

**Navigation is not enabled for this account.** Routes need an account with
navigation enabled.

## Safety

WheelDash is a riding aid, not a substitute for attention. Look at the road, not
your wrist. Check that your wheel, tyre and protective gear are in order before
you ride, test your alarms before relying on them, and follow local rules.
