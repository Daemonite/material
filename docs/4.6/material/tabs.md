---
layout: docs
title: Tabs
meta_description: Material design tabs for Bootstrap 4
description: Tabs organize content across different screens, data sets, and other interactions.
group: material
toc: true
---

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.

Each tab should contain content that is distinct from other tabs in a set. For example, tabs can present different sections of news, different genres of music, or different themes of documents.

<div class="list-group mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/navs/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Navs</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/tabs" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Tabs</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/tabs" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: Tab Bar</a>
</div>

## Default tabs

**Most of the details about a basic tab have been covered in Components/Navs documentation. [Read more about Navs]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/navs/#tabs).**

## Fixed tabs

Fixed tabs display all tabs on one screen, with each tab at a fixed width. The width of each tab is determined by dividing the number of tabs by the screen width. They don’t scroll to reveal more tabs; the visible tab set represents the only tabs available.

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

### Tabs with leading icon

You can add **Leading icons** in front of your tab title. Just add an icon within an `<i>` tag or a `.material-icon`.

<div class="bd-example bd-example-tabs">
  <ul class="nav nav-justified nav-tabs" id="justifiedTabWithIcons" role="tablist">
    <li class="nav-item">
      <a aria-controls="home" aria-selected="true" class="nav-link active" data-toggle="tab" href="#example2tab" id="example2" role="tab"><i class="material-icons">phone</i> tab one</a>
    </li>
    <li class="nav-item">
      <a aria-controls="profile" aria-selected="false" class="nav-link" data-toggle="tab" href="#example22tab" id="example22" role="tab"><i class="material-icons">favorite</i> tab two</a>
    </li>
    <li class="nav-item">
      <a aria-controls="contact" aria-selected="false" class="nav-link" data-toggle="tab" href="#example23tab" id="example23" role="tab"><i class="material-icons">location_on</i> tab three</a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContentWithIcons">
    <div aria-labelledby="example2" class="tab-pane active fade show" id="example2tab" role="tabpanel">
      <p>Panel 1.</p>
    </div>
    <div aria-labelledby="example22" class="tab-pane fade" id="example22tab" role="tabpanel">
      <p>Panel 2.</p>
    </div>
    <div aria-labelledby="example23" class="tab-pane fade" id="example23tab" role="tabpanel">
      <p>Panel 3.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-justified nav-tabs" id="justifiedTabWithIcons" role="tablist">
  <li class="nav-item">
    <a aria-controls="home" aria-selected="true" class="nav-link active" data-toggle="tab" href="#example2tab" id="example2" role="tab"><i class="material-icons">phone</i> tab one</a>
  </li>
  <li class="nav-item">
    <a aria-controls="profile" aria-selected="false" class="nav-link" data-toggle="tab" href="#example22tab" id="example22" role="tab"><i class="material-icons">favorite</i> tab two</a>
  </li>
  <li class="nav-item">
    <a aria-controls="contact" aria-selected="false" class="nav-link" data-toggle="tab" href="#example23tab" id="example23" role="tab"><i class="material-icons">location_on</i> tab three</a>
  </li>
</ul>
<div class="tab-content" id="myTabContentWithIcons">
  <div aria-labelledby="example2" class="tab-pane active fade show" id="example2tab" role="tabpanel">
    <p>Panel 1.</p>
  </div>
  <div aria-labelledby="example22" class="tab-pane fade" id="example22tab" role="tabpanel">
    <p>Panel 2.</p>
  </div>
  <div aria-labelledby="example23" class="tab-pane fade" id="example23tab" role="tabpanel">
    <p>Panel 3.</p>
  </div>
</div>
{% endhighlight %}

### Tabs with icon only

You can use tabs without text and a simple icon. Just add a `m-0` class to your icon to reset margins and center the icon.

