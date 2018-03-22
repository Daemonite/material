---
layout: docs
title: Icons
description: Material takes advantage of the over 900 icons offered by the official icon set from Google.
group: material
---

## Quick start

The easiest way to set up icon fonts for use in any web page is through [Google Web Fonts](https://developers.google.com/fonts/). All you need to do is include a single line of HTML:

{% highlight html %}
<link href="{{ site.cdn.md_icon }}" rel="stylesheet">
{% endhighlight %}

Then, it's easy to incorporate icons into your web page. Here’s a small example:

{% capture example %}
<i class="material-icons">face</i>
{% endcapture %}
{% include example.html content=example %}

This example uses a typographic feature called [ligatures](http://alistapart.com/article/the-era-of-symbol-fonts), which allows rendering of an icon glyph simply by using its textual name. The replacement is done automatically by the web browser and provides more readable code than the equivalent numeric character reference. This feature is supported in most modern browsers on both desktop and mobile devices.

For browsers that do not support ligatures, fall back to specifying the icons using numeric character references like the example below:

{% capture example %}
<i class="material-icons">&#xE87C;</i>
{% endcapture %}
{% include example.html content=example %}

For all available icons, please refer to [Material icons library](https://material.io/icons/).
