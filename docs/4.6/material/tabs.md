---
layout: docs
title: Tabs
description: Tabs make it easy to explore and switch between different views.
group: material
toc: true
---

Tabs enable content organization at a high level, such as switching between views.

Present tabs as a single row above their associated content. Tab labels should succinctly describe the content within.

## Default tabs

**Most of the details about a basic tab have been covered in Components/Navs documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/navs/#tabs) for more details.**

## Fixed tabs

Fixed tabs display all tabs concurrently and are best used with content that benefits from quick pivots between tabs in fixed positions, such as switching transportation methods for directions in Google Maps.

Fixed tabs have equal width, calculated either as the view width divided by the number of tabs, or based on the widest tab label.

<div class="bd-example bd-example-tabs">
  <ul class="nav nav-justified nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a aria-controls="home" aria-selected="true" class="active nav-link show" data-toggle="tab" href="#home" id="home-tab" role="tab">Home</a>
    </li>
    <li class="nav-item">
      <a aria-controls="profile" aria-selected="false" class="nav-link" data-toggle="tab" href="#profile" id="profile-tab" role="tab">Profile</a>
    </li>
    <li class="nav-item">
      <a aria-controls="contact" aria-selected="false" class="nav-link" data-toggle="tab" href="#contact" id="contact-tab" role="tab">Contact</a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div aria-labelledby="home-tab" class="tab-pane active fade show" id="home" role="tabpanel">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div aria-labelledby="profile-tab" class="tab-pane fade" id="profile" role="tabpanel">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
    </div>
    <div aria-labelledby="contact-tab" class="tab-pane fade" id="contact" role="tabpanel">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-justified nav-tabs" id="justifiedTab" role="tablist">
  <li class="nav-item">
    <a aria-controls="home" aria-selected="true" class="nav-link active" data-toggle="tab" href="#home" id="home-tab" role="tab">Home</a>
  </li>
  <li class="nav-item">
    <a aria-controls="profile" aria-selected="false" class="nav-link" data-toggle="tab" href="#profile" id="profile-tab" role="tab">Profile</a>
  </li>
  <li class="nav-item">
    <a aria-controls="contact" aria-selected="false" class="nav-link" data-toggle="tab" href="#contact" id="contact-tab" role="tab">Contact</a>
  </li>
</ul>
<div class="tab-content" id="justifiedTabContent">
  <div aria-labelledby="home-tab" class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div aria-labelledby="profile-tab" class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div aria-labelledby="contact-tab" class="tab-pane fade" id="contact" role="tabpanel">...</div>
</div>
{% endhighlight %}

## Scrollable tabs

Scrollable tabs display a subset of tabs at any given moment. They can contain longer tab labels and a larger number of tabs than fixed tabs. Scrollable tabs are best used for browsing contexts in touch interfaces when users don’t need to directly compare the tab labels.

**N.B.** Due to its `overflow` value, scrollable tabs are not compatible with dropdown componenets.

<div class="bd-example bd-example-tabs">
  <div class="nav-tabs-scrollable">
    <ul class="nav nav-tabs" id="scrollableTab" role="tablist">
      <li class="nav-item">
        <a aria-controls="scrollableTab1" aria-selected="true" class="nav-link active" data-toggle="tab" href="#scrollableTab1" id="scrollableTab1-tab" role="tab">Active</a>
      </li>

      {% for i in (2..20) %}

        <li class="nav-item">
          <a aria-controls="scrollableTab{{ i }}" aria-selected="false" class="nav-link" data-toggle="tab" href="#scrollableTab{{ i }}" id="scrollableTab{{ i }}-tab" role="tab">Link</a>
        </li>

      {% endfor %}

    </ul>
  </div>
  <div class="tab-content" id="scrollableTabContent">
    <div aria-labelledby="scrollableTab1-tab" class="tab-pane fade show active" id="scrollableTab1" role="tabpanel"></div>

    {% for i in (2..20) %}
      <div aria-labelledby="scrollableTab{{ i }}-tab" class="tab-pane fade" id="scrollableTab{{ i }}" role="tabpanel"></div>
    {% endfor %}

  </div>
</div>

{% highlight html %}
<div class="nav-tabs-scrollable">
  <ul class="nav nav-tabs" id="scrollableTab" role="tablist">...</ul>
</div>
{% endhighlight %}
