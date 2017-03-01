---
layout: docs
title: Tabs
description: Tabs make it easy to explore and switch between different views.
group: material
---

Tabs enable content organization at a high level, such as switching between views.

Present tabs as a single row above their associated content. Tab labels should succinctly describe the content within.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default tabs

Most of the details about a basic tab have been covered in Bootstrap navs docuementation. Please refer to [this page]({{ site.baseurl }}/components/navs/index.html#tabs) for more details.

## Fixed tabs

Fixed tabs display all tabs concurrently and are best used with content that benefits from quick pivots between tabs in fixed positions, such as switching transportation methods for directions in Google Maps.

Fixed tabs have equal width, calculated either as the view width divided by the number of tabs, or based on the widest tab label.

{% example html %}
<ul class="nav nav-tabs nav-justified">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
{% endexample %}

## Scrollable tabs

Scrollable tabs display a subset of tabs at any given moment. They can contain longer tab labels and a larger number of tabs than fixed tabs. Scrollable tabs are best used for browsing contexts in touch interfaces when users don’t need to directly compare the tab labels.

**N.B.** Due to its `overflow` value, scrollable tabs are not compatible with dropdown componenets.

{% example html %}
<ul class="nav nav-tabs nav-scrollable">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
{% endexample %}

## Tab touch target animation

**N.B.** Implementations of this requires `material.js`.

<div class="bd-example bd-example-tabs" role="tabpanel">
  <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
    <li class="nav-item">
      <a aria-controls="favourite" aria-expanded="true" class="nav-link waves-attach active" data-toggle="tab" id="favourite-tab" href="#favourite" role="tab">Favourite</a>
    </li>
    <li class="nav-item">
      <a aria-controls="recent" class="nav-link waves-attach" data-toggle="tab" id="recent-tab" href="#recent" role="tab">Recent</a>
    </li>
    <li class="nav-item">
      <a aria-controls="nearby" class="nav-link waves-attach" data-toggle="tab" id="nearby-tab" href="#nearby" role="tab">Nearby</a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div aria-labelledBy="favourite-tab" class="tab-pane fade active show" id="favourite" role="tabpanel">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div aria-labelledBy="recent-tab" class="tab-pane fade" id="recent" role="tabpanel">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
    </div>
    <div aria-labelledBy="nearby-tab" class="tab-pane fade" id="nearby" role="tabpanel">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
  </div>
</div>
