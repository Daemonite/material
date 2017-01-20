---
layout: docs
title: Buttons
description: Buttons communicate the action that will occur when the user touches them.
group: material
redirect_from: "/material/"
---

Material buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and raised buttons are the most commonly used types.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Flat & raised buttons

### Flat buttons

Flat buttons are text-only buttons. They may be used in dialogs, toolbars, or inline. They do not lift, but fill with color on press.

Outline buttons, i.e. `.btn-outline-*`, are the equivalent of Material flat buttons. For more details, please refer to [Bootstrap buttons documentation]({{ site.url}}/gh-pages/components/buttons/index.html#outline-buttons).

{% example html %}
<button type="button" class="btn btn-outline">Flat</button>
{% endexample %}

### Raised buttons

Raised buttons are rectangular-shaped buttons. They may be used inline. They lift and display ink reactions on press.

Default buttons, i.e. `.btn`, are the equivalent of Material raised buttons. For more details, please refer to [Bootstrap buttons documentation]({{ site.url}}/gh-pages/components/buttons/index.html#examples).

{% example html %}
<button type="button" class="btn">Raised</button>
{% endexample %}

## Floating action buttons

A floating action button represents the primary action in an application, it is used for a promoted action.

{% example html %}
<button type="button" class="btn btn-float"><i class="material-icons">add</i></button>
{% endexample %}

### Brand colours

{% example html %}
<button type="button" class="btn btn-float btn-primary">P</button>
<button type="button" class="btn btn-float btn-secondary">S</button>
{% endexample %}

### Contextual colours

{% example html %}
<button type="button" class="btn btn-float btn-danger">D</button>
<button type="button" class="btn btn-float btn-info">I</button>
<button type="button" class="btn btn-float btn-success">S</button>
<button type="button" class="btn btn-float btn-warning">W</button>
{% endexample %}

### Sizes

A smaller sized, i.e. mini floating action button, is also available.

{% example html %}
<button type="button" class="btn btn-float btn-sm"><i class="material-icons">add</i></button>
{% endexample %}

## Ripple

A ripple effect can be added to buttons to connect user input to surface reactions. Add `.waves-attach` to the button elements for this addtional effect. This requires `material.js`.

{% example html %}
<button type="button" class="btn btn-outline waves-attach">Flat with ripple</button>
<button type="button" class="btn waves-attach">Raised with ripple</button>
{% endexample %}

Add `.waves-circle` for circle/rounded elements.

{% example html %}
<button type="button" class="btn btn-float waves-attach waves-circle"><i class="material-icons">add</i></button>
{% endexample %}
