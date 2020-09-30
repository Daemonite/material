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
    <a href="http://ionden.com/a/plugins/ion.rangeSlider/" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-bs"></span>
    Ion.RangeSlider: Official documentation</a>
</div>

## Demo

{% capture example %}
<div class="form-group">
  <label for="maxlength1">Username</label>
  <input type="text" class="form-control" id="maxlength1" placeholder="Choose a username" maxlength="20">
</div>
<div class="form-group mt-4">
  <textarea class="form-control" id="maxlength2" placeholder="My limited textarea" maxlength="250"></textarea>
</div>
{% endcapture %}
{% include example.html content=example %}

## Using Maxlength

Import **Bootstrap Maxlength** after your Material JavaScripts.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/bootstrap-maxlength/dist/bootstrap-maxlength.min.js"></script>
{% endhighlight %}

Add a `maxlength` attribute to your input field.

{% highlight html %}
<textarea class="form-control" id="textareaExample" placeholder="Try this textarea" maxlength="250"></textarea>
{% endhighlight %}

Initialize plugin once. Here is an example of simplest declaration to be active on all inputs with maxlength attribute set and material design style.

{% highlight js %}
$('[maxlength]').maxlength({
  alwaysShow: true,
  warningClass: 'form-text text-muted',
  limitReachedClass: 'form-text text-muted',
  placement: 'bottom-right-inside'
})
{% endhighlight %}

All parameters are detailed in [official documentation](https://github.com/mimo84/bootstrap-maxlength).

That's it.
