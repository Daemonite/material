---
layout: docs
title: Cards
description: Cards contain content and actions about a single subject.
group: material
toc: true
---

Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.

<div class="list-group my-2 my-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/card/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Card</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/cards" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Cards</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/card" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Card</a>
</div>

**N.B.** According to Material Design, flat buttons should be used in cards.

## Supplemental actions

The primary action area of a card is typically the card itself. Often cards are one large touch target to a detail screen on a subject.

Supplemental actions are represented by icons, text, and UI controls on cards. They are typically placed at the bottom of the card.

For more than two supplemental actions, use an overflow menu instead.

Keep the classic card layout with `card-header` and `card-body`, but make sure you group all buttons in a `card-actions` div for proper alignment and spacing.

You can still use links or buttons for card buttons. Icon buttons, `.btn-icon` are right-aligned thanks to flex utility `.ml-auto` (*margin-left: auto*).

{% capture example %}
<div class="card" style="max-width: 350px;">
  <img loading="lazy" alt="The Grand Canal in Venice" class="card-img-top" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg">
  <div class="card-header border-0">
    <h5 class="card-title">Our Changing Planet</h5>
    <h6 class="card-subtitle">by Kurt Wagner</h6>
  </div>
  <div class="card-body pt-0">
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
  </div>
  <div class="card-actions">
    <a class="card-link" href="#">read</a>
    <a class="card-link" href="#">bookmark</a>
    <button class="btn btn-icon ml-auto" type="button"><i class="material-icons">favorite_border</i></button>
    <button class="btn btn-icon" type="button"><i class="material-icons">share</i></button>
    <button class="btn btn-icon" type="button"><i class="material-icons">more_vert</i></button>
 </div>
</div>
{% endcapture %}
{% include example.html content=example %}

You can use the button HTML markup you want in a card (either using a link or a button) : `card-link`, `btn-link` or `btn-flat-primary`.

{% capture example %}
<div class="card" style="max-width: 350px;">
  <div class="card-body">
    <h5 class="card-title">Our Changing Planet</h5>
    <h6 class="card-subtitle">by Kurt Wagner</h6>
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
  </div>
  <div class="card-actions">
    <a class="card-link" href="#">C-Link</a>
    <a class="btn btn-link" href="#">B-Link</a>
    <button class="btn btn-flat-primary" type="button">button</button>
 </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="card" style="max-width: 350px;">
  <img loading="lazy" alt="The Grand Canal in Venice" class="card-img-top" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg">
  <div class="card-header border-0">
    <h5 class="card-title">Our Changing Planet</h5>
    <h6 class="card-subtitle">by Kurt Wagner</h6>
  </div>
  <div class="card-body pt-0">
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
  </div>
  <div class="card-actions">
    <a class="btn btn-flat-primary" href="#">read</a>
    <a class="btn btn-flat-primary" href="#">bookmark</a>
    <button class="btn btn-icon ml-auto" type="button"><i class="material-icons">favorite_border</i></button>
    <button class="btn btn-icon" type="button"><i class="material-icons">share</i></button>
    <button class="btn btn-icon" type="button"><i class="material-icons">more_vert</i></button>
 </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Example without `card-actions` div. Apply `border-0` utility to the card-header in order to remove border.

{% capture example %}
<div class="card" style="max-width: 350px;">
  <img loading="lazy" alt="The Grand Canal in Venice" class="card-img-top" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg">
  <div class="card-header border-0">
    <h5 class="card-title">Our Changing Planet</h5>
    <h6 class="card-subtitle">by Kurt Wagner</h6>
  </div>
  <div class="card-body pt-0">
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
   </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Another card without image banner and icon buttons pushed to the end with `.justify-content-end` flex utility.

{% capture example %}
<div class="card" style="max-width: 350px;">
  <div class="card-header border-0">
    <h5 class="card-title">Our Changing Planet</h5>
    <h6 class="card-subtitle">by Kurt Wagner</h6>
  </div>
  <div class="card-body pt-0">
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
  </div>
  <div class="card-actions justify-content-end">
    <button class="btn btn-icon" type="button"><i class="material-icons">favorite_border</i></button>
    <button class="btn btn-icon" type="button"><i class="material-icons">share</i></button>
    <button class="btn btn-icon" type="button"><i class="material-icons">more_vert</i></button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

