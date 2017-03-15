---
layout: docs
title: Access - Within IP
description: Encourage users to create a personal account or log in, with Registration &amp; Log in Form in Modal
group: best practice ui
---

Modals are streamlined, but flexible dialog prompts powered by JavaScript. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Access Prototypes

### Modal with Registration Form

Toggle a working Registration modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<div id="exampleModalRegister" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalRegisterLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalRegisterLabel">Create your FREE personal account in just one step</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div><!--- / modal-header -->
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form id="regformModal" action="#" novalidate="novalidate">
              <div class="form-group floating-label">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword2">Repeat password</label>
                <input type="password" class="form-control" id="exampleInputPassword2" name="exampleInputPassword2" placeholder="Password">
              </div>
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
              </label>
              <p style="padding-left: 2.2rem; font-size: .875rem">By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Create account</button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <div class="modalMessages">
              <h4>With a Best Practice personal account, you can:</h4>
                <p><i class="material-icons">&#xE0D4;</i> Use the highly rated Best Practice app, even offline</p>
                <p><i class="material-icons">&#xE8AE;</i> Get CPD certificates for time spent on Best Practice</p>
                <p><i class="material-icons">&#xE0C8;</i> Access Best Practice anywhere</p>
            </div>
            <p>Already have a personal account? <a href="#exampleModalLogIn" data-toggle="modal" data-dismiss="modal">Log in</a>.</p>
          </div>
        </div>
      </div><!--- / modal-body -->
      <div class="modal-footer">
        <div class="col-md-9">
          <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Don't ask me this again<br />(you can always create an account via the home page</span>
            </label>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <button type="button" class="btn btn-default btn-block float-right" data-dismiss="modal" aria-label="Close">Close</button>
          </div>
        </div>
    </div><!--- / modal-footer -->
    </div><!--- / modal-content -->
  </div><!--- / modal-dialog -->
</div><!--- / exampleModalRegister -->

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalRegister">
    Launch Modal with Registration Form
  </button>
</div>

{% highlight html %}
<!-- Register Form in Modal -->
<div id="exampleModalRegister" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalRegisterLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalRegisterLabel">Create your FREE personal account in just one step</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div><!--- / modal-header -->
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form id="regformModal" action="#" novalidate="novalidate">
              <div class="form-group floating-label">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword2">Repeat password</label>
                <input type="password" class="form-control" id="exampleInputPassword2" name="exampleInputPassword2" placeholder="Password">
              </div>
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
              </label>
              <p style="padding-left: 2.2rem; font-size: .875rem">By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Create account</button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <div class="modalMessages">
              <h4>With a Best Practice personal account, you can:</h4>
                <p><i class="material-icons">&#xE0D4;</i> Use the highly rated Best Practice app, even offline</p>
                <p><i class="material-icons">&#xE8AE;</i> Get CPD certificates for time spent on Best Practice</p>
                <p><i class="material-icons">&#xE0C8;</i> Access Best Practice anywhere</p>
            </div>
            <p>Already have a personal account? <a href="#exampleModalLogIn" data-toggle="modal" data-dismiss="modal">Log in</a>.</p>
          </div>
        </div>
      </div><!--- / modal-body -->
      <div class="modal-footer">
        <div class="col-md-9">
          <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Don't ask me this again<br />(you can always create an account via the home page</span>
            </label>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <button type="button" class="btn btn-default btn-block float-right" data-dismiss="modal" aria-label="Close">Close</button>
          </div>
        </div>
    </div><!--- / modal-footer -->
    </div><!--- / modal-content -->
  </div><!--- / modal-dialog -->
</div><!--- / exampleModalRegister -->
{% endhighlight %}


### Modal with Log in Form

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
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
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
    </div>
  </div>
</div>
{% endhighlight %}

<script>
window.setTimeout(function(){
            $('#exampleModalRegister').modal('show');
        }, 5000)
</script>

### Validation (front end)

Form validation is handled on the client side with the [JQuery Validation Plugin here](https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.js).

This jQuery plugin makes simple clientside form validation easy, whilst still offering plenty of customisation options. For more info please check out [the official documentation](http://jqueryvalidation.org/).

The JS file form-validation-md.min.js does the custom work:

{% highlight html %}
var FormValidationMd = function () {
        r = function () {
            var e = $("#regformModal"),
                r = $(".alert-danger", e),
                i = $(".alert-success", e);
            e.validate({
                errorElement: "div",
                errorClass: "form-control-feedback",
                focusInvalid: !1,
                ignore: "",
                messages: {
                    "exampleInputPassword1": {
                        minlength: jQuery.validator.format("{0} characters or more, including 1 number required")
                    }
                },
                rules: {
                    "exampleInputEmail1": {
                        required: true,
                        email: !0
                    },
                    "exampleInputPassword1": {
                        required: true,
                        minlength: 6,
                    },
                    "exampleInputPassword2": {
                        required: true,
                        equalTo: "#exampleInputPassword1email"
                    }
                },
                errorPlacement: function (e, r) {
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
                },
                highlight: function (e) {
                    $(e).closest(".form-group").addClass("has-danger")
                },
                unhighlight: function (e) {
                    $(e).closest(".form-group").removeClass("has-danger")
                },
                success: function (e) {
                    e.closest(".form-group").removeClass("has-danger")
                },
                submitHandler: function (e) {
                    i.show(), r.hide()
                }
            })
        };
    return {
        init: function () {
            r()
        }
    }
}();
jQuery(document).ready(function () {
    FormValidationMd.init()
});

{% endhighlight html %}                           