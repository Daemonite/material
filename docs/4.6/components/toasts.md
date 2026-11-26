---
layout: docs
title: Toasts
description: Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
group: components
toc: true
---

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They're built with flexbox, so they're easy to align and position.

Material styles Bootstrap's toasts as [snackbars]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/snackbars/): a dark, opaque surface with light text and a Material elevation shadow, instead of Bootstrap's translucent white card. Unlike `.snackbar`, a toast isn't fixed to the bottom of the viewport, so you can place it, and stack several toasts, wherever you need them. Material's own `.snackbar` component remains available, and is still the better fit for a single, brief message at the bottom of the screen.

## Overview

Things to know when using the toast plugin:

- Toasts use Bootstrap's toast plugin, included in Bootstrap's compiled JavaScript (`bootstrap.js` or `bootstrap.min.js`) since v4.2. If you're building Bootstrap's JavaScript from source, it requires `util.js`.
- Toasts are opt-in for performance reasons, so **you must initialize them yourself**.
- **Please note that you are responsible for positioning toasts.**
- Toasts will automatically hide if you do not specify `autohide: false`.

{% capture callout %}
The fade animation of toasts depends on the `prefers-reduced-motion` media query. Material removes its transitions when a user has asked for reduced motion.
{% endcapture %}
{% include callout.html content=callout type="info" %}

## Examples

### Basic

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.

Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your "toasted" content and strongly encourage a dismiss button.

The examples on this page add `.show` so that they are visible straight away. In your own pages, start a toast with `.hide` instead (as the live example below does), and show it with the [`show` method](#toastshow). Without either class a toast is transparent but still takes up space, and its close button can still receive focus.

{% capture example %}
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
    <strong class="mr-auto">Material</strong>
    <small>11 mins ago</small>
    <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Live

Click the button below to show a toast (positioned in the lower right corner) that has been hidden by default with `.hide`. The toast comes right after the button in the page, so it's next in the tab order, and it stays until it's dismissed. Its container is a persistent live region, so screen readers announce the toast when it appears.

<div class="bd-example">
  <button class="btn btn-primary" id="liveToastBtn" type="button">Show live toast</button>
  <div class="position-fixed p-3" style="right: 0; bottom: 0; z-index: 60;" aria-live="polite" aria-atomic="true">
    <div class="toast hide" id="liveToast" role="status" data-autohide="false">
      <div class="toast-header">
        <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
        <strong class="mr-auto">Material</strong>
        <small>11 mins ago</small>
        <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<button class="btn btn-primary" id="liveToastBtn" type="button">Show live toast</button>

<div class="position-fixed p-3" style="right: 0; bottom: 0; z-index: 60;" aria-live="polite" aria-atomic="true">
  <div class="toast hide" id="liveToast" role="status" data-autohide="false">
    <div class="toast-header">
      <img class="rounded mr-2" src="..." alt="...">
      <strong class="mr-auto">Material</strong>
      <small>11 mins ago</small>
      <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
{% endhighlight %}

{% highlight js %}
$('#liveToastBtn').on('click', function () {
  $('#liveToast').toast('show')
})
{% endhighlight %}

### Stacking

When you have multiple toasts, we default to vertically stacking them in a readable manner.

{% capture example %}
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
    <strong class="mr-auto">Material</strong>
    <small>just now</small>
    <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    See? Just like this.
  </div>
</div>

<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
    <strong class="mr-auto">Material</strong>
    <small>2 seconds ago</small>
    <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Heads up, toasts will stack automatically
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Without a header

A toast doesn't need a header: a `.toast-body` on its own, with a dismiss button laid out with flexbox utilities, looks like a Material snackbar.

{% capture example %}
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex align-items-center">
    <div class="toast-body mr-auto">
      Single line of text directly related to the operation performed
    </div>
    <button class="mr-3 close" aria-label="Close" data-dismiss="toast" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Placement

Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you're only ever going to show one toast at a time, put the positioning styles right on the `.toast`.

{% capture example %}
<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
  <div class="toast show" style="position: absolute; top: 0; right: 0;">
    <div class="toast-header">
      <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
      <strong class="mr-auto">Material</strong>
      <small>11 mins ago</small>
      <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

For systems that generate more notifications, consider using a wrapping element so they can easily stack.

{% capture example %}
<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 240px;">
  <!-- Position it -->
  <div style="position: absolute; top: 0; right: 0;">

    <!-- Then put toasts within -->
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
        <strong class="mr-auto">Material</strong>
        <small>just now</small>
        <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
        <strong class="mr-auto">Material</strong>
        <small>2 seconds ago</small>
        <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.

{% capture example %}
<!-- Flexbox container for aligning the toasts -->
<div class="d-flex justify-content-center align-items-center" aria-live="polite" aria-atomic="true" style="height: 200px;">

  <!-- Then put toasts within -->
  <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
      <strong class="mr-auto">Material</strong>
      <small>11 mins ago</small>
      <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Accessibility

Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, include `aria-atomic="true"` to ensure that the entire toast is always announced as a single (atomic) unit, rather than just announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the [alert component]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/alerts/) instead of toast.

