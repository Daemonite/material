---
layout: docs
title: Typography
description: Material's typographic scale has a set of type sizes that balances content density and reading comfort under typical usage conditions.
group: material
toc: true
---

## Colours

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

### Theme colours

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

The basic set of styles are based on a typographic scale of 12, 14, 16, 20, and 34.

{% capture example %}
<p class="typography-display-4">Display 4 - Light 112sp</p>
<p class="typography-display-3">Display 3 - Regular 56sp</p>
<p class="typography-display-2">Display 2 - Regular 45sp</p>
<p class="typography-display-1">Display 1 - Regular 34sp</p>
<p class="typography-headline">Headline - Regular 24sp</p>
<p class="typography-title">Title - Medium 20sp</p>
<p class="typography-subheading">Subheading - Regular 16sp</p>
<p class="typography-body-2">Body 2 - Medium 14sp</p>
<p class="typography-body-1">Body 1 - Regular 14sp</p>
<p class="typography-caption">Caption - Regular 12sp</p>
{% endcapture %}
{% include example.html content=example %}
