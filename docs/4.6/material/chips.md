---
layout: docs
title: Chips
description: Chips help people enter information, make selections, filter content, or trigger actions.
group: material
redirect_from:
  - /docs/4.4/material/chips/
  - /docs/4.5/material/chips/
toc: true
---

## Usage

Chips can be used for various types of entities, including brief information, free form text, or short title. Chips may also contain icons or photos.

<div class="list-group my-lg-5">
    <a href="https://m3.material.io/components/chips/overview" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Chips</a>
    <a href="https://material.io/design/layout/applying-density.html" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Applying density</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/chips" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: Chips</a>
</div>

Chips exist in an outline variant : just add `.chip-outline` class to your chip.

{% capture example %}
<span class="chip">Chip Label</span>
<span class="chip disabled">Chip disabled</span>
<span class="chip chip-outline">Chip outline</span>
<span class="chip"><i class="chip-icon">C</i>Chip icon</span>
<span class="chip"><img loading="lazy" alt="Chip Image" class="chip-img" src="{{ site.baseurl }}/apple-touch-icon.png">Chip image</span>
{% endcapture %}
{% include example.html content=example %}

Chips can be deletable. A delete icon can be displayed if a chip is deletable.

{% capture example %}
<div class="chip fade show" id="chipDismissible">
  Chip dismissible
  <button class="close" data-dismiss="alert" data-target="#chipDismissible" type="button"></button>
</div>
<div class="chip chip-outline fade show" id="chipDismissible2">
  Chip variant
  <button class="close" data-dismiss="alert" data-target="#chipDismissible2" type="button"></button>
</div>
{% endcapture %}
{% include example.html content=example %}

## Choice chips

Choice chips allow selection of a single chip from a set of options.

Choice chips clearly delineate and display options in a compact area. They are a good alternative to toggle buttons, radio buttons, and single select menus.

This component uses a standard radio input and styles the label. Just add `.chip-action.chip-choice` classes to this label.

{% capture example %}
<input type="radio" id="myRadio1" name="chip-radio" class="d-none">
<label for="myRadio1" class="chip chip-action chip-choice">Extra Soft</label>

<input type="radio" id="myRadio2" name="chip-radio" class="d-none">
<label for="myRadio2" class="chip chip-action chip-choice">Soft</label>

<input type="radio" id="myRadio3" name="chip-radio" class="d-none" checked>
<label for="myRadio3" class="chip chip-action chip-choice">Medium</label>

<input type="radio" id="myRadio4" name="chip-radio" class="d-none">
<label for="myRadio4" class="chip chip-action chip-choice">Hard</label>

<input type="radio" id="myRadio5" name="chip-radio" class="d-none" disabled>
<label for="myRadio5" class="chip chip-action chip-choice">Disabled</label>
{% endcapture %}
{% include example.html content=example %}

They also exist in their outline variant.

{% capture example %}
<input type="radio" id="radio-1" name="chip-radio-outline" class="d-none">
<label for="radio-1" class="chip chip-action chip-outline chip-choice">Extra soft</label>

<input type="radio" id="radio-2" name="chip-radio-outline" class="d-none">
<label for="radio-2" class="chip chip-action chip-outline chip-choice">Soft</label>

<input type="radio" id="radio-3" name="chip-radio-outline" class="d-none" checked>
<label for="radio-3" class="chip chip-action chip-outline chip-choice">Medium</label>

<input type="radio" id="radio-4" name="chip-radio-outline" class="d-none">
<label for="radio-4" class="chip chip-action chip-outline chip-choice">Hard</label>

<input type="radio" id="radio-5" name="chip-radio-outline" class="d-none" disabled>
<label for="radio-5" class="chip chip-action chip-outline chip-choice">Disabled</label>
{% endcapture %}
{% include example.html content=example %}

## Filter chips

Filter chips use tags or descriptive words to filter content.

Filter chips clearly delineate and display options in a compact area. They are a good alternative to toggle buttons or checkboxes.

This component uses a standard checkbox input and styles the label. Just add `.chip-action.chip-filter` classes to this label.

{% capture example %}
<p class="typography-headline-6">Choose amenities</p>

<input type="checkbox" id="myCheckbox1" class="d-none">
<label for="myCheckbox1" class="chip chip-action chip-filter">Elevator</label>

