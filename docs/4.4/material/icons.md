---
layout: docs
title: Icons
description: Material takes advantage of the over 900 icons offered by the official icon set from Google.
group: material
---

<div class="list-group mt-lg-5">
    <a href="https://material.io/resources/icons/?style=baseline" target="_blank" rel="nofollow" class="list-group-item list-group-item-action lgi-icon-md">Material Design Icons</a>
</div>

## Choose your icon set

Daemonite Material UI is dependent of Material Design Icons and therefore requires at least this stylesheet declaration in your HTML header.

{% highlight html %}
<link href="{{ site.cdn.md_icon }}" rel="stylesheet">
{% endhighlight %}

For more creativity, it is compatible with all variants of Material Design Icons (Filled, Outlined, Rounded, Two-Tone and Sharp versions, declared in this order below).

You can apply changes immediately by modifying the stylesheet declaration according to the icon set you want (pick the one you want below).

{% highlight html %}
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Two+Tone" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Sharp" rel="stylesheet">
{% endhighlight %}

You can even mix multiple icons set within your page with a combined stylesheet declaration like this.

{% highlight html %}
<link href="https://fonts.googleapis.com/css2?family=Material+Icons&family=Material+Icons+Outlined" rel="stylesheet">
{% endhighlight %}

## HTML markup

Then, it's easy to incorporate icons into your web page. You can browse the icon set and copy-paste the HTML markup from the [Material icons library](https://material.io/resources/icons/).

Here’s a small example:

{% capture example %}
<i class="material-icons">face</i>
{% endcapture %}
{% include example.html content=example %}

In order to allow you to switch fast from one icon set to another, Daemonite Material promotes the usage of the default HTML markup using `<i class="material-icons">...</i>`.

<!---
WIP In the case you use 2 Icons sets on a page, you will need to specify ...
-->

**NB. For browsers that do not support ligatures, fall back to specifying the icons using numeric character references like the example below:**

{% capture example %}
<i class="material-icons">&#xE87C;</i>
{% endcapture %}
{% include example.html content=example %}

For all available icons, please refer to [Material icons library](https://material.io/resources/icons/).
