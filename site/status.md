---
layout: default
title: Welcome to the Snap! Wiki Status page!
---

<h1>Welcome to the Snap! Wiki Status page!</h1>
  <ul>
    {% for status in site.data.status %}
    <li>{{ status.description }}</li>
    {% endfor %}
  </ul>
</div>
