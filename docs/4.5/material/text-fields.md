---
layout: docs
title: Text fields
description: Text fields let users enter and edit text.
group: material
toc: true
---

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

<div class="list-group my-2 my-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/forms/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Forms</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/text-fields/" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Text fields</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/text-field" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Text field</a>
</div>

**Most of the details about basic text fields are covered in Components/Forms documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/forms/) for more examples.**

## Line ripple effect

**Material UI 2 brings pure CSS line ripple effect.**  
This comes with limitations (due to CSS3 incapacity of creating pseudo-elements on inputs).

Details for implementing nicely line ripple is available in every chapter right below.

**Material UI 2 also brings colored label on form focus.**  
However limited to inputs placed in Bootstrap's `form-group` or `form-ripple` container. Floating-label forms have colored title by default.

{% capture example %}
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="demo1">Floating label</label>
    <input aria-describedby="demo1help" class="form-control" id="demo1" placeholder="Optional placeholder" type="text">
  </div>
  <small id="demo1help" class="form-text text-muted">Helper message placed outside <code>.floating-label</code>.</small>
</div>
{% endcapture %}
{% include example.html content=example %}

## Basic text fields

### Line ripple

Conditions for a good implementation

1. Form-control must be wrapped in a `<div class="form-group">` or any other *div* container
1. You must add `form-ripple` class to this container
1. If you use a text helper (Bootstrap's `form-text`), use (or add) `form-ripple-text` instead of `form-ripple` on your container div for correct positionning of the ripple.

**NB.** Use of a border ripple effect is not recommended on select (multiple, or size > 1) and textarea (row > 1) in Material guidelines.

### Demo

<div class="bd-example">
  <div class="form-group form-ripple-text">
    <label for="exampleInput1">Default form control</label>
    <input aria-describedby="exampleInput1Help" class="form-control" id="exampleInput1" placeholder="Placeholder" type="text">
    <small id="exampleInput1Help" class="form-text text-muted">Some help text.</small>
  </div>
  <div class="form-group form-ripple">
    <label for="exampleInput2">Date and time</label>
    <input class="form-control" id="exampleInput2" placeholder="Date and time" type="datetime-local">
  </div>
  <div class="form-group form-ripple">
    <label for="exampleInput3">Number</label>
    <input class="form-control" id="exampleInput3" placeholder="Number" type="number">
  </div>
  <div class="form-group form-ripple">
    <label for="exampleInput4">Search</label>
    <input class="form-control" id="exampleInput4" placeholder="Search" type="search">
  </div>
  <div class="form-group form-ripple">
    <label for="exampleInput5">Select</label>
    <select class="form-control" id="exampleInput5">
      <option>Select</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInput6">Multiple select</label>
    <select class="form-control" id="exampleInput6" multiple>
      <option>Multiple select</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInput7">Size select</label>
    <select class="form-control" id="exampleInput7" size="3">
      <option>Size select</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
  </div>
  <div class="form-group form-ripple">
    <label for="exampleInput8">Size=1 select</label>
    <select class="form-control" id="exampleInput8" size="1">
      <option>Size=1 select</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInput9">Textarea</label>
    <textarea class="form-control" id="exampleInput9" placeholder="Textarea" rows="3"></textarea>
  </div>
  <div class="form-group form-ripple">
    <label for="exampleInput10">1 row textarea</label>
    <textarea class="form-control" id="exampleInput10" placeholder="1 row textarea" rows="1"></textarea>
  </div>
</div>

## Floating label text fields

When the user engages with the text input field, the floating inline labels move to float above the field.

**N.B.** Implementation of floating label text fields requires `material.js` or `material.min.js`. Floating label also requires the pairing `label` and `.form-control` placed in the same `.floating-label` as its first two children.

### Line ripple for Floating label text fields

Conditions for a good implementation : no extra markup needed as line ripple is activated by default for `floating-label`.

If you use a helper text : either place it outside of the `floating-label` container OR leave it inside the `floating-label` container and add `form-ripple-text` class to the container.

### Demo for floating label text fields

{% capture example %}
<div class="form-group">
  <div class="floating-label">
    <label for="exampleFloatingLabel1">Floating label</label>
    <input aria-describedby="exampleFloatingLabel1Help" class="form-control" id="exampleFloatingLabel1" placeholder="Optional placeholder" type="text">
  </div>
  <small id="exampleFloatingLabel1Help" class="form-text text-muted">Helper text placed outside <code>.floating-label</code>.</small>
</div>
<div class="form-group">
  <div class="floating-label form-ripple-text">
    <label for="exampleFloatingLabelbis1">Floating label</label>
    <input aria-describedby="exampleFloatingLabelbis1Help" class="form-control" id="exampleFloatingLabelbis1" placeholder="Optional placeholder" type="text">
    <small id="exampleFloatingLabelbis1Help" class="form-text text-muted">Helper text placed inside <code>.floating-label</code> with <code>form-ripple-text</code>.</small>
  </div>
</div>
<div class="form-group">
  <div class="floating-label">
    <label for="exampleFloatingLabel2">Date and time</label>
    <input aria-describedby="exampleFloatingLabel2Help" class="form-control" id="exampleFloatingLabel2" placeholder="Date and time" type="datetime-local">
  </div>
  <small id="exampleFloatingLabel2Help" class="form-text text-muted">Help text placed outside <code>.floating-label</code>.</small>
</div>
<div class="form-group">
  <div class="floating-label">
    <label for="exampleFloatingLabel3">Select</label>
    <select class="form-control" id="exampleFloatingLabel3">
      <option label=" "></option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="floating-label">
    <label for="exampleFloatingLabel4">Custom select</label>
    <select class="custom-select" id="exampleFloatingLabel4">
      <option label=" "></option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="floating-label">
    <label for="exampleFloatingLabel5">1 row textarea</label>
    <textarea class="form-control" id="exampleFloatingLabel5" placeholder="Optional placeholder" rows="1"></textarea>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Sizes

Change sizes using `.floating-label-lg` and `.floating-label-sm`.

{% capture example %}
<div class="form-group">
  <div class="floating-label floating-label-lg form-ripple-text">
    <label for="exampleFloatingLabel6">Large</label>
    <input aria-describedby="exampleFloatingLabel6Help" class="form-control" id="exampleFloatingLabel6" placeholder="Optional placeholder" type="text">
    <small id="exampleFloatingLabel6Help" class="form-text text-muted">Help text placed inside <code>.floating-label</code>.</small>
  </div>
</div>
<div class="form-group">
  <div class="floating-label">
    <label for="exampleFloatingLabel7">Default</label>
    <input class="form-control" id="exampleFloatingLabel7" placeholder="Optional placeholder" type="text">
  </div>
</div>
<div class="form-group">
  <div class="floating-label floating-label-sm">
    <label for="exampleFloatingLabel8">Small</label>
    <input aria-describedby="exampleFloatingLabel8Help" class="form-control" id="exampleFloatingLabel8" placeholder="Optional placeholder" type="text">
  </div>
  <small id="exampleFloatingLabel8Help" class="form-text text-muted">Help text placed outside <code>.floating-label</code>.</small>
</div>
{% endcapture %}
{% include example.html content=example %}

### Usage

Implementation of floating label text fields requires `material.js` or `material.min.js`.

It is recommended to run the following JavaScript code after the document is ready or a floating label text field is added dynamically to a page, so the floating label will get the correct initial state based on whether a particular floating label text field has value or not.

{% highlight js %}
$('.floating-label .custom-select, .floating-label .form-control').floatinglabel();
{% endhighlight %}

{% capture example %}
<div class="form-group">
  <div class="floating-label" id="qweqweqwe">
    <label for="exampleFloatingLabel9">Floating label</label>
    <input class="form-control" id="exampleFloatingLabel9" placeholder="Optional placeholder" type="text" value="Initial value">
  </div>
</div>
<div class="form-group">
  <div class="floating-label" id="asdasdasd">
    <label for="exampleFloatingLabel10">Floating label</label>
    <select class="form-control" id="exampleFloatingLabel10">
      <option label=" "></option>
      <option selected>Initial option</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Text field boxes

Text field boxes increase text field identifiability and scannability by using a transparent rectangular fill to enclose the label and input text.

### Line ripple for Text field boxes

No extra markup as line ripple is activated by default for `textfield-box` elements.

As for floating labels, if you use a helper text : either place it outside of the `floating-label` container OR leave it inside the `floating-label` container and add `form-ripple-text` class to the container.

### Demo for Text field boxes

{% capture example %}
<div class="form-group">
  <div class="textfield-box form-ripple-text">
    <label class="mb-2" for="exampleTextfieldBox1">Text field box</label>
    <input aria-describedby="exampleTextfieldBox1Help" class="form-control" id="exampleTextfieldBox1" placeholder="Placeholder" type="text">
    <small id="exampleTextfieldBox1Help" class="form-text text-muted">Helper text placed inside <code>.textfield-box</code>.</small>
  </div>
</div>
<div class="form-group">
  <label class="mb-2" for="exampleTextfieldBox2">Label placed outside <code>.textfield-box</code></label>
  <div class="textfield-box">
    <select aria-describedby="exampleTextfieldBox2Help" class="form-control" id="exampleTextfieldBox2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
  <small id="exampleTextfieldBox2Help" class="form-text text-muted">Help text placed outside <code>.textfield-box</code>.</small>
</div>
<div class="form-group">
  <div class="textfield-box">
    <label class="mb-2" for="exampleTextfieldBox3">Custom select</label>
    <select class="custom-select" id="exampleTextfieldBox3">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="textfield-box">
    <label class="mb-2" for="exampleTextfieldBox4">Multiple select</label>
    <select class="form-control" id="exampleTextfieldBox4" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="textfield-box">
    <label class="mb-2" for="exampleTextfieldBox5">Size select</label>
    <select class="form-control" id="exampleTextfieldBox5" size="3">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="textfield-box">
    <label class="mb-2" for="exampleTextfieldBox6">Size=1 select</label>
    <select class="form-control" id="exampleTextfieldBox6" size="1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="textfield-box">
    <label for="exampleTextfieldBox7">Textarea</label>
    <textarea class="form-control" id="exampleTextfieldBox7" placeholder="Textarea" rows="3"></textarea>
  </div>
</div>
<div class="form-group">
  <div class="textfield-box">
    <label for="exampleTextfieldBox8">1 row textarea</label>
    <textarea class="form-control" id="exampleTextfieldBox8" placeholder="1 row textarea" rows="1"></textarea>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Sizes

Change sizes using `.textfield-box-lg` and `.textfield-box-sm`.

{% capture example %}
<div class="form-group">
  <div class="textfield-box textfield-box-lg form-ripple-text">
    <label class="mb-2" for="exampleTextfieldBox9">Large</label>
    <input aria-describedby="exampleTextfieldBox9Help" class="form-control" id="exampleTextfieldBox9" placeholder="Large" type="text">
    <small id="exampleTextfieldBox9Help" class="form-text text-muted">Help text placed inside <code>.textfield-box</code>.</small>
  </div>
</div>
<div class="form-group">
  <div class="textfield-box">
    <label class="mb-2" for="exampleTextfieldBox10">Default</label>
    <input class="form-control" id="exampleTextfieldBox10" placeholder="Default" type="text">
  </div>
</div>
<div class="form-group">
  <label class="mb-2" for="exampleTextfieldBox11">Small</label>
  <div class="textfield-box textfield-box-sm">
    <input aria-describedby="exampleTextfieldBox11Help" class="form-control" id="exampleTextfieldBox11" placeholder="Small" type="text">
  </div>
  <small id="exampleTextfieldBox11Help" class="form-text text-muted">Help text placed outside <code>.textfield-box</code>.</small>
</div>
{% endcapture %}
{% include example.html content=example %}

### With floating labels

Text field boxes can be combined with floating labels.

{% capture example %}
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleFloatingBox1">Floating label</label>
    <input class="form-control" id="exampleFloatingBox1" placeholder="Optional placeholder" type="text">
  </div>
</div>
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleFloatingBox2">Floating label</label>
    <select class="form-control" id="exampleFloatingBox2">
      <option label=" "></option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleFloatingBox3">Custom select</label>
    <select class="custom-select" id="exampleFloatingBox3">
      <option label=" "></option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</div>
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleFloatingBox4">Textarea</label>
    <textarea class="form-control" id="exampleFloatingBox4" placeholder="Optional placeholder" rows="3"></textarea>
  </div>
</div>
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleFloatingBox5">1 row textarea</label>
    <textarea class="form-control" id="exampleFloatingBox5" placeholder="Optional placeholder" rows="1"></textarea>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Sizes can also be set by adding `.floating-label-lg/sm` classes.

{% capture example %}
<div class="form-group">
  <div class="floating-label floating-label-lg textfield-box">
    <label for="exampleFloatingBox6">Large</label>
    <input aria-describedby="exampleFloatingBox6Help" class="form-control" id="exampleFloatingBox6" placeholder="Large" type="text">
    <small id="exampleFloatingBox6Help" class="form-text text-muted">Help text placed inside <code>.floating-label</code>.</small>
  </div>
</div>
<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="exampleFloatingBox7">Default</label>
    <input class="form-control" id="exampleFloatingBox7" placeholder="Default" type="text">
  </div>
</div>
<div class="form-group">
  <div class="floating-label floating-label-sm textfield-box">
    <label for="exampleFloatingBox8">Small</label>
    <input aria-describedby="exampleFloatingBox8Help" class="form-control" id="exampleFloatingBox8" placeholder="Small" type="text">
  </div>
  <small id="exampleFloatingBox8Help" class="form-text text-muted">Help text placed outside <code>.floating-label</code>.</small>
</div>
{% endcapture %}
{% include example.html content=example %}

## With icons

Icons describe the type of input a text field requires. They are displayed to the left of the text field.

For now, line ripple doesn't work on inputs with icons without floating label.

{% capture example %}
<div class="form-group">
  <div class="input-group input-group-lg">
    <input aria-describedby="exampleIconInput1Help" aria-label="Large icon signifier example input" class="form-control" id="exampleIconInput1" placeholder="Large" type="text">
    <span class="input-group-icon" id="exampleIconInput1Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
<div class="form-group">
  <div class="input-group">
    <input aria-describedby="exampleIconInput2Help" aria-label="Default icon signifier example input" class="form-control" id="exampleIconInput2" placeholder="Default" type="text">
    <span class="input-group-icon" id="exampleIconInput2Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
<div class="form-group">
  <div class="input-group input-group-sm">
    <input aria-describedby="exampleIconInput3Help" aria-label="Small icon signifier example input" class="form-control" id="exampleIconInput3" placeholder="Small" type="text">
    <span class="input-group-icon" id="exampleIconInput3Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
<div class="form-group">
  <div class="input-group">
    <select aria-describedby="exampleIconInput4Help" aria-label="Icon signifier with multiple select example" class="form-control" id="exampleIconInput4" multiple>
      <option>With multiple select</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <span class="input-group-icon" id="exampleIconInput4Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
<div class="form-group">
  <div class="input-group">
    <textarea aria-describedby="exampleIconInput5Help" aria-label="Icon signifier with textarea example" class="form-control" id="exampleIconInput5" placeholder="With textarea" rows="3"></textarea>
    <span class="input-group-icon" id="exampleIconInput5Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

`.input-group-icon` can also work with floating label text fields and text field boxes.

No extra markup needed for line ripple as it is activated by default on all `floating-label` elements.

{% capture example %}
<div class="form-group">
  <div class="input-group input-group-lg">
    <div class="floating-label">
      <label for="exampleIconInput7">Large</label>
      <input aria-describedby="exampleIconInput7Help" class="form-control" id="exampleIconInput7" placeholder="Optional placeholder" type="text">
    </div>
    <span class="input-group-icon" id="exampleIconInput7Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
<div class="form-group">
  <div class="input-group">
    <div class="floating-label">
      <label for="exampleIconInput8">Default</label>
      <input aria-describedby="exampleIconInput8Help" class="form-control" id="exampleIconInput8" placeholder="Optional placeholder" type="text">
    </div>
    <span class="input-group-icon" id="exampleIconInput8Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
<div class="form-group">
  <div class="input-group input-group-sm">
    <div class="floating-label">
      <label for="exampleIconInput9">Small</label>
      <input aria-describedby="exampleIconInput9Help" class="form-control" id="exampleIconInput9" placeholder="Optional placeholder" type="text">
    </div>
    <span class="input-group-icon" id="exampleIconInput9Help">
      <i class="material-icons">event</i>
    </span>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Input icons for Webkit browsers

**If you use Chrome or Safari, in the examples below, you will see calendar icon for suitable fields and erase icon for search and calendar based inputs.**

To disable this add-on, in `_utilities.scss`, comment the last line like this : `// _webkit-custom.scss` and recompile SCSS sources.

{% capture example %}
<div class="form-group form-ripple">
  <label for="exampleInputSearch">Search</label>
  <input class="form-control" id="exampleInputSearch" placeholder="Search something to reveal icon" type="search">
</div>
<div class="form-group form-ripple">
  <label for="exampleInputDateTime">Date and time</label>
  <input class="form-control" id="exampleInputDateTime" placeholder="Date and time" type="datetime-local">
</div>
<div class="form-group form-ripple">
  <label for="exampleInput2bis">Date</label>
  <input class="form-control" id="exampleInput2bis" placeholder="Date" type="date">
</div>
<div class="form-group form-ripple">
  <label for="exampleInput24">Time</label>
  <input class="form-control" id="exampleInput24" placeholder="Time" type="time">
</div>
<div class="form-group form-ripple">
  <label for="exampleInput2ter">Month</label>
  <input class="form-control" id="exampleInput2ter" placeholder="Month" type="month">
</div>
<div class="form-group form-ripple">
  <label for="exampleInput25">Week</label>
  <input class="form-control" id="exampleInput25" placeholder="Week" type="week">
</div>
{% endcapture %}
{% include example.html content=example %}
