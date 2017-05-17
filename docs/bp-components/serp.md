---
layout: docs
title: Search Results Page
description: Encourage users to create a personal account or log in, with Registration &amp; Log in Form in Modal
group: bp components
---

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. 

## SERP Components

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Tabbed Nav

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to  a `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-block` item, the card title and subtitle are aligned nicely.

  <div class="container serp"> <!--- container -->
    <div class="row">
      <div class="col-md-8">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Multimedia</a>
          </li>
        </ul>
      </div>
    </div><!--- /row -->
  </div> <!--- /container -->

  {% highlight html %}
      <div class="col-md-8 serp">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Multimedia</a>
          </li>
        </ul>
      </div>
  {% endhighlight %}

## Results List
Cards are used for our search results. 

  <div class="container serp"> <!--- container -->
    <div class="row">
        <div class="col-md-12">
          <h3 class="mt-lg">Search results for COPD</h3>
        </div>
      </div>
      <div class="row">
        <div class="card-group"><!--- card-group -->
            <div class="card border-l">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Chronic atrial fibrillation</a></h4> <!--- Condition -->
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Overview of COPD</a></h4><!--- Overview -->
                  <a href="#" class="card-link">Introductions</a>
                  <a href="#" class="card-link">Conditions</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Assessment of monoclonal gammopathy of undetermined significance </a></h4><!--- Assessment -->
                  <a href="#" class="card-link">Overview</a>
                  <a href="#" class="card-link">Emergencies</a>
                  <a href="#" class="card-link">Diagnosis</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">COPD generic version</a></h4><!--- Generic -->
                  <a href="#" class="card-link">Overview</a>
                  <a href="#" class="card-link">Online resources</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#"><span class="material-icons">&#xE5C3;</span> COPD - Patient Leaflet</a></h4><!--- Patient Leaflet -->
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Abnormal pap smear</a></h4><!--- ? -->
                  <a href="#" class="card-link">Overview</a>
                  <a href="#" class="card-link">Online resources</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Emergency medicine</a></h4><!--- Specialty -->
                  <a href="#" class="card-link">A - Z</a>
                  <a href="#" class="card-link">Emergency</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#"><span class="material-icons">&#xE5C3;</span> Paracetamol</a></h4><!--- Drug -->
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#"><span class="material-icons">&#xE5C3;</span> HAS-BLED Bleeding risk score</a></h4><!--- Calculators -->
                  <p>Estimates risk of major bleeding for patients with atrial fibrillation on oral anticoagulation.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Diabetes type 1 - Step by step</a></h4><!--- Word search -->
                  <p>Text below the result will show what topic the search term appears in the section such as <a href="#">COPD</a> as the search term here highlighting...</p>
              </div>
            </div>            
          </div><!--- /card-group -->
      </div><!--- row -->
    </div><!--- /container -->


  {% highlight html %}
      <div class="container serp"> <!--- container -->
    <div class="row">
        <div class="col-md-12">
          <h3 class="mt-lg">Search results for COPD</h3>
        </div>
      </div>
      <div class="row">
        <div class="card-group"><!--- card-group -->
            <div class="card border-l">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Chronic atrial fibrillation</a></h4> <!--- Condition -->
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Overview of COPD</a></h4><!--- Overview -->
                  <a href="#" class="card-link">Introductions</a>
                  <a href="#" class="card-link">Conditions</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Assessment of monoclonal gammopathy of undetermined significance </a></h4><!--- Assessment -->
                  <a href="#" class="card-link">Overview</a>
                  <a href="#" class="card-link">Emergencies</a>
                  <a href="#" class="card-link">Diagnosis</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">COPD generic version</a></h4><!--- Generic -->
                  <a href="#" class="card-link">Overview</a>
                  <a href="#" class="card-link">Online resources</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#"><span class="material-icons">&#xE5C3;</span> COPD - Patient Leaflet</a></h4><!--- Patient Leaflet -->
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Abnormal pap smear</a></h4><!--- ? -->
                  <a href="#" class="card-link">Overview</a>
                  <a href="#" class="card-link">Online resources</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Emergency medicine</a></h4><!--- Specialty -->
                  <a href="#" class="card-link">A - Z</a>
                  <a href="#" class="card-link">Emergency</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#"><span class="material-icons">&#xE5C3;</span> Paracetamol</a></h4><!--- Drug -->
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#"><span class="material-icons">&#xE5C3;</span> HAS-BLED Bleeding risk score</a></h4><!--- Calculators -->
                  <p>Estimates risk of major bleeding for patients with atrial fibrillation on oral anticoagulation.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Diabetes type 1 - Step by step</a></h4><!--- Word search -->
                  <p>Text below the result will show what topic the search term appears in the section such as <a href="#">COPD</a> as the search term here highlighting...</p>
              </div>
            </div>            
          </div><!--- /card-group -->
      </div><!--- row -->
    </div><!--- /container -->
  {% endhighlight %}

