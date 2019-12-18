---
layout: docs
title: Typography
description: Material's typographic scale has a set of type sizes that balances content density and reading comfort under typical usage conditions.
group: material
toc: true
---

## colors

### Black and white variations

{% capture example %}
<div class="bg-light-4 card card-body">
  <p class="text-black">.text-black</p>
  <p class="text-black-primary">.text-black-primary</p>
  <p class="text-black-secondary">.text-black-secondary</p>
  <p class="text-black-hint">.text-black-hint</p>
  <p class="text-black-divider">.text-black-divider</p>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="bg-dark-1 card card-body">
  <p class="text-white">.text-white</p>
  <p class="text-white-primary">.text-white-primary</p>
  <p class="text-white-secondary">.text-white-secondary</p>
  <p class="text-white-hint">.text-white-hint</p>
  <p class="text-white-divider">.text-white-divider</p>
</div>
{% endcapture %}
{% include example.html content=example %}

### Theme colors

{% capture example %}
<div class="bg-light-4 card card-body">
  <p class="text-primary">.text-primary</p>
  <p class="text-secondary">.text-secondary</p>
  <p class="text-danger">.text-danger</p>
  <p class="text-info">.text-info</p>
  <p class="text-success">.text-success</p>
  <p class="text-warning">.text-warning</p>
  <p class="text-dark">.text-dark</p>
  <p class="bg-dark-1 text-light">.text-light</p>
</div>
{% endcapture %}
{% include example.html content=example %}

## Styles

**Roboto** is the standard typeface. Please make sure to load Roboto by including a single line of HTML:

{% highlight html %}
<link href="{{ site.cdn.md_font }}" rel="stylesheet">
{% endhighlight %}

By default, Material utilises 4 weights, `300` (light), `400` (regular), `500` (medium) and `700` (bold), of Roboto, but you may need to include fewer or more weights based on your specific usage. In addition, `300i`, `400i`, `500i` and `700i` are also included in the above code, but can be safely removed in some cases to speed up page load time.

The basic set of styles are based on a typographic scale of 12, 14, 16, 20, and 34 px.

{% capture example %}
<p class="typography-headline-1">Headline 1</p>
<p class="typography-headline-2">Headline 2</p>
<p class="typography-headline-3">Headline 3</p>
<p class="typography-headline-4">Headline 4</p>
<p class="typography-headline-5">Headline 5</p>
<p class="typography-headline-6">Headline 6</p>
<p class="typography-subtitle-1">Subtitle 1</p>
<p class="typography-subtitle-2">Subtitle 2</p>
<p class="typography-body-1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
<p class="typography-body-2">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
<p class="typography-caption">Caption text</p>
<p class="typography-overline">OVERLINE TEXT</p>
{% endcapture %}
{% include example.html content=example %}
