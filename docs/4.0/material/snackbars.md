---
layout: docs
title: Snackbars
description: Snackbars provide brief feedback about an operation through a message at the bottom of the screen.
group: material
toc: true
---

## Behaviour

Since Material only provides styles for snackbars, when coding JavaScript to interact with snackbars for particular projects, please be aware of the following Google Material Design guidelines:

- Only one snackbar may be displayed at a time. When a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second one animates upwards.
- Snackbars automatically disappear after a timeout or user interaction elsewhere.
- Snackbars may contain a single action, neither of which may be "Cancel" or "Dismiss".
- When an unrelated dialog or popup occurs while the snackbar is up, the snackbar timeout will reset upon the window focus being regained. This is to ensure that the user will be able to read the snackbar for the full intended duration.

## Examples

### Default snackbars

<div class="snackbar-example">
{% example html %}
<button class="btn btn-primary">Snackbar</button>
<div class="snackbar">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
</div>
{% endexample %}
</div>

<div class="snackbar-example">
{% example html %}
<button class="btn btn-primary">Snackbar with action</button>
<div class="snackbar">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endexample %}
</div>

### Multi-line snackbars

<div class="snackbar-example">
{% example html %}
<button class="btn btn-primary">Multi-line snackbar</button>
<div class="snackbar snackbar-multi-line">
  <div class="snackbar-body">
    When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life. –John Lennon
  </div>
</div>
{% endexample %}
</div>

<div class="snackbar-example">
{% example html %}
<button class="btn btn-primary">Multi-line with action</button>
<div class="snackbar snackbar-multi-line">
  <div class="snackbar-body">
    When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life. –John Lennon
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endexample %}
</div>

### Placement

Although all snackbars will span across the bottom of the screen on mobile devices, they can be left or right aligned on desktop/tablet devices.

<div class="snackbar-example">
{% example html %}
<button class="btn btn-primary">Left-aligned snackbar</button>
<div class="snackbar snackbar-left">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endexample %}
</div>

<div class="snackbar-example">
{% example html %}
<button class="btn btn-primary">Right-aligned snackbar</button>
<div class="snackbar snackbar-right">
  <div class="snackbar-body">
    Single line of text directly related to the operation performed
  </div>
  <button class="snackbar-btn" type="button">Action</button>
</div>
{% endexample %}
</div>
