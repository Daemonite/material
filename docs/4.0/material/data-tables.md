---
layout: docs
title: Data tables
description: Data tables display sets of raw data.
group: material
---

Most of the details about chips have been covered in Content/Tables docuementation. Please refer to [this page]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/) for more details.

## Tables within cards

Tables may be embedded within a card, with data manipulation tools and table navigation displayed using card components.

{% example html %}
<div class="card">
  <div class="card-header d-flex pr-no">
    <h4 class="card-title mb-no">Card title</h4>
    <div class="card-actions ml-auto py-no">
      <div class="dropdown">
        <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline my-no waves-attach" data-toggle="dropdown" type="button"><i class="material-icons">filter_list</i></button>
        <div aria-labelledby="cardTableDrop1" class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item waves-attach" href="#">Filter 1</a>
          <a class="dropdown-item waves-attach" href="#">Filter 2</a>
          <a class="dropdown-item waves-attach" href="#">Filter 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline my-no waves-attach" data-toggle="dropdown" type="button"><i class="material-icons">more_vert</i></button>
        <div aria-labelledby="cardTableDrop2" class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item waves-attach" href="#">Action</a>
          <a class="dropdown-item waves-attach" href="#">Another action</a>
          <a class="dropdown-item waves-attach" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item waves-attach" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
  <table class="table mb-no">
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
  <hr class="my-no w-100">
  <div class="card-actions justify-content-end">
    <span class="align-self-center m-xs text-muted">Rows per page:</span>
    <div class="dropdown">
      <button aria-expanded="false" aria-haspopup="true" class="btn btn-outline dropdown-toggle waves-attach" data-toggle="dropdown" type="button">3</button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item waves-attach active" href="#">3</a>
        <a class="dropdown-item waves-attach" href="#">10</a>
        <a class="dropdown-item waves-attach" href="#">100</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item waves-attach" href="#">Show all</a>
      </div>
    </div>
    <span class="align-self-center m-xs text-muted">1-3 of 300</span>
    <a class="btn btn-outline waves-attach" href="#"><i class="material-icons">chevron_left</i></a>
    <a class="btn btn-outline waves-attach" href="#"><i class="material-icons">chevron_right</i></a>
  </div>
</div>
{% endexample %}
