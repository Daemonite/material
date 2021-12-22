---
layout: docs
title: Date pickers flatpickr
description: Date pickers let users select a date, or a range of dates.
group: plugins
redirect_from:
  - /docs/4.5/plugins/picker-flatpickr/
toc: true
plugin: true
flatpickr: true
---

Date pickers let users select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:

- Dialogs on mobile
- Text field dropdowns on desktop

Flatpickr is a versatile datetime picker.

<div class="list-group my-2 my-lg-5">
  <a href="https://material.io/components/date-pickers" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-md"></span>
    Material Design guidelines: Date pickers</a>
  <a class="list-group-item list-group-item-action d-flex font-weight-bold disabled">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Date pickers (planned)</a>
  <a href="https://flatpickr.js.org/" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-plugin"></span>
    flatpickr: Official documentation</a>
</div>

{% capture callout %}
Stylesheet `material-plugins.css` is required as this material design theme for **flatpickr** is fully designed by djibe.  
Plugin is **jQuery** free but can be initialized as a jQuery plugin.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Demo

<div class="bd-example">
  <div class="form-group form-ripple">
    <label for="flatpickr-demo">Date</label>
    <input class="form-control flatpickr" type="text" placeholder="Select Date.." id="flatpickr-demo">
  </div>
</div>

{% capture callout %}
**flatpickr** will probably become default Picker as it corresponds perfectly to latest Material design guidelines: Dropdown calendar on desktop and system's default picker on mobile.

Don't use inline picker for Date and Time inputs.
{% endcapture %}
{% include callout.html content=callout type="info" %}

## Using flatpickr

Import **material-plugins.css** after Material CSS. Don't use extra **flatpickr** CSS.

{% highlight html %}
<link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-{{ site.material_version }}/css/material-plugins.min.css" rel="stylesheet" crossorigin>
{% endhighlight %}

Import **flatpickr** after Material JavaScripts.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.6/dist/flatpickr.min.js" integrity="sha256-BSZ2gjTJLE5ZEGH1e6beyHYNOITz6M26XFre9lEBdx8=" crossorigin></script>
{% endhighlight %}

Set HTML code of your picker menu.

{% highlight html %}
<div class="form-group">
  <label for="flatpickr-demo">Date</label>
  <input class="form-control flatpickr" type="text" placeholder="Select Date.." id="flatpickr-demo">
</div>
{% endhighlight %}

Initialize plugin with JavaScript or jQuery parameters.

{% highlight js %}
flatpickr("#flatpickr-demo", {})
{% endhighlight %}

All parameters are detailed in [official documentation](https://flatpickr.js.org/).

That's it.

{% capture callout %}
Inline picker is not rendered using mobile's default operating system Picker and is barely usable on mobile.  
Try to avoid using `inline` parameter for a good mobile User experience.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Picker types

### Date

Single date selection is default picker. See Demo example above.

Picker is also compatible with multiple dates selection.

<div class="bd-example">
  <div class="form-group form-ripple">
    <label for="flatpickr-date">Date</label>
    <input class="form-control flatpickr" type="text" placeholder="Select Date.." id="flatpickr-date">
  </div>
</div>

{% highlight js %}
<div class="form-group form-ripple">
  <label for="flatpickr-demo">Date</label>
  <input class="form-control flatpickr" type="text" placeholder="Select Date.." id="flatpickr-date">
</div>
<script>
  flatpickr('#flatpickr-date', {})
<script>
{% endhighlight %}

### Date range

Select a start and final date.

Example displays the picker `inline` and sets `minDate` to Today.

<div class="bd-example">
  <div class="form-group">
    <label for="flatpickr-range">Arrival and departure dates</label>
    <input class="form-control flatpickr" type="text" placeholder="Select Dates.." id="flatpickr-range">
  </div>
</div>

{% highlight js %}
<div class="form-group">
  <label for="flatpickr-range">Arrival and departure dates</label>
  <input class="form-control flatpickr" type="text" placeholder="Select Dates.." id="flatpickr-range">
</div>
<script>
  flatpickr('#flatpickr-range', {
    inline: true,
    mode: 'range',
    minDate: 'today',
    dateFormat: 'd-m-Y'
  })
</script>
{% endhighlight %}

### DateTime

Select date and time.

Example also displays `week numbers` and sets time format in British `12h` format.

<div class="bd-example">
  <div class="form-group">
    <label for="flatpickr-datetime">Date and time of event</label>
    <input class="form-control flatpickr" type="text" placeholder="Select Datetime.." id="flatpickr-datetime">
  </div>
</div>

{% highlight js %}
<div class="form-group">
  <label for="flatpickr-datetime">Date and time of event</label>
  <input class="form-control flatpickr" type="text" placeholder="Select Datetime.." id="flatpickr-datetime">
</div>
<script>
  flatpickr('#flatpickr-datetime', {
    enableTime: true,
    dateFormat: 'd/m/Y H:i',
    time_24hr: false,
    weekNumbers: true
  })
</script>
{% endhighlight %}

### Time

Select time only.

Simplest time picker in a `24h` format and a `default time`.

<div class="bd-example">
  <div class="form-group">
    <label for="flatpickr-time">Time of event</label>
    <input class="form-control flatpickr" type="text" id="flatpickr-time">
  </div>
</div>

{% highlight js %}
<div class="form-group">
  <label for="flatpickr-time">Time of event</label>
  <input class="form-control flatpickr" type="text" id="flatpickr-time">
</div>
<script>
  flatpickr('#flatpickr-time', {
    // inline: true,
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true,
    defaultDate: '13:45'
  });
</script>
{% endhighlight %}

### More details

For date format, display, seconds, localization and more, [read official documentation](https://flatpickr.js.org/examples/)
