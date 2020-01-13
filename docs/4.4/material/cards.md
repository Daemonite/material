---
layout: docs
title: Cards
description: Cards contain content and actions about a single subject.
group: material
---

Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.

<div class="list-group my-2 my-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/card/" target="_blank" class="list-group-item list-group-item-action lgi-icon-bs">Bootstrap documentation: Card
      <span class="d-block font-weight-normal text-black-secondary"> Most of the details have been covered here</span>
    </a>
    <a href="https://material.io/components/cards/" target="_blank" class="list-group-item list-group-item-action lgi-icon-md">Material Design guidelines: Cards</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/card" target="_blank" class="list-group-item list-group-item-action lgi-icon-mdc">Material Components for the web: Card</a>
</div>

**N.B.** According to Material Design, flat buttons should be used in cards.

## Supplemental actions

The primary action area of a card is typically the card itself. Often cards are one large touch target to a detail screen on a subject.

Supplemental actions are represented by icons, text, and UI controls on cards. They are typically placed at the bottom of the card.

For more than two supplemental actions, use an overflow menu instead.

Keep the classic card layout with `card-header` and `card-body`, but make sure you group all buttons in a `card-actions` div for proper alignment and spacing.

You can still use links or buttons for card buttons. Icon buttons, `.btn-icon` are right-aligned thanks to flex utility `.ml-auto` (*margin-left: auto*).

**NB.** `.text-black-secondary` has been added to the following example to copy MDComponents card examples (0.54 opacity). However you don't require these as `.card-subtitle` and `.card-text` have been styled as in Google's guidelines, with a 0.6 opacity.

{% capture example %}
<div class="card" style="max-width: 350px;">
  <img alt="The Grand Canal in Venice" class="card-img-top" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg">
  <div class="card-header border-0">
    <h2 class="card-title">Our Changing Planet</h2>
    <h3 class="card-subtitle text-black-secondary">by Kurt Wagner</h3>
  </div>
  <div class="card-body">
    <p class="card-text text-black-secondary">Visit ten places on our planet that are undergoing the biggest changes today.</p>
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

You can use the button HTML markup you want in a card (either using a link or a button) : `card-link`, `btn-link` or `btn-card-primary`.

{% capture example %}
<div class="card" style="max-width: 350px;">
  <div class="card-body">
    <h2 class="card-title">Our Changing Planet</h2>
    <h3 class="card-subtitle text-black-secondary">by Kurt Wagner</h3>
    <p class="card-text text-black-secondary">Visit ten places on our planet that are undergoing the biggest changes today.</p>
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
  <img alt="The Grand Canal in Venice" class="card-img-top" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg">
  <div class="card-header border-0">
    <h2 class="card-title">Our Changing Planet</h2>
    <h3 class="card-subtitle text-black-secondary">by Kurt Wagner</h3>
  </div>
  <div class="card-body">
    <p class="card-text text-black-secondary">Visit ten places on our planet that are undergoing the biggest changes today.</p>
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
  <img alt="The Grand Canal in Venice" class="card-img-top" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg">
  <div class="card-header border-0">
    <h2 class="card-title">Our Changing Planet</h2>
    <h3 class="card-subtitle">by Kurt Wagner</h3>
  </div>
  <div class="card-body">
    <p class="card-text">Visit ten places on our planet that are undergoing the biggest changes today.</p>
   </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Another card without image banner and icon buttons pushed to the end with `.justify-content-end` flex utility.

{% capture example %}
<div class="card" style="max-width: 350px;">
  <div class="card-header border-0">
    <h2 class="card-title">Our Changing Planet</h2>
    <h3 class="card-subtitle">by Kurt Wagner</h3>
  </div>
  <div class="card-body">
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
    <h2 class="card-title">Our Changing Planet</h2>
    <h3 class="card-subtitle">by Kurt Wagner</h3>
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
   <h2 class="card-title">Card title</h2>
   <h3 class="card-subtitle">Secondary text</h3>
   <p class="card-text">Greyhound divisively hello coldly wonderfully marginally far upon excluding.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

And the exact same Outlined card with a `card-header` container. Your choice !

{% capture example %}
<div class="card shadow-none border" style="max-width: 350px;">
  <div class="card-header border-0">
   <h2 class="card-title">Card title</h2>
   <h3 class="card-subtitle">Secondary text</h3>
  </div>
  <div class="card-body">
   <p class="card-text">Greyhound divisively hello coldly wonderfully marginally far upon excluding.</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
