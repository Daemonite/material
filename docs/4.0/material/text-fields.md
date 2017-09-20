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

**N.B.** Implementation of this requires `material.js` or `material.min.js`.

{% example html %}
<div class="form-group">
  <div class="floating-label">
    <label for="exampleInputFloatingLabel1">Floating label</label>
    <input class="form-control" id="exampleInputFloatingLabel1" placeholder="Placeholder" type="text">
  </div>
  <small id="exampleInputFloatingLabel1Help" class="form-text text-muted">Some help text.</small>
</div>
<div class="form-group">
  <div class="floating-label">
    <label for="exampleSelectFloatingLabel1">Floating label</label>
    <select class="form-control" id="exampleSelectFloatingLabel1">
      <option> </option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
{% endexample %}

### Sizes

Change sizes using `.floating-label-lg` and `.floating-label-sm`.

{% example html %}
<div class="form-group">
  <div class="floating-label floating-label-lg">
    <label for="exampleInputFloatingLabel2">Large</label>
    <input class="form-control" id="exampleInputFloatingLabel2" placeholder="Placeholder" type="text">
  </div>
</div>
<div class="form-group">
  <div class="floating-label floating-label-sm">
    <label for="exampleInputFloatingLabel3">Small</label>
    <input class="form-control" id="exampleInputFloatingLabel3" placeholder="Placeholder" type="text">
  </div>
</div>
{% endexample %}

### Usage

Implementation of floating label text fields requires `material.js` or `material.min.js`.

It is recommended to run the following JavaScript code after the document is ready or a floating label text field is added dynamically on a page, so the floating label will get the correct initial state based on whether a particular floating label text field has value or not.

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

## Text field box

Text field boxes increase text field identifiability and scannability by using a transparent rectangular fill to enclose the label and input text.

{% example html %}
<div class="form-group">
  <label class="mb-2" for="exampleInputTextfieldBox1">Text field box label</label>
  <div class="textfield-box">
    <input class="form-control" id="exampleInputTextfieldBox1" placeholder="Placeholder" type="text">
  </div>
  <small id="exampleInputTextfieldBox1Help" class="form-text text-muted">Some help text.</small>
</div>
<div class="form-group">
  <label class="mb-2" for="exampleSelectTextfieldBox1">Text field box label</label>
  <div class="textfield-box">
    <select class="form-control" id="exampleSelectTextfieldBox1">
      <option> </option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
{% endexample %}

### Sizes

Change sizes using `.textfield-box-lg` and `.textfield-box-sm`.

{% example html %}
<div class="form-group">
  <label class="mb-2" for="exampleInputTextfieldBox2">Large</label>
  <div class="textfield-box textfield-box-lg">
    <input class="form-control" id="exampleInputTextfieldBox2" placeholder="Large" type="text">
  </div>
</div>
<div class="form-group">
  <label class="mb-2" for="exampleInputTextfieldBox3">Small</label>
  <div class="textfield-box textfield-box-sm">
    <input class="form-control" id="exampleInputTextfieldBox3" placeholder="Small" type="text">
  </div>
</div>
{% endexample %}

### With floating labels

Text field boxes can be combined with floating labels.

{% example html %}
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleInputTextfieldBox4">Floating label</label>
    <input class="form-control" id="exampleInputTextfieldBox4" placeholder="Placeholder" type="text">
  </div>
  <small id="exampleInputTextfieldBox4Help" class="form-text text-muted">Some help text.</small>
</div>
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleSelectTextfieldBox2">Floating label</label>
    <select class="form-control" id="exampleSelectTextfieldBox2">
      <option> </option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
{% endexample %}

Sizes can also be set by adding `.floating-label-lg/sm` and `.textfield-box-lg/sm` classes.

{% example html %}
<div class="form-group">
  <div class="floating-label floating-label-lg textfield-box textfield-box-lg">
    <label for="exampleInputTextfieldBox5">Large</label>
    <input class="form-control" id="exampleInputTextfieldBox5" placeholder="Large" type="text">
  </div>
</div>
<div class="form-group">
  <div class="floating-label floating-label-sm textfield-box textfield-box-sm">
    <label for="exampleInputTextfieldBox6">Small</label>
    <input class="form-control" id="exampleInputTextfieldBox6" placeholder="Small" type="text">
  </div>
</div>
{% endexample %}
