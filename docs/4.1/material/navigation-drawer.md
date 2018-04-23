---
layout: docs
title: Navigation drawer
description: The navigation drawer contains the navigation destinations for your app or site.
group: material
toc: true
---

A working example of a navigation drawer is the left panel on this page. If you are on a desktop, the navigation drawer should be visible at all times on the left hand side of the browser window. If you are on a mobile or tablet, you may need to toggle open the navigation drawer by tapping on the hamburger icon near the top of this page.

## Content

Material provides some basic styles for a set of components that are normally used in a navigation drawer such as headings and navs.

<div class="bd-example">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-default.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<div aria-hidden="true" class="navdrawer" id="navdrawerDefault" tabindex="-1">
  <div class="navdrawer-content">
    <div class="navdrawer-header">
      <a class="navbar-brand px-0" href="#">Navdrawer header</a>
    </div>
    <nav class="navdrawer-nav">
      <a class="nav-item nav-link active" href="#">Active</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
      <a class="nav-item nav-link" href="#">Link</a>
    </nav>
    <div class="navdrawer-divider"></div>
    <p class="navdrawer-subheader">Navdrawer subheader</p>
    <ul class="navdrawer-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#"><i class="material-icons mr-3">alarm_on</i> Active with icon</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#"><i class="material-icons mr-3">alarm_off</i> Disabled with icon</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="material-icons mr-3">link</i> Link with icon</a>
      </li>
    </ul>
  </div>
</div>
{% endhighlight %}

## Usage

The navigation drawer plugin toggles your hidden drawer on demand, via data attributes or JavaScripts. It also adds `.navdrawer-open{-default|-permanent|-persistent|-temporary}{-sm|-md|-lg|-xl}` to the `<body>` for additional styling. The plugin also generates a `.navdrawer-backdrop{-default|-permanent|-persistent|-temporary}{-sm|-md|-lg|-xl}` to provide a click area for dismissing shown navigation drawer when required.

### Data attributes

Activate a navigation drawer without writing JavaScript. Set `data-toggle="navdrawer"` on a controller element along with a `data-target="#foo"` or `href="#foo"` to target a specific navigation drawer to toggle.

{% highlight html %}
<button data-target="#myNavdrawer" data-toggle="navdrawer" type="button">Launch navigation drawer</button>
{% endhighlight %}

### JavaScript

Call a navigation drawer with id `myNavdrawer` with a single line of JavaScript:

{% highlight js %}$('#myNavdrawer').navdrawer(options){% endhighlight %}

#### Events

Material's navigation drawer class exposes a few events for hooking into navigation drawer functionality. All events are fired at the navigation drawer itself (i.e. at the `<div class="navdrawer">`).

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th>Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>hide.md.navdrawer</td>
        <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
      </tr>
      <tr>
        <td>hidden.md.navdrawer</td>
        <td>This event is fired when the navigation drawer has finished being hidden from the user (will wait for CSS transitions to complete).</td>
      </tr>
      <tr>
        <td>show.md.navdrawer</td>
        <td>This event fires immediately when the <code>show</code> instance method is called. If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
      </tr>
      <tr>
        <td>shown.md.navdrawer</td>
        <td>This event is fired when the navigation drawer has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight js %}
$('#myNavdrawer').on('hide.md.navdrawer', function (e) {
  // do something...
})
{% endhighlight %}

#### Methods

##### `.navdrawer()`

Activates a navigation drawer. Accepts an optional options `object`.

{% highlight js %}
$('#myNavdrawer').navdrawer({
  keyboard: false
})
{% endhighlight %}

##### `.navdrawer('hide')`

Manually hides a navigation drawer.

{% highlight js %}$('#myNavdrawer').navdrawer('hide'){% endhighlight %}

##### `.navdrawer('show')`

Manually opens a navigation drawer.

{% highlight js %}$('#myNavdrawer').navdrawer('show'){% endhighlight %}

##### `.navdrawer('toggle')`

Manually toggles a navigation drawer.

