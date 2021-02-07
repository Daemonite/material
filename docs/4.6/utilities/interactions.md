---
layout: docs
title: Interactions
description: Utility classes that change how users interact with contents of a website.
group: utilities
redirect_from: "/docs/4.6/utilities/"
toc: true
---

## Text selection

Change how the content is selected when the user interacts with it. Note that Internet Explorer and Legacy Edge have no support for the `all` value for `user-select`, and as such, **`.user-select-all` is not supported by either browser.**

{% capture example %}
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has the default select behavior.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
{% endcapture %}
{% include example.html content=example %}

Customize the available classes by changing the `$user-selects` Sass list in `_variables.scss`.
