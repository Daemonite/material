---
layout: docs
title: Sliders Ion.RangeSlider
description: Sliders allow users to make selections from a range of values.
group: plugins
plugin: true
---

Sliders allow users to view and select a value (or range) from the range along a bar. They’re ideal for adjusting settings such as volume and brightness, or for applying image filters.

Sliders can use icons on both ends of the bar to represent a numeric or relative scale. The range of values or the nature of the values, such as volume change, can be communicated with icons.

<div class="list-group my-2 my-lg-5">
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
Stylesheet `material-plugins.css` is required.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Demo

{% capture example %}
<div class="form-group my-3">
  <label for="demo-0" class="d-block">Set min value, max value and start point</label>
  <input type="text" class="js-range-slider" value="" id="demo-0">
</div>
{% endcapture %}
{% include example.html content=example %}

## Using Ion.RangeSlider

Import **material-plugins.css** after your Material CSS.

{% highlight html %}
<link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-{{ site.material_version }}/css/material-plugins.min.css" rel="stylesheet">
{% endhighlight %}

Import **Ion.RangeSlider.js** after your Material JavaScripts.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/ion-rangeslider/js/ion.rangeSlider.min.js"></script>
{% endhighlight %}

Set input type to `text` and give it an id.

{% highlight html %}
<div class="form-group">
  <label for="demo-1" class="d-block">Set min value, max value and start point</label>
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
  })
})
{% endhighlight %}

All parameters are detailed in [official documentation](http://ionden.com/a/plugins/ion.rangeSlider/).

That's it.

## More examples

{% capture example %}
<div class="form-group mt-3">
  <label for="demo-double" class="d-block">Set type to double, specify range, show grid and add a prefix "$"</label>
  <input type="text" value="" id="demo-double" data-type="double" data-grid="true" data-min="0" data-max="1000" data-from="200" data-to="800" data-prefix="$" data-skin="material">
</div>

<div class="form-group">
  <label for="demo-negative" class="d-block">Set up range with negative values</label>
  <input type="text" value="" id="demo-negative">
</div>

<div class="form-group">
  <label for="demo-step" class="d-block">Add a step to previous config</label>
  <input type="text" value="" id="demo-step">
</div>

<div class="form-group mb-3">
  <label for="demo-postfix" class="d-block">Using prefix and postfix at the same time</label>
  <input type="text" value="" id="demo-postfix">
</div>
{% endcapture %}
{% include example.html content=example %}