Note that the live region needs to be present in the markup *before* the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.

You also need to adapt the `role` and `aria-live` level depending on the content. If it's an important message like an error, use `role="alert" aria-live="assertive"`, otherwise use `role="status" aria-live="polite"` attributes.

As the content you're displaying changes, be sure to update the [`delay` timeout](#options) so that users have enough time to read the toast.

{% highlight html %}
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
{% endhighlight %}

When using `autohide: false`, you must add a close button to allow users to dismiss the toast.

{% capture example %}
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
  <div class="toast-header">
    <img class="rounded mr-2" {{ site.holder_img_attrs }} data-src="holder.js/20x20?bg=9c27b0&fg=9c27b0&text=M" alt="">
    <strong class="mr-auto">Material</strong>
    <small>11 mins ago</small>
    <button class="ml-2 mb-1 close" aria-label="Close" data-dismiss="toast" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

While technically it's possible to add focusable/actionable controls (such as additional buttons or links) in your toast, you should avoid doing this for autohiding toasts. Even if you give the toast a long [`delay` timeout](#options), keyboard and assistive technology users may find it difficult to reach the toast in time to take action (since toasts don't receive focus when they are displayed). If you absolutely must have further controls, we recommend using a toast with `autohide: false`.

## JavaScript behavior

### Usage

Initialize toasts via JavaScript:

{% highlight js %}$('.toast').toast(option){% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>animation</td>
      <td>boolean</td>
      <td>true</td>
      <td>Apply a CSS fade transition to the toast</td>
    </tr>
    <tr>
      <td>autohide</td>
      <td>boolean</td>
      <td>true</td>
      <td>Auto hide the toast</td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number</td>
      <td>
        <code>500</code>
      </td>
      <td>Delay hiding the toast (ms)</td>
    </tr>
  </tbody>
</table>

### Methods

{% include callout-danger-async-methods.md %}

#### `$().toast(options)`

Attaches a toast handler to an element collection.

#### `.toast('show')`

Reveals an element's toast. **Returns to the caller before the toast has actually been shown** (i.e. before the `shown.bs.toast` event occurs). You have to manually call this method, otherwise your toast won't show.

{% highlight js %}$('#element').toast('show'){% endhighlight %}

#### `.toast('hide')`

Hides an element's toast. **Returns to the caller before the toast has actually been hidden** (i.e. before the `hidden.bs.toast` event occurs). You have to manually call this method if you made `autohide` to `false`.

{% highlight js %}$('#element').toast('hide'){% endhighlight %}

#### `.toast('dispose')`

Removes the toast plugin from an element (its data and event handlers). The element stays in the DOM, and `dispose` doesn't hide it, so a visible toast stays visible and its close button can still receive focus. Hide the toast first, or remove the element, to take it off the page and out of the tab order.

{% highlight js %}$('#element').toast('dispose'){% endhighlight %}

### Events

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.toast</td>
      <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
      <td>shown.bs.toast</td>
      <td>This event is fired when the toast has been made visible to the user.</td>
    </tr>
    <tr>
      <td>hide.bs.toast</td>
      <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bs.toast</td>
      <td>This event is fired when the toast has finished being hidden from the user.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myToast').on('hidden.bs.toast', function () {
  // do something...
})
{% endhighlight %}
