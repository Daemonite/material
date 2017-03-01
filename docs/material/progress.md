---
layout: docs
title: Progress
description: Progress indicators are visual indications of an app loading content.
group: material
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Circular progress

Circular progress is built with a group of HTML elements, below is a detailed example.

{% example html %}
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
{% endexample %}

Add additional colour classes (e.g. brand colours: <code>-primary</code>, <code>-secondary</code>, or helper colours: <code>-danger</code>, <code>-info</code>, <code>-success</code>, <code>-warning</code>) to change the appearance of individual circular progress.

{% example html %}
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
{% endexample %}

## Linear progress

Most of the details about linear progress have been covered in Bootstrap progress docuementation. Please refer to [this page]({{ site.baseurl }}/components/progress/index.html) for more details.
