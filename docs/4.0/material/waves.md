---
layout: docs
title: Waves
description: Implementation of click/touch target ripple animation.
group: material
toc: true
---

## Attach "waves" effect

Attach "waves" (ripple) effect to an HTML element by adding `.waves-attach` class.

**N.B.** Waves will require `material.js` or `material.min.js` in order to work.

{% example html %}
<a class="btn waves-attach" href="#">Button</a>

<button class="btn waves-attach" type="button">Button</button>
{% endexample %}

{% example html %}
<div class="list-group">
  <a class="list-group-item list-group-item-action waves-attach" href="#">Cras justo odio</a>
  <a class="list-group-item list-group-item-action waves-attach" href="#">Dapibus ac facilisis in</a>
  <a class="list-group-item list-group-item-action waves-attach" href="#">Morbi leo risus</a>
</div>
{% endexample %}

{% example html %}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active waves-attach" href="#">Cras justo odio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-attach" href="#">Dapibus ac facilisis in</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-attach" href="#">Morbi leo risus</a>
  </li>
</ul>
{% endexample %}

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active waves-attach" href="#">Cras justo odio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-attach" href="#">Dapibus ac facilisis in</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-attach" href="#">Morbi leo risus</a>
  </li>
</ul>
{% endexample %}

By default, "waves" effect creates a semi-transparent black ripple. To attach a semi-transparent white ripple on an HTML element with a dark background, add `.waves-light` class.

{% example html %}
<a class="btn btn-dark waves-attach waves-light" href="#">Button</a>

<button class="btn btn-dark waves-attach waves-light" type="button">Button</button>
{% endexample %}

To attach "waves" effect to a circular element such as a floating action button, add `.waves-cricle` class.

{% example html %}
<a class="btn btn-float waves-attach waves-circle" href="#"><i class="material-icons">add</i></a>

<button class="btn btn-dark btn-float waves-attach waves-circle waves-light" type="button"><i class="material-icons">add</i></button>
{% endexample %}

## IE tap highlight fix

By default if you access a web page using IE on Windows Phone, you will get a highlight effect when you tap on a button or a link. This highlight will shadow "waves" effect. To prevent this, you will need to add the `msapplication-tap-highlight` meta tag.

{% highlight html %}
<meta content="no" name="msapplication-tap-highlight">
{% endhighlight %}
