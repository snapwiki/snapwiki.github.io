---
layout: default
title: Welcome to the Snap! Wiki Status page!
---

  <ul>
    {% for status in site.data.status %}
    <li>{{ status.description }}</li>
    {% endfor %}
  </ul>
