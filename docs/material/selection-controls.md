---
layout: docs
title: Selection controls
description: Selection controls allow the user to select options.
group: material
---

Three types of selection controls are covered in this guidance:

* **Checkboxes** allow the selection of multiple options from a set.
* **Radio buttons** allow the selection of a single option from a set.
* **Switches** allow a selection to be turned on or off.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Checkboxes

Most of the details about Material checkboxes have been covered in Bootstrap custom form elements docuementation. Please refer to [this page]({{ site.baseurl }}/components/forms/index.html#checkboxes) for more details.

## Radio buttons

Most of the details about Material radio buttons have been covered in Bootstrap custom form elements docuementation. Please refer to [this page]({{ site.baseurl }}/components/forms/index.html#radios) for more details.

## Switches

Switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.

{% example html %}
<label class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" tabindex="1">
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Toggle this custom switch</span>
</label>
{% endexample %}
