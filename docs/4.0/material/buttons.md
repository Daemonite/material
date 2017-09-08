---
layout: docs
title: Buttons
description: Buttons communicate the action that will occur when the user touches them.
group: material
redirect_from: "/material/"
toc: true
---

Material buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and raised buttons are the most commonly used types.

## Flat & raised buttons

### Flat buttons

Flat buttons are text-only buttons. They may be used in dialogs, toolbars, or inline. They do not lift, but fill with color on press.

Outline buttons, i.e. `.btn-outline-*`, are the equivalent of Material flat buttons. For more details, please refer to [Components/Buttons documentation]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#outline-buttons).

{% example html %}
<button type="button" class="btn btn-outline">Flat</button>
{% endexample %}

### Raised buttons

Raised buttons are rectangular-shaped buttons. They may be used inline. They lift and display ink reactions on press.

Default buttons, i.e. `.btn`, are the equivalent of Material raised buttons. For more details, please refer to [Components/Buttons documentation]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#examples).

{% example html %}
<button type="button" class="btn">Raised</button>
{% endexample %}

## Floating action buttons

A floating action button represents the primary action in an application, it is used for a promoted action.

{% example html %}
<button type="button" class="btn btn-float"><i class="material-icons">add</i></button>
{% endexample %}

### Colours

{% example html %}
<button type="button" class="btn btn-float btn-primary"><i class="material-icons">edit</i></button>
<button type="button" class="btn btn-float btn-secondary"><i class="material-icons">grade</i></button>
<button type="button" class="btn btn-float btn-danger"><i class="material-icons">favorite</i></button>
<button type="button" class="btn btn-float btn-info"><i class="material-icons">reply</i></button>
<button type="button" class="btn btn-float btn-success"><i class="material-icons">people</i></button>
<button type="button" class="btn btn-float btn-warning"><i class="material-icons">my_location</i></button>
{% endexample %}

### Sizes

A smaller sized, i.e. mini floating action button, is also available.

{% example html %}
<button type="button" class="btn btn-float btn-sm"><i class="material-icons">add</i></button>
{% endexample %}

## Toggle buttons

Toggle buttons may be used to group related options, similar to [Components/Button group]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/button-group/). Use flat buttons (i.e. `.btn-outline`s or `.btn-outline-*`s) instead of raised buttons to achieve a look that is more in line with the specifications laid out in Material Design Guidelines.

{% example html %}
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
{% endexample %}

Logically-grouped options, like Bold, Italic, and Underline, allow multiple options to be selected.

{% example html %}
<div class="btn-group" data-toggle="buttons" role="group">
  <button class="btn btn-outline btn-sm" disabled>
    <i class="material-icons">attach_file</i>
  </button>
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
      <a class="dropdown-item" href="#">Colour 1</a>
      <a class="dropdown-item" href="#">Colour 2</a>
      <a class="dropdown-item" href="#">Colour 3</a>
    </div>
  </div>
  <div class="btn-group" role="group">
    <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" id="toggleBtnDrop2" type="button"><i class="material-icons">format_color_fill</i></button>
    <div aria-labelledby="toggleBtnDrop2" class="dropdown-menu dropdown-menu-sm">
      <a class="dropdown-item" href="#">Colour 1</a>
      <a class="dropdown-item" href="#">Colour 2</a>
      <a class="dropdown-item" href="#">Colour 3</a>
    </div>
  </div>
</div>
{% endexample %}

Purely flat toggle buttons can be achieved by adding `.btn-group-fluid` class.

{% example html %}
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
{% endexample %}

Vertical variation is also supported

{% example html %}
<div class="btn-group-vertical" data-toggle="buttons" role="group">
  <button class="btn btn-outline btn-sm" disabled>
    <i class="material-icons">attach_file</i>
  </button>
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
    <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" id="toggleBtnDrop1" type="button"><i class="material-icons">format_color_text</i></button>
    <div aria-labelledby="toggleBtnDrop1" class="dropdown-menu dropdown-menu-sm">
      <a class="dropdown-item" href="#">Colour 1</a>
      <a class="dropdown-item" href="#">Colour 2</a>
      <a class="dropdown-item" href="#">Colour 3</a>
    </div>
  </div>
  <div class="btn-group" role="group">
    <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" id="toggleBtnDrop2" type="button"><i class="material-icons">format_color_fill</i></button>
    <div aria-labelledby="toggleBtnDrop2" class="dropdown-menu dropdown-menu-sm">
      <a class="dropdown-item" href="#">Colour 1</a>
      <a class="dropdown-item" href="#">Colour 2</a>
      <a class="dropdown-item" href="#">Colour 3</a>
    </div>
  </div>
</div>
{% endexample %}

## Usage

The type of button used should be suited to the context in which it appears.

<div>
  <table class="table table-bordered table-striped">
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