## Results List Footer

Number of results on left hand side, with load more card on right

  <div class="container search-pagination"><!--- container -->
    <div class="row"><!--- row -->
      <div class="col-md-6 col-sm-6 col-xs-6">
        <p class="pt-3">15 of 582 results</p>
      </div>
      <div class="col-md-2 col-sm-6 col-xs-6  float-right">
        <nav aria-label="search pagination">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Load more</a></li>
            <li class="page-item"><a class="page-link" href="#">›</a></li>
          </ul>
        </nav>
      </div><!--- /row -->
    </div><!--- /container -->

{% highlight html %}
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-6 search-pagination">
        <p class="pt-3">15 of 582 results</p>
      </div>
      <div class="col-md-2 col-sm-6 col-xs-6  float-right">
        <nav aria-label="search pagination">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Load more</a></li>
            <li class="page-item"><a class="page-link" href="#">›</a></li>
          </ul>
        </nav>
      </div>
    </div>
{% endhighlight %}

<!--## Results List RHS Block
Number of results on left hand side, with load more card on right-->

<div class="container"><!--- container -->
  <div class="row"><!--- row -->
    <div class="col-md-4 serp_detail hidden-sm-down">
      <div class="card border-t">
        <div class="card-block py-3 pl-4">
          <h2 class="card-title m-0">Chronic atrial fibrillation</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-0">
            <img class="card-img-bottom" data-src="holder.js/360px200/" alt="Card image cap">
          </li>
          <li class="list-group-item">
            <h4><a href="#">Differential diagnosis</a></h4>                
          </li>
          <li class="list-group-item">
            <h4><a href="#">Summary</a></h4>
            <p class="card-text">Chaotic and irregular atrial arrhytthmia, the prevalence of which increases progressively with age...</p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Tests to order</a></h4>
            <p class="card-text"><a href="#">Spirometry:</a> FEV1/FVC ratio <70%; total absence of reversibility is neither required nor the most typical result.</p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Management</a></h4>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Guidelines</a></h4>
            <p><a href="#">BTS guideline on pulmonary rehabilitation in adults <span class="material-icons pb-1" style="font-size: inherit;">&#xE89E;</span></a></p>
            <p><a href="#">Chronic obstructive pulmonary disease in over 16s: diagnosis and management <span class="material-icons pb-1" style="font-size: inherit;">&#xE89E;</span></a></p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">View patient leaflets</a></h4>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Patient leaflets</a></h4>
            <p class="w-100"><a href="#"><i class="material-icons">&#xE5C3;</i>Diabetes type 1</a></p>
            <p class="w-100"><a href="#"> <i class="material-icons">&#xE5C3;</i>Diabetes: What is it? </a></p>
          </li>
          <li class="list-group-item">
            <h4><a href="#"><i class="material-icons">&#xE5C3;</i> PDF</a></h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-4 offset-md-2 serp_detail hidden-sm-down">
      <div class="card border-t">
        <div class="card-block py-3 pl-4">
          <h2 class="card-title m-0">Assessment of chronic cough that goes onto two lines</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-0">
            <img class="card-img-bottom" data-src="holder.js/360px200/" alt="Card image cap">
          </li>
          <li class="list-group-item">
            <h4><a href="#">Differential diagnosis</a></h4>                
          </li>
          <li class="list-group-item">
            <h4><a href="#">Summary</a></h4>
            <p class="card-text">Cough is the most common presenting symptom in primary practice. Sub-acute cough is defined as cough persisting for 3 to 8 weeks, and chronic cough as that persisting for more than 8 weeks....</p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Red flags</a></h4>
            <p class="card-text w-100"><a href="#">Asthma</a></p>
            <p class="card-text w-100"><a href="#">Pneumonia</a></p>
            <p class="card-text w-100"><a href="#">Bordetella pertussis infection</a></p>
            <p class="card-text w-100"><a href="#">Lung cancer</a></p>
            <p class="card-text w-100"><a href="#">Interstitial pulmonary fibrosis</a></p>
          </li>
          <li class="list-group-item">
            <h4><a href="#"><i class="material-icons">&#xE5C3;</i>View PDF</a></h4>
          </li>
        </ul>
      </div>
    </div>
  </div><!--- /row -->