<div class="bd-example bd-example-tabs">
  <ul class="nav nav-justified nav-tabs" id="justifiedTabWithIconsOnly" role="tablist">
    <li class="nav-item">
      <a aria-controls="example3tab" aria-selected="true" class="nav-link active" data-toggle="tab" href="#example3tab" id="example3" role="tab"><i class="material-icons">phone</i></a>
    </li>
    <li class="nav-item">
      <a aria-controls="example32tab" aria-selected="false" class="nav-link" data-toggle="tab" href="#example32tab" id="example32" role="tab"><i class="material-icons">favorite</i></a>
    </li>
    <li class="nav-item">
      <a aria-controls="example33tab" aria-selected="false" class="nav-link" data-toggle="tab" href="#example33tab" id="example33" role="tab"><i class="material-icons">location_on</i></a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContentWithIconsOnly">
    <div aria-labelledby="example3" class="tab-pane active fade show" id="example3tab" role="tabpanel">
      <p>Panel 1.</p>
    </div>
    <div aria-labelledby="example32" class="tab-pane fade" id="example32tab" role="tabpanel">
      <p>Panel 2.</p>
    </div>
    <div aria-labelledby="example33" class="tab-pane fade" id="example33tab" role="tabpanel">
      <p>Panel 3.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-justified nav-tabs" id="justifiedTabWithIconsOnly" role="tablist">
  <li class="nav-item">
    <a aria-controls="example3tab" aria-selected="true" class="nav-link active" data-toggle="tab" href="#example3tab" id="example3" role="tab"><i class="material-icons">phone</i></a>
  </li>
  <li class="nav-item">
    <a aria-controls="example32tab" aria-selected="false" class="nav-link" data-toggle="tab" href="#example32tab" id="example32" role="tab"><i class="material-icons">favorite</i></a>
  </li>
  <li class="nav-item">
    <a aria-controls="example33tab" aria-selected="false" class="nav-link" data-toggle="tab" href="#example33tab" id="example33" role="tab"><i class="material-icons">location_on</i></a>
  </li>
</ul>
<div class="tab-content" id="myTabContentWithIconsOnly">
  <div aria-labelledby="example3" class="tab-pane active fade show" id="example3tab" role="tabpanel">
    <p>Panel 1.</p>
  </div>
  <div aria-labelledby="example32" class="tab-pane fade" id="example32tab" role="tabpanel">
    <p>Panel 2.</p>
  </div>
  <div aria-labelledby="example33" class="tab-pane fade" id="example33tab" role="tabpanel">
    <p>Panel 3.</p>
  </div>
</div>
{% endhighlight %}

### Tabs with top icon

You can also use a **Top icon** for your tabs titles. Just add a `flex-column` class to your `nav-link` element so elements will align vertically.

<div class="bd-example bd-example-tabs">
  <ul class="nav nav-justified nav-tabs" id="justifiedTabVertical" role="tablist">
    <li class="nav-item">
      <a aria-controls="example4tab" aria-selected="true" class="nav-link flex-column active" data-toggle="tab" href="#example4tab" id="example4" role="tab"><i class="material-icons">phone</i> tab one</a>
    </li>
    <li class="nav-item">
      <a aria-controls="example42tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example42tab" id="example42" role="tab"><i class="material-icons">favorite</i> tab two</a>
    </li>
    <li class="nav-item">
      <a aria-controls="example43tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example43tab" id="example43" role="tab"><i class="material-icons">location_on</i> tab three</a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContentVertical">
    <div aria-labelledby="example4" class="tab-pane active fade show" id="example4tab" role="tabpanel">
      <p>Panel 1.</p>
    </div>
    <div aria-labelledby="example42" class="tab-pane fade" id="example42tab" role="tabpanel">
      <p>Panel 2.</p>
    </div>
    <div aria-labelledby="example43" class="tab-pane fade" id="example43tab" role="tabpanel">
      <p>Panel 3.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-justified nav-tabs" id="justifiedTabVertical" role="tablist">
  <li class="nav-item">
    <a aria-controls="example4tab" aria-selected="true" class="nav-link flex-column active" data-toggle="tab" href="#example4tab" id="example4" role="tab"><i class="material-icons">phone</i> tab one</a>
  </li>
  <li class="nav-item">
    <a aria-controls="example42tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example42tab" id="example42" role="tab"><i class="material-icons">favorite</i> tab two</a>
  </li>
  <li class="nav-item">
    <a aria-controls="example43tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example43tab" id="example43" role="tab"><i class="material-icons">location_on</i> tab three</a>
  </li>
