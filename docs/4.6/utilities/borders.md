---
layout: docs
title: Borders
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: utilities
redirect_from:
  - /docs/4.6/utilities/
  - /docs/4.1/utilities/
  - /docs/4.1/utilities/borders/
toc: true
---

## Border

Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.

### Additive

<div class="bd-example-border-utils">
{% capture example %}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>
{% endcapture %}
{% include example.html content=example %}
</div>

### Subtractive

<div class="bd-example-border-utils bd-example-border-utils-0">
{% capture example %}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-right-0"></span>
<span class="border-bottom-0"></span>
<span class="border-left-0"></span>
{% endcapture %}
{% include example.html content=example %}
</div>

## Border color

Change the border color using utilities built on our theme colors.

<div class="bd-example-border-utils">
{% capture example %}
{% for color in site.data.theme-colors %}
<span class="border border-{{ color.name }}"></span>{% endfor %}
<span class="border border-white"></span>
{% endcapture %}
{% include example.html content=example %}
</div>

## Border-radius

Add classes to an element to easily round its corners. Following Material Design's subtle corners, `.rounded` (and its side variants) uses a `2px` radius by default (`$border-radius`).

<div class="bd-example bd-example-images">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded" alt="Example rounded image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-top" alt="Example top rounded image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-right" alt="Example right rounded image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-bottom" alt="Example bottom rounded image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-left" alt="Example left rounded image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-circle" alt="Completely round image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/150x75" class="rounded-pill" alt="Rounded pill image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-0" alt="Example non-rounded image (overrides rounding applied elsewhere)">
</div>

{% highlight html %}
<img src="..." alt="..." class="rounded">
<img src="..." alt="..." class="rounded-top">
<img src="..." alt="..." class="rounded-right">
<img src="..." alt="..." class="rounded-bottom">
<img src="..." alt="..." class="rounded-left">
<img src="..." alt="..." class="rounded-circle">
<img src="..." alt="..." class="rounded-pill">
<img src="..." alt="..." class="rounded-0">
{% endhighlight %}

## Sizes

Use `.rounded-lg` or `.rounded-sm` for larger or smaller border-radius. Material's radii are small, so the differences are subtle: `.rounded-sm` is `1px` (`$border-radius-sm`), `.rounded` is `2px` (`$border-radius`) and `.rounded-lg` is `4px` (`$border-radius-lg`).

<div class="bd-example bd-example-images">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-sm" alt="Example small rounded image">
  <img {{ site.holder_img_attrs }} data-src="holder.js/75x75" class="rounded-lg" alt="Example large rounded image">
</div>

{% highlight html %}
<img src="..." alt="..." class="rounded-sm">
<img src="..." alt="..." class="rounded-lg">
{% endhighlight %}
