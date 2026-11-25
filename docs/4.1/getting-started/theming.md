---
layout: docs
title: Theming
description: Customise Material with our source code.
group: getting-started
toc: true
---

## Browser support

Before you start, please be aware that Material supports the **latest, stable releases** of all major browsers and platforms. On Windows, **we support Internet Explorer 10-11 / Microsoft Edge**.

Alternative browsers which use the latest version of Blink, Gecko, or WebKit whether directly or via the platform's web view API, are not explicitly supported. However, Material should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.

### Desktop browsers

The latest versions of most desktop browsers are supported.

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <td></td>
        <th>Chrome</th>
        <th>Firefox</th>
        <th>Internet Explorer</th>
        <th>Microsoft Edge</th>
        <th>Opera</th>
        <th>Safari</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Mac</th>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-muted">N/A</td>
        <td class="text-muted">N/A</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
      </tr>
      <tr>
        <th scope="row">Windows</th>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported, IE10+</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-danger">Not supported</td>
      </tr>
    </tbody>
  </table>
</div>

For Firefox, in addition to the latest normal stable release, we also support the latest [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/organizations/faq/) version of Firefox.

Unofficially, Material should behave and look well enough in Chrome for Linux and Chrome, Firefox for Linux, and Internet Explorer 9, though they are not officially supported.

#### Internet Explorer

