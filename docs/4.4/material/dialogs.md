---
layout: docs
title: Dialogs
description: Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.
group: material
toc: true
---

A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.

<div class="list-group mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/components/modal/" target="_blank" class="list-group-item list-group-item-action lgi-icon-bs">Bootstrap documentation: Modal
      <span class="d-block font-weight-normal text-black-secondary"> Most of the details have been covered here</span>
    </a>
    <a href="https://material.io/components/dialogs/" target="_blank" class="list-group-item list-group-item-action lgi-icon-md">Material Design guidelines: Dialogs</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/dialog" target="_blank" class="list-group-item list-group-item-action lgi-icon-mdc">Material Components for the web: Dialogs</a>
</div>

## Alerts

Alert dialogs interrupt users with urgent information, details, or actions.

### Alerts with title

A dialog’s purpose should be communicated by its title and button text.

Titles should:

- Contain a brief, clear statement or question
- Avoid apologies (“Sorry for the interruption”), alarm (“Warning!”), or ambiguity (“Are you sure?”)

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Get this party started?</h5>
        </div>
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Turn up the jams and have a good time.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-dismiss="modal" type="button">Decline</button>
          <button class="btn btn-primary" type="button">Accept</button>
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
        <h5 class="modal-title">Get this party started?</h5>
      </div>
      <div class="modal-body">
        <p class="text-black-secondary typography-body-1">Turn up the jams and have a good time.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-dismiss="modal" type="button">Decline</button>
        <button class="btn btn-primary" type="button">Accept</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Alerts without title

Most alerts don't need titles. They summarize a decision in a sentence or two by either asking a question or making a statement related to the action buttons.

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body typography-body-1">
          Discard draft?
        </div>
        <div class="modal-footer">
          <button class="btn btn-flat-primary" data-dismiss="modal" type="button">Cancel</button>
          <button class="btn btn-flat-primary" type="button">Discard</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}

<div class="modal">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body typography-body-1">
        Discard draft?
      </div>
      <div class="modal-footer">
        <button class="btn btn-flat-primary" data-dismiss="modal" type="button">Cancel</button>
        <button class="btn btn-flat-primary" type="button">Discard</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Scrollable alert

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">
The Wonderful Wizard of Oz</h5>
      </div>
      <div class="modal-body">
        <p><a href="https://www.gutenberg.org/ebooks/55" target="_blank" rel="noopener noreferrer">Read the full book</a></p>
        <p>Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.</p>
        <p>When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.</p>
        <p>When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.</p>
        <p>Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.</p>
        <p>It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly.</p>
        <p>Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.</p>
        <p>From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where the long grass bowed in waves before the coming storm. There now came a sharp whistling in the air from the south, and as they turned their eyes that way they saw ripples in the grass coming from that direction also.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Decline</button>
        <button type="button" class="btn btn-primary">Accept</button>
      </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}

<div class="modal">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">
The Wonderful Wizard of Oz</h5>
      </div>
      <div class="modal-body">
        <p><a href="https://www.gutenberg.org/ebooks/55" target="_blank" rel="noopener noreferrer">Read the full book</a></p>
        <p>Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.</p>
        <p>When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.</p>
        <p>When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.</p>
        <p>Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.</p>
        <p>It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly.</p>
        <p>Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.</p>
        <p>From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where the long grass bowed in waves before the coming storm. There now came a sharp whistling in the air from the south, and as they turned their eyes that way they saw ripples in the grass coming from that direction also.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-flat-primary" data-dismiss="modal">Decline</button>
        <button type="button" class="btn btn-flat-primary">Accept</button>
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
        <div class="modal-body typography-body-1">
          Discard draft?
        </div>
        <div class="modal-footer">
          <button class="btn btn-flat-primary" data-dismiss="modal" type="button">Cancel</button>
          <button class="btn btn-flat-primary" type="button">Discard</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}

<div class="modal">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body typography-body-1">
        Discard draft?
      </div>
      <div class="modal-footer">
        <button class="btn btn-flat-primary" data-dismiss="modal" type="button">Cancel</button>
        <button class="btn btn-flat-primary" type="button">Discard</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Stacked full-width buttons

Stacked buttons accommodate longer button text. Confirming actions appear above dismissive actions.

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Use location service?</h5>
        </div>
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Let us help apps determine location. This means sending anonymous location data to us, even when no apps are running.</p>
        </div>
        <div class="modal-footer modal-footer-stacked">
          <button class="btn btn-flat-primary" type="button">Turn on Speed Boost</button>
          <button class="btn btn-flat-primary" data-dismiss="modal" type="button">No Thanks</button>
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
        <h5 class="modal-title">Use location service?</h5>
      </div>
      <div class="modal-body">
        <p class="text-black-secondary typography-subheading">Let us help apps determine cation. This means sending anonymous location data to us, even when no apps are nning.</p>
      </div>
      <div class="modal-footer modal-footer-stacked">
        <button class="btn btn-flat-primary" type="button">Turn on Speed Boost</button>
        <button class="btn btn-flat-primary" data-dismiss="modal" type="button">No Thanks</tton>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}
