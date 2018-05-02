---
layout: docs
title: Menu
description: Menus display a list of choices on a transient sheet of material.
group: material
toc: true
---

Menus appear upon interaction with a action, button, or other control. They display a list of choices, with one choice per line.

**Most of the details about menu have been covered in Bootstrap dropdowns documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/dropdowns/) for more details.**

## Behaviour

Add `.menu` to default `.dropdown-menu` to have the menu appear above its toggler.

{% capture example %}
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton1" type="button">Dropdown</button>
  <div aria-labelledby="dropdownMenuButton1" class="dropdown-menu menu">
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
  <div aria-labelledby="dropdownMenuButton2" class="dropdown-menu dropdown-menu-sm">
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
  <div aria-labelledby="dropdownMenuButton3" class="dropdown-menu menu-cascading">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