</div><!--- /container -->

<h3> Code snippet for Condition Block</h3>
{% highlight html %}
    <div class="col-md-4 serp_detail hidden-sm-down">
      <div class="card border-t">
        <div class="card-block py-3 pl-4">
          <h2 class="card-title m-0">Chronic atrial fibrillation</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-0">
            <img class="card-img-bottom" data-src="holder.js/360px200/" alt="Card image cap">
          </li>
          <li class="list-group-item">
            <h4><a href="#">Differential diagnosis</a></h4>                
          </li>
          <li class="list-group-item">
            <h4><a href="#">Summary</a></h4>
            <p class="card-text">Chaotic and irregular atrial arrhytthmia, the prevalence of which increases progressively with age...</p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Tests to order</a></h4>
            <p class="card-text"><a href="#">Spirometry:</a> FEV1/FVC ratio <70%; total absence of reversibility is neither required nor the most typical result.</p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Management</a></h4>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Guidelines</a></h4>
            <p><a href="#">BTS guideline on pulmonary rehabilitation in adults <span class="material-icons pb-1" style="font-size: inherit;">&#xE89E;</span></a></p>
            <p><a href="#">Chronic obstructive pulmonary disease in over 16s: diagnosis and management <span class="material-icons pb-1" style="font-size: inherit;">&#xE89E;</span></a></p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">View patient leaflets</a></h4>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Patient leaflets</a></h4>
            <p class="w-100"><a href="#"><i class="material-icons">&#xE5C3;</i>Diabetes type 1</a></p>
            <p class="w-100"><a href="#"> <i class="material-icons">&#xE5C3;</i>Diabetes: What is it? </a></p>
          </li>
          <li class="list-group-item">
            <h4><a href="#"><i class="material-icons">&#xE5C3;</i> PDF</a></h4>
          </li>
        </ul>
      </div>
    </div>
{% endhighlight %}

<h3> Code snippet for Assessment Block</h3>
{% highlight html %}
    <div class="col-md-4 serp_detail hidden-sm-down">
      <div class="card border-t">
        <div class="card-block py-3 pl-4">
          <h2 class="card-title m-0">Chronic atrial fibrillation</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-0">
            <img class="card-img-bottom" data-src="holder.js/360px200/" alt="Card image cap">
          </li>
          <li class="list-group-item">
            <h4><a href="#">Differential diagnosis</a></h4>                
          </li>
          <li class="list-group-item">
            <h4><a href="#">Summary</a></h4>
            <p class="card-text">Chaotic and irregular atrial arrhytthmia, the prevalence of which increases progressively with age...</p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Tests to order</a></h4>
            <p class="card-text"><a href="#">Spirometry:</a> FEV1/FVC ratio <70%; total absence of reversibility is neither required nor the most typical result.</p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Management</a></h4>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Guidelines</a></h4>
            <p><a href="#">BTS guideline on pulmonary rehabilitation in adults <span class="material-icons pb-1" style="font-size: inherit;">&#xE89E;</span></a></p>
            <p><a href="#">Chronic obstructive pulmonary disease in over 16s: diagnosis and management <span class="material-icons pb-1" style="font-size: inherit;">&#xE89E;</span></a></p>
          </li>
          <li class="list-group-item">
            <h4><a href="#">View patient leaflets</a></h4>
          </li>
          <li class="list-group-item">
            <h4><a href="#">Patient leaflets</a></h4>
            <p class="w-100"><a href="#"><i class="material-icons">&#xE5C3;</i>Diabetes type 1</a></p>
            <p class="w-100"><a href="#"> <i class="material-icons">&#xE5C3;</i>Diabetes: What is it? </a></p>
          </li>
          <li class="list-group-item">
            <h4><a href="#"><i class="material-icons">&#xE5C3;</i> PDF</a></h4>
          </li>
        </ul>
      </div>
    </di
{% endhighlight %}