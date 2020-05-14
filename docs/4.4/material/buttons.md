---
layout: docs
title: Buttons
meta_description: Material design Buttons for Bootstrap 4 using some extra CSS classes for a perfect imitation.
description: Buttons allow users to take actions, and make choices, with a single tap.
group: material
redirect_from: "/docs/4.4/material/"
fontawesome4: true
fontawesome5: true
toc: true
---

Flat, outlined and raised buttons are the most commonly used types.

<div class="list-group mt-2 mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
    <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Buttons</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/buttons" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Buttons</a>
    <a href="https://material.io/design/layout/applying-density.html" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Applying density</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/button" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Buttons</a>
</div>

## Buttons

### Flat buttons

Flat buttons are text-only buttons (now called Text Buttons in Material Design guidelines). They may be used in dialogs, toolbars, or inline. They do not lift, but fill with color on press.  
Material adds `.btn-flat-*` buttons in order to reflect these Text buttons.

Bootstrap's `.btn-link` and `.card-link` are styled as a primary text button.

{% capture example %}

<button class="btn btn-link" type="button">Btn-link</button>
<button class="btn btn-flat" type="button">Flat</button>
{% for color in site.data.theme-colors -%}
<button class="btn btn-flat-{{ color.name }}" type="button">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Raised buttons

Raised buttons are rectangular-shaped buttons. They may be used inline. They lift and display ink reactions on press.

**Default buttons, i.e. `.btn`, are the equivalent of Material raised buttons. For more details, please refer to [Components/Buttons documentation]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#examples).**

{% capture example %}

<button class="btn" type="button">Raised</button>
{% for color in site.data.theme-colors -%}
<button class="btn btn-{{ color.name }}" type="button">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Unelevated buttons

Unelevated buttons are easy to obtain : just add `shadow-none` class to your button.

{% capture example %}

<button class="btn shadow-none" type="button">Unelevated</button>
{% for color in site.data.theme-colors -%}
<button class="btn btn-{{ color.name }} shadow-none" type="button">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Outlined buttons

**Outlined buttons have already been covered in the documentation. For more details, please refer to [Components/Buttons documentation]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#examples).**

{% capture example %}

{% for color in site.data.theme-colors -%}
<button class="btn btn-outline-{{ color.name }}" type="button">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Shaped buttons

For rounded buttons, add `btn-shaped` class to your button. it also works for small and large buttons.

{% capture example %}

<button class="btn btn-primary btn-shaped" type="button">Normal</button>
<button class="btn btn-primary btn-sm btn-shaped" type="button">Small</button>
<button class="btn btn-primary btn-xs btn-shaped" type="button">XSmall</button>
<button class="btn btn-primary btn-lg btn-shaped" type="button">Large</button>
{% endcapture %}
{% include example.html content=example %}

### Density and icons

Recently, Google introduced **Density guidelines**, see the references at the top of page.

To reflect these changes with lowest impact on Bootstrap, here are our choices :

* Standard `btn` is equivalent to **Default** button size
* `btn-sm` is equivalent to **Comfortable** button size
* `btn-xs` is introduced to represent **Compact** button size
* Bootstrap's `btn-lg` has no equivalent in Material design

*Examples are presented above (cf. Shaped buttons)*

At the same time, for easier icon integration within buttons (**SVG, *Material Icons*, *FontAwesome* or any other icon set**), `btn-icon-prepend` class has been created.  
Just add this class to your icon/svg markup for a proper icon's sizing and positioning.

<p class="typography-overline">Icon Compatibility</p>
{% capture example %}

<button type="button" class="btn btn-primary"><svg class="btn-icon-prepend" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></svg>svg</button>
<button type="button" class="btn btn-primary"><i class="fa fa-trash-o btn-icon-prepend" aria-hidden="true"></i>FontAwesome 4</button>
<button type="button" class="btn btn-primary"><i class="far fa-trash-alt btn-icon-prepend" aria-hidden="true"></i>FontAwesome 5</button>
<button type="button" class="btn btn-primary"><span class="material-icons btn-icon-prepend" aria-hidden="true">delete_outline</span>Material icon</button>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Default size</p>
{% capture example %}

