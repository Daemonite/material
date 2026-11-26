---
layout: docs
title: Migrating to v4
description: Material v4 is a major rewrite of the entire project. The most notable changes are summarized below.
group: getting-started
toc: true
---

## Bootstrap changes

Material monitors the changes in the Bootstrap project so the exact same Bootstrap HTML markup can always work with Material. For example, when Bootstrap dropped `.hidden-*` classes for new display utilities, Material did the same by dropping `.hidden-*` classes and introducing `.d-{value}` and `.d-{breakpoint}-{value}` classes. If you are upgrading Material, please follow **Bootstrap's [migration doc](https://getbootstrap.com/docs/4.1/migration/)** for details about breaking and/or notable changes in each release as the changes will apply to Material, too.

**This page will focus on the changes that are unique to Material.**

## v4.1.1

This release mainly focuses on bug fixes, especially styles related to [form controls]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/text-fields).

### Table

Because responsive table now again requires a wrapping element, it does not work well with `.table-bordered` as the card like `box-shadow` will be cut off. As a result, `.table-bordered` now reverts back to adding a `border` rather than a `box-shadow` to the table. However, it is very easy to [combine `.card` and `.table` together]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/data-tables/#tables-within-cards) to achieve how `.table-bordered` used to look like.

## v4.1.0

This release consists of incorporating Bootstrap 4's changes and minor bug fixes. v4.1 also introduces a couple of new features.

### Default link colour

Changed default link colour to `$secondary` colour based on Google Material Design's [colour system guidelines](https://material.io/guidelines/style/color.html#color-color-system).

### Shadows

Added new `.shadow-*` utilities for quickly adding `box-shadow`s. Details are documented [here]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/shadows/).

### Snackbars

Added new `.snackbar` component. Details are documented [here]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/snackbars/).

## v4.0.0

All previous alpha and beta releases mainly focused on keeping up with Bootstrap 4's continuous releases plus minor bug fixes. The stable v4.0.0 release addressed a few issues that have hinged on for a while.

### Breakpoints

Material v4's alpha and beta releases have a different set of breakpoints and container `max-width`s than Bootstrap's default values. Material's stable v4.0.0 reverts these values back to be the same as Bootstrap's default values. The reason is that although the values used in Material v4's alpha and beta releases are more in line with Google Material Design's [responsive UI guidelines](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints), Bootstrap's grid setup seems to work better in most cases.

### Floating action buttons

Added Material specific `.btn-float-dropdown` to allow a floating action button to fling out related actions since the default dropdown menus do not work well with floating action buttons. For detailed usage, please visit [buttons doc]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/buttons/#dropdown).

### Input groups

Added Material specific `.input-group-icon` to allow an icon to change its colour based on the state of its associated form control. For detailed usage, please visit [text fields doc]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/text-fields/#with-icons).

### Navigation drawer

Since Bootstrap introduced responsive `.navbar-expand-{breakpoint}`, navigation drawer has been due a similar change, too.

- Permanent, persistent, and temporary navigation drawers now support responsive behaviours via `.navdrawer-{type}-{breakpoint}` classes.

- Navigation drawer JavaScript is updated to provide an extra option, `breakpoint`, to allow a value from `sm` to `xl` to be passed in. This option can also be passed via data attribute as `data-breakpoint`. `xs` is not included because `.navdrawer-{type}-xs` would be applied from `min-width: 0;` and up which means it is not bound by a media query.

For more details, please visit the [navigation drawer doc]({{ site.baseurl }}/docs/{{ site.docs_version }}/material/navigation-drawer/).

### Removed third party plugins

Two third party plugins, `textarea-autosize` and `waves`, are removed from the stable v4.0.0 release. The reason is that these third party plugins can be used without any modifications to work with Material, so leaving out these third party plugins can not only bring down the size of the CSS and JavaScript of Material a bit, but also provide some flexibility for developers to use their preferred plugins for the same job.

In case the two plugins are required, please check out the following two projects and incorporate them back in accordingly:

- The plugin used in v4's alpha and beta to adjust the height of the textarea automatically is: [`textarea-autosize`](https://github.com/javierjulio/textarea-autosize)

- The plugin used in v4's alpha and beta to create the ripple effect on click is : [`waves`](https://github.com/fians/Waves)
