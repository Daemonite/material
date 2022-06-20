---
layout: docs
title: Sliders
meta_description: Material design tabs for Bootstrap 4
description: Sliders allow users to make selections from a range of values.
group: material
redirect_from:
  - /docs/4.4/material/sliders/
  - /docs/4.5/material/sliders/
toc: true
---

Sliders allow users to view and select a value (or range) from the range along a bar. They’re ideal for adjusting settings such as volume and brightness, or for applying image filters.

Sliders can use icons on both ends of the bar to represent a numeric or relative scale. The range of values or the nature of the values, such as volume change, can be communicated with icons.

<div class="list-group mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/forms/#range" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Forms - range</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/sliders" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Sliders</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/slider" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: Slider</a>
</div>

## Demo

{% capture example %}

<div class="d-flex justify-content-center align-items-center">
  <span class="material-icons text-black-secondary mr-3">volume_mute</span>
  <input type="range" class="custom-range" id="customRange1">
    <span class="material-icons text-black-secondary ml-3">volume_up</span>
</div>
<div class="d-flex justify-content-center align-items-center">
  <input type="range" class="custom-range" id="customRange2" value="50" min="0" max="100" oninput="customRange2Counter.value = this.value">
  <input type="number" class="form-alternative ml-3" id="customRange2Counter" value="50" min="0" max="100" oninput="customRange2.value = this.value">
</div>
<div class="d-flex justify-content-center align-items-center">
  <span class="typography-headline-6 text-black-secondary mr-3">R</span>
  <input type="range" class="custom-range" id="customRange2222" value="177" min="0" max="255" oninput="redValue.value = this.value">
  <input type="number" class="form-alternative ml-3" id="redValue" value="177" min="0" max="255" oninput="customRange2222.value = this.value">
</div>
{% endcapture %}
{% include example.html content=example %}

## Continuous sliders

Continuous sliders allow users to set and select a value along a subjective range.

Only continuous sliders are available with standard browser features. Design will change from one browser to another, and will look best in Firefox as webkit browsers (Chrome, Edge chromium) have poor `input="range"` customization.

*Value label* and Range values cannot be obtained using basic browser styling. You will need **[ion.RangeSlider plugin]({{ site.baseurl }}/docs/{{ site.docs_version }}/plugins/sliders-ionrangeslider).**

### States

{% capture example %}

<label>Enabled 0%<input type="range" class="custom-range" id="range-state1" value="0"></label>
<label>Enabled 50%<input type="range" class="custom-range" id="range-state2" value="50" max="100"></label>
<label>Enabled 100%<input type="range" class="custom-range" id="range-state3" value="100" max="100"></label>
<label>Disabled 0%<input type="range" class="custom-range" id="range-state11" value="0" disabled></label>
<label>Disabled 50%<input type="range" class="custom-range" id="range-state22" value="50" max="100" disabled></label>
<label>Disabled 100%<input type="range" class="custom-range" id="range-state33" value="100" max="100" disabled></label>

{% endcapture %}
{% include example.html content=example %}

## Discrete sliders

Discrete sliders *Tick marcks* cannot be obtained using basic browser styling. You will need **[ion.RangeSlider plugin]({{ site.baseurl }}/docs/{{ site.docs_version }}/plugins/sliders-ionrangeslider).**
