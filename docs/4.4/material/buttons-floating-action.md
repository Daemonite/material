---
layout: docs
title: Buttons - Floating action button
meta_description: Material design Floating action Buttons for Bootstrap 4 using some extra CSS classes for a perfect imitation.
description: A floating action button (FAB) represents the primary action of a screen.
group: material
redirect_from: "/docs/4.4/material/"
toc: true
---

A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini, and extended.

Only use a FAB if it is the most suitable way to present a screen's primary action.

<div class="list-group mt-2 mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Buttons</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/buttons-floating-action-button" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Buttons: floating action button</a>
    <a href="https://material.io/design/layout/applying-density.html" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Applying density</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/fab" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: Floating Action Button</a>
</div>

## Floating action buttons

A floating action button represents the primary action in an application, it is used for a promoted action.

{% capture example %}

<button class="btn btn-secondary btn-float" type="button"><i class="material-icons">favorite_border</i></button>
{% endcapture %}
{% include example.html content=example %}

### Positioning

For a bottom right placement, wrap your floating button in a `<div class="fab-container">...</div>`.

{% capture example %}
<p class="font-weight-bold text-center">The demo is at the bottom right of the screen.</p>

<div class="fab-actions">
  <button class="d-none d-lg-flex btn btn-primary btn-float btn-float-extended" type="button" data-toggle="modal" data-target="#">
    <span class="material-icons">message</span>Comment</button>
  <button class="d-lg-none btn btn-primary btn-float" type="button" data-toggle="modal" data-target="#">
    <span class="material-icons">message</span></button>
</div>
{% endcapture %}
{% include example.html content=example %}

### Colors

{% capture example %}

<button class="btn btn-float my-1" type="button"><i class="material-icons">favorite_border</i></button>
{% for color in site.data.theme-colors %}
<button class="btn btn-float btn-{{ color.name }} my-1" type="button"><i class="material-icons">favorite_border</i></button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Dropdown

Floating action buttons can also work with dropdown menus to fling out related actions:

{% capture example %}

<div class="btn-float-dropdown dropdown">
  <button aria-expanded="false" aria-haspopup="true" class="btn btn-float btn-primary" data-toggle="dropdown" type="button"><i class="material-icons">add</i></button>
  <div class="dropdown-menu">
    <button class="btn btn-float btn-light btn-sm" type="button"><i class="material-icons">link</i></button>
    <button class="btn btn-float btn-light btn-sm" type="button"><i class="material-icons">link</i></button>
    <button class="btn btn-float btn-light btn-sm" type="button"><i class="material-icons">link</i></button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Or flinging them upwards:

{% capture example %}

<div class="btn-float-dropdown dropup">
  <button aria-expanded="false" aria-haspopup="true" class="btn btn-float btn-primary" data-toggle="dropdown" type="button"><i class="material-icons">add</i></button>
  <div class="dropdown-menu">
    <button class="btn btn-float btn-light btn-sm" type="button"><i class="material-icons">link</i></button>
    <button class="btn btn-float btn-light btn-sm" type="button"><i class="material-icons">link</i></button>
    <button class="btn btn-float btn-light btn-sm" type="button"><i class="material-icons">link</i></button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Sizes

A smaller sized, i.e. mini floating action button, is also available.

{% capture example %}

<button class="btn btn-secondary btn-float btn-sm" type="button"><i class="material-icons">favorite_border</i></button>
{% endcapture %}
{% include example.html content=example %}

### Extended FAB

A larger FAB button has been introduced in recent Material guidelines. Add `btn-float-extended` class to your actual FAB.

To place icon after the label, use Bootstrap's flex utily `order-2`.

{% capture example %}

<button class="btn btn-secondary btn-float btn-float-extended" type="button"><i class="material-icons">add</i>Create</button>
<button class="btn btn-secondary btn-float btn-float-extended" type="button"><i class="material-icons order-2">add</i>Create</button>
{% endcapture %}
{% include example.html content=example %}

Extended FAB (without Icon)
{% capture example %}

<button class="btn btn-secondary btn-float btn-float-extended" type="button">Create</button>
{% endcapture %}
{% include example.html content=example %}
