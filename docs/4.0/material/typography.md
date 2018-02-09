---
layout: docs
title: Typography
description: Material's typographic scale has a set of type sizes that balances content density and reading comfort under typical usage conditions.
group: material
---

## Styles

**Roboto** is the standard typeface. Please make sure to load Roboto by including a single line of HTML:

{% highlight html %}
<link href="{{ site.cdn.md_font }}" rel="stylesheet">
{% endhighlight %}

By default, Material utilises 4 weights, `300` (light), `400` (regular), `500` (medium) and `700` (bold), of Roboto, but you may need to include fewer or more weights based on your specific usage. In addition, `300i`, `400i`, `500i` and `700i` are also included in the above code, but can be safely removed in some cases to speed up page load time.

The basic set of styles are based on a typographic scale of 12, 14, 16, 20, and 34.

{% example html %}
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
{% endexample %}
