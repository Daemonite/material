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
          <h5 class="modal-title">Use location service?</h5>
        </div>
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Let us help apps to determine location. This means sending anonymous location data to us, even when no apps are running.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-flat-primary" type="button">Turn on speed boost</button>
          <button class="btn btn-flat-primary" data-dismiss="modal" type="button">Remind me later</button>
          <button class="btn btn-flat-primary" data-dismiss="modal" type="button">No thanks</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal">
  <div class="modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Use location service?</h5>
        </div>
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Let us help apps to determine location. This means sending anonymous location data to us, even when no apps are running.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-flat-primary" type="button">Turn on speed boost</button>
          <button class="btn btn-flat-primary" data-dismiss="modal" type="button">Remind me later</button>
          <button class="btn btn-flat-primary" data-dismiss="modal" type="button">No thanks</button>
        </div>
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
        <button type="button" class="btn btn-flat-primary" data-dismiss="modal">Decline</button>
        <button type="button" class="btn btn-flat-primary">Accept</button>
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
        <div class="modal-body">
          <p class="text-black-secondary typography-subheading">Discard draft?</p>
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
      <div class="modal-body">
        <p class="text-black-secondary typography-subheading">Discard draft?</p>
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
        <h5 class="modal-title">Lorem ipsum dolor sit amet</h5>
      </div>
      <div class="modal-body">
        <p class="text-black-secondary typography-subheading">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="modal-footer modal-footer-stacked">
        <button class="btn btn-flat-primary" type="button">Turn on Speed Boost</button>
        <button class="btn btn-flat-primary" data-dismiss="modal" type="button">No Thanks</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

