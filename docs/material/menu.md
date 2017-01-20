---
layout: docs
title: Menu
description: Menus display a list of choices on a transient sheet of material.
group: material
---

Menus appear upon interaction with a button, action, or other control. They display a list of choices, with one choice per line.

Menu items may be disabled if not applicable to a certain context. Contextual menus dynamically change their available menu items based on the current state of the app.

Most of the details about menu have been covered in Bootstrap dropdowns docuementation. Please refer to [this page]({{ site.url }}/gh-pages/components/dropdowns/index.html) for more details.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Behaviour

Replace Bootstrap default `.dropdown-menu` with Material `.menu` to have the menu appear above its toggler.

{% example html %}
<div class="dropdown">
  <button aria-haspopup="true" aria-expanded="false" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" type="button">
    Dropdown
  </button>
  <div aria-labelledby="dropdownMenuButton" class="menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endexample %}

## Type

Add an additional class `.menu-cascading` to an existing `.dropdown-menu` or `.menu` to achieve a cascading menu.

{% example html %}
<div class="dropdown">
  <button aria-haspopup="true" aria-expanded="false" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" type="button">
    Dropdown
  </button>
  <div aria-labelledby="dropdownMenuButton" class="dropdown-menu menu-cascading">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endexample %}
