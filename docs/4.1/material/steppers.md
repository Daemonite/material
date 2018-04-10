---
layout: docs
title: Steppers
description: Steppers convey progress through numbered steps.
group: material
toc: true
---

Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation.

## Horizontal steppers

Horizontal steppers are ideal when the contents of one step depend on an earlier step.

{% capture example %}
<div class="stepper-horiz">
  <div class="stepper done">
    <div class="stepper-icon">
      <i class="material-icons">check</i>
    </div>
    <span class="stepper-text">Name of step 1</span>
  </div>
  <div class="stepper active">
    <div class="stepper-icon">
      <span>2</span>
    </div>
    <span class="stepper-text">Name of step 2</span>
  </div>
  <div class="stepper">
    <div class="stepper-icon">
      <span>3</span>
    </div>
    <span class="stepper-text">Name of step 3</span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Vertical steppers

Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.

{% capture example %}
<div class="stepper-vert">
  <div class="stepper done">
    <div class="stepper-icon">
      <i class="material-icons">check</i>
    </div>
    <span class="stepper-text">Name of step 1</span>
  </div>
  <div class="stepper active">
    <div class="stepper-icon">
      <span class="material-icons">edit</span>
    </div>
    <span class="stepper-text">Name of step 2</span>
  </div>
  <div class="stepper">
    <div class="stepper-icon">
      <span class="material-icons">shopping_cart</span>
    </div>
    <span class="stepper-text">Name of step 3</span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
