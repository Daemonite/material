---
layout: docs
title: Snackbars
description: Snackbars provide brief feedback about an operation through a message at the bottom of the screen.
group: material
redirect_from:
  - /docs/4.1/material/snackbars/
toc: true
---

{% capture callout %}
**Looking for toasts?** Bootstrap 4.2+ [toasts]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/toasts/) are styled as snackbars too. Use `.snackbar` for a single message fixed to the bottom of the screen, and `.toast` when you want Bootstrap's toast plugin (showing, auto-hiding and events) or need to position and stack several notifications yourself.
{% endcapture %}
{% include callout.html content=callout type="info" %}

## Behaviour

Since Material only provides styles for snackbars, when coding JavaScript to interact with snackbars for particular projects, please be aware of the following Google Material Design guidelines:

- Only one snackbar may be displayed at a time. When a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second one animates upwards.
- Snackbars automatically disappear after a timeout or user interaction elsewhere.
- Snackbars may contain a single action, neither of which may be "Cancel" or "Dismiss".
- When an unrelated dialog or popup occurs while the snackbar is up, the snackbar timeout will reset upon the window focus being regained. This is to ensure that the user will be able to read the snackbar for the full intended duration.

## Examples

### Default snackbars

{% capture example %}
<button class="btn btn-primary snackbar-toggler">Snackbar</button>
<div class="snackbar">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button class="btn btn-primary snackbar-toggler">Snackbar with action</button>
<div class="snackbar">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endcapture %}
{% include example.html content=example %}

### Multi-line snackbars

{% capture example %}
<button class="btn btn-primary snackbar-toggler">Multi-line snackbar</button>
<div class="snackbar snackbar-multi-line">
  <div class="snackbar-body">
    When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life. –John Lennon
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button class="btn btn-primary snackbar-toggler">Multi-line with action</button>
<div class="snackbar snackbar-multi-line">
  <div class="snackbar-body">
    When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life. –John Lennon
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endcapture %}
{% include example.html content=example %}

### Placement

Although all snackbars will span across the bottom of the screen on mobile devices, they can be left or right aligned on desktop/tablet devices.

{% capture example %}
<button class="btn btn-primary snackbar-toggler">Left-aligned snackbar</button>
<div class="snackbar snackbar-left">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button class="btn btn-primary snackbar-toggler">Right-aligned snackbar</button>
<div class="snackbar snackbar-right">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endcapture %}
{% include example.html content=example %}
