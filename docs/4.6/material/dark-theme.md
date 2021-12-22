---
layout: docs
title: Dark theme
description: A dark theme is a low-light UI that displays mostly dark surfaces.
group: material
redirect_from:
  - /docs/4.5/material/dark-theme/
darkmode: true
---

<div class="list-group my-2 my-lg-5">
  <a href="https://material.io/design/color/dark-theme.html" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-md"></span>
    Material Design guidelines: Dark theme</a>
  <a href="#" target="_blank" class="list-group-item disabled d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Dark Theme (planned)</a>
</div>

A dark theme displays dark surfaces across the majority of a UI. It's designed to be a supplemental mode to a default (or light) theme.

Material uses a very simple Dark theme for the moment, based on a `filter()` CSS effect.

Dark mode is applied in 2 conditions:

1. If users's browser is set to Dark mode preference using `@media (prefers-color-scheme: dark)` media query AND you have rebuilt **Material** with variable `$enable-dark-theme-media-query` set to `true`. `$enable-dark-theme-media-query` is set to `false` by default.
2. `data-theme="dark"` is added to the opening `html` tag like this: `<html lang="en" data-theme="dark">`.

More improvements for the Dark mode will be added in next versions.

## Live demo

{% capture example %}
<div class="custom-control custom-switch mx-5">
  <input type="checkbox" class="custom-control-input" id="darkSwitch" checked>
  <label class="custom-control-label" for="darkSwitch">Toggle Dark mode</label>
</div>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    const Tag = document.documentElement; /* Get <html> tag */
    const Switch = document.getElementById('darkSwitch');
    Tag.dataset.theme = 'dark';
    Switch.addEventListener('click', () => {
      Switch.checked ? Tag.dataset.theme = 'dark' : Tag.dataset.theme = '';
    })
  })
</script>
{% endcapture %}
{% include example.html content=example %}

You can copy this code to implement simplest Dark theme right now.
