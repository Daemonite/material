---
layout: docs
title: Select Select2
description: Selects allow users to select from a single-option menu.
group: plugins
toc: true
plugin: true
select2: true
---

<div class="list-group my-2 my-lg-5">
  <a href="https://material.io/components/text-fields" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-md"></span>
    Material Design guidelines: Text fields</a>
  <a href="https://material-components.github.io/material-components-web-catalog/#/component/select" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Select</a>
  <a href="https://select2.org/" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-plugin"></span>
    Select2: Official documentation</a>
</div>

{% capture callout %}
Stylesheet `material-plugins.css` is required as these material design themes for **Select2** are fully designed by djibe.

**jQuery** is required.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Demo

{% capture example %}
<select class="js-example-basic-single" name="fruit">
  <option></option>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="banana">Banana</option>
</select>
<script>
$(function() {
  $('.js-example-basic-single').select2({
    theme: 'filled',
    placeholder: 'Fruit',
    width: '240px',
    minimumResultsForSearch: Infinity /* Hide search on single select */
  })
})
</script>
{% endcapture %}
{% include example.html content=example %}

## Using Select2

Import **material-plugins.css** after your Material CSS. Don't use official Select2 css.

{% highlight html %}
<link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-{{ site.material_version }}/css/material-plugins.min.css" rel="stylesheet">
{% endhighlight %}

Import **Select2** after your Material JavaScripts.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
{% endhighlight %}

Set HTML code of your select menu.

**NB.** With Select2, in simple select lists, you need to set a first blank `<option>` in order to set a placeholder.

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

All parameters are detailed in [official documentation](https://select2.org/).

That's it.

## Select2 material themes

Each theme has its disabled state.

### Default theme

No need to set the theme in Select2 options in order to use default theme.

{% capture example %}
<select class="js-example-default-single" name="fruit">
  <option></option>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="banana">Banana</option>
</select>
<script>
$(function() {
  $('.js-example-default-single').select2({
    placeholder: 'Fruit',
    width: '240px',
    minimumResultsForSearch: Infinity /* Hide search on single select */
  })
})
</script>
{% endcapture %}
{% include example.html content=example %}

### Filled theme

Set theme to `filled` for filled material inputs (like `textfieldbox` ones).

{% capture example %}
<select class="js-example-basic-single" name="fruit">
  <option></option>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="banana">Banana</option>
</select>
<script>
$(function() {
  $('.js-example-basic-single').select2({
    theme: 'filled',
    placeholder: 'Fruit',
    width: '240px',
    multiple: false,
    minimumResultsForSearch: Infinity /* Hide search on single select */
  })
})
</script>
{% endcapture %}
{% include example.html content=example %}

### Outlined theme

Set theme to `outlined` for outlined material inputs.

{% capture example %}
<select class="js-example-outlined-single" name="fruit">
  <option></option>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="banana">Banana</option>
</select>
<script>
$(function() {
  $('.js-example-outlined-single').select2({
    theme: 'outlined',
    placeholder: 'Fruit',
    width: '240px',
    multiple: false,
    minimumResultsForSearch: Infinity /* Hide search on single select */
  })
})
</script>
{% endcapture %}
{% include example.html content=example %}

## Options

Various features are supported: Multiple select, optgroup.

{% capture example %}
<select class="js-example-basic-multiple" name="cars" multiple>
  <optgroup label="French Cars">
    <option value="AL">Citroën</option>
    <option value="OR" disabled>Peugeot</option>
    <option value="BA">Renault</option>
  </optgroup>
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
<script>
$(function() {
  $('.js-example-basic-multiple').select2({
    theme: 'filled',
    placeholder: 'Cars',
    width: '400px'
  })
})
</script>
{% endcapture %}
{% include example.html content=example %}

Single select with search field.

{% capture example %}
<select class="js-example-search-single" name="cars">
  <optgroup label="French Cars">
    <option value="AL">Citroën</option>
    <option value="OR" disabled>Peugeot</option>
    <option value="BA">Renault</option>
  </optgroup>
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
<script>
$(function() {
  $('.js-example-search-single').select2({
    theme: 'filled',
    placeholder: 'Cars',
    width: '240px'
  })
})
</script>
{% endcapture %}
{% include example.html content=example %}
