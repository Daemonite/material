---
layout: docs
title: Data tables
description: Data tables display sets of data across rows and columns.
group: material
---

<div class="list-group mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/" target="_blank" class="list-group-item list-group-item-action d-flex list-group-item-two-line font-weight-bold">
      <span class="list-group-item-icon lgi-icon-bs"></span>
      <span class="list-group-item-text">
        <span>Bootstrap documentation: Tables</span>
        <span>Most of the details have been covered here</span>
      </span>
    </a>
    <a href="https://material.io/components/data-tables" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Data tables</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/data-table" class="list-group-item list-group-item-action d-flex font-weight-bold">
      <span class="list-group-item-icon lgi-icon-mdc"></span>
      Material Components for the web: Data table</a>
</div>

Data tables display information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan, so that users can look for patterns and insights.

Data tables can contain:

* Interactive components (such as chips, buttons, or menus)
* Non-interactive elements (such as badges)
* Tools to query and manipulate data

## Data Table Standard

Wrap your table within a div and add `data-table` class to this div. It will add rounded borders and hover effect for each line.

{% capture example %}
<div class="data-table">
  <table class="table mb-0">
    <thead>
      <tr>
        <th scope="col">Dessert</th>
        <th scope="col" class="text-right">Calories</th>
        <th scope="col" class="text-right">Fat</th>
        <th scope="col" class="text-right">Carbs</th>
        <th scope="col" class="text-right">Protein (g)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Frozen yogurt</th>
        <td class="text-right">159</td>
        <td class="text-right">6</td>
        <td class="text-right">24</td>
        <td class="text-right">4</td>
      </tr>
      <tr>
        <th scope="row">Ice cream sandwich</th>
        <td class="text-right">237</td>
        <td class="text-right">9</td>
        <td class="text-right">37</td>
        <td class="text-right">4.3</td>
      </tr>
      <tr>
        <th scope="row">Eclair</th>
        <td class="text-right">262</td>
        <td class="text-right">16</td>
        <td class="text-right">24</td>
        <td class="text-right">6</td>
      </tr>
    </tbody>
  </table>
</div>
{% endcapture %}
{% include example.html content=example %}

## Data Table with Row Selection

*Hope to add it in next version.*

## Pagination

Data manipulation tools and table navigation can be added using card components.

{% capture example %}
<div class="card">
  <div class="card-header d-flex pr-0">
    <div class="dropdown">
      <button aria-expanded="false" aria-haspopup="true" class="btn btn-flat my-0" data-toggle="dropdown" id="cardTableDrop1" type="button"><i class="material-icons">filter_list</i></button>
      <div aria-labelledby="cardTableDrop1" class="dropdown-menu opdown-menu-right menu">
        <a class="dropdown-item" href="#">Filter 1</a>
        <a class="dropdown-item" href="#">Filter 2</a>
        <a class="dropdown-item" href="#">Filter 3</a>
      </div>
    </div>
    <div class="dropdown ml-auto">
      <button aria-expanded="false" aria-haspopup="true" class="btn btn-flat my-0" data-toggle="dropdown" id="cardTableDrop2" type="button"><i class="material-icons">more_vert</i></button>
      <div aria-labelledby="cardTableDrop2" class="dropdown-menu dropdown-menu-right menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>
  <table class="table mb-0">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  <hr class="my-0 w-100">
  <div class="card-actions align-items-center justify-content-end">
    <span class="align-self-center mb-1 mx-1 text-muted">Rows per page:</span>
    <div class="dropdown">
      <button aria-expanded="false" aria-haspopup="true" class="btn btn-flat dropdown-toggle" data-toggle="dropdown" type="button">3</button>
      <div class="dropdown-menu dropdown-menu-right menu">
        <a class="dropdown-item active" href="#">3</a>
        <a class="dropdown-item" href="#">10</a>
        <a class="dropdown-item" href="#">100</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Show all</a>
      </div>
    </div>
    <span class="align-self-center mb-1 mr-2">1-3 of 300</span>
    <a class="btn btn-flat" href="#"><i class="material-icons">chevron_left</i></a>
    <a class="btn btn-flat" href="#"><i class="material-icons">chevron_right</i></a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
