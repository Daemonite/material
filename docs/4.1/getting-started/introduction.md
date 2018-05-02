---
layout: docs
title: Introduction
description: Get started with Material, a cross-platform and fully responsive front-end interface based on Google Material Design, built using Bootstrap 4.
group: getting-started
redirect_from:
  - /docs/
  - /docs/4.1/
  - /docs/4.1/getting-started/
  - /docs/getting-started/
toc: true
---

## Contents

### Precompiled code

The Material [precompiled code download]({{ site.download.dist }}) includes the following:

{% highlight plaintext %}
daemonite-material/
├── css/
│   ├── material.css
│   ├── material.css.map
│   ├── material.min.css
│   └── material.min.css.map
└── js/
    ├── material.js
    ├── material.js.map
    ├── material.min.js
    └── material.min.js.map
{% endhighlight %}

This is the most basic form of Material: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JavaScript (`material.*`), as well as compiled and minified CSS and JavaScript (`material.min.*`). Remember to check the [starter template](#starter-template) for a basic set up guide.

### Source code

The Material [source code download]({{ site.download.source }}) includes the precompiled CSS and JavaScript, along with documentation and source assets. More specifically, it includes the following and more:

{% highlight plaintext %}
daemonite-material/
├── assets/
│   ├── js/
│   └── scss/
├── css/
├── docs/
│   └── 4.1/
└── js/
{% endhighlight %}

The `assets/` is the source code for our CSS and JavaScript. The `css/` and `js/` folders are the same in the precompiled download section above. The `docs/` folder includes the source code for our documentation. Beyond that, any other included file provides support for development.

Please check the [theming guide]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/theming/) for how to customise Material for your project using our source code.

## Important globals

Material employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps.

On the rare occasion you need to override it, use something like the following:

{% highlight scss %}
.selector-for-some-widget {
  box-sizing: content-box;
}
{% endhighlight %}

With the above snippet, nested elements—including generated content via `:before` and `:after` will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### HTML5 doctype

Material requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### Responsive meta tag

Material is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta content="initial-scale=1, shrink-to-fit=no, width=device-width" name="viewport">
{% endhighlight %}

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta content="initial-scale=1, shrink-to-fit=no, width=device-width" name="viewport">

    <!-- CSS -->
    <!-- Add Material font (Roboto) and Material icon as needed -->
    <link href="{{ site.cdn.md_font }}" rel="stylesheet">
    <link href="{{ site.cdn.md_icon }}" rel="stylesheet">

    <!-- Add Material CSS, replace Bootstrap CSS -->
    <link href="path_to/material.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="{{ site.cdn.jquery }}"></script>
    <script src="{{ site.cdn.popper }}"></script>
    <script src="{{ site.cdn.bs_js }}"></script>

    <!-- Then Material JavaScript on top of Bootstrap JavaScript -->
    <script src="path_to/material.min.js"></script>
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements.
