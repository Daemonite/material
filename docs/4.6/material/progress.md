---
layout: docs
title: Progress
description: Progress indicators are visual indications of an app loading content.
group: material
toc: true
---

## Circular progress

Circular progress is built with a group of HTML elements, below is a detailed example.

{% capture example %}
<div class="progress-circular">
  <div class="progress-circular-wrapper">
    <div class="progress-circular-inner">
      <div class="progress-circular-left">
        <div class="progress-circular-spinner"></div>
      </div>
      <div class="progress-circular-gap"></div>
      <div class="progress-circular-right">
        <div class="progress-circular-spinner"></div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Add additional colour classes (e.g. brand colours: <code>-primary</code>, <code>-secondary</code>, or helper colours: <code>-danger</code>, <code>-info</code>, <code>-success</code>, <code>-warning</code>) to change the appearance of individual circular progress.

{% capture example %}
<div class="progress-circular progress-circular-primary">
  <div class="progress-circular-wrapper">
    <div class="progress-circular-inner">
      <div class="progress-circular-left">
        <div class="progress-circular-spinner"></div>
      </div>
      <div class="progress-circular-gap"></div>
      <div class="progress-circular-right">
        <div class="progress-circular-spinner"></div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Linear progress

**Most of the details about linear progress have been covered in Components/Progress documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/progress/) for more details.**

### Indeterminate linear progress

When indicators are indeterminate they request that the user wait while something finishes when it’s not necessary to indicate how long it will take.

Create an indeterminate linear progress by adding `.progress-bar-indeterminate` class.

{% capture example %}
<div class="progress">
  <div class="progress-bar progress-bar-indeterminate" role="progressbar"></div>
</div>
{% endcapture %}
{% include example.html content=example %}
