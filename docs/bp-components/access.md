---
layout: docs
title: Access - Within IP
description: Encourage users to create a personal account or log in, with Registration &amp; Log in Form in Modal
group: bp components
---

Modals are streamlined but flexible dialog prompts powered by JavaScript. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.

## Components

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Registration Form (in Modal)

Toggle a working Registration modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<div id="exampleModalRegister" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalRegisterLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Create your FREE personal account in just one step</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div><!--- / modal-header -->
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form id="regformModal" action="#">
              <div class="form-group floating-label">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control mw-100" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label w-75">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label w-75">
                <label for="exampleInputPassword2">Repeat password</label>
                <input type="password" class="form-control" id="exampleInputPassword2" name="exampleInputPassword2" placeholder="Password">
              </div>
              <label for="marketingOptIn" class="custom-control custom-checkbox">
                <input name="marketingOptIn" id="marketingOptIn" type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
              </label>
              <p>By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
              <div class="form-group">
                <button type="submit" class="btn btn-secondary">Create account</button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <div class="regRHS">
              <img class="w-100" src="../../../css/images/1.jpg" alt="image temporary">
              <div class="regMessageHeader">
                <h3 class="text-center">With a personal account, you can:</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Use the highly rated Best Practice app, even offline.</li>
                <li class="list-group-item">Get CPD certificates for time spent on Best Practice</li>
                <li class="list-group-item">Access Best Practice anywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </div><!--- / modal-body -->
      <div class="modal-footer">
        <div class="col-md-6">
         <p class="font-weight-bold pt-3 mt-35 d-inline-block" style="border-top: 1px solid #000">Already have a personal account? <a class="text-uppercase" href="#exampleModalLogIn" data-toggle="modal" data-dismiss="modal">Log in</a></p>
        </div>
        <div class="col-md-6">
          <label for="modalDismiss" class="custom-control custom-checkbox">
            <input name="modalDismiss" id="modalDismiss" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator mt-3"></span>
            <p class="font-weight-bold pt-3 custom-control-description">Don't ask me this again</p>
          </label>
          <button type="button" class="btn btn-outline-primary float-right mt-2" data-dismiss="modal" aria-label="Close">Close</button>
        </div>
    </div><!--- / modal-footer -->
    </div><!--- / modal-content -->
  </div><!--- / modal-dialog -->
</div><!--- / exampleModalRegister -->

### Test it
<div class="bd-example text-center">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalRegister">
    Launch Modal with Registration Form
  </button>
</div>

### Grab the code
{% highlight html %}
<!-- Register Form in Modal -->
<div id="exampleModalRegister" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalRegisterLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Create your FREE personal account in just one step</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div><!--- / modal-header -->
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form id="regformModal" action="#">
              <div class="form-group floating-label">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control mw-100" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label w-75">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label w-75">
                <label for="exampleInputPassword2">Repeat password</label>
                <input type="password" class="form-control" id="exampleInputPassword2" name="exampleInputPassword2" placeholder="Password">
              </div>
              <label for="marketingOptIn" class="custom-control custom-checkbox">
                <input name="marketingOptIn" id="marketingOptIn" type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
              </label>
              <p>By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
              <div class="form-group">
                <button type="submit" class="btn btn-secondary">Create account</button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <div class="regRHS">
              <img class="w-100" src="../../../css/images/1.jpg" alt="image temporary">
              <div class="regMessageHeader">
                <h3 class="text-center">With a personal account, you can:</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Use the highly rated Best Practice app, even offline.</li>
                <li class="list-group-item">Get CPD certificates for time spent on Best Practice</li>
                <li class="list-group-item">Access Best Practice anywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </div><!--- / modal-body -->
      <div class="modal-footer">
        <div class="col-md-6">
         <p class="font-weight-bold pt-3 mt-35 d-inline-block" style="border-top: 1px solid #000">Already have a personal account? <a class="text-uppercase" href="#exampleModalLogIn" data-toggle="modal" data-dismiss="modal">Log in</a></p>
        </div>
        <div class="col-md-6">
          <label for="modalDismiss" class="custom-control custom-checkbox">
            <input name="modalDismiss" id="modalDismiss" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator mt-3"></span>
            <p class="font-weight-bold pt-3 custom-control-description">Don't ask me this again</p>
          </label>
          <button type="button" class="btn btn-outline-primary float-right mt-2" data-dismiss="modal" aria-label="Close">Close</button>
        </div>
    </div><!--- / modal-footer -->
    </div><!--- / modal-content -->
  </div><!--- / modal-dialog -->
</div><!--- / exampleModalRegister -->
{% endhighlight %}


## Log in Form (in Modal)

Toggle a working Log in modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<div id="exampleModalLogIn" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLogInLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLogInLabel">Create your FREE personal account in just one step</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
            <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form>
              <div class="form-group floating-label">
                <label for="exampleInputEmail2">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword2">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
                <small id="emailHelp" class="form-text text-muted"><a href="#">Forgot Password?</a></small>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary">Log in</button>
              </div>
              <label for="rememberMe"class="custom-control custom-checkbox">
                <input name="rememberMe" id="rememberMe" type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Remember me</span>
              </label>
              <p>Don't have a personal account? <a href="#exampleModalRegister" data-toggle="modal" data-dismiss="modal">Create your account</a>.</p>
            </form>
          </div>
          <div class="col-md-6">
            <!--- Empty for now -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLogIn">
    Launch Modal with Log In Form
  </button>
</div>

{% highlight html %}
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLogInLabel">Create your FREE personal account in just one step</h3>
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
              <label for="marketingOptIn" class="custom-control custom-checkbox">
                <input name="marketingOptIn" id="marketingOptIn" type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
              </label>
              <p>By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
              <button type="button" class="btn btn-primary">Create account</button>
            </form>
          </div>
          <div class="col-md-6">
            <h4>With a Best Practice personal account, you can:</h4>
              <p><span class="material-icons">&#xE0D4;</span> Use the highly rated Best Practice app, even offline</p>
              <p><span class="material-icons">&#xE8AE;</span> Get CPD certificates for time spent on Best Practice</p>
              <p><span class="material-icons">&#xE0C8;</span> Access Best Practice anywhere</p>
            <p>Already have a personal account? <a href="#">Log in</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

<!--<script>
window.setTimeout(function(){
            $('#exampleModalRegister').modal('show');
        }, 3000)
</script>-->

### Validation (front end)