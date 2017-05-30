---
layout: docs
title: Treatment table
description: Toggle the visibility of content across your project with a few classes and our JavaScript plugins.
group: bp components
---

The Bootstrap collapse plugin allows you to toggle content on your pages with a few classes thanks to some helpful JavaScript.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Example

Click the buttons below to show and hide another element via class changes:

- `.collapse` hides content
- `.collapsing` is applied during transitions
- `.collapse.show` shows content

You can use a link with the `href` attribute, or a button with the `data-target` attribute. In both cases, the `data-toggle="collapse"` is required.

{% example html %}
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-block">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
{% endexample %}

## Treatment table headers example

Extend the default collapse behavior to create an accordion.

{% example html %}

<div class="container treatment-table">
<p class="heading">Initial</p>
		<div class="panel-group" id="accordion">
			<div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title"><a class="" data-parent="#accordion" data-toggle="collapse" href="#collapseOne" aria-expanded="true">non-pregnant: at initial diagnosis  <span class="viewAll hidden-sm-down">View all <span class="chevron bottom pl-3 pr-3"></span></span></a></h4>
        </div>
        <!--/.panel-heading -->
        <div class="panel-collapse collapse show" id="collapseOne" aria-expanded="true">
          <div class="panel-body">
            <!-- nested -->
            <div class="panel-group" id="nested">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a data-parent="#nested" data-toggle="collapse" href="#nested-collapseOne" class="collapsed" aria-expanded="false"><span class="txLine" >1st line<span class="chevron bottom"></span></span>BP control</a></h4>
                </div>
                <!--/.panel-heading -->
                <div class="panel-collapse collapse in" id="nested-collapseOne" aria-expanded="false">
                  <div class="panel-body">
                    <ul>
                      <li>Adults with type 2 diabetes are twice as likely to die of stroke or myocardial infarction (MI) compared with those without diabetes, and they are more than 40 times more likely to die of macrovascular than microvascular complications of diabetes. [25] <button type="button" id="CochranePop" class="btn btn-link refLink" data-trigger="focus" data-toggle="popover">[ <img class="cochraneInline" src="../../../css/images/cochrane-logo.svg" /> ]</button> [26] A primary goal of care is treatment of blood pressure. Joint National Commission (JNC 8) and American Diabetes Association (ADA) guidelines recommend a treatment goal of <140/90 mmHg. [2] [40]</a></li>
                      <li>Combination therapy is often required to reach BP goals. Antihypertensive therapy may be initiated with a thiazide diuretic, a calcium-channel blocker, an ACE inhibitor, or an angiotensin-II receptor antagonist. Antihypertensive drugs for black people may be initiated with a thiazide diuretic or a calcium-channel blocker. [40] ACE inhibitors may reduce mortality and cardiovascular events more than angiotensin-II receptor antagonists. [28] Combining an ACE inhibitor and an angiotensin-II receptor antagonist is not recommended due to increased risk of adverse events. [41] However, all people with chronic kidney disease (CKD) should receive an ACE inhibitor or an angiotensin-II receptor antagonist as part of their regimen. [40] <button type="button" id="evidencePop" class="btn btn-link refLink" data-trigger="focus" data-toggle="popover">[A Evidence]</button> CKD is defined as (a) age <70 years with GFR <60 mL/minute/1.73 m^2, or (b) people of any age with albuminuria >30 mg albumin/g of creatinine at any level of GFR.</li>
                      <li>Beta-blockers are not contraindicated in people with diabetes but are less-preferred antihypertensive agents [40]</a> and may mask symptoms of hypoglycaemia.</li>
                      <li>ACE inhibitors may increase risk for hypoglycaemia in conjunction with insulin or insulin secretagogue (sulfonylurea or meglitinide). <button type="button" id="referencePop" class="btn btn-link refLink" data-trigger="focus" data-toggle="popover">[42]</button></li>
                    </ul>
                    <div class="treatment-wrap">
                      <h5>Primary options</h5>
                      <div class="treatment-box">
                        <p><button id="drugDBPop" type="button" class="btn btn-link" data-trigger="focus" data-toggle="popover">hydrochlorothiazide</button>: 12.5 to 25 mg/day orally once daily initially, increase gradually according to response, maximum 50 mg/day as a single dose or in 2 divided doses</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">chlortalidone</a>: 12.5 mg orally once daily initially, increase gradually according to response, maximum 50 mg/day</p>
                        <p class="and-or">-- AND / OR --</p>
                        <p><a href="#" class="disabled">lisinopril</a>: 10 mg orally once daily initially, increase gradually according to response, maximum 40 mg/day</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">enalapril</a>: 5 mg orally once daily initially, increase gradually according to response, maximum 40 mg/day as a single dose or in 2 divided doses</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">captopril</a>: 25 mg orally twice daily initially, increase gradually according to response, maximum 200 mg/day</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">candesartan</a>: 4 mg orally once daily initially, increase gradually according to response, maximum 32 mg/day</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">irbesartan</a>: 75 mg orally once daily initially, increase gradually according to response, maximum 300 mg/day</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">losartan</a>: 50 mg orally once daily initially, increase gradually according to response, maximum 100 mg/day as a single dose or in 2 divided doses</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">valsartan</a>: 40-80 mg orally once daily initially, increase gradually according to response, maximum 320 mg/day</p>
                        <p class="and-or">-- AND / OR --</p>
                        <p><a href="#" class="disabled">amlodipine</a>: 2.5 mg orally once daily initially, increase gradually according to response, maximum 10 mg/day</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">felodipine</a>: 2.5 mg orally once daily initially, increase gradually according to response, maximum 10 mg/day</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">nifedipine</a>: 30-60 mg orally (extended-release) once daily initially, increase gradually according to response, maximum 90 mg/day</p>
                        <p class="small-or">or</p>
                        <p><a href="#" class="disabled">diltiazem</a>: 120-180 mg orally (extended-release) once daily initially, increase gradually according to response, maximum 480 mg/day</p>
                      </div>
                    </div>
                  </div>
                  <!--/.panel-body -->
                </div>
                <!--/.panel-collapse -->
              </div>
              <!-- /.panel -->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a data-parent="#nested" data-toggle="collapse" href="#nested-collapseTwo" class="collapsed" aria-expanded="false"><span class="txLine" >plus<span class="chevron bottom"></span></span>lipid control</a></h4>
                </div>
                <!--/.panel-heading -->
                <div class="panel-collapse collapse" id="nested-collapseTwo" aria-expanded="false">
                  <div class="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                  <!--/.panel-body -->
                </div>
                <!--/.panel-collapse -->
              </div>
              <!-- /.panel -->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a data-parent="#nested" data-toggle="collapse" href="#nested-collapseThree" class="collapsed" aria-expanded="false"><span class="txLine" >plus<span class="chevron bottom"></span></span>lifestyle changes</a></h4>
                </div>
                <!--/.panel-heading -->
                <div class="panel-collapse collapse" id="nested-collapseThree" aria-expanded="false">
                  <div class="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                  <!--/.panel-body -->
                </div>
                <!--/.panel-collapse -->
              </div>
              <!-- /.panel -->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a data-parent="#nested" data-toggle="collapse" href="#nested-collapseFour" class="collapsed" aria-expanded="false"><span class="txLine" >plus<span class="chevron bottom"></span></span>smoking cessation changes</a></h4>
                </div>
                <!--/.panel-heading -->
                <div class="panel-collapse collapse" id="nested-collapseFour" aria-expanded="false">
                  <div class="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                  <!--/.panel-body -->
                </div>
                <!--/.panel-collapse -->
              </div>
              <!-- /.panel -->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a data-parent="#nested" data-toggle="collapse" href="#nested-collapseFive" class="collapsed" aria-expanded="false"><span class="txLine" >plus<span class="chevron bottom"></span></span>stratified glycaemic management</a></h4>
                </div>
                <!--/.panel-heading -->
                <div class="panel-collapse collapse" id="nested-collapseFive" aria-expanded="false">
                  <div class="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                  <!--/.panel-body -->
                </div>
                <!--/.panel-collapse -->
              </div>
              <!-- /.panel -->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a data-parent="#nested" data-toggle="collapse" href="#nested-collapseSix" class="collapsed" aria-expanded="false"><span class="txLine" >adjunct<span class="chevron bottom"></span></span>antiplatelet therapy</a></h4>
                </div>
                <!--/.panel-heading -->
                <div class="panel-collapse collapse" id="nested-collapseSix" aria-expanded="false">
                  <div class="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                  <!--/.panel-body -->
                </div>
                <!--/.panel-collapse -->
              </div>
              <!-- /.panel -->
            </div>
            <!-- /.panel-group -->
            <!-- nested -->
          </div>
          <!--/.panel-body -->
        </div>
        <!--/.panel-collapse -->
      </div>
		</div><!-- /.panel-group -->
	</div><!-- /.container -->
{% endexample %}