You can use a simplified HTML markup and omit `.card-header` container to obtain the same result.

This card is styled in shape with `card-shaped` class you can apply to the `.card` container.

Buttons are still separated thanks to a flex utility `.ml-auto` applied to the first of the icon buttons.

{% capture example %}
<div class="card card-shaped" style="max-width: 350px;">
  <div class="card-body">
    <h5 class="card-title">Our Changing Planet</h5>
    <h6 class="card-subtitle">by Kurt Wagner</h6>
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
  </div>
  <div class="card-actions">
    <a class="btn btn-flat-primary" href="#">read</a>
    <a class="btn btn-flat-primary" href="#">bookmark</a>
    <a class="btn btn-icon ml-auto" href="#"><i class="material-icons">favorite_border</i></a>
    <a class="btn btn-icon" href="#"><i class="material-icons">share</i></a>
    <a class="btn btn-icon" href="#"><i class="material-icons">more_vert</i></a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Outlined card obtained by using standard Bootstrap utilities : `.shadow-none` to remove card's shading and `border` to apply a slight border around the card.

This card uses a simplified HTML markup without `.card-header` container. We can't make it simpler ;-&#41;

{% capture example %}
<div class="card shadow-none border" style="max-width: 350px;">
  <div class="card-body">
   <h5 class="card-title">Card title</h5>
   <h6 class="card-subtitle">Secondary text</h6>
   <p class="card-text">Greyhound divisively hello coldly wonderfully marginally far upon excluding.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

And the exact same Outlined card with a `card-header` container. Your choice !

{% capture example %}
<div class="card shadow-none border" style="max-width: 350px;">
  <div class="card-header border-0">
   <h5 class="card-title">Card title</h5>
   <h6 class="card-subtitle">Secondary text</h6>
  </div>
  <div class="card-body pt-0">
   <p class="card-text">Greyhound divisively hello coldly wonderfully marginally far upon excluding.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Card primary action

If the whole card is the action itself, you can add `card-primary action` to the card itself. It will give it a nice background, a shadow effect on hover and a ripple effect on click.

As a Primary action is frequently a link, it is perfect to use it with [Bootstrap's utility `stretched-link`]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/stretched-link/) (NB. Stretched-link requires container to be set to `position: relative`, but `card-primary-action` is).

{% capture example %}
<div class="card card-body card-primary-action flex-row" style="width: 250px;">
  <span class="material-icons text-primary mt-2 mr-4" style="font-size: 48px;">palette</span>
  <div>
    <h5 class="typography-body-2 font-weight-bold"><a href="#" class="stretched-link text-reset">Applying color to UI</a></h5>
    <h6 class="typography-body-2 mb-0">In a UI, color has a variety of roles:...</h6>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

The `card-primary-action` can be set on card-body also. But it won't have the box-shadow effect.

{% capture example %}
<div class="card" style="max-width: 350px;">
  <div class="card-body card-primary-action">
    <h5 class="card-title">Our Changing Planet</h5>
    <h6 class="card-subtitle">by Kurt Wagner</h6>
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
    <a href="#" class="stretched-link"></a>
  </div>
  <div class="card-actions">
    <a class="btn btn-flat-primary" href="#">read</a>
    <a class="btn btn-flat-primary" href="#">bookmark</a>
    <a class="btn btn-icon ml-auto" href="#"><i class="material-icons">favorite_border</i></a>
    <a class="btn btn-icon" href="#"><i class="material-icons">share</i></a>
    <a class="btn btn-icon" href="#"><i class="material-icons">more_vert</i></a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Vertical actions

**Vertical actions are no longer part of Material guidelines. However, for backward compatibility, they are kept in Daemonite Material.**
{: .mt-5 }

Vertical action sheet is also supported. Add `.flex-column` or `.flex-column-reverse` to convert a horizontal action sheet to a vertical one.

{% capture example %}
<div class="card" style="max-width: 20rem;">
  <img loading="lazy" alt="Card image cap" class="card-img-top" data-src="holder.js/100px180/">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-actions flex-column">
    <a class="btn btn-link" href="#">Action 1</a>
    <a class="btn btn-link" href="#">Action 2</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
