---
layout: docs
title: Dialogs
description: Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.
group: material
toc: true
---

Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.

**Most of the details about dialogs have been covered in Components/Modal documentation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/modal/) for more details.**

## Alerts

Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.

### Alerts with title bars

Use title bar alerts for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Use Google's location services?</h5>
        </div>
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-info" data-dismiss="modal" type="button">Disagree</button>
          <button class="btn btn-outline-info" type="button">Agree</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Use Google's location services?</h5>
      </div>
      <div class="modal-body">
        <p class="text-black-secondary typography-subheading">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-info" data-dismiss="modal" type="button">Disagree</button>
        <button class="btn btn-outline-info" type="button">Agree</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Alerts without title bars

Most alerts don't need titles. They summarize a decision in a sentence or two by either asking a question or making a statement related to the action buttons.

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Discard draft?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-info" data-dismiss="modal" type="button">Cancel</button>
          <button class="btn btn-outline-info" type="button">Discard</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p class="text-black-secondary typography-subheading">Discard draft?</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-info" data-dismiss="modal" type="button">Cancel</button>
        <button class="btn btn-outline-info" type="button">Discard</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

## Buttons

### Side-by-side buttons

Flat buttons should be used in dialogs. In addition, the affirmative button should be placed on the right while the dismissive button should be placed on the left while both should use the same colour, ideally, info or primary colour.

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Discard draft?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-info" data-dismiss="modal" type="button">Cancel</button>
          <button class="btn btn-outline-info" type="button">Discard</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p class="text-black-secondary typography-subheading">Discard draft?</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-info" data-dismiss="modal" type="button">Cancel</button>
        <button class="btn btn-outline-info" type="button">Discard</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Stacked full-width buttons

When text labels contain too many characters, use stacked buttons to accommodate the text. Affirmative actions are stacked above dismissive actions.

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Lorem ipsum dolor sit amet</h5>
        </div>
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="modal-footer modal-footer-stacked">
          <button class="btn btn-outline-info" type="button">Turn on Speed Boost</button>
          <button class="btn btn-outline-info" data-dismiss="modal" type="button">No Thanks</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Lorem ipsum dolor sit amet</h5>
      </div>
      <div class="modal-body">
        <p class="text-black-secondary typography-subheading">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="modal-footer modal-footer-stacked">
        <button class="btn btn-outline-info" type="button">Turn on Speed Boost</button>
        <button class="btn btn-outline-info" data-dismiss="modal" type="button">No Thanks</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

