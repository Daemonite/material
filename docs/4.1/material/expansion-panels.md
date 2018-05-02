---
layout: docs
title: Expansion panels
description: An expansion panel is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.
group: material
toc: true
---

## Examples

An expansion panel can stand alone.

{% capture example %}
<div class="list-group" id="accordionOne">
  <div class="expansion-panel list-group-item">
    <a aria-controls="collapseOne" aria-expanded="false" class="expansion-panel-toggler collapsed" data-toggle="collapse" href="#collapseOne" id="headingOne">
      Expansion panel item #1
      <div class="expansion-panel-icon ml-3 text-black-secondary">
        <i class="collapsed-show material-icons">keyboard_arrow_down</i>
        <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
      </div>
    </a>
    <div aria-labelledby="headingOne" class="collapse" data-parent="#accordionOne" id="collapseOne">
      <div class="expansion-panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="expansion-panel list-group-item">
    <a aria-controls="collapseTwo" aria-expanded="false" class="expansion-panel-toggler collapsed" data-toggle="collapse" href="#collapseTwo" id="headingTwo">
      Expansion panel item #2
      <div class="expansion-panel-icon ml-3 text-black-secondary">
        <i class="collapsed-show material-icons">keyboard_arrow_down</i>
        <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
      </div>
    </a>
    <div aria-labelledby="headingTwo" class="collapse" data-parent="#accordionOne" id="collapseTwo">
      <div class="expansion-panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="expansion-panel list-group-item">
    <a aria-controls="collapseThree" aria-expanded="false" class="expansion-panel-toggler collapsed" data-toggle="collapse" href="#collapseThree" id="headingThree">
      Expansion panel item #3
      <div class="expansion-panel-icon ml-3 text-black-secondary">
        <i class="collapsed-show material-icons">keyboard_arrow_down</i>
        <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
      </div>
    </a>
    <div aria-labelledby="headingThree" class="collapse" data-parent="#accordionOne" id="collapseThree">
      <div class="expansion-panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

An expansion panel can also be connected to a larger surface, such as a card.

{% capture example %}
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="list-group list-group-flush" id="accordionTwo">
    <div class="expansion-panel list-group-item">
      <a aria-controls="collapseFour" aria-expanded="false" class="expansion-panel-toggler collapsed" data-toggle="collapse" href="#collapseFour" id="headingFour">
        Connected expansion panel item #1
        <div class="expansion-panel-icon ml-3 text-black-secondary">
          <i class="collapsed-show material-icons">keyboard_arrow_down</i>
          <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
        </div>
      </a>
      <div aria-labelledby="headingFour" class="collapse" data-parent="#accordionTwo" id="collapseFour">
        <div class="expansion-panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div class="expansion-panel list-group-item">
      <a aria-controls="collapseFive" aria-expanded="false" class="expansion-panel-toggler collapsed" data-toggle="collapse" href="#collapseFive" id="headingFive">
        Connected expansion panel item #2
        <div class="expansion-panel-icon ml-3 text-black-secondary">
          <i class="collapsed-show material-icons">keyboard_arrow_down</i>
          <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
        </div>
      </a>
      <div aria-labelledby="headingFive" class="collapse" data-parent="#accordionTwo" id="collapseFive">
        <div class="expansion-panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div class="expansion-panel list-group-item">
      <a aria-controls="collapseSix" aria-expanded="false" class="expansion-panel-toggler collapsed" data-toggle="collapse" href="#collapseSix" id="headingSix">
        Connected expansion panel item #3
        <div class="expansion-panel-icon ml-3 text-black-secondary">
          <i class="collapsed-show material-icons">keyboard_arrow_down</i>
          <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
        </div>
      </a>
      <div aria-labelledby="headingSix" class="collapse" data-parent="#accordionTwo" id="collapseSix">
        <div class="expansion-panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Usage

Expansion panels are best used for lightweight editing of an element. A collapsed panel displays summary information. Upon selecting the collapsed panel, it expands to display the full expansion panel, allowing users to add or edit information.

