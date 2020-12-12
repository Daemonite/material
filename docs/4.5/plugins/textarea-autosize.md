---
layout: docs
title: Textarea autosize
description: Multi-line text fields grow to accommodate multiple lines of text.
group: plugins
toc: true
plugin: true
autosize: true
---

Multi-line text fields show all user input at once. Overflow text causes the text field to expand (shifting screen elements downward), and text wraps onto a new line.

These fields initially appear as single-line fields, which is useful for compact layouts that need to be able to accomodate large amounts of text.

<div class="list-group my-2 my-lg-5">
  <a href="https://material.io/components/text-fields#input-types" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Text-fields - Input types</a>
  <a href="https://material-components.github.io/material-components-web-catalog/#/component/text-field" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Text Field</a>
  <a href="https://github.com/javierjulio/textarea-autosize" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-plugin"></span>
    textarea-autosize: Official documentation</a>
</div>

{% capture callout %}
Stylesheet `material-plugins.css` is required.

**jQuery** is required.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Basic demo

{% capture example %}
<div class="form-group form-ripple my-3">
  <textarea class="form-control textarea-autosize" id="textareaExample" rows="1" placeholder="Try this textarea"></textarea>
</div>
{% endcapture %}
{% include example.html content=example %}

## Using Textarea Autosize

Import **material-plugins.css** after Material CSS.

{% highlight html %}
<link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-{{ site.material_version }}/css/material-plugins.min.css" rel="stylesheet" crossorigin>
{% endhighlight %}

Import **Textarea-autosize.js** after Material JavaScript.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/textarea-autosize@0.4.2/dist/jquery.textarea_autosize.min.js" integrity="sha256-gtPvsaPR4MtUbbjtrvMNO4AojMEHF9v00dkeQZ5SqQw=" crossorigin></script>
{% endhighlight %}

Add `textarea-autosize` class to your textarea AND set `rows="1"`.
{% highlight html %}
<textarea class="form-control textarea-autosize" id="textareaExample" rows="1" placeholder="Try this textarea"></textarea>
{% endhighlight %}

Initialize plugin once.

{% highlight js %}
$('.textarea-autosize').textareaAutoSize()
{% endhighlight %}

All parameters are detailed in [official documentation](https://github.com/javierjulio/textarea-autosize).

That's it.  


## More examples

{% capture example %}
<div class="textfield-box my-2">
  <textarea class="form-control textarea-autosize" id="textareaExampleField" rows="1" placeholder="Try this textarea with textfield box"></textarea>
</div>
<div class="form-group form-ripple">
  <textarea class="form-control form-control-lg textarea-autosize" id="textareaExampleBig" rows="1" placeholder="Try this big textarea"></textarea>
</div>
<div class="form-group form-ripple">
  <textarea class="form-control form-control-sm textarea-autosize" id="textareaExampleSmall" rows="1" placeholder="Try this small textarea"></textarea>
</div>
<div class="form-group">
  <div class="floating-label">
    <label for="floating">Textarea with floating label</label>
    <textarea class="form-control textarea-autosize" id="floating" rows="1"></textarea>
  </div>
</div>
<div class="form-group">
  <div class="floating-label floating-label-sm">
    <label for="floating-sm">Small textarea with floating label</label>
    <textarea class="form-control form-control-sm textarea-autosize" id="floating-sm" rows="1"></textarea>
  </div>
</div>
<div class="form-group">
  <div class="input-group">
    <div class="floating-label">
      <label for="floating-icon">Input icon + floating label + textarea autosize</label>
      <textarea class="form-control textarea-autosize" id="floating-icon" rows="1"></textarea>
    </div>
    <span class="input-group-icon">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
