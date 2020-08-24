---
layout: docs
title: Textarea autosize
description: Multi-line text fields grow to accommodate multiple lines of text.
group: plugins
toc: true
textarea: true
---

Multi-line text fields show all user input at once. Overflow text causes the text field to expand (shifting screen elements downward), and text wraps onto a new line.

These fields initially appear as single-line fields, which is useful for compact layouts that need to be able to accomodate large amounts of text.

<div class="list-group my-2 my-lg-5">
    <a href="https://material.io/components/text-fields#input-types" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Text-fields - Input types</a>
    <a href="https://github.com/javierjulio/textarea-autosize" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-bs"></span>
    textarea-autosize: Official documentation</a>
</div>

## Basic demo

{% capture example %}
<textarea class="form-control textarea-autosize my-5" id="textareaExample" rows="1" placeholder="Try this textarea"></textarea>
{% endcapture %}
{% include example.html content=example %}

## Tutorial

Import Textarea-autosize after your Material javascripts.
{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/textarea-autosize/dist/jquery.textarea_autosize.min.js"></script>
{% endhighlight %}

Add this CSS to your custom stylesheet (ie. style.css).
{% highlight css %}
textarea.textarea-autosize {
  overflow-y: hidden;
  resize: none;
}
{% endhighlight %}

Add `textarea-autosize` class to your textarea AND specify `rows="1"`.
{% highlight html %}
<textarea class="form-control textarea-autosize" id="textareaExample" rows="1" placeholder="Try this textarea"></textarea>
{% endhighlight %}

Initialize plugin once.
{% highlight js %}
$('.textarea-autosize').textareaAutoSize();
{% endhighlight %}

That's it.

## More examples

{% capture example %}
<div class="textfield-box my-2">
  <textarea class="form-control textarea-autosize" id="textareaExampleField" rows="1" placeholder="Try this textarea with textfield box"></textarea>
</div>
<textarea class="form-control form-control-lg textarea-autosize" id="textareaExampleBig" rows="1" placeholder="Try this big textarea"></textarea>
<textarea class="form-control form-control-sm textarea-autosize" id="textareaExampleSmall" rows="1" placeholder="Try this small textarea"></textarea>
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