{% capture example %}
<div class="list-group" id="accordionThree">
  <div class="expansion-panel list-group-item">
    <div aria-controls="collapseSeven" aria-expanded="false" class="expansion-panel-toggler collapsed" data-target="#collapseSeven" data-toggle="collapse" id="headingSeven" role="button">
      <div class="media-body row">
        <div class="col-12 col-sm-4">
          Item #1
        </div>
        <div class="col-12 col-sm-8 text-black-secondary">
          Value #1
        </div>
      </div>
      <div class="expansion-panel-icon ml-3 text-black-secondary">
        <i class="collapsed-show material-icons">keyboard_arrow_down</i>
        <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
      </div>
    </div>
    <div aria-labelledby="headingSeven" class="collapse" data-parent="#accordionThree" id="collapseSeven">
      <div class="expansion-panel-body">
        <div class="floating-label textfield-box">
          <label for="exampleInputOne">Enter value for Item #1</label>
          <input class="form-control" id="exampleInputOne" placeholder="Placehoder" type="text" value="Value #1">
        </div>
      </div>
      <div class="expansion-panel-footer">
        <button class="btn btn-outline" data-target="#collapseSeven" data-toggle="collapse" type="button">Cancel</button>
        <button class="btn btn-outline-info" data-target="#collapseSeven" data-toggle="collapse" type="button">Save</button>
      </div>
    </div>
  </div>
  <div class="expansion-panel list-group-item">
    <div aria-controls="collapseEight" aria-expanded="false" class="expansion-panel-toggler collapsed" data-target="#collapseEight" data-toggle="collapse" id="headingEight" role="button">
      <div class="media-body row">
        <div class="col-12 col-sm-4">
          Item #2
        </div>
        <div class="col-12 col-sm-8 text-black-secondary">
          Value #2
        </div>
      </div>
      <div class="expansion-panel-icon ml-3 text-black-secondary">
        <i class="collapsed-show material-icons">keyboard_arrow_down</i>
        <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
      </div>
    </div>
    <div aria-labelledby="headingEight" class="collapse" data-parent="#accordionThree" id="collapseEight">
      <div class="expansion-panel-body">
        <div class="row">
          <div class="col-12 col-sm-2 align-self-center">
            <small class="text-black-secondary">Choose value(s) for Item #2</small>
          </div>
          <div class="col-12 col-sm-10">
            <div class="chip fade mt-1 show" id="chipDismissible1">
              Value #1
              <button class="close" data-dismiss="alert" data-target="#chipDismissible1" type="button"><i class="material-icons">cancel</i></button>
            </div>
            <div class="chip chip-info fade mt-1 show" id="chipDismissible2">
              Value #2
              <button class="close" data-dismiss="alert" data-target="#chipDismissible2" type="button"><i class="material-icons">cancel</i></button>
            </div>
            <div class="chip fade mt-1 show" id="chipDismissible3">
              Value #3
              <button class="close" data-dismiss="alert" data-target="#chipDismissible3" type="button"><i class="material-icons">cancel</i></button>
            </div>
            <div class="chip fade mt-1 show" id="chipDismissible4">
              Value #4
              <button class="close" data-dismiss="alert" data-target="#chipDismissible4" type="button"><i class="material-icons">cancel</i></button>
            </div>
            <div class="chip fade mt-1 show" id="chipDismissible5">
              Value #5
              <button class="close" data-dismiss="alert" data-target="#chipDismissible5" type="button"><i class="material-icons">cancel</i></button>
            </div>
            <div class="chip fade mt-1 show" id="chipDismissible6">
              Value #6
              <button class="close" data-dismiss="alert" data-target="#chipDismissible6" type="button"><i class="material-icons">cancel</i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="expansion-panel-footer">
        <button class="btn btn-outline" data-target="#collapseEight" data-toggle="collapse" type="button">Cancel</button>
        <button class="btn btn-outline-info" data-target="#collapseEight" data-toggle="collapse" type="button">Save</button>
      </div>
    </div>
  </div>
  <div class="expansion-panel list-group-item">
    <div aria-controls="collapseNine" aria-expanded="false" class="expansion-panel-toggler collapsed" data-target="#collapseNine" data-toggle="collapse" id="headingNine" role="button">
      <div class="media-body row">
        <div class="col-12 col-sm-4">
          Item #3
        </div>
        <div class="col-6 col-sm-4">
          <span class="text-black-hint">Value:</span>&nbsp;<span class="text-black-secondary">#3.1</span>
        </div>
        <div class="col-6 col-sm-4">
          <span class="text-black-hint">Value:</span>&nbsp;<span class="text-black-secondary">#3.2</span>
        </div>
      </div>
      <div class="expansion-panel-icon ml-3 text-black-secondary">
        <i class="collapsed-show material-icons">keyboard_arrow_down</i>
        <i class="collapsed-hide material-icons">keyboard_arrow_up</i>
      </div>
    </div>
    <div aria-labelledby="headingNine" class="collapse" data-parent="#accordionThree" id="collapseNine">
      <div class="expansion-panel-body">
        <div class="row">
          <div class="col-12 col-sm-6">
            <label for="exampleInputDatePicker1">Pick a value for Item #3:</label>
            <input class="form-control" id="exampleInputDatePicker1" placeholder="Pick a date" type="text">
          </div>
          <div class="col-12 col-sm-6">
            <label for="exampleInputDatePicker2">Pick a value for Item #3:</label>
            <input class="form-control" id="exampleInputDatePicker2" placeholder="Pick a date" type="text">
          </div>
        </div>
      </div>
      <div class="expansion-panel-footer">
        <button class="btn btn-outline" data-target="#collapseNine" data-toggle="collapse" type="button">Cancel</button>
        <button class="btn btn-outline-info" data-target="#collapseNine" data-toggle="collapse" type="button">Save</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}