---
layout: docs
title: Lists
description: Lists are continuous, vertical indexes of text or images.
group: material
toc: true
redirect_from:
  - /docs/4.4/material/lists/
  - /docs/4.5/material/lists/
---

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.

<div class="list-group my-3 my-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/list-group/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: List group</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/lists" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Lists</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/list" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: List</a>
</div>

In order not to break Bootstrap's `.list-group-items`, Material UI keeps default `display: block` for these items.

**NB. To append a button in the lists, HTML doesn't allow to nest buttons or link elements**. Use HTML list `<li>` instead. The counterpart is that `<li>` don't keep the `:focus` styling after clicking.

## One-line lists

For a single list, keep Bootstrap's default markup `<li class="list-group-item list-group-item-action">List item</li>`. Just add `.d-flex` utility class for perfect alignment (except if single text-only, no extra markup needed).

### Single-line items : After list text

You can append various elements to a list: Text or icon :

* For a text, wrap your text in a span like `<span class="list-group-item-meta">Your text</span>`.
* For an icon, use your icon markup and add class list-group-item-meta `<span class="material-icons list-group-item-meta">info</span>`.
* For a button, use this markup : `<a class="btn btn-icon ml-auto" href="#"><span class="material-icons">info</span></a>`.

If you expect a long main text, wrap it in a `<span class="list-group-item-text">Long text goes here</span>`.

{% capture example %}
<ul class="list-group">
  <li class="list-group-item list-group-item-action">List item</li>
  <li class="list-group-item list-group-item-action d-flex">List item</li>
  <li class="list-group-item list-group-item-action d-flex">
    List item with icon
    <span class="material-icons list-group-item-meta">info</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    List item with Button
    <a class="btn btn-icon ml-auto" href="#"><span class="material-icons">more_vert</span></a>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    List item with Text
    <span class="list-group-item-meta">Meta</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="list-group-item-text">List item with a very long text to test the behavior when text is too big for the one-line list. Here is some extra text to test the </span>
    <a class="btn btn-icon ml-auto" href="#"><span class="material-icons">info</span></a>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Single-line items with icon

To prepend an icon, just add your icon markup with `.list-group-item-icon` class. Material UI is compatible with any icon set (SVG, Material icons, FontAwesome 4 or 5, ...).

{% capture example %}
<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    List item
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <svg class="list-group-item-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
    List item with svg icon
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    List item with icon
    <span class="material-icons list-group-item-meta">info</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    List item with Button
    <a class="btn btn-icon ml-auto" href="#"><span class="material-icons">more_vert</span></a>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    List item with Text
    <span class="list-group-item-meta">Meta</span>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Single-line items with graphic

You can still use a Font icon or a svg for your graphic. Set class `.list-group-item-graphic` on it.

{% capture example %}

<ul class="list-group my-3">
  <li class="list-group-item list-group-item-action d-flex">
      <svg class="list-group-item-graphic" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
    List item with svg icon
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">account_circle</span>
    List item with appended icon
    <span class="material-icons list-group-item-meta">info</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">account_circle</span>
    List item with material icon and Button
    <a class="btn btn-icon ml-auto" href="#"><span class="material-icons">more_vert</span></a>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">account_circle</span>
    List item with Text
    <span class="list-group-item-meta">Meta</span>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Two-line lists

You need this markup in order to style properly a two-line list : `<li class="list-group-item list-group-item-action d-flex list-group-item-two-line"></li>`.

Compared to the one-line list, we have just added CSS class `.list-group-item-two-line`.

Both primary and secondary text must be wrapped in a separate `<span>`, and both texts are wrapped in a `<span class="list-group-item-text"></span>` for perfect positioning.

Text and button can be appended as for single-line lists.

### Two-line list : After list text

{% capture example %}

<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="list-group-item-text">
      <span>List item title</span>
      <span>Secondary text</span>
    </span>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="list-group-item-text">
      <span>List item title with icon</span>
      <span>Secondary text</span>
    </span>
    <span class="material-icons list-group-item-meta">info</span>
   </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="list-group-item-text">
      <span>List item title with icon</span>
      <span>Secondary text</span>
    </span>
    <a class="btn btn-icon ml-auto" href="#">
      <span class="material-icons">more_vert</span>
    </a>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="list-group-item-text">
      <span>List item title with Text</span>
      <span>Secondary text</span>
    </span>
    <span class="list-group-item-meta">Meta</span>
   </li>
</ul>

{% endcapture %}
{% include example.html content=example %}

### Two-line list with icon

Same as single-line item with icon : add `.list-group-item-icon` class to your icon.

{% capture example %}

