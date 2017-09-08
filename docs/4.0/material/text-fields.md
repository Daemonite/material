---
layout: docs
title: Text fields
description: Text fields allow users to input text and select text.
group: material
toc: true
---

Text fields usually appear in forms.

Users may enter text, numbers, or mixed-format types of input.

## Basic text fields

**Most of the details about basic text fields have been covered in Components/Forms docuementation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/forms/) for more details.**

## Floating label text fields

When the user engages with the text input field, the floating inline labels move to float above the field. 

**N.B.** Implementations of this requires `material.js` or `material.min.js`.

{% example html %}
<div class="form-group floating-label">
  <label for="exampleInputFloatingLabel1">Floating label</label>
  <input class="form-control" id="exampleInputFloatingLabel1" placeholder="Placeholder" type="text">
</div>
{% endexample %}

`.floating-label` does not have to be added to `.form-group`.

{% example html %}
<div class="form-group">
  <div class="floating-label">
    <label for="exampleInputFloatingLabel2">Floating label</label>
    <input class="form-control" id="exampleInputFloatingLabel2" placeholder="Placeholder" type="text">
  </div>
  <small id="exampleInputFloatingLabel2Help" class="form-text text-muted">Some help text.</small>
</div>
{% endexample %}

{% example html %}
<div class="form-group floating-label">
  <label for="exampleSelectFloatingLabel3">Floating label</label>
  <select class="form-control" id="exampleSelectFloatingLabel3">
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

## Multi-line fields

Multi-line text fields wrap text onto a new line by expanding the bottom of the field, shifting screen elements downward. Multi-line text fields allow users to see everything they input at once.

**N.B.** Implementations of this requires `material.js` or `material.min.js`.

{% example html %}
<div class="form-group floating-label">
  <label for="exampleTextarea1">Floating label</label>
  <textarea class="form-control textarea-autosize" id="exampleTextarea1" rows="1"></textarea>
</div>
{% endexample %}