Internet Explorer 10+ is supported; IE9 and down is not. Please be aware that some CSS3 properties and HTML5 elements are not fully supported in IE10, or require prefixed properties for full functionality. Visit [Can I use](https://caniuse.com/) for details on browser support of CSS3 and HTML5 features.

### Mobile devices

Material supports the latest versions of each major platform's default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, UC Browser Mini) are not supported.

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <td></td>
        <th>Android Browser &amp; WebView</th>
        <th>Chrome</th>
        <th>Firefox</th>
        <th>Microsoft Edge</th>
        <th>Safari</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Android</th>
        <td class="text-success">Android v5.0+ supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-muted">N/A</td>
      </tr>
      <tr>
        <th scope="row">iOS</th>
        <td class="text-muted">N/A</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
        <td class="text-success">Supported</td>
      </tr>
      <tr>
        <th scope="row">Windows 10 Mobile</th>
        <td class="text-muted">N/A</td>
        <td class="text-muted">N/A</td>
        <td class="text-muted">N/A</td>
        <td class="text-success">Supported</td>
        <td class="text-muted">N/A</td>
      </tr>
    </tbody>
  </table>
</div>

## CSS variables

Material includes [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) in its compiled CSS. These provide easy access to some commonly used values like our breakpoints, colours and font stacks.

### Available variables

Here are the variables we include:

{% highlight css %}
:root {
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --amber: #ffc107;
  --blue: #2196f3;
  --blue-grey: #607d8b;
  --brown: #795548;
  --cyan: #00bcd4;
  --deep-orange: #ff5722;
  --deep-purple: #673ab7;
  --green: #4caf50;
  --grey: #9e9e9e;
  --indigo: #3f51b5;
  --light-blue: #03a9f4;
  --light-green: #8bc34a;
  --lime: #cddc39;
  --orange: #ff9800;
  --pink: #e91e63;
  --purple: #9c27b0;
  --red: #f44336;
  --teal: #009688;
  --yellow: #ffeb3b;
  --primary: #9c27b0;
  --primary-dark: #7b1fa2;
  --primary-light: #e1bee7;
  --secondary: #ff4081;
  --secondary-dark: #f50057;
  --secondary-light: #ff80ab;
  --danger: #f44336;
  --danger-dark: #d32f2f;
  --danger-light: #ffcdd2;
  --info: #2196f3;
  --info-dark: #1976d2;
  --info-light: #bbdefb;
  --success: #4caf50;
  --success-dark: #388e3c;
  --success-light: #c8e6c9;
  --warning: #ff9800;
  --warning-dark: #f57c00;
  --warning-light: #ffe0b2;
  --dark: #424242;
  --dark-dark: #212121;
  --dark-light: #757575;
  --light: #f5f5f5;
  --light-dark: #e0e0e0;
  --light-light: #fafafa;
  --font-family-monospace: "Roboto Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --font-family-sans-serif: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --font-family-serif: "Roboto Slab", Georgia, "Times New Roman", Times, serif;
}
{% endhighlight %}

### Examples

CSS variables offer similar flexibility to Sass variables, but without the need for compilation before being served to the browser. For example, here we're resetting our link styles with CSS variables.

{% highlight css %}
a {
  color: var(--blue);
  font-family: var(--font-family-monospace)
}
{% endhighlight %}

While we include breakpoints in our CSS variables, they unfortunately cannot be used in media queries. These remain in the compiled CSS for backward compatibility given they can be utilised by JavaScript. [Learn more in the spec](https://www.w3.org/TR/css-variables-1/#using-variables).

## Sass

Utilize our source Sass files to take advantage of mixins, variables and more.

Whenever possible, avoid modifying Material's core files. For Sass, that means creating your own stylesheet that loads Material so you can modify and extend it.

### Requirements

Material's Sass uses the [Sass module system](https://sass-lang.com/documentation/at-rules/use/) (`@use` and `@forward`), so it needs [Dart Sass](https://sass-lang.com/dart-sass/) **1.79.0 or newer** (the `sass` package on npm). LibSass and node-sass can't compile it; if you're stuck on one of them, stay on Material 4.1.1.

The examples below use `pkg:` URLs, which need Dart Sass's Node.js package importer: pass `--pkg-importer=node` on the command line, or `importers: [new NodePackageImporter()]` to the JavaScript API. Alternatively, add `node_modules` to your load paths and load `daemonite-material/assets/scss/material`.

### Importing

For example, you can create a `custom.scss` and load either all of Material's source Sass files or only selected parts you need. We encourage the latter, though be aware there are some dependencies and requirements across our components. You will also need to include some JavaScript for certain plugins.

{% highlight scss %}
// Custom.scss
// Option A: Include all of Material

@use "pkg:daemonite-material" as material;
{% endhighlight %}

{% highlight scss %}
// Custom.scss
// Option B: Include parts of Material

// Required: variables, functions and mixins (these output no CSS)
@use "pkg:daemonite-material/assets/scss/variables";
@use "pkg:daemonite-material/assets/scss/functions";
@use "pkg:daemonite-material/assets/scss/mixins";

// Optional
@use "pkg:daemonite-material/assets/scss/base/base";
@use "pkg:daemonite-material/assets/scss/base/grid";
@use "pkg:daemonite-material/assets/scss/base/typography";
@use "pkg:daemonite-material/assets/scss/material/button";
@use "pkg:daemonite-material/assets/scss/material/card";
@use "pkg:daemonite-material/assets/scss/material/text-field";
{% endhighlight %}

Each partial loads the variables, functions and mixins it needs, so the optional partials can be loaded in any combination. Keep them in the order used by `material.scss` so the cascade stays the same.

The text field partials share `@extend` placeholders. `material/text-field` works on its own, but to use the box, floating label or input group variants, load `material/text-field-extend` after `material/text-field`. It loads `text-field-box`, `text-field-floating-label` and `text-field-input-group` (plus the `button` and `bootstrap/form` partials they extend) and applies the shared extends to them.

`material.scss` forwards Material's variables, functions and mixins, so with Option A you can use them through the namespace, e.g. `material.$spacer`, `material.theme-color(primary)` or `@include material.media-breakpoint-up(md) { ... }`.

Material's Sass is a complete replacement for Bootstrap's Sass, so don't load Bootstrap's own Sass files (e.g. `bootstrap/scss/functions` or `bootstrap/scss/variables`) before or alongside Material. Material's `$theme-colors` is a map of maps (`color`, `dark` and `light` shades for each theme colour), whereas Bootstrap's is a flat map. Mixing the two fails with errors such as `$map: #6c757d is not a map`.

### Default variables

Every Sass variable in Material includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying Material's source code. Pass your values with `with (...)` the first time you load Material. Variables derived from the ones you set (for example `$link-color` follows the `secondary` theme colour) pick up your values.

Here's an example that changes the `background-color` for the `<body>`:

{% highlight scss %}
@use "pkg:daemonite-material" as material with (
  $body-bg: #212121
);
{% endhighlight %}

With Option B, configure the `variables` module instead, before loading anything else from Material:

{% highlight scss %}
@use "pkg:daemonite-material/assets/scss/variables" with (
  $body-bg: #212121
);
{% endhighlight %}

Repeat as necessary for any variable in Material.

#### Upgrading from `@import`

Earlier versions were loaded with `@import`, with variable overrides declared before the import. Dart Sass still accepts that, so the following keeps working until Dart Sass 3.0 removes `@import` (Sass prints a deprecation warning for it):

{% highlight scss %}
$body-bg: #212121;

@import "node_modules/daemonite-material/assets/scss/material";
{% endhighlight %}

To migrate, move the overrides into `with (...)` as shown above and prefix any Material variables, functions and mixins you use with the namespace (`$spacer` becomes `material.$spacer`). The private `_assert-ascending` and `_assert-starts-at-zero` mixins are no longer part of `_functions.scss`.

### Maps

Material includes a handful of Sass maps that make it easier to generate families of related CSS. We use Sass maps for our breakpoints, colours, and more. Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making _removing_ items from a map slightly more difficult.

#### Add to map

To add a new item to `$sizes`, pass the new key and value when you load Material:

{% highlight scss %}
@use "pkg:daemonite-material" as material with (
  $sizes: (
    15: 15%
  )
);
{% endhighlight %}

This will generate a new pair of `.h-15` and `.w-15` classes which will set `height` and `width` to be `15%` respectively.

#### Modify map

To modify an existing item in our `$spacers` map, pass the key with its new value:

{% highlight scss %}
@use "pkg:daemonite-material" as material with (
  $spacers: (
    5: 5rem
  )
);
{% endhighlight %}

Classes such as `mb-5` will then set `margin-bottom` to be `5rem` instead of the default `3rem`.

#### Remove from map

To remove an item from a map, use `map.remove` on the `variables` module after loading it and before loading the parts of Material that use the map:

{% highlight scss %}
@use "sass:map";

// Required
@use "pkg:daemonite-material/assets/scss/variables";
@use "pkg:daemonite-material/assets/scss/functions";
@use "pkg:daemonite-material/assets/scss/mixins";

variables.$theme-colors: map.remove(variables.$theme-colors, "info");

// Optional
@use "pkg:daemonite-material/assets/scss/base/base";
@use "pkg:daemonite-material/assets/scss/base/grid";
@use "pkg:daemonite-material/assets/scss/base/typography";
@use "pkg:daemonite-material/assets/scss/material/button";
@use "pkg:daemonite-material/assets/scss/material/card";
@use "pkg:daemonite-material/assets/scss/material/text-field";
{% endhighlight %}

However, please be aware that Material assumes the presence of some specific keys within Sass maps. As you customise the included maps, you may encounter errors where a specific Sass map's key is being used.

For example, we use the `danger`, `success` and `warning` keys from `$theme-colors` for styling different states of some components. Removing the values of these keys may cause Sass compilation issues. In these instances, you'll need to modify the Sass code that makes use of those values.

## Theme colours

Many of Material's various components and utilities are built through a series of colours defined in a Sass map. This map can be looped over in Sass to quickly generate a series of rulesets.

### All colours

All colours available in Material, are available as Sass variables in our `assets/scss/_colors.scss` file.

<div class="row">

  {% for color in site.data.colors %}

  <div class="col-lg-4 col-sm-6">
    <div class="d-flex flex-column mb-4">

    {% for level in color.levels %}

    {% if level.name == 500 %}

      <div class="order-first p-3" style="background-color: {{ level.hex }}; color: {{ level.text }};">
        <p class="mb-5"><strong>{{ color.name | capitalize }}</strong></p>
        <div class="d-flex justify-content-between">
          <span class="doc-swatch-text">{{ level.name }}</span>
          <span class="doc-swatch-text">{{ level.hex }}</span>
        </div>
      </div>

    {% endif %}

      <div class="d-flex justify-content-between p-3" style="background-color: {{ level.hex }}; color: {{ level.text }};">
        <span class="doc-swatch-text">{{ level.name | capitalize }}</span>
        <span class="doc-swatch-text">{{ level.hex }}</span>
      </div>

    {% endfor %}

    </div>
  </div>

  {% endfor %}

</div>

Here's how you can use these in your Sass:

{% highlight scss %}
@use "sass:map";
@use "pkg:daemonite-material" as material;

.class1 {
  color: material.$material-color-purple-500;
}

.class2 {
  color: map.get(material.$purples, 500);
}

// With our `color()` function which return the 500 colours
.class3 {
  color: material.color(purple);
}
{% endhighlight %}

### Theme colours

We use a subset of all colours to create a smaller colour palette for generating colour schemes, available in our `assets/scss/variables/_palette.scss` file.

<div class="row">

  {% for color in site.data.theme-colors %}

  <div class="col-lg-4 col-sm-6">
    <div class="mb-4">

      <div class="p-3" style="background-color: {{ color.hex }}; color: {{ color.text }};">
        <p class="mb-5">
          <strong>{{ color.name | capitalize }}</strong>
        </p>
        <div class="d-flex justify-content-between">
          <span class="doc-swatch-text">Base</span>
          <span class="doc-swatch-text">{{ color.hex }}</span>
        </div>
      </div>

      {% for level in color.levels %}

      <div class="d-flex justify-content-between p-3" style="background-color: {{ level.hex }}; color: {{ level.text }};">
        <span class="doc-swatch-text">{{ level.name | capitalize }}</span>
        <span class="doc-swatch-text">{{ level.hex }}</span>
      </div>

      {% endfor %}

    </div>
  </div>

  {% endfor %}

</div>

Here's how you can use these in your Sass:

{% highlight scss %}
@use "pkg:daemonite-material" as material;

.class1 {
  color: material.theme-color(primary);
}

.class2 {
  color: material.theme-color-dark(primary);
}

.class3 {
  color: material.theme-color-light(primary);
}
{% endhighlight %}

#### Add a theme colour

To add a new colour to `$theme-colors`, pass the new key and value when you load Material. Please be aware that each new colour should also include darker and lighter shades of the primary colour to accent some parts of our components.

{% highlight scss %}
@use "pkg:daemonite-material" as material with (
  $theme-colors: (
    "custom-color": (
      color: #ffc107,
      dark: #c79100,
      light: #fff350
    )
  )
);
{% endhighlight %}

Or, using Material's colour palette:

{% highlight scss %}
@use "pkg:daemonite-material/assets/scss/colors";

@use "pkg:daemonite-material" as material with (
  $theme-colors: (
    "custom-color": (
      color: colors.$material-color-amber-500,
      dark: colors.$material-color-amber-900,
      light: colors.$material-color-amber-100
    )
  )
);
{% endhighlight %}

#### Modify a theme colour

To modify an existing colour in our `$theme-colors` map, override its variable when you load Material. As aforementioned, each colour in our `$theme-colors` map contains not only the colour itself, but also darker and lighter shades of it, so please make sure to modify all three values.

{% highlight scss %}
@use "pkg:daemonite-material" as material with (
  $primary: (
    color: #ffc107,
    dark: #c79100,
    light: #fff350
  )
);
{% endhighlight %}