{% highlight js %}$('#myNavdrawer').navdrawer('toggle'){% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-backdrop=""`.

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>breakpoint</td>
        <td>string</td>
        <td><code class="text-nowrap">''</code></td>
        <td>Works with <code class="text-nowrap">type</code> to determine when the styles associated with a particular type kick in.</td>
      </tr>
      <tr>
        <td>keyboard</td>
        <td>boolean</td>
        <td>true</td>
        <td>Closes the navigation drawer when escape key is pressed</td>
      </tr>
      <tr>
        <td>show</td>
        <td>boolean</td>
        <td>true</td>
        <td>Shows the navigation drawer when initialised.</td>
      </tr>
      <tr>
        <td>type</td>
        <td>string</td>
        <td><code class="text-nowrap">'default'</code></td>
        <td>Different types of navigation drawers behave differently. For details regarding each type, see <a href="#variations">variations</a>.</td>
      </tr>
    </tbody>
  </table>
</div>

## Variations

### Direction

Add `.navdrawer-right` to the navigation drawer to make it stick to the right hand side of the screen.

<div class="bd-example">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-right.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<div aria-hidden="true" class="navdrawer navdrawer-right" id="navdrawerRight" tabindex="-1">...</div>
{% endhighlight %}

### Permanent drawer

A permanent navigation drawer is always visible at the same elevation as the content.

<div class="bd-example">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-permanent.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<button data-target="#navdrawerPermanent" data-toggle="navdrawer" data-type="permanent" type="button">Launch permanent drawer</button>

<div aria-hidden="true" class="navdrawer navdrawer-permanent" id="navdrawerPermanent" tabindex="-1">...</div>
{% endhighlight %}

You can also add additional `breakpoint` parameters (i.e. `sm`, `md`, `lg` and `xl`) to a navigation drawer so that the permanent styles only kick in when the screen reaches a certain breakpoint.

{% highlight html %}
<button ... data-breakpoint="lg" data-toggle="navdrawer" data-type="permanent" ...>...</button>

<div ... class="navdrawer navdrawer-permanent-lg" ...>...</div>
{% endhighlight %}

Because a permanent navigation drawer is always visible, you may need to add some custom styles to shift the content of your page to the left or right to accommodate the screen estate being taken up by the drawer. For example, to work with a `.navdrawer-permanent-lg`:

{% highlight css %}
@include media-breakpoint-up(lg) {
  .content-wrapper {
    margin-left: $navdrawer-width;
  }
}
{% endhighlight %}

#### Clipped permanent drawer

A permanent navigation drawer has a few variations of its own, too. It can be clipped under the top navigation bar (`.navbar`):

<div class="bd-example">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-permanent-clipped.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<div aria-hidden="true" class="navdrawer navdrawer-permanent navdrawer-permanent-clipped" id="navdrawerPermanentClipped" tabindex="-1">...</div>
{% endhighlight %}

#### Float permanent drawer

For pages that require less hierarchy, a floating permanent drawer may be the best fit:

<div class="bd-example" style="overflow-x: auto; overflow-y: hidden;">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-permanent-float.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<div aria-hidden="true" class="navdrawer navdrawer-permanent navdrawer-permanent-float" id="navdrawerPermanentFloat" tabindex="-1">...</div>
{% endhighlight %}

A floating permanent drawer can also work with other components, such as `.card`:

<div class="bd-example" style="overflow-x: auto; overflow-y: hidden;">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-permanent-float-card.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<div aria-hidden="true" class="navdrawer navdrawer-permanent navdrawer-permanent-float" id="navdrawerPermanentFloatCard" tabindex="-1">
  <div class="navdrawer-content">
    <div class="card m-3">
      <nav class="navdrawer-nav">...</nav>
    </div>
  </div>
</div>
{% endhighlight %}

### Persistent drawer

A persistent navigation drawer can be closed and opened, but unlike a default drawer, a persistent drawer sits on the same surface elevation as the content so it does not generate a backdrop.

<div class="bd-example" style="overflow-x: auto; overflow-y: hidden;">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-persistent.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<button data-target="#navdrawerPersistent" data-toggle="navdrawer" data-type="persistent" type="button">Launch persistent drawer</button>

<div aria-hidden="true" class="navdrawer navdrawer-persistent" id="navdrawerPersistent" tabindex="-1">...</div>
{% endhighlight %}

You can also add additional `breakpoint` parameters (i.e. `sm`, `md`, `lg` and `xl`) to a navigation drawer so that the persistent styles only kick in when the screen reaches a certain breakpoint.

{% highlight html %}
<button ... data-breakpoint="lg" data-toggle="navdrawer" data-type="persistent" ...>...</button>

<div ... class="navdrawer navdrawer-persistent-lg" ...>...</div>
{% endhighlight %}

### Temporary drawer

A temporary navigation drawer can be closed and opened and sits above all other content, but unlike a default drawer, a temporary drawer does not generate a backdrop so it can remain open while you perform other actions on the page.

<div class="bd-example" style="overflow-x: auto; overflow-y: hidden;">
  <iframe class="border-0 d-block w-100" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navdrawer-temporary.html" style="height: 480px;"></iframe>
</div>

{% highlight html %}
<button data-target="#navdrawerTemporary" data-toggle="navdrawer" data-type="temporary" type="button">Launch temporary drawer</button>

<div aria-hidden="true" class="navdrawer navdrawer-temporary" id="navdrawerTemporary" tabindex="-1">...</div>
{% endhighlight %}

You can also add additional `breakpoint` parameters (i.e. `sm`, `md`, `lg` and `xl`) to a navigation drawer so that the temporary styles only kick in when the screen reaches a certain breakpoint.

{% highlight html %}
<button ... data-breakpoint="lg" data-toggle="navdrawer" data-type="temporary" ...>...</button>

<div ... class="navdrawer navdrawer-temporary-lg" ...>...</div>
{% endhighlight %}
