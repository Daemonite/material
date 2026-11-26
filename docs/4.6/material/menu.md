---
layout: docs
title: Menu
description: Menus display a list of choices on a transient sheet of material.
group: material
redirect_from:
  - /docs/4.1/material/menu/
toc: true
---

Menus appear upon interaction with a action, button, or other control. They display a list of choices, with one choice per line.

**Most of the details about menu have been covered in Bootstrap dropdowns documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/dropdowns/) for more details.**

## Behaviour

Add `.menu` to default `.dropdown-menu` to have the menu appear above its toggler.

{% capture example %}
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton1" type="button">Dropdown</button>
  <div class="dropdown-menu menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Type

Add an additional class `.dropdown-menu-sm` to an existing `.dropdown-menu` to achieve a more compact dropdown menu which is more suitable for desktop.

{% capture example %}
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton2" type="button">Dropdown</button>
  <div class="dropdown-menu dropdown-menu-sm">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Add an additional class `.menu-cascading` to an existing `.dropdown-menu` to have a more compact dropdown menu appear above its toggler.

{% capture example %}
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton3" type="button">Dropdown</button>
  <div class="dropdown-menu menu-cascading">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Scrollable menus

For long menus, add `.pre-scrollable` to the `.dropdown-menu` to limit its height (340px by default, `$pre-scrollable-max-height`) and let the items scroll. Don't apply your own `max-height` and `overflow` to a plain `.dropdown-menu`: its surface and shadow are drawn on a pseudo-element that would scroll away with the items, and the shadow would be clipped.

{% capture example %}
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButtonScrollable" type="button">Scrollable</button>
  <div class="dropdown-menu pre-scrollable">
    {% for i in (1..20) %}<a class="dropdown-item" href="#">Item {{ i }}</a>
    {% endfor %}
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