<button class="btn btn-primary" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-flat-primary" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-outline-primary" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Default shaped</p>
{% capture example %}

<button class="btn btn-primary btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-flat-primary btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-outline-primary btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Comfortable size</p>
{% capture example %}

<button class="btn btn-primary btn-sm" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-flat-primary btn-sm" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-outline-primary btn-sm" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Comfortable shaped</p>
{% capture example %}

<button class="btn btn-primary btn-sm btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-flat-primary btn-sm btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-outline-primary btn-sm btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Compact size</p>
{% capture example %}

<button class="btn btn-primary btn-xs" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-flat-primary btn-xs" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-outline-primary btn-xs" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Compact shaped</p>
{% capture example %}

<button class="btn btn-primary btn-xs btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-flat-primary btn-xs btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
<button class="btn btn-outline-primary btn-xs btn-shaped" type="button"><i class="material-icons btn-icon-prepend" aria-hidden="true">add</i>button</button>
{% endcapture %}
{% include example.html content=example %}

## Icon buttons

Daemonite Material brings brand new `btn-icon` class for buttons. Markup is simple : set a simple button with usual `btn` class, add `btn-icon` class and just place an icon in the button. See the examples below.

They also exist in Comfortable (`.btn-sm`) and Compact (`.btn-xs`) versions with smaller sizing.

<p class="typography-overline">Default</p>
{% capture example %}

<button class="btn btn-icon" type="button"><i class="material-icons">format_underline</i></button>
<a class="btn btn-icon" href="#"><i class="material-icons">attach_file</i></a>
<button class="btn btn-icon" type="button"><i class="material-icons">link</i></button>
<a class="btn btn-icon" href="#"><i class="material-icons">tag_faces</i></a>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Comfortable</p>
{% capture example %}

<button class="btn btn-icon btn-sm" type="button"><i class="material-icons">format_underline</i></button>
<a class="btn btn-icon btn-sm" href="#"><i class="material-icons">attach_file</i></a>
<button class="btn btn-icon btn-sm" type="button"><i class="material-icons">link</i></button>
<a class="btn btn-icon btn-sm" href="#"><i class="material-icons">tag_faces</i></a>
{% endcapture %}
{% include example.html content=example %}

<p class="typography-overline">Compact</p>
{% capture example %}

<button class="btn btn-icon btn-xs" type="button"><i class="material-icons">format_underline</i></button>
<a class="btn btn-icon btn-xs" href="#"><i class="material-icons">attach_file</i></a>
<button class="btn btn-icon btn-xs" type="button"><i class="material-icons">link</i></button>
<a class="btn btn-icon btn-xs" href="#"><i class="material-icons">tag_faces</i></a>
{% endcapture %}
{% include example.html content=example %}

## Toggle buttons

Toggle buttons may be used to group related options, similar to [Components/Button group]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/button-group/). Use flat buttons (i.e. `.btn-outline`s or `.btn-outline-*`s) instead of raised buttons to achieve a look that is more in line with the specifications laid out in Material Design Guidelines.

{% capture example %}

<div class="btn-group" data-toggle="buttons" role="group">
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options1" type="radio">
    <i class="material-icons">format_align_left</i>
  </label>
  <label class="btn btn-outline btn-sm">
    <input autocomplete="off" name="options1" type="radio">
    <i class="material-icons">format_align_center</i>
  </label>
  <label class="btn btn-outline btn-sm">
    <input autocomplete="off" name="options1" type="radio">
    <i class="material-icons">format_align_right</i>
  </label>
  <label class="btn btn-outline btn-sm">
    <input autocomplete="off" name="options1" type="radio">
    <i class="material-icons">format_align_justify</i>
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

Logically-grouped options, like Bold, Italic, and Underline, allow multiple options to be selected.

{% capture example %}

