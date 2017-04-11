---
layout: docs
title: Access - Within IP
description: Encourage users to create a personal account or log in, with Registration &amp; Log in Form in Modal
group: bp components
---

Modals are streamlined but flexible dialog prompts powered by JavaScript. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.

## Snippets

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


{% capture callout-include %}{% include callout-coding-standards.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Registration Form (in Modal)

Toggle a working Registration modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<div id="exampleModalRegister" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalRegisterLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content pb-3">
      <div class="modal-header">
        <h2>Create your FREE personal account in just one step</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div><!--- / modal-header -->
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form id="regForm" action="#">
              <div class="form-group floating-label">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control mw-100" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label">
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
                <button id="createAccount" type="submit" class="btn btn-secondary btn-lg">Create account</button>
              </div>
              <span class="pt-3 pl-0 d-inline-block bt-1">Already have a personal account? <a class="text-uppercase" href="#" data-toggle="modal" data-dismiss="modal">Log in</a></span>
            </form>
          </div>
          <div class="col-md-6">
            <div class="regMessaging rounded">
              <img class="w-100" src="../../../css/images/1.jpg" alt="image temporary">
              <div class="regMessageHeader">
                <h3 class="pl-3">With a personal account, you can:</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Use the highly rated Best Practice app, even offline.</li>
                <li class="list-group-item">Get CPD certificates for time spent on Best Practice</li>
                <li class="list-group-item">Access Best Practice anywhere</li>
              </ul>
            </div>
            <label for="modalDismiss" class="custom-control custom-checkbox float-right mr-0">
              <input name="modalDismiss" id="modalDismiss" type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator mt-3"></span>
              <span class="font-weight-bold custom-control-description mt-2">Don't show me this again <button type="button" class="btn btn-outline-primary" data-dismiss="modal" aria-label="Close">Close</button></span>
            </label>
            </div>
        </div>
      </div><!--- / modal-body -->
    </div><!--- / modal-content -->
  </div><!--- / modal-dialog -->
</div><!--- / exampleModalRegister -->

<div class="bd-example text-center">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalRegister">
    Launch Modal with Registration Form
  </button>
</div>

{% highlight html %}
<!-- Register Form in Modal -->
<div id="exampleModalRegister" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalRegisterLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content pb-2">
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
              <div class="form-group floating-label">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group floating-label">
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
                <button type="submit" class="btn btn-secondary btn-lg">Create account</button>
              </div>
              <span class="pt-3 pl-0 mt-35 d-inline-block bt-1">Already have a personal account? <a class="text-uppercase" href="#" data-toggle="modal" data-dismiss="modal">Log in</a></span>
            </form>
          </div>
          <div class="col-md-6">
            <div class="regMessaging rounded">
              <img class="w-100" src="../../../css/images/1.jpg" alt="image temporary">
              <div class="regMessageHeader">
                <h3 class="pl-3">With a personal account, you can:</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Use the highly rated Best Practice app, even offline.</li>
                <li class="list-group-item">Get CPD certificates for time spent on Best Practice</li>
                <li class="list-group-item">Access Best Practice anywhere</li>
              </ul>
            </div>
            <label for="modalDismiss" class="custom-control custom-checkbox">
              <input name="modalDismiss" id="modalDismiss" type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator mt-3"></span>
              <span class="font-weight-bold pt-3 custom-control-description">Don't show me this again.</span>
            </label>
            <button type="button" class="btn btn-outline-primary float-right mt-2" data-dismiss="modal" aria-label="Close">Close</button>
            </div>
        </div>
      </div><!--- / modal-body -->
    </div><!--- / modal-content -->
  </div><!--- / modal-dialog -->
</div><!--- / exampleModalRegister -->
{% endhighlight %}


## Log in Form (in Modal)

Toggle a working Log in modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<div id="exampleModalLogIn" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLogInLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content pb-3">
      <div class="modal-header">
        <h2>Log in to your Best Practice personal account</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form id="loginForm" action="#">
              <div class="form-group floating-label">
                <label for="exampleInputEmail2">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail2" name="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword3">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword3" name="exampleInputPassword3" placeholder="Password">
              </div>
              <p class="pl-0"><a href="#">Forgot password?</a></p>
              <div class="form-group">
                <button id="loginSubmit" type="submit" class="btn btn-secondary btn-lg">Log in</button>
              </div>
              <label for="rememberMe" class="custom-control custom-checkbox">
                <input name="rememberMe" id="rememberMe" type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Remember me</span>
              </label>
              <span class="pt-3 pl-0 mt-3 d-inline-block bt-1">Don't have a personal account? <a class="text-uppercase" href="#">Create account</a></span>
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

<div class="bd-example text-center">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLogIn">
    Launch Modal with Log In Form
  </button>
</div>

{% highlight html %}
<!-- Modal -->
<div id="exampleModalLogIn" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLogInLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content pb-3">
      <div class="modal-header">
        <h2>Log in to your Best Practice personal account</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form id="loginForm" action="#">
              <div class="form-group floating-label">
                <label for="exampleInputEmail2">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail2" name="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group floating-label">
                <label for="exampleInputPassword3">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword3" name="exampleInputPassword3" placeholder="Password">
              </div>
              <p class="pl-0"><a href="#">Forgot password?</a></p>
              <div class="form-group">
                <button id="loginSubmit" type="submit" class="btn btn-secondary btn-lg">Log in</button>
              </div>
              <label for="rememberMe" class="custom-control custom-checkbox">
                <input name="rememberMe" id="rememberMe" type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Remember me</span>
              </label>
              <span class="pt-3 pl-0 mt-3 d-inline-block bt-1">Don't have a personal account? <a class="text-uppercase" href="#" data-toggle="modal" data-dismiss="modal">Create account</a></span>
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
{% endhighlight %}

## Registration Form (inline)

Inline registration form. Slightly different design on $palette-grey-100 background.

  <div id="inlineReg" class="container p-3" style="background-color: #f5f5f5;">
    <div class="row">
    <h1 class="col-md-12 pb-3 mb-3">Create your FREE personal account in just one step</h1>
      <div class="col-md-6">
        <form id="regFormInline" action="#">
          <div class="form-group floating-label">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control mw-100" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group floating-label">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group floating-label">
            <label for="exampleInputPassword2">Repeat password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" name="exampleInputPassword2" placeholder="Password">
          </div>
          <label for="marketingOptIn2" class="custom-control custom-checkbox">
            <input name="marketingOptIn2" id="marketingOptIn2" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
          </label>
          <p>By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
          <div class="form-group">
            <button id="createAccount" type="submit" class="btn btn-secondary  btn-lg">Create account</button>
          </div>
          <span class="pt-3 pl-0 d-inline-block bt-1">Already have a personal account? <a class="text-uppercase" href="#exampleModalLogIn" data-toggle="modal" data-dismiss="modal">Log in</a></span>
        </form>
      </div>
      <div class="col-md-6">
        <div class="regMessaging rounded">
          <img class="w-100" src="../../../css/images/1.jpg" alt="image temporary" style="height: 186px;">
          <div class="regMessageHeader">
            <h2 class="pl-3">With a personal account, you can:</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Use the highly rated Best Practice app, even offline.</li>
            <li class="list-group-item">Get CPD certificates for time spent on Best Practice</li>
            <li class="list-group-item">Access Best Practice anywhere</li>
          </ul>
        </div>
      </div>
    </div>
  </div><!--- / container -->

<div class="bd-example">
  <h3>Grab the 'Inline Registration Form' code here</h3>
</div>
{% highlight html %}
  <div id="inlineReg" class="container p-3" style="background-color: #f5f5f5;">
    <div class="row">
    <h1 class="col-md-12 pb-3 mb-3">Create your FREE personal account in just one step</h1>
      <div class="col-md-6">
        <form id="regFormInline" action="#">
          <div class="form-group floating-label">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control mw-100" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group floating-label">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group floating-label">
            <label for="exampleInputPassword2">Repeat password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" name="exampleInputPassword2" placeholder="Password">
          </div>
          <label for="marketingOptIn2" class="custom-control custom-checkbox">
            <input name="marketingOptIn2" id="marketingOptIn2" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Tick to receive information and special offfers about BMJ's products and services.</span>
          </label>
          <p>By registering with BMJ Best Practice you are agreeing to BMJ's <a href="#">terms and conditions</a> and it's <a href="#">privacy policy</a>.</p>
          <div class="form-group">
            <button id="createAccount" type="submit" class="btn btn-secondary btn-lg">Create account</button>
          </div>
          <span class="pt-3 pl-0 d-inline-block bt-1">Already have a personal account? <a class="text-uppercase" href="#exampleModalLogIn" data-toggle="modal" data-dismiss="modal">Log in</a></span>
        </form>
      </div>
      <div class="col-md-6">
        <div class="regMessaging rounded">
          <img class="w-100" src="../../../css/images/1.jpg" alt="image temporary" style="height: 186px;">
          <div class="regMessageHeader">
            <h2 class="pl-3">With a personal account, you can:</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Use the highly rated Best Practice app, even offline.</li>
            <li class="list-group-item">Get CPD certificates for time spent on Best Practice</li>
            <li class="list-group-item">Access Best Practice anywhere</li>
          </ul>
        </div>
      </div>
    </div>
  </div><!--- / container -->
{% endhighlight %}

## Log In Form (inline)

Inline Log in  form. Slightly different design (on body color $palette-grey-100 background for illustration).
<div id="inlineLogin" class="container p-3" style="background-color: #f5f5f5; border: 1px solid #eee;">
  <div class="row">
  <h1 class="col-md-12 pb-3 mb-3">Log in to your Best Practice personal account</h1>
    <div class="col-md-6">
      <form id="loginForm" action="#">
        <div class="form-group floating-label">
          <label for="exampleInputEmail2">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail2" name="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group floating-label">
          <label for="exampleInputPassword3">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword3" name="exampleInputPassword3" placeholder="Password">
        </div>
        <p class="pl-0"><a href="#">Forgot password?</a></p>
        <div class="form-group">
          <button id="loginSubmit" type="submit" class="btn btn-secondary btn-lg">Log in</button>
        </div>
        <div class="d-block">
          <label for="rememberMe2" class="custom-control custom-checkbox">
            <input name="rememberMe2" id="rememberMe2" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Remember me</span>
          </label>
        </div>
        <span class="pt-3 pl-0 mt-3 d-inline-block bt-1">Don't have a personal account? <a class="text-uppercase" href="#">Create account</a></span>
      </form>
    </div>
    <div class="col-md-6">
      <!--- Empty for now -->
    </div>
  </div>
</div>

<div class="bd-example">
  <h3>Grab the 'Inline Log In Form' code here</h3>
</div>
{% highlight html %}
  <div class="row">
  <h1 class="col-md-12 pb-3 mb-3">Log in to your Best Practice personal account</h1>
    <div class="col-md-6">
      <form id="loginForm" action="#">
        <div class="form-group floating-label">
          <label for="exampleInputEmail2">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail2" name="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group floating-label">
          <label for="exampleInputPassword3">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword3" name="exampleInputPassword3" placeholder="Password">
        </div>
        <p class="pl-0"><a href="#">Forgot password?</a></p>
        <div class="form-group">
          <button id="loginSubmit" type="submit" class="btn btn-secondary btn-lg">Log in</button>
        </div>
        <div class="d-block">
          <label for="rememberMe2" class="custom-control custom-checkbox">
            <input name="rememberMe2" id="rememberMe2" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Remember me</span>
          </label>
        </div>
        <span class="pt-3 pl-0 mt-3 d-inline-block bt-1">Don't have a personal account? <a class="text-uppercase" href="#">Create account</a></span>
      </form>
    </div>
    <div class="col-md-6">
      <!--- Empty for now -->
    </div>
  </div>
{% endhighlight %}

## Log In Form Outside IP

Inline Log in  form. Slightly different design (on body color $palette-grey-100 background for illustration).
<div id="inlineLoginNoIp" class="container p-3" style="background-color: #f5f5f5; border: 1px solid #eee;">
  <div class="row">
  <h1 class="col-md-12 pb-3 mb-3">Log in to your Best Practice personal account</h1>
    <div class="col-md-6">
      <p>If you have a Best Practice personal acount, your own subscription or have registered for a free trial, log in here:</p>
      <form id="loginForm" action="#">
        <div class="form-group floating-label">
          <label for="exampleInputEmail2">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail2" name="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group floating-label">
          <label for="exampleInputPassword3">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword3" name="exampleInputPassword3" placeholder="Password">
        </div>
        <p class="pl-0"><a href="#">Forgot password?</a></p>
        <div class="form-group">
          <button id="loginSubmit" type="submit" class="btn btn-secondary btn-lg">Log in</button>
        </div>
        <div class="d-block">
          <label for="rememberMe3" class="custom-control custom-checkbox">
            <input name="rememberMe3" id="rememberMe3" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Remember me</span>
          </label>
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <p>If your Hospital, University, Trust or other institution provides access to Best Practice, log in via the appropiate link:</p>
        <div class="col-md-6 offset-md-3">
          <a href="#" id="btnOpenAthens" class="btn btn-secondary btn-block mb-3" style="background-color: #fff; border: 3px solid #7a487f; color: #7a487f; font-weight: bold;">OPEN ATHENS <span class="material-icons material-icons-inline">open_in_new</span></a>
          <a href="#" id="btnShibboleth" class="btn btn-secondary btn-block mb-3" style="background-color: #fff; border: 3px solid #ff0000; color: #ff0000; font-weight: bold;">SHIBBOLETH <span class="material-icons material-icons-inline">open_in_new</span></a>
          <a href="#" id="btnAccessCode" class="btn btn-secondary btn-block mb-3" style="background-color: #fff; border: 3px solid #2a6ebb; color: #2a6ebb; font-weight: bold;">ACCESS CODE <span class="material-icons material-icons-inline">open_in_new</span></a>
        </div>
    </div>
    <div class="col-md-12">
      <h2>Don't have a subscription to BMJ Best Practice?</h2>
      <p>Take a look at our <a href="#">subscription options</a></p>
      <p>Sign up for a <a href="#">FREE trial</a></p>
      <span class="pt-3 pl-0 mt-3 d-inline-block bt-1">Don't have a personal account? <a class="text-uppercase" href="#">Create account</a></span>
    </div>
  </div>
</div>

<div class="bd-example">
  <h3>Grab the 'Inline Log In Form' code here</h3>
</div>
{% highlight html %}
  <div class="row">
  <h1 class="col-md-12 pb-3 mb-3">Log in to your Best Practice personal account</h1>
    <div class="col-md-6">
    <p>If you have a Best Practice personal acount, your own subscription or have registered for a free trial, log in here:</p>
      <form id="loginForm" action="#">
        <div class="form-group floating-label">
          <label for="exampleInputEmail2">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail2" name="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group floating-label">
          <label for="exampleInputPassword3">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword3" name="exampleInputPassword3" placeholder="Password">
        </div>
        <p class="pl-0"><a href="#">Forgot password?</a></p>
        <div class="form-group">
          <button id="loginSubmit" type="submit" class="btn btn-secondary btn-lg">Log in</button>
        </div>
        <div class="d-block">
          <label for="rememberMe3" class="custom-control custom-checkbox">
            <input name="rememberMe3" id="rememberMe3" type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Remember me</span>
          </label>
          <h2>Don't have a subscription to BMJ Best Practice?</h2>
          <p>Take a look at our <a href="#">subscription options</a></p>
          <p>Sign up for a <a href="#">FREE trial</a></p>
        </div>
        <span class="pt-3 pl-0 mt-3 d-inline-block bt-1">Don't have a personal account? <a class="text-uppercase" href="#">Create account</a></span>
      </form>
    </div>
    <div class="col-md-6">
      <p>If your Hospital, University, Trust or other institution provides access to Best Practice, log in via the appropiate link:</p>
      <button id="loginSubmit" type="submit" class="btn btn-secondary">OPEN ATHENS</button>
      <button id="loginSubmit" type="submit" class="btn btn-secondary">SHIBBOLETH</button>
      <button id="loginSubmit" type="submit" class="btn btn-secondary">ACCESS CODE</button>
    </div>
  </div>
{% endhighlight %}