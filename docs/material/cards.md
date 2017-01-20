---
layout: docs
title: Cards
description: A card is a sheet of material that serves as an entry point to more detailed information.
group: material
---

Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.

Most of the details about cards have been covered in Bootstrap cards docuementation. Please refer to [this page]({{ site.url }}/gh-pages/components/cards/index.html) for more details.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Supplemental actions

The primary action in a card is typically the card itself.

Supplemental actions can vary from card to card in a collection, depending on the content type and expected outcome.

Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card.

{% example html %}
<div class="card" style="width: 20rem;">
  <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-actions">
    <a class="btn btn-outline-primary" href="#">Action</a>
    <a class="btn btn-outline-primary" href="#">Action</a>
  </div>
</div>
{% endexample %}

Vertical action sheet is also supported. Add `.flex-column` or `.flex-column-reverse` to convert a horizontal action sheet to a vertical one.

{% example html %}
<div class="card" style="width: 20rem;">
  <img class="card-img-top" data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-actions flex-column">
    <a class="btn btn-outline-primary" href="#">Action</a>
    <a class="btn btn-outline-primary" href="#">Action</a>
  </div>
</div>
{% endexample %}
