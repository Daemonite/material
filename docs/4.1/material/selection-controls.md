---
layout: docs
title: Selection controls
description: Selection controls allow the user to select options.
group: material
toc: true
---

Three types of selection controls are covered in this guidance:

* **Checkboxes** allow the selection of multiple options from a set.
* **Radio buttons** allow the selection of a single option from a set.
* **Switches** allow a selection to be turned on or off.

## Checkboxes

**Most of the details about Material checkboxes have been covered in Components/Custom form elements documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/forms/#checkboxes) for more details.**

## Radio buttons

**Most of the details about Material radio buttons have been covered in Components/Custom form elements documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/forms/#radios) for more details.**

## Switches

Switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.

{% capture example %}
<div class="custom-control custom-switch">
  <input class="custom-control-input" id="customSwitch" type="checkbox">
  <span class="custom-control-track"></span>
  <label class="custom-control-label" for="customSwitch">Toggle this custom switch</label>
</div>
{% endcapture %}
{% include example.html content=example %}

### Validation

For details about how validation works, please check [this page]({{ site.baseurl}}/docs/{{ site.docs_version }}/components/forms/#how-it-works). The following section only provides some basic examples.

{% capture example %}
<form class="was-validated">
  <div class="custom-control custom-switch">
    <input class="custom-control-input" id="customSwitchValidation" required type="checkbox">
    <span class="custom-control-track"></span>
    <label class="custom-control-label" for="customSwitchValidation">Toggle this custom switch</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
    <div class="valid-feedback">Example valid feedback text</div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}