<div class="btn-group" data-toggle="buttons" role="group">
  <button class="btn btn-outline btn-sm" disabled><i class="material-icons">attach_file</i></button>
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options2" type="checkbox">
    <i class="material-icons">format_bold</i>
  </label>
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options2" type="checkbox">
    <i class="material-icons">format_italic</i>
  </label>
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options2" type="checkbox">
    <i class="material-icons">format_underlined</i>
  </label>
  <div class="btn-group" role="group">
    <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" id="toggleBtnDrop1" type="button"><i class="material-icons">format_color_text</i></button>
    <div aria-labelledby="toggleBtnDrop1" class="dropdown-menu dropdown-menu-sm">
      <a class="dropdown-item" href="#">color 1</a>
      <a class="dropdown-item" href="#">color 2</a>
      <a class="dropdown-item" href="#">color 3</a>
    </div>
  </div>
  <div class="btn-group" role="group">
    <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" id="toggleBtnDrop2" type="button"><i class="material-icons">format_color_fill</i></button>
    <div aria-labelledby="toggleBtnDrop2" class="dropdown-menu dropdown-menu-sm">
      <a class="dropdown-item" href="#">color 1</a>
      <a class="dropdown-item" href="#">color 2</a>
      <a class="dropdown-item" href="#">color 3</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Purely flat toggle buttons can be achieved by adding `.btn-group-fluid` class.

{% capture example %}

<div class="btn-group btn-group-fluid" data-toggle="buttons" role="group">
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options3" type="radio">
    <i class="material-icons">format_align_left</i>
  </label>
  <label class="btn btn-outline btn-sm">
    <input autocomplete="off" name="options3" type="radio">
    <i class="material-icons">format_align_center</i>
  </label>
  <label class="btn btn-outline btn-sm">
    <input autocomplete="off" name="options3" type="radio">
    <i class="material-icons">format_align_right</i>
  </label>
  <label class="btn btn-outline btn-sm">
    <input autocomplete="off" name="options3" type="radio">
    <i class="material-icons">format_align_justify</i>
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

Vertical variation is also supported

{% capture example %}

<div class="btn-group-vertical" data-toggle="buttons" role="group">
  <button class="btn btn-outline btn-sm" disabled><i class="material-icons">attach_file</i></button>
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options4" type="checkbox">
    <i class="material-icons">format_bold</i>
  </label>
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options4" type="checkbox">
    <i class="material-icons">format_italic</i>
  </label>
  <label class="btn btn-outline btn-sm active">
    <input autocomplete="off" checked name="options4" type="checkbox">
    <i class="material-icons">format_underlined</i>
  </label>
  <div class="btn-group" role="group">
    <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" id="toggleBtnDrop3" type="button"><i class="material-icons">format_color_text</i></button>
    <div aria-labelledby="toggleBtnDrop3" class="dropdown-menu dropdown-menu-sm">
      <a class="dropdown-item" href="#">color 1</a>
      <a class="dropdown-item" href="#">color 2</a>
      <a class="dropdown-item" href="#">color 3</a>
    </div>
  </div>
  <div class="btn-group" role="group">
    <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" id="toggleBtnDrop4" type="button"><i class="material-icons">format_color_fill</i></button>
    <div aria-labelledby="toggleBtnDrop4" class="dropdown-menu dropdown-menu-sm">
      <a class="dropdown-item" href="#">color 1</a>
      <a class="dropdown-item" href="#">color 2</a>
      <a class="dropdown-item" href="#">color 3</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Usage

The type of button used should be suited to the context in which it appears.

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th>Context</th>
        <th>Button type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Always available</th>
        <td>If your app requires actions to be persistent and readily available, you can use the floating action button.</td>
      </tr>
      <tr>
        <th>Dialogs</th>
        <td>Use flat buttons in dialogs.</td>
      </tr>
      <tr>
        <th>Inline</th>
        <td>Flat buttons or raised buttons can be used for inline buttons.</td>
      </tr>
    </tbody>
  </table>
</div>

### Recommended button placement

#### Cards

Buttons are best placed on the left side of a card to increase their visibility. However, as cards have flexible layouts, buttons may be placed in a location suited to the content and context, while maintaining consistency within the product.

#### Forms

Button alignment on screen: Left.

Place the affirmative button on the left, the dismissive button on the right.

#### Standard dialogs

Button alignment on screen: right.

Place the affirmative button on the right, the dismissive button on the left.
