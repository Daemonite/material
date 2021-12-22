---
layout: docs
title: Sliders Ion.RangeSlider
description: Sliders allow users to make selections from a range of values.
group: plugins
redirect_from:
  - /docs/4.5/plugins/sliders-ionrangeslider/
toc: true
plugin: true
ionrangeslider: true
---

Sliders allow users to view and select a value (or range) from the range along a bar. They’re ideal for adjusting settings such as volume and brightness, or for applying image filters.

Sliders can use icons on both ends of the bar to represent a numeric or relative scale. The range of values or the nature of the values, such as volume change, can be communicated with icons.

<div class="list-group my-2 my-lg-5">
  <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/material/sliders" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-bs"></span>
      Daemonite Material UI: Sliders</a>
  <a href="https://material.io/components/sliders" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Sliders</a>
  <a href="https://material-components.github.io/material-components-web-catalog/#/component/slider" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Slider</a>
  <a href="http://ionden.com/a/plugins/ion.rangeSlider/" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-plugin"></span>
    Ion.RangeSlider: Official documentation</a>
</div>

{% capture callout %}
Stylesheet `material-plugins.css` is required as this material design theme is designed by djibe.

**jQuery** is required.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Demo

<div class="bd-example">
  <div class="form-group my-3">
    <label for="demo-0">Set min value, max value and start point</label>
    <input type="text" class="js-range-slider" value="" id="demo-0">
  </div>
</div>

## Using Ion.RangeSlider

Import **material-plugins.css** after Material CSS.

{% highlight html %}
<link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-{{ site.material_version }}/css/material-plugins.min.css" rel="stylesheet">
{% endhighlight %}

Import **Ion.RangeSlider.js** after Material JavaScripts.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/ion-rangeslider/js/ion.rangeSlider.min.js"></script>
{% endhighlight %}

Set input type to `text` and give it an id.

{% highlight html %}
<div class="form-group">
  <label for="demo-1">Set min value, max value and start point</label>
  <input type="text" value="" id="demo-1">
</div>
{% endhighlight %}

Initialize plugin with jQuery parameters. Set skin to "material" for perfect styling.

You can use JavaScript API throught HTML5 `data-*` instead of JS initialization (see More examples).

{% highlight js %}
$(function() {
  $('#demo-1').ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550,
    skin: 'material'
  });
});
{% endhighlight %}

All parameters are detailed in [official documentation](http://ionden.com/a/plugins/ion.rangeSlider/).

That's it.

## Use callbacks

In this example, you can use the input field to control the slider, and vice versa.

<div class="bd-example">
  <div class="form-group">
    <label for="weight">Child's weight</label>
    <div class="d-flex align-items-center">
      <input type="text" value="20" id="weight" oninput="weightInput.value = this.value">
      <input type="number" class="form-alternative ml-3" id="weightInput" value="20" min="3" max="50">
    </div>
  </div>
</div>
{% highlight html %}
<div class="form-group">
  <label for="weight">Child's weight</label>
  <div class="d-flex align-items-center">
    <input type="text" value="20" id="weight" oninput="weightInput.value = this.value">
    <input type="number" class="form-alternative ml-3" id="weightInput" value="20" min="3" max="50">
  </div>
</div>
{% endhighlight %}
{% highlight js %}
$(function () {
  const Slider = $('#weight');
  const Input = $('#weightInput');
  const min = 3;
  const max = 50;

  Slider.ionRangeSlider({
    skin: 'material',
    min: min,
    max: max,
    postfix: ' kg',
    max_postfix: '+',
    extra_classes: 'flex-fill'
  });

  let sliderInstance = Slider.data('ionRangeSlider');

  Input.on('input', function() {
    let val = $(this).prop('value');
    // validate
    if (val < min) {
      val = min;
    } else if (val > max) {
      val = max;
    }
  sliderInstance.update({
    from: val
  });
});
{% endhighlight %}

## More examples

{% capture example %}
<div class="form-group mt-3">
  <label for="demo-double">Set type to double, specify range, show grid and add a prefix "$"</label>
  <input type="text" value="" id="demo-double" data-type="double" data-grid="true" data-min="0" data-max="1000" data-from="200" data-to="800" data-prefix="$" data-skin="material">
</div>

<div class="form-group">
  <label for="demo-negative">Set up range with negative values</label>
  <input type="text" value="" id="demo-negative">
</div>

<div class="form-group">
  <label for="demo-step">Add a step to previous config</label>
  <input type="text" value="" id="demo-step">
</div>

<div class="form-group mb-3">
  <label for="demo-postfix">Using prefix and postfix at the same time</label>
  <input type="text" value="" id="demo-postfix">
</div>
{% endcapture %}
{% include example.html content=example %}
