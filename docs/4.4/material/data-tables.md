---
layout: docs
title: Data tables
description: Data tables display sets of data across rows and columns.
group: material
---

<div class="list-group mt-lg-5">
    <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/" target="_blank" class="list-group-item list-group-item-action lgi-icon-bs">Bootstrap documentation: Tables
      <span class="d-block font-weight-normal text-black-secondary"> Most of the details have been covered here</span>
    </a>
    <a href="https://material.io/components/data-tables/" class="list-group-item list-group-item-action lgi-icon-md">Material Design guidelines: Data tables</a>
    <a href="https://material-components.github.io/material-components-web-catalog/#/component/data-table" class="list-group-item list-group-item-action lgi-icon-mdc">Material Components for the web: Data table</a>
</div>

Data tables display information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan, so that users can look for patterns and insights.

Data tables can contain:

* Interactive components (such as chips, buttons, or menus)
* Non-interactive elements (such as badges)
* Tools to query and manipulate data

## Data Table Standard

Wrap your table within a div and add ```data-table``` class to this div.

It will add rounded borders and hover effect for each line.

{% capture example %}
<div class="data-table">
  <table class="table mb-0">
    <thead>
      <tr>
        <th scope="col">Dessert</th>
        <th scope="col">Calories</th>
        <th scope="col">Fat</th>
        <th scope="col">Carbs</th>
        <th scope="col">Protein (g)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Frozen yogurt</th>
        <td>159</td>
        <td>6</td>
        <td>24</td>
        <td>4</td>
      </tr>
      <tr>
        <th scope="row">Ice cream sandwich</th>
        <td>237</td>
        <td>9</td>
        <td>37</td>
        <td>4.3</td>
      </tr>
      <tr>
        <th scope="row">Eclair</th>
        <td>262</td>
        <td>16</td>
        <td>24</td>
        <td>6</td>
      </tr>
    </tbody>
  </table>
</div>
{% endcapture %}
{% include example.html content=example %}

## Data Table with Row Selection

Hope to add it in next version.

## Pagination

WIP.

Data manipulation tools and table navigation can be added using card components.

{% capture example %}
<div class="card">
  <div class="card-header d-flex pr-0">
    <h5 class="card-title mb-0">Card title</h5>
    <div class="card-actions ml-auto py-0">
      <div class="dropdown">
        <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline my-0" data-toggle="dropdown" id="cardTableDrop1" type="button"><i class="material-icons">filter_list</i></button>
        <div aria-labelledby="cardTableDrop1" class="dropdown-menu dropdown-menu-right menu">
          <a class="dropdown-item" href="#">Filter 1</a>
          <a class="dropdown-item" href="#">Filter 2</a>
          <a class="dropdown-item" href="#">Filter 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline my-0" data-toggle="dropdown" id="cardTableDrop2" type="button"><i class="material-icons">more_vert</i></button>
        <div aria-labelledby="cardTableDrop2" class="dropdown-menu dropdown-menu-right menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
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
      <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline dropdown-toggle" data-toggle="dropdown" type="button">3</button>
      <div class="dropdown-menu dropdown-menu-right menu">
        <a class="dropdown-item active" href="#">3</a>
        <a class="dropdown-item" href="#">10</a>
        <a class="dropdown-item" href="#">100</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Show all</a>
      </div>
    </div>
    <span class="align-self-center mb-1 mr-2 text-muted">1-3 of 300</span>
    <a class="btn btn-outline" href="#"><i class="material-icons">chevron_left</i></a>
    <a class="btn btn-outline" href="#"><i class="material-icons">chevron_right</i></a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