## Accessibility

Be sure to add `aria-expanded` to the control element. This attribute explicitly defines the current state of the collapsible element to screen readers and similar assistive technologies. If the collapsible element is closed by default, it should have a value of `aria-expanded="false"`. If you've set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute based on whether or not the collapsible element has been opened or closed.

Additionally, if your control element is targeting a single collapsible element – i.e. the `data-target` attribute is pointing to an `id` selector – you may add an additional `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.

## Usage

The collapse plugin utilizes a few classes to handle the heavy lifting:

- `.collapse` hides the content
- `.collapse.show` shows the content
- `.collapsing` is added when the transition starts, and removed when it finishes

These classes can be found in `_transitions.scss`.

### Via data attributes

Just add `data-toggle="collapse"` and a `data-target` to the element to automatically assign control of a collapsible element. The `data-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you'd like it to default open, add the additional class `show`.

To add accordion-like group management to a collapsible control, add the data attribute `data-parent="#selector"`. Refer to the demo to see this in action.

### Via JavaScript

Enable manually with:

{% highlight js %}
$('.collapse').collapse()
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-parent=""`.

<table class="table table-bordered table-striped table-responsive">
  <thead>
   <tr>
     <th style="width: 100px;">Name</th>
     <th style="width: 50px;">Type</th>
     <th style="width: 50px;">Default</th>
     <th>Description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>parent</td>
     <td>selector</td>
     <td>false</td>
     <td>If a selector is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the <code>panel</code> class)</td>
   </tr>
   <tr>
     <td>toggle</td>
     <td>boolean</td>
     <td>true</td>
     <td>Toggles the collapsible element on invocation</td>
   </tr>
  </tbody>
</table>

### Methods

#### `.collapse(options)`

Activates your content as a collapsible element. Accepts an optional options `object`.

{% highlight js %}
$('#myCollapsible').collapse({
  toggle: false
})
{% endhighlight %}

#### `.collapse('toggle')`

Toggles a collapsible element to shown or hidden.

#### `.collapse('show')`

Shows a collapsible element.

#### `.collapse('hide')`

Hides a collapsible element.

### Events

Bootstrap's collapse class exposes a few events for hooking into collapse functionality.

<table class="table table-bordered table-striped table-responsive">
  <thead>
   <tr>
     <th style="width: 150px;">Event Type</th>
     <th>Description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>show.bs.collapse</td>
     <td>This event fires immediately when the <code>show</code> instance method is called.</td>
   </tr>
   <tr>
     <td>shown.bs.collapse</td>
     <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
   </tr>
   <tr>
     <td>hide.bs.collapse</td>
     <td>
      This event is fired immediately when the <code>hide</code> method has been called.
     </td>
   </tr>
   <tr>
     <td>hidden.bs.collapse</td>
     <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
   </tr>
  </tbody>
</table>

{% highlight js %}
$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})
{% endhighlight %}