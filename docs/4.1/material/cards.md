---
layout: docs
title: Cards
description: A card is a sheet of material that serves as an entry point to more detailed information.
group: material
---

Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.

**Most of the details about cards have been covered in Components/Cards documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/card/) for more details.**

**N.B.** According to Material Design, flat buttons should be used in cards.

## Supplemental actions

The primary action in a card is typically the card itself.

Supplemental actions can vary from card to card in a collection, depending on the content type and expected outcome.

Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card.

{% capture example %}
<div class="card" style="width: 20rem;">
  <img alt="Card image cap" class="card-img-top" data-src="holder.js/100px180/">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-actions">
    <a class="btn btn-outline-primary" href="#">Action</a>
    <a class="btn btn-outline-primary" href="#">Action</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Vertical action sheet is also supported. Add `.flex-column` or `.flex-column-reverse` to convert a horizontal action sheet to a vertical one.

{% capture example %}
<div class="card" style="width: 20rem;">
  <img alt="Card image cap" class="card-img-top" data-src="holder.js/100px180/">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-actions flex-column">
    <a class="btn btn-outline-primary" href="#">Action</a>
    <a class="btn btn-outline-primary" href="#">Action</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