</ul>
<div class="tab-content" id="myTabContentVertical">
  <div aria-labelledby="example4" class="tab-pane active fade show" id="example4tab" role="tabpanel">
    <p>Panel 1.</p>
  </div>
  <div aria-labelledby="example42" class="tab-pane fade" id="example42tab" role="tabpanel">
    <p>Panel 2.</p>
  </div>
  <div aria-labelledby="example43" class="tab-pane fade" id="example43tab" role="tabpanel">
    <p>Panel 3.</p>
  </div>
</div>
{% endhighlight %}

## Tabs on dark background

When using tabs on a dark background, add `nav-inverse` class to your `nav nav-tabs` container. It will lighten text and icons used according to Material guidelines.

<div class="bd-example bd-example-tabs">
  <div class="pt-2 bg-primary">
    <ul class="nav nav-justified nav-tabs nav-inverse" id="justifiedTabInverse" role="tablist">
      <li class="nav-item">
        <a aria-controls="example5tab" aria-selected="true" class="nav-link flex-column active" data-toggle="tab" href="#example5tab" id="example5" role="tab"><i class="material-icons">phone</i> tab one</a>
      </li>
      <li class="nav-item">
        <a aria-controls="example52tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example52tab" id="example52" role="tab"><i class="material-icons">favorite</i> tab two</a>
      </li>
      <li class="nav-item">
        <a aria-controls="example53tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example53tab" id="example53" role="tab"><i class="material-icons">location_on</i> tab three</a>
      </li>
    </ul>
  </div>
  <div class="tab-content" id="myTabContentInverse">
    <div aria-labelledby="example5" class="tab-pane active fade show" id="example5tab" role="tabpanel">
      <p>Panel 1.</p>
    </div>
    <div aria-labelledby="example52" class="tab-pane fade" id="example52tab" role="tabpanel">
      <p>Panel 2.</p>
    </div>
    <div aria-labelledby="example53" class="tab-pane fade" id="example53tab" role="tabpanel">
      <p>Panel 3.</p>
    </div>
  </div>
</div>

{% highlight html %}
<div class="pt-2 bg-primary">
  <ul class="nav nav-justified nav-tabs nav-inverse" id="justifiedTabInverse" role="tablist">
    <li class="nav-item">
      <a aria-controls="example5tab" aria-selected="true" class="nav-link flex-column active" data-toggle="tab" href="#example5tab" id="example5" role="tab"><i class="material-icons">phone</i> tab one</a>
    </li>
    <li class="nav-item">
      <a aria-controls="example52tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example52tab" id="example52" role="tab"><i class="material-icons">favorite</i> tab two</a>
    </li>
    <li class="nav-item">
      <a aria-controls="example53tab" aria-selected="false" class="nav-link flex-column" data-toggle="tab" href="#example53tab" id="example53" role="tab"><i class="material-icons">location_on</i> tab three</a>
    </li>
  </ul>
</div>
<div class="tab-content" id="myTabContentInverse">
  <div aria-labelledby="example5" class="tab-pane active fade show" id="example5tab" role="tabpanel">
    <p>Panel 1.</p>
  </div>
  <div aria-labelledby="example52" class="tab-pane fade" id="example52tab" role="tabpanel">
    <p>Panel 2.</p>
  </div>
  <div aria-labelledby="example53" class="tab-pane fade" id="example53tab" role="tabpanel">
    <p>Panel 3.</p>
  </div>
</div>
{% endhighlight %}

## Scrollable tabs

Scrollable tabs are displayed without fixed widths. They are scrollable, such that some tabs will remain off-screen until scrolled.

**N.B.** Due to its `overflow` value, scrollable tabs are not compatible with dropdown components.

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
