---
layout: docs
title: Modal with Form
description: Within IP range - Encourage users to create a personal account, via a modal window.
group: prototypes
---

Modals are streamlined, but flexible dialog prompts powered by JavaScript. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

### Modal with Registration Form

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<div id="exampleModalLive" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLiveLabel">Create your FREE personal account in just one step</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
            <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form>
              <div class="form-group floating-label">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Repeat password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
              </label>
              <p>By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
              <button type="button" class="btn btn-primary">Create account</button>
            </form>
          </div>
          <div class="col-md-6">
            <h4>With a Best Practice personal account, you can:</h4>
              <p><i class="material-icons">&#xE0D4;</i> Use the highly rated Best Practice app, even offline</p>
              <p><i class="material-icons">&#xE8AE;</i> Get CPD certificates for time spent on Best Practice</p>
              <p><i class="material-icons">&#xE0C8;</i> Access Best Practice anywhere</p>
            <p>Already have a personal account? <a href="#">Log in</a>.</p>
          </div>
        </div>
      </div>
      <!--<div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>-->
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">
    Launch Modal with Form
  </button>
</div>

{% highlight html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLiveLabel">Create your FREE personal account in just one step</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
            <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form>
              <div class="form-group floating-label">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Repeat password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
              </label>
              <p>By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
              <button type="button" class="btn btn-primary">Create account</button>
            </form>
          </div>
          <div class="col-md-6">
            <h4>With a Best Practice personal account, you can:</h4>
              <p><i class="material-icons">&#xE0D4;</i> Use the highly rated Best Practice app, even offline</p>
              <p><i class="material-icons">&#xE8AE;</i> Get CPD certificates for time spent on Best Practice</p>
              <p><i class="material-icons">&#xE0C8;</i> Access Best Practice anywhere</p>
            <p>Already have a personal account? <a href="#">Log in</a>.</p>
          </div>
        </div>
      </div>
      <!--<div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>-->
    </div>
  </div>
</div>
{% endhighlight %}
