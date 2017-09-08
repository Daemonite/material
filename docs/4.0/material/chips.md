---
layout: docs
title: Chips
description: Chips represent complex entities in small blocks, such as a contact.
group: material
toc: true
---

## Usage

Chips can be used for various types of entities, including brief information, free form text, or short title. Chips may also contain icons or photos.

{% example html %}
<span class="chip">Chip Label</span>
<span class="chip"><i class="chip-icon">C</i>Chip Label</span>
<span class="chip"><img alt="Chip Image" class="chip-img" src="{{ site.baseurl }}/apple-touch-icon.png">Chip Label</span>
{% endexample %}

Chips can be deletable. A delete icon can be displayed if a chip is deletable.

{% example html %}
<span class="chip fade show" id="chipDismissible">
  Chip Label
  <button class="close" data-dismiss="alert" data-target="#chipDismissible" type="button"><i class="material-icons">cancel</i></button>
</span>
{% endexample %}

Chips can be interactive. Use `<a>`s or `<button>`s to create actionable chips with active, focus and hover states by adding `.chip-action`.

{% example html %}
<button class="chip chip-action" type="button">Chip Action Label</button>
<a class="chip chip-action" href="#"><i class="chip-icon">C</i>Chip Action Label</a>
<a class="chip chip-action" href="#"><img alt="Chip Image" class="chip-img" src="{{ site.baseurl }}/apple-touch-icon.png">Chip Action Label</a>
{% endexample %}
