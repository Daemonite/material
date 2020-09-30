---
layout: docs
title: Introduction
description: Get started with Material, a cross-platform and fully responsive front-end interface based on Google Material Design, built using Bootstrap 4.
group: getting-started
redirect_from:
  - /docs/
  - /docs/4.5/
  - /docs/4.5/getting-started/
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
│   |── material.min.css.map
|   ├── material-plugins.css
|   ├── material-plugins.css.map
|   ├── material-plugins.min.css
|   ├── material-plugins.min.css.map
└── js/
    ├── material.js
    ├── material.js.map
    ├── material.min.js
    └── material.min.js.map
{% endhighlight %}

This is the most basic form of Material: precompiled files for quick drop-in usage in nearly any web project.

We provide compiled CSS and JavaScript (`material.*`), as well as compiled and minified CSS and JavaScript (`material.min.*`).  
Extra CSS for plugins is stored in (`material-plugins.css`) and minified in (`material-plugins.min.css`). Respective JavaScript for each plugin has to be imported manually (refer to Plugins section).

Check the [starter template](#starter-template) for a basic set up guide.

### Source code

The Material [source code download]({{ site.download.source }}) includes the precompiled CSS and JavaScript, along with documentation and source assets. More specifically, it includes the following and more:

{% highlight plaintext %}
daemonite-material/
├── assets/
│   ├── js/
│   └── scss/
├── css/
├── docs/
│   └── {{ site.docs_version }}/
└── js/
{% endhighlight %}

The `assets/` is the source code for our CSS and JavaScript.  
The `css/` and `js/` folders are the same in the precompiled download section above.  
The `docs/` folder includes the source code for our documentation. Beyond that, any other included file provides support for development.

Check the [theming guide]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/theming/) for how to customise Material for your project using our source code.

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

## Starter template (no plugins)

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

    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link rel="preconnect" href="https://cdn.jsdelivr.net/">
    <link href="{{ site.cdn.md_font }}" rel="stylesheet">
    <link href="{{ site.cdn.md_icon }}" rel="stylesheet">

    <!-- Add Material CSS -->
    <link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-rc1/css/material.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.bs_js }}" integrity="{{ site.cdn.bs_js_hash }}" crossorigin="anonymous"></script>

    <!-- Then Material JavaScript on top of Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}/js/material.min.js" async></script>
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements.
