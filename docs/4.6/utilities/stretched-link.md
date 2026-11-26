---
layout: docs
title: Stretched link
description: Make any HTML element or Bootstrap component clickable by "stretching" a nested link via CSS.
group: utilities
toc: true
---

## How it works

Add `.stretched-link` to a link to make its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) clickable via a `::after` pseudo element. In most cases, this means that an element with `position: relative;` that contains a link with the `.stretched-link` class is clickable. Please note given [how CSS `position` works](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.stretched-link` cannot be mixed with most table elements.

Cards have `position: relative` by default, so in this case you can safely add the `.stretched-link` class to a link in the card without any other HTML changes.

Material's buttons are `position: relative` too (for their ripple), which would normally make a button its own containing block. A `.btn.stretched-link` is therefore reset to `position: static`, so that it stretches over its positioned ancestor (the card below) as it does in Bootstrap. Disabled stretched links (`.disabled`, `:disabled` or inside a disabled `<fieldset>`) can't be clicked through their `::after`.

Multiple links and tap targets are not recommended with stretched links. However, some `position` and `z-index` styles can help should this be required.

{% capture example %}
<div class="card" style="width: 18rem;">
  <img class="card-img-top" {{ site.holder_img_attrs }} data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-body">
    <h3 class="card-title h5">Card with stretched link</h3>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a class="btn btn-primary stretched-link" href="#">Go somewhere</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Media objects do not have `position: relative` by default, so we need to add the `.position-relative` here to prevent the link from stretching outside the media object.

{% capture example %}
<div class="media position-relative">
  <img class="mr-3" {{ site.holder_img_attrs }} data-src="holder.js/144x144" alt="Generic placeholder image">
  <div class="media-body">
    <h3 class="mt-0 h5">Media with stretched link</h3>
    <p>This is some placeholder content for the media object. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a class="stretched-link" href="#">Go somewhere</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Columns are `position: relative` by default, so clickable columns only require the `.stretched-link` class on a link. However, stretching a link over an entire `.row` requires `.position-static` on the column and `.position-relative` on the row.

{% capture example %}
<div class="row no-gutters bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img class="w-100" {{ site.holder_img_attrs }} data-src="holder.js/100px200/" alt="Generic placeholder image">
  </div>
  <div class="col-md-6 position-static p-4 pl-md-0">
    <h3 class="mt-0 h5">Columns with stretched link</h3>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a class="stretched-link" href="#">Go somewhere</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Identifying the containing block

If the stretched link doesn't seem to work, the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) will probably be the cause. The following CSS properties will make an element the containing block:

- A `position` value other than `static`
- A `transform` or `perspective` value other than `none`
- A `will-change` value of `transform` or `perspective`
- A `filter` value other than `none` or a `will-change` value of `filter` (only works on Firefox)

{% capture example %}
<div class="card" style="width: 18rem;">
  <img class="card-img-top" {{ site.holder_img_attrs }} data-src="holder.js/100px180/" alt="Card image cap">
  <div class="card-body">
    <h3 class="card-title h5">Card with stretched links</h3>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">
      <a class="stretched-link text-danger" href="#" style="position: relative;">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>
    </p>
    <p class="card-text bg-light" style="transform: rotate(0);">
      This <a class="text-warning stretched-link" href="#">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
