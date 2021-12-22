---
layout: docs
title: Menu
description: Menus display a list of choices on temporary surfaces.
group: material
redirect_from:
  - /docs/4.4/material/menu/
  - /docs/4.5/material/menu/
toc: true
---

A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.

<div class="list-group mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/dropdowns/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Dropdowns</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/menus" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Menus</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/menu" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: Menu</a>
</div>

## Behaviour

Add `.menu` to default `.dropdown-menu` to have the menu appear above its toggler.

{% capture example %}
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton1" type="button">Menu</button>
  <div aria-labelledby="dropdownMenuButton1" class="dropdown-menu menu">
    <a class="dropdown-item" href="#">Undo</a>
    <a class="dropdown-item" href="#">Redo</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Cut</a>
    <a class="dropdown-item" href="#">Copy</a>
    <a class="dropdown-item" href="#">Paste</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Type

Add an additional class `.dropdown-menu-sm` to an existing `.dropdown-menu` to achieve a more compact dropdown menu which is more suitable for desktop.

{% capture example %}
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton2" type="button">Menu</button>
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
  <button aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton3" type="button">Menu</button>
  <div aria-labelledby="dropdownMenuButton3" class="dropdown-menu menu-cascading">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
