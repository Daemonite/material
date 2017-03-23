---
layout: docs
title: Search Results Page
description: Encourage users to create a personal account or log in, with Registration &amp; Log in Form in Modal
group: bp components
---

Cards are used for our search results. A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. 

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Search results - card

#### Titles and links

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to  a `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-block` item, the card title and subtitle are aligned nicely.

<div class="container serp">
      <div class="row">
        <div class="col-md-12">
          <h3 class="mt-lg">Search results for COPD</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">All</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Guidelines</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Images</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Multimedia</a>
            </li>
          </ul>
          <div class="card-group">
            <div class="card border-l">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Chronic atrial fibrillation</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">New-onset atrial fibrillation</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Assessment of syncope</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Assessment of palpitations</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">New-onset atrial fibrillation</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Overview of dysrhythmias (cardiac) very very long condition name</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">Introductions</a>
                  <a href="#" class="card-link">Conditions</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Assessment of syncope</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title"><a href="#">Assessment of palpitations</a></h4>
                  <a href="#" class="card-link">Summary</a>
                  <a href="#" class="card-link">History and Exam</a>
                  <a href="#" class="card-link">Investigations</a>
                  <a href="#" class="card-link">Differential diagnosis</a>
                  <a href="#" class="card-link">Step by step management</a>
              </div>
            </div>            
          </div>
        </div>

{% highlight html %}
<div class="card">
  <div class="card-block">
    <h4 class="card-title">Chronic atrial fibrillation</h4>
    <!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>-->
  </div>
  <div class="card-footer">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Summary</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">History and Exam</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Investigations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Differential diagnosis</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Step by step management</a>
      </li>
    </ul>
  </div>
</div>
{% endhighlight %}