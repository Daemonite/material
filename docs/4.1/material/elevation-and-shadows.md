---
layout: docs
title: Elevation and shadows
description: In the physical world, objects can be affixed or stacked to one another, but cannot pass through each other. Objects also cast shadows and reflect light. Material reflects these qualities to form a spatial model that is familiar to users and can be applied consistently across apps.
group: material
toc: true
---

## Elevation

Elevation is the relative depth, or distance, between two surfaces along the z-axis.

Several Material components utilise `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. A default `z-index` scale in Material has been designed to properly layer dialogs, navdrawers, toolbars, and more.

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th>Component (<code>class</code>)</th>
        <th>Elevation (<code>z-index</code>)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dialog (<code>.modal</code>)</td>
        <td><code class="text-nowrap">map-get($elevations, 24)</code> (<code>z-index: 240;</code>)</td>
      </tr>
      <tr>
        <td>Picker (<code>.picker</code>)</td>
        <td><code class="text-nowrap">map-get($elevations, 24)</code> (<code>z-index: 240;</code>)</td>
      </tr>
      <tr>
        <td>Popover &amp; tooltip (<code>.popover</code> &amp; <code>.tooltip</code>)</td>
        <td><code class="text-nowrap">map-get($elevations, 24)</code> (<code>z-index: 240;</code>)</td>
      </tr>
      <tr>
        <td>Navigation drawer (<code>.navdrawer</code>)</td>
        <td><code class="text-nowrap">map-get($elevations, 16)</code> (<code>z-index: 160;</code>)</td>
      </tr>
      <tr>
        <td>Menu (<code>.dropdown-menu</code>)</td>
        <td><code class="text-nowrap">map-get($elevations, 8)</code> (<code>z-index: 80;</code>)</td>
      </tr>
      <tr>
        <td>Snackbar (<code>.snackbar</code>)</td>
        <td><code class="text-nowrap">map-get($elevations, 6)</code> (<code>z-index: 60;</code>)</td>
      </tr>
      <tr>
        <td>Toolbar (<code>.navbar</code>)</td>
        <td><code class="text-nowrap">map-get($elevations, 4)</code> (<code>z-index: 40;</code>)</td>
      </tr>
    </tbody>
  </table>
</div>

## Shadows

Shadows provide important visual cues about objects’ depth and directional movement. They are the only visual cue indicating the amount of separation between surfaces.

Most Material components have default shadows applied:

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th>Component (<code>class</code>)</th>
        <th>Shadow</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dialog (<code>.modal-content</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 24)</code></td>
      </tr>
      <tr>
        <td>Picker (<code>.picker-wrap</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 24)</code></td>
      </tr>
      <tr>
        <td>Popover (<code>.popover</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 24)</code></td>
      </tr>
      <tr>
        <td>Navigation drawer (<code>.navdrawer-content</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 16)</code></td>
      </tr>
      <tr>
        <td>Carousel control pressed (<code>.carousel-control-next:active</code> &amp; <code>.carousel-control-prev:active</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 12)</code></td>
      </tr>
      <tr>
        <td>Floating action button pressed (<code>.btn-float:active</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 12)</code></td>
      </tr>
      <tr>
        <td>Card pressed (<code>.card:active</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 8)</code></td>
      </tr>
      <tr>
        <td>Menu (<code>.dropdown-menu</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 8)</code></td>
      </tr>
      <tr>
        <td>Raised button pressed (<code>.btn:active</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 8)</code></td>
      </tr>
      <tr>
        <td>Carousel control (<code>.carousel-control-next</code> &amp; <code>.carousel-control-prev</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 6)</code></td>
      </tr>
      <tr>
        <td>Floating action button (<code>.btn-float</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 6)</code></td>
      </tr>
      <tr>
        <td>Snackbar (<code>.snackbar</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 6)</code></td>
      </tr>
      <tr>
        <td>Toolbar (<code>.navbar</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 4)</code></td>
      </tr>
      <tr>
        <td>Card (<code>.card</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 2)</code></td>
      </tr>
      <tr>
        <td>Chip hovered (<code>.chip:hover</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 2)</code></td>
      </tr>
      <tr>
        <td>Jumbotron (<code>.jumbotron</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 2)</code></td>
      </tr>
      <tr>
        <td>Raised button (<code>.btn</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 2)</code></td>
      </tr>
      <tr>
        <td>Expansion panel (<code>.expansion-panel</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 1)</code></td>
      </tr>
      <tr>
        <td>Switch (<code>.custom-switch .custom-control-label::after</code>)</td>
        <td><code class="text-nowrap">map-get($shadows, 1)</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Shadow utility classes

Material also provides utility classes to quickly add or remove a shadow for any componenet/element.

{% capture example %}
<div class="bg-light mb-3 p-3 rounded shadow-none"><code>0dp</code> shadow</div>
<div class="bg-white mb-3 p-3 rounded shadow-1"><code>1dp</code> shadow</div>
<div class="bg-white mb-3 p-3 rounded shadow-2"><code>2dp</code> shadow</div>
<div class="bg-white mb-3 p-3 rounded shadow-4"><code>4dp</code> shadow</div>
<div class="bg-white mb-3 p-3 rounded shadow-6"><code>6dp</code> shadow</div>
<div class="bg-white mb-3 p-3 rounded shadow-8"><code>8dp</code> shadow</div>
<div class="bg-white mb-3 p-3 rounded shadow-12"><code>12dp</code> shadow</div>
<div class="bg-white mb-3 p-3 rounded shadow-16"><code>16dp</code> shadow</div>
<div class="bg-white p-3 rounded shadow-24"><code>24dp</code> shadow</div>
{% endcapture %}
{% include example.html content=example %}