<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    <span class="list-group-item-text">
      <span>List item title</span>
      <span>Secondary text</span>
    </span>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    <span class="list-group-item-text">
      <span>List item title with Text</span>
      <span>Secondary text</span>
    </span>
    <span class="material-icons list-group-item-meta">info</span>
   </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    <span class="list-group-item-text">
      <span>List item title with icon</span>
      <span>Secondary text</span>
    </span>
    <a class="btn btn-icon ml-auto" href="#">
      <span class="material-icons">more_vert</span>
    </a>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-icon" aria-hidden="true">favorite</span>
    <span class="list-group-item-text">
      <span>List item title with Text</span>
      <span>Secondary text</span>
    </span>
    <span class="list-group-item-meta">Meta</span>
   </li>
</ul>

{% endcapture %}
{% include example.html content=example %}

### Two-line list with graphic

{% capture example %}

<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <svg class="list-group-item-graphic" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
    <span class="list-group-item-text">
      <span>List item title with SVG</span>
      <span>Secondary text</span>
    </span>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">account_circle</span>
    <span class="list-group-item-text">
      <span>List item title with Text</span>
      <span>Secondary text</span>
    </span>
    <span class="material-icons list-group-item-meta">info</span>
   </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">account_circle</span>
    <span class="list-group-item-text">
      <span>List item title with icon/button</span>
      <span>Secondary text</span>
    </span>
    <a class="btn btn-icon ml-auto" href="#">
      <span class="material-icons">more_vert</span>
    </a>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">account_circle</span>
    <span class="list-group-item-text">
      <span>List item title with Text</span>
      <span>Secondary text</span>
    </span>
    <span class="list-group-item-meta">Meta</span>
   </li>
</ul>

{% endcapture %}
{% include example.html content=example %}

## Activated item

You can use default Bootstrap's `active` state for list items.

{% capture example %}

<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">inbox</span>
    Inbox
  </li>
  <li class="list-group-item active list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">star</span>
    Star
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">send</span>
    Send
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">drafts</span>
    Drafts
  </li>
</ul>

{% endcapture %}
{% include example.html content=example %}

### List with shaped activated item

Same as previous example. Just add `.list-group-shaped` CSS class to your `<ul class="list-group">`.

{% capture example %}

<ul class="list-group list-group-shaped">
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">inbox</span>
    Inbox
  </li>
  <li class="list-group-item active list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">star</span>
    Star
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">send</span>
    Send
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <span class="material-icons list-group-item-icon" aria-hidden="true">drafts</span>
    Drafts
  </li>
</ul>

{% endcapture %}
{% include example.html content=example %}

## List separator

To insert a separator in your lists, simply add this element `<li class="list-group-divider" role="separator"></li>`.

{% capture example %}

<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">folder</span>
    <span class="list-group-item-text">
      <span>Dog photos</span>
      <span>9 Jan 2018</span>
    </span>
    <span class="list-group-item-meta material-icons">info</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">folder</span>
    <span class="list-group-item-text">
      <span>Cat photos</span>
      <span>22 Dec 2017</span>
    </span>
    <span class="list-group-item-meta material-icons">info</span>
  </li>
  <li class="list-group-divider" role="separator"></li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">folder</span>
    <span class="list-group-item-text">
      <span>Potatoes</span>
      <span>30 Nov 2017</span>
    </span>
    <span class="list-group-item-meta material-icons">info</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex list-group-item-two-line">
    <span class="material-icons list-group-item-graphic" aria-hidden="true">folder</span>
    <span class="list-group-item-text">
      <span>Carrots</span>
      <span>17 Oct 2017</span>
    </span>
    <span class="list-group-item-meta material-icons">info</span>
  </li>
</ul>

{% endcapture %}
{% include example.html content=example %}

## List with selection controls

You can even use Bootstrap's default selection controls within your Lists. Don't change your HTML markup, just add `.d-flex` class to each `.list-group-item`.

### List with Trailing Checkbox

{% capture example %}

<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck1">
      <label class="custom-control-label" for="customCheck1">Dog Photos</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck2">
      <label class="custom-control-label" for="customCheck2">Cat Photos</label>
    </div>
  </li>
  <li class="list-group-divider" role="separator"></li>
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck3">
      <label class="custom-control-label" for="customCheck3">Potatoes</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck4">
      <label class="custom-control-label" for="customCheck4">Carrots</label>
    </div>
  </li>
</ul>

{% endcapture %}
{% include example.html content=example %}

### List with Trailing Radio Buttons

{% capture example %}

<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio1" name="customRadio">
      <label class="custom-control-label" for="customRadio1">Dog Photos</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio2" name="customRadio">
      <label class="custom-control-label" for="customRadio2">Cat Photos</label>
    </div>
  </li>
  <li class="list-group-divider" role="separator"></li>
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio3" name="customRadio">
      <label class="custom-control-label" for="customRadio3">Potatoes</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action d-flex">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio4" name="customRadio">
      <label class="custom-control-label" for="customRadio4">Carrots</label>
    </div>
  </li>
</ul>

{% endcapture %}
{% include example.html content=example %}
