---
layout: docs
title: Snackbars
meta_description: Material design snackbars for Bootstrap 4
description: Snackbars provide brief messages about app processes at the bottom of the screen.
group: material
redirect_from:
  - /docs/4.4/material/snackbars/
  - /docs/4.5/material/snackbars/
toc: true
---

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.

<div class="list-group my-md-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/toasts/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Toasts</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/snackbars" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Snackbars</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/snackbar" rel="external nofollow noopener" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: Snackbar</a>
</div>

**Daemonite is using default Bootstrap's toast HTML markup without extra CSS**.  
Here are just a few demos to show how to use it best.

## Live demo

<div class="toast-container">
  <div class="toast" id="toast-demo1" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
    <div class="toast-header">
      Saved in "Wedding" album
    </div>
  </div>
</div>

<div class="toast-container justify-content-start">
  <div class="toast" id="toast-demo2" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
    <div class="toast-header">
      Saved in "Wedding" album
    </div>
  </div>
</div>

<div class="toast-container">
  <div class="toast" id="toast-demo3" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000">
    <div class="toast-header">
      Can't send photo. Retry in 5 seconds.
      <button type="button" class="btn">Retry</button>
    </div>
  </div>
</div>

<div class="toast-container">
  <div class="toast" id="toast-demo4" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
    <div class="toast-body">
      <span class="mr-2">This item already has the label "travel". <br>You can add a new label</span>
      <button type="button" class="btn">Action</button>
    </div>
  </div>
</div>

<div class="toast-container">
  <div class="toast" id="toast-demo5" role="alert" aria-live="assertive" aria-atomic="true" data-delay="7000">
    <div class="toast-header w-75">This item already has the label "travel". You can add a new label</div>
    <div class="toast-body">
      <button type="button" class="btn">Add a new label</button>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" id="toast-demo1-btn">
    Simplest Snackbar
  </button>
  <button type="button" class="btn btn-primary" id="toast-demo2-btn">
    Bottom left Snackbar
  </button>
  <button type="button" class="btn btn-primary" id="toast-demo3-btn">
    1-line + Action
  </button>
  <button type="button" class="btn btn-primary" id="toast-demo4-btn">
    2-lines + Action
  </button>
  <button type="button" class="btn btn-primary" id="toast-demo5-btn">
    2-lines + long Action
  </button>
</div>

You will find many examples below to use it perfectly.

## Snackbar container and position

Wrap every toast in a `<div class="toast-container">` to have the default **centered bottom** alignment.

Control the duration of the snackbar with `data-delay="4000"` (in ms). Google states that Snackbars should be displayed from 4 to 10 seconds.

<div class="bd-example bd-example-snackbars">
  <div class="toast" id="toast-example1" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
    <div class="toast-header">
      Saved in "Wedding" album
    </div>
  </div>
</div>

{% highlight html %}
<div class="toast-container">
  <div class="toast" id="toast-example1" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
    <div class="toast-header">
      Saved in "Wedding" album
    </div>
  </div>
</div>
{% endhighlight %}

### Display bottom-left

Add `.justify-content-start` utility class to the `.toast-container` to align snackbar bottom left.

## Snackbar variations

### Single line message with or without action

For a single line message (with or without a button), you can wrap your text and your button within a `.toast-header` or `.toast-body` div.

If you set an Action button, just add `.btn` class to it for perfect color and positioning.

<div class="bd-example bd-example-snackbars">
  <div class="toast" id="toast-example2" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000">
    <div class="toast-header">
      Can't send photo. Retry in 5 seconds.
      <button type="button" class="btn">Retry</button>
    </div>
  </div>
</div>

{% highlight html %}
<div class="toast-container">
  <div class="toast" id="toast-example2" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000">
    <div class="toast-header">
      Can't send photo. Retry in 5 seconds.
      <button type="button" class="btn">Retry</button>
    </div>
  </div>
</div>
{% endhighlight %}

<div class="bd-example bd-example-snackbars">
  <div class="toast" id="toast-example3" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000">
    <div class="toast-body">
      Can't send photo. Retry in 5 seconds.
      <button type="button" class="btn">Retry</button>
    </div>
  </div>
</div>

{% highlight html %}
<div class="toast-container">
  <div class="toast" id="toast-example3" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000">
    <div class="toast-body">
      Can't send photo. Retry in 5 seconds.
      <button type="button" class="btn">Retry</button>
    </div>
  </div>
</div>
{% endhighlight %}

### Two line message with action

You can still wrap text and button in a `.toast-header` or `.toast-body`.

The text should be wrapped in a `<span class="mr-2">Text</span>`. Use a `<br>` to break the text.

<div class="bd-example bd-example-snackbars">
  <div class="toast" id="toast-example4" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
    <div class="toast-header">
      <span class="mr-2">This item already has the label "travel". <br>You can add a new label</span>
      <button type="button" class="btn">Action</button>
    </div>
  </div>
</div>

{% highlight html %}
<div class="toast-container">
  <div class="toast" id="toast-example4" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
    <div class="toast-body">
      <span class="mr-2">This item already has the label "travel". <br>You can add a new label</span>
      <button type="button" class="btn">Action</button>
    </div>
  </div>
</div>
{% endhighlight %}

### Two line message with longer Action button

Place your text in the `.toast-header`. You can break your text with a `<br>` or add CSS class `.w-75` to the `.toast-header`.

Set your button in the `.toast-body`.

<div class="bd-example bd-example-snackbars">
  <div class="toast" id="toast-example5" role="alert" aria-live="assertive" aria-atomic="true" data-delay="7000">
    <div class="toast-header w-75">This item already has the label "travel". You can add a new label</div>
    <div class="toast-body">
      <button type="button" class="btn">Add a new label</button>
    </div>
  </div>
</div>

{% highlight html %}
<div class="toast-container">
  <div class="toast" id="toast-example5" role="alert" aria-live="assertive" aria-atomic="true" data-delay="7000">
    <div class="toast-header w-75">This item already has the label "travel". You can add a new label</div>
    <div class="toast-body">
      <button type="button" class="btn">Add a new label</button>
    </div>
  </div>
</div>
{% endhighlight %}
