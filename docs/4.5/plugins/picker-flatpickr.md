---
layout: docs
title: Date pickers flatpickr
description: Date pickers let users select a date, or a range of dates.
group: plugins
plugin: true
toc: true
---

Date pickers let users select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:

- Dialogs on mobile
- Text field dropdowns on desktop

<div class="list-group my-2 my-lg-5">
  <a href="https://material.io/components/date-pickers" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-md"></span>
    Material Design guidelines: Date pickers</a>
  <a href="#" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold disabled">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Date pickers (planned)</a>
  <a href="https://flatpickr.js.org/" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-plugin"></span>
    flatpickr: Official documentation</a>
</div>

{% capture callout %}
Stylesheet `material-plugins.css` is required as these material design themes for **flatpickr** are fully designed by djibe.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Demo

{% capture example %}

<script>
$(function() {
})
</script>
{% endcapture %}
{% include example.html content=example %}

Flatpickr is a versatile datetime picker.

## Using flatpickr

Import **material-plugins.css** after your Material CSS. Don't use extra flatpickr CSS.

{% highlight html %}
<link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-{{ site.material_version }}/css/material-plugins.min.css" rel="stylesheet">
{% endhighlight %}

Import **flatpickr** after your Material JavaScripts.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
{% endhighlight %}

Set HTML code of your picker menu.

{% highlight html %}
<select class="js-example-basic-single" name="fruit">
  <option></option>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="banana">Banana</option>
</select>
{% endhighlight %}

Initialize plugin with jQuery parameters. Default theme is the same as default form inputs.  
Extra themes include `filled` (like the Demo above) and `outlined`.

{% highlight js %}
$(function() {
  $('.js-example-basic-single').select2({
    theme: 'filled',
    placeholder: 'Fruit',
    width: '240px',
    minimumResultsForSearch: Infinity /* Hide search on single select */
  })
})
{% endhighlight %}

All parameters are detailed in [official documentation](https://flatpickr.js.org/).

That's it.
