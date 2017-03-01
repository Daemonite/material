---
layout: docs
title: Text fields
description: Text fields allow users to input text and select text.
group: material
---

Text fields usually appear in forms.

Users may enter text, numbers, or mixed-format types of input.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic text fields

Most of the details about basic text fields have been covered in Bootstrap forms docuementation. Please refer to [this page]({{ site.baseurl }}/components/forms/index.html) for more details.

## Floating label text fields

When the user engages with the text input field, the floating inline labels move to float above the field. Implementations of this requires `material.js`.

{% example html %}
<div class="form-group floating-label">
  <label for="exampleInputFloatingLabel1">Floating label</label>
  <input class="form-control" id="exampleInputFloatingLabel1" type="text">
</div>
{% endexample %}

{% example html %}
<div class="form-group floating-label">
  <label for="exampleSelectFloatingLabel1">Floating label</label>
  <select class="form-control" id="exampleSelectFloatingLabel1">
    <option> </option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
</div>
{% endexample %}

It is recommended to run the following JavaScript code until the document is ready or after a floating label text field is added dynamically on a page, so the floating label will get the correct initial state based on whether a particular floating label text field has value or not.

{% highlight js %}
$('.floating-label').floatinglabel();
{% endhighlight %}
