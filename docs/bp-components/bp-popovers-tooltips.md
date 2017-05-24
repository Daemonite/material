---
layout: docs
title: BP Popovers Tooltips
description: Documentation and examples for adding custom BMDL popovers &amp; tooltips with CSS and JavaScript.
group: components
---

**Popovers**: Add small overlay content, like those found in iOS, to any element for housing secondary information.
**Tooltips**: Inspired by the excellent Tipsy jQuery plugin written by Jason Frame. Tooltips are an updated version, which don’t rely on images, use CSS3 for animations, and data-attributes for local title storage.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overview: Popovers

Things to know when using the popover plugin:


- Popovers rely on the 3rd party library [Tether](http://tether.io/) for positioning. You must include [tether.min.js](https://github.com/HubSpot/tether/blob/master/dist/js/tether.min.js) before bootstrap.js in order for popovers to work!
- Popovers require the [tooltip plugin]({{ site.baseurl }}/components/tooltips/) as a dependency.
- Popovers are opt-in for performance reasons, so **you must initialize them yourself**.
- Zero-length `title` and `content` values will never show a popover.
- Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
- Triggering popovers on hidden elements will not work.
- Popovers for `.disabled` or `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, popovers will be centered. Use `white-space: nowrap;` on your `<a>`s to avoid this behavior.

Got all that? Great, let's see how they work with some examples.

## Example: Enable popovers everywhere

One way to initialize all popovers on a page would be to select them by their `data-toggle` attribute:

{% highlight js %}
$(function () {
  $('[data-toggle="popover"]').popover()
})
{% endhighlight %}

## Example: Using the `container` option

When you have some styles on a parent element that interfere with a popover, you'll want to specify a custom `container` so that the popover's HTML appears within that element instead.

{% highlight js %}
$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
{% endhighlight %}

## Static popover

Four options are available: top, right, bottom, and left aligned.

<div class="bd-example bd-example-popover-static">
  <div class="popover popover-top">
    <h3 class="popover-title">Popover top</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>

  <div class="popover popover-right">
    <h3 class="popover-title">Popover right</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>

  <div class="popover popover-bottom">
    <h3 class="popover-title">Popover bottom</h3>

    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>

  <div class="popover popover-left">
    <h3 class="popover-title">Popover left</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>

  <div class="clearfix"></div>
</div>

## Demo: Drug Database
<!--Escaped HTML in data-content is:
<ul><li><a href="#">AHFS DI Essentials<a/></li><li><a href="#">BNF</a></li> <li><a href="#">Martindale</a></li><li><a href="#">Micromedex<a/></li></ul><p class="text-right"><a href="#" class="text-uppercase">Set a default formulary</a></p>-->

{% example html %}
<button type="button" class="btn btn-lg btn-danger" data-trigger="focus" data-toggle="popover" title="Choose your drug database" data-html="true" data-content="&lt;ul&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;AHFS DI Essentials&lt;a/&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;BNF&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Martindale&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Micromedex&lt;a/&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p class=&quot;text-right&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;text-uppercase&quot;&gt;Set a default formulary&lt;/a&gt;&lt;/p&gt;">Click to toggle drug database popover</button>
{% endexample %}

## Demo: Evidence score
<!--Escaped HTML in data-content is:
<p>Glycaemic control: there is good-quality evidence that insulin plus metformin reduces HbA1c levels at 4 to 6 months more effectively than insulin alone, but with more gastrointestinal side effects.</p>
<div class="evidence-level">
  <h4>Evidence level A</h4>
  <p>Systematic reviews (SRs) or randomized controlled trials (RCTs) of >200 participants.</p>
</div>
<p class="text-right"><a href="#" class="text-uppercase">more from bmj clinical evidence</a></p>--->

{% example html %}
<button type="button" class="btn btn-lg btn-danger" data-trigger="focus" data-toggle="popover" title="Evidence score" data-html="true" data-content="&lt;p&gt;Glycaemic control: there is good-quality evidence that insulin plus metformin reduces HbA1c levels at 4 to 6 months more effectively than insulin alone, but with more gastrointestinal side effects.&lt;/p&gt;
&lt;div class=&quot;evidence-level&quot;&gt;
  &lt;h4&gt;Evidence level A&lt;/h4&gt;
  &lt;p&gt;Systematic reviews (SRs) or randomized controlled trials (RCTs) of &gt;200 participants.&lt;/p&gt;
&lt;/div&gt;
&lt;p class=&quot;text-right&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;text-uppercase&quot;&gt;more from bmj clinical evidence&lt;/a&gt;&lt;/p&gt;">Click to toggle drug database popover</button>
{% endexample %}

## Demo: Cochrane answers
<!--Escaped HTML in data-content is:
<img src="../../../css/images/cca-cochrane-logo-normal.png" />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.</p>
<p class="text-right"><a href="#" class="text-uppercase">Show me the answer <span class="material-icons material-icons-inline">open_in_new</span></a></p>-->

{% example html %}
<button type="button" class="btn btn-lg btn-danger" data-trigger="focus" data-toggle="popover" title="" data-html="true" data-content="&lt;img src=&quot;../../../css/images/cca-cochrane-logo-normal.png&quot; /&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.&lt;/p&gt;&lt;p class=&quot;text-right&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;text-uppercase&quot;&gt;Show me the answer &lt;span class=&quot;material-icons material-icons-inline&quot;&gt;open_in_new&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;">Click to toggle drug database popover</button>
{% endexample %}

### Four directions

<div class="bd-example popover-demo">
  <div class="bd-example-popovers">
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on right
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on bottom
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on left
    </button>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
{% endhighlight %}

### Dismiss on next click

Use the `focus` trigger to dismiss popovers on the next click that the user makes.

{% callout danger %}
#### Specific markup required for dismiss-on-next-click

For proper cross-browser and cross-platform behavior, you must use the `<a>` tag, _not_ the `<button>` tag, and you also must include a [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute.
{% endcallout %}

{% example html %}
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
{% endexample %}

{% highlight js %}
$('.popover-dismiss').popover({
  trigger: 'focus'
})
{% endhighlight %}



## Usage

Enable popovers via JavaScript:

{% highlight js %}$('#example').popover(options){% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

<table class="table table-bordered table-striped table-responsive">
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
      <td>Apply a CSS fade transition to the popover</td>
    </tr>
    <tr>
      <td>container</td>
      <td>string | false</td>
      <td>false</td>
      <td>
        <p>Appends the popover to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.</p>
      </td>
    </tr>
    <tr>
      <td>content</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Default content value if <code>data-content</code> attribute isn't present.</p>
        <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p>
      </td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number | object</td>
      <td>0</td>
      <td>
       <p>Delay showing and hiding the popover (ms) - does not apply to manual trigger type</p>
       <p>If a number is supplied, delay is applied to both hide/show</p>
       <p>Object structure is: <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td>html</td>
      <td>boolean</td>
      <td>false</td>
      <td>Insert HTML into the popover. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>string | function</td>
      <td>'right'</td>
      <td>
        <p>How to position the popover - top | bottom | left | right.</p>
        <p>When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the popover instance.</p>
      </td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string</td>
      <td>false</td>
      <td>If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See <a href="https://github.com/twbs/bootstrap/issues/4215">this</a> and <a href="https://jsbin.com/zopod/1/edit">an informative example</a>.</td>
    </tr>
    <tr>
      <td>template</td>
      <td>string</td>
      <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="popover-arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-title"&gt;&lt;/h3&gt;&lt;div class="popover-content"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>Base HTML to use when creating the popover.</p>
        <p>The popover's <code>title</code> will be injected into the <code>.popover-title</code>.</p>
        <p>The popover's <code>content</code> will be injected into the <code>.popover-content</code>.</p>
        <p><code>.popover-arrow</code> will become the popover's arrow.</p>
        <p>The outermost wrapper element should have the <code>.popover</code> class.</p>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Default title value if <code>title</code> attribute isn't present.</p>
        <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p>
      </td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>string</td>
      <td>'click'</td>
      <td>How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.</td>
    </tr>
    <tr>
      <td>constraints</td>
      <td>Array</td>
      <td>'hover focus'</td>
      <td>An array of constraints - passed through to Tether. For more information refer to Tether's <a href="http://tether.io/#constraints">constraint docs</a>.</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>string</td>
      <td>'0 0'</td>
      <td>Offset of the popover relative to its target. For more information refer to Tether's <a href="http://tether.io/#offset">offset docs</a>.</td>
    </tr>
  </tbody>
</table>

{% callout info %}
#### Data attributes for individual popovers

Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.
{% endcallout %}

### Methods

#### `$().popover(options)`

Initializes popovers for an element collection.

#### `.popover('show')`

Reveals an element's popover. **Returns to the caller before the popover has actually been shown** (i.e. before the `shown.bs.popover` event occurs). This is considered a "manual" triggering of the popover. Popovers whose both title and content are zero-length are never displayed.

{% highlight js %}$('#element').popover('show'){% endhighlight %}

#### `.popover('hide')`

Hides an element's popover. **Returns to the caller before the popover has actually been hidden** (i.e. before the `hidden.bs.popover` event occurs). This is considered a "manual" triggering of the popover.

{% highlight js %}$('#element').popover('hide'){% endhighlight %}

#### `.popover('toggle')`

Toggles an element's popover. **Returns to the caller before the popover has actually been shown or hidden** (i.e. before the `shown.bs.popover` or `hidden.bs.popover` event occurs). This is considered a "manual" triggering of the popover.

{% highlight js %}$('#element').popover('toggle'){% endhighlight %}

#### `.popover('dispose')`

Hides and destroys an element's popover. Popovers that use delegation (which are created using [the `selector` option](#options)) cannot be individually destroyed on descendant trigger elements.


{% highlight js %}$('#element').popover('dispose'){% endhighlight %}

### Events

<table class="table table-bordered table-striped table-responsive">
  <thead>
   <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
   </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.popover</td>
      <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
      <td>shown.bs.popover</td>
      <td>This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
      <td>hide.bs.popover</td>
      <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bs.popover</td>
      <td>This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myPopover').on('hidden.bs.popover', function () {
  // do something…
})
{% endhighlight %}
