---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/mikolaj-zeman-unsplash2.jpg
  actions:
    - label: "<i class='fas fa-download'></i> Install now on Garmin"
      url: "https://apps.garmin.com/en-US/developer/2f1a5cdb-e881-4674-b4e1-9e53fe61596b/apps"
    - label: "<i class='fas fa-download'></i> Install on Amazfit"
      url: "https://github.com/blkfribourg/WheelDash_Amazfit_Beta/tags"
    - label: "<i class='fas fa-mug-hot'></i> Support Development"
      url: "https://ko-fi.com/wheeldash"
excerpt: >
  The ultimate watch app for EUC riders (Supports Garmin and Amazfit).
feature_row:
  - image_path: /assets/images/multiple-brands.png
    alt: "Multiple EUC brand support"
    title: "Multiple brand support"
    excerpt: "It supports a wide range of EUCs, including models from Gotway/Begode/Extreme Bull, Kingsong, Leaperkim, Inmotion, Nosfet and VESCs!"
    #url: "/about_wheeldash/#compatible-eucs"
    #btn_class: "btn--primary"
    #btn_label: "Learn more"
  - image_path: /assets/images/no-phone.jpg
    alt: "No phone required!"
    title: "No phone required!"
    excerpt: "WheelDash is a standalone application, it connects directly to your EUC. You don't have to use your smartphone!"
    #url: "/standalone/"
    #btn_class: "btn--primary"
    #btn_label: "Learn more"
  - image_path: /assets/images/record-feature.png
    alt: "Records your riding sessions"
    title: "Track your rides"
    excerpt: "WheelDash lets you record data from your EUC on your device. All your rides are saved on Garmin Connect or on a dedicated server for Amazfit."
    #url: "/actRecording/"
    #btn_class: "btn--primary"
    #btn_label: "Learn more"
---

{% include feature_row %}

<strong>Latest posts:

<div class="grid__wrapper">
  {% for post in site.posts limit:4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