<input type="checkbox" id="myCheckbox2" class="d-none">
<label for="myCheckbox2" class="chip chip-action chip-filter">Washer / Dryer</label>

<input type="checkbox" id="myCheckbox3" class="d-none">
<label for="myCheckbox3" class="chip chip-action chip-filter">Fireplan</label>

<input type="checkbox" id="myCheckbox4" class="d-none">
<label for="myCheckbox4" class="chip chip-action chip-filter">Wheelchair access</label>

<input type="checkbox" id="myCheckbox5" class="d-none" disabled>
<label for="myCheckbox5" class="chip chip-action chip-filter">Disabled</label>
{% endcapture %}
{% include example.html content=example %}

They also exist in their outline variant.

{% capture example %}
<p class="typography-headline-6">Choose amenities</p>

<input type="checkbox" id="myCheckbox11" class="d-none">
<label for="myCheckbox11" class="chip chip-action chip-outline chip-filter">Elevator</label>

<input type="checkbox" id="myCheckbox12" class="d-none">
<label for="myCheckbox12" class="chip chip-action chip-outline chip-filter">Washer / Dryer</label>

<input type="checkbox" id="myCheckbox13" class="d-none">
<label for="myCheckbox13" class="chip chip-action chip-outline chip-filter">Fireplan</label>

<input type="checkbox" id="myCheckbox14" class="d-none">
<label for="myCheckbox14" class="chip chip-action chip-outline chip-filter">Wheelchair access</label>

<input type="checkbox" id="myCheckbox15" class="d-none" disabled>
<label for="myCheckbox15" class="chip chip-action chip-outline chip-filter">Disabled</label>
{% endcapture %}
{% include example.html content=example %}

## Action chips

Action chips offer actions related to primary content. They should appear dynamically and contextually in a UI.

An alternative to action chips are buttons, which should appear persistently and consistently.

Chips can be interactive. Use `<a>`s or `<button>`s to create actionable chips with active, focus and hover states by adding `.chip-action`.

{% capture example %}
<button class="chip chip-action" type="button">Chip Action Label</button>
<a class="chip chip-action" href="#"><i class="chip-icon">C</i>Chip Action Label</a>
<a class="chip chip-action" href="#"><img loading="lazy" alt="Chip Image" class="chip-img" src="{{ site.baseurl }}/apple-touch-icon.png">Chip Action Label</a>
{% endcapture %}
{% include example.html content=example %}

Or with icons.

{% capture example %}
<button class="chip chip-action" type="button"><i class='material-icons'>brightness_5</i> Turn on lights</button>

<button class="chip chip-action" type="button"><i class="material-icons">alarm</i> Set alarm</button>

<a class="chip chip-action" href="#"><i class="material-icons">insert_link</i> Using 'a' tag</a>

<a class="chip chip-action disabled" href="#"><i class="material-icons">sync_disabled</i> Disabled</a>
{% endcapture %}
{% include example.html content=example %}

And in their outline variant.

{% capture example %}
<button class="chip chip-action chip-outline" type="button"><i class='material-icons'>brightness_5</i> Turn on lights</button>

<button class="chip chip-action chip-outline" type="button"><i class="material-icons">alarm</i> Set alarm</button>

<a class="chip chip-action chip-outline" href="#"><i class="material-icons">event</i> Add to calendar</a>

<a class="chip chip-action chip-outline disabled" href="#"><i class="material-icons">sync_disabled</i> Disabled</a>
{% endcapture %}
{% include example.html content=example %}

## Sizing and density

More dense chips are avilable to reflect the Comfortable and Compact ones from Material design guidelines.
Use `.chip-sm` for Comfortable chips and `.chip-xs` for Compact ones.

{% capture example %}
<button class="chip chip-action chip-sm" type="button"><i class='material-icons'>wb_sunny</i> Turn on lights</button>

<button class="chip chip-action chip-outline chip-sm" type="button"><i class="material-icons">alarm</i>Set alarm</button>

<a class="chip chip-action chip-xs" href="#"><i class="material-icons">music_note</i>Play music</a>

<a class="chip chip-action chip-outline chip-xs" href="#"><i class="material-icons">directions</i>Get directions</a>
{% endcapture %}
{% include example.html content=example %}
