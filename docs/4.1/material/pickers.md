---
layout: docs
title: Pickers
description: Pickers provide a simple way to select a single value from a pre-determined set.
group: material
toc: true
---

## Date pickers

Date pickers use a dialog window to select a single date on mobile.

A date picker has to be activated via JavaScript.

**N.B.** Date picker requires `material.js` or `material.min.js`.

{% capture example %}
<label for="exampleInputDatePicker1">A basic example:</label>
<input class="form-control" id="exampleInputDatePicker1" placeholder="Pick a date" type="text">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('#exampleInputDatePicker1').pickdate();
{% endhighlight %}

## Options

Alternatively, options can be passed on to override some default datepicker behaviours.

{% capture example %}
<label for="exampleInputDatePicker2">A customised date picker:</label>
<input class="form-control" id="exampleInputDatePicker2" name="exampleInputDatePicker2" placeholder="Pick a date" type="text">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('.datepicker').pickdate({
  cancel           : 'Clear',
  closeOnCancel    : false,
  closeOnSelect    : true,
  container        : 'body',
  containerHidden  : 'body',
  firstDay         : 1,
  format           : 'You selecte!d: dddd, d mm, yy',
  formatSubmit     : 'dd/mmmm/yyyy',
  hiddenPrefix     : 'prefix_',
  hiddenSuffix     : '_suffix',
  labelMonthNext   : 'Go to the next month',
  labelMonthPrev   : 'Go to the previous month',
  labelMonthSelect : 'Choose a month from the dropdown menu',
  labelYearSelect  : 'Choose a year from the dropdown menu',
  ok               : 'Close',
  onClose          : function () {
    console.log('Datepicker closes')
  },
  onOpen           : function () {
    console.log('Datepicker opens')
  },
  selectMonths     : true,
  selectYears      : 10,
  today            : 'Today'
});
{% endhighlight %}

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">cancel</td>
        <td>Change the text of the cancel button or use <code>cancel: ''</code> to hide the button. Default is <code>'Cancel'</code>.</td>
      </tr>
      <tr>
        <td class="text-nowrap">closeOnCancel</td>
        <td>Close the picker when the cancel button is clicked. Default is <code>true</code>. Set to <code>false</code> to change this behaviour.</td>
      </tr>
      <tr>
        <td class="text-nowrap">closeOnSelect</td>
        <td>Close the picker when a date is selected. Default is <code>false</code>. Set to <code>true</code> to change this behaviour.</td>
      </tr>
      <tr>
        <td class="text-nowrap">container</td>
        <td>Change where to insert the datepicker element by passing any valid CSS selector. By default, the picker is inserted right after the associated <code>input</code> element.</td>
      </tr>
      <tr>
        <td class="text-nowrap">containerHidden</td>
        <td>By default, the picker’s hidden input is inserted right after the main <code>input</code> element. Specify where to insert the hidden element by passing any valid CSS selector to this option.</td>
      </tr>
      <tr>
        <td class="text-nowrap">disable</td>
        <td>Disable a date or a set of dates from being selectable in the picker. See below for detailed usage.</td>
      </tr>
      <tr>
        <td class="text-nowrap">firstDay</td>
        <td>Change the first day of the week. Default is <code>0</code> which sets it to Sunday. Set it to Monday by changing the value to <code>1</code>.</td>
      </tr>
      <tr>
        <td class="text-nowrap">format</td>
        <td>Set the date format. See below for a full list of available date format rules.</td>
      </tr>
      <tr>
        <td class="text-nowrap">formatSubmit</td>
        <td>Optionally, set a different date format for the value to be submitted to the server. When <code>formatSubmit</code> is specified, a hidden <code>input</code> with the same <code>name</code> attribute as the original will be created to hold the value.</td>
      </tr>
      <tr>
        <td class="text-nowrap">hiddenName</td>
        <td>Set to <code>true</code> to only send the hidden value hold by the hidden input created by setting <code>formatSubmit</code> to the server. Setting this to <code>true</code> essentially nullifies the <code>hiddenPrefix</code> and <code>hiddenSuffix</code>, strips the <code>name</code> attribute from the source input, and then sets it as the <code>name</code> of the hidden input.</td>
      </tr>
      <tr>
        <td class="text-nowrap">hiddenPrefix<br>hiddenSuffix</td>
        <td>Add optional prefix/suffix to the <code>name</code> attribute of the hidden input that is created by setting <code>formatSubmit</code>.</td>
      </tr>
      <tr>
        <td class="text-nowrap">labelMonthNext<br>labelMonthPrev<br>labelMonthSelect<br>labelYearSelect</td>
        <td>Change the accessibility labels (i.e. <code>title</code> attributes) to several elements of the picker.</td>
      </tr>
      <tr>
        <td class="text-nowrap">max</td>
        <td>Set the maximum selectable date. See below for detailed usage.</td>
      </tr>
      <tr>
        <td class="text-nowrap">min</td>
        <td>Set the minimum selectable date. See below for detailed usage.</td>
      </tr>
      <tr>
        <td class="text-nowrap">monthsFull</td>
        <td>Change labels of months.</td>
      </tr>
      <tr>
        <td class="text-nowrap">monthsShort</td>
        <td>Change abbreviations of months.</td>
      </tr>
      <tr>
        <td class="text-nowrap">ok</td>
        <td>Change the text of the OK button or set it to <code>''</code> to hide the button. Default is <code>'OK'</code>.</td>
      </tr>
      <tr>
        <td class="text-nowrap">onClose,<br>onOpen,<br>onRender,<br>onSet,<br>onStart,<br>onStop</td>
        <td>Fire events as the user interacts with the picker. Within scope of these events, <code>this</code> refers to the picker.</td>
      </tr>
      <tr>
        <td class="text-nowrap">selectMonths</td>
        <td>Default is <code>false</code>. Set it to <code>true</code> to display a dropdown menu to pick the month.</td>
      </tr>
      <tr>
        <td class="text-nowrap">selectYears</td>
        <td>Default is <code>false</code>. Set it to <code>true</code> to display a dropdown menu to pick the year or use an even integer to specify the number of years to be shown in the dropdown menu (half after and the other half before the year in focus).</td>
      </tr>
      <tr>
        <td class="text-nowrap">today</td>
        <td>Change the text of the today button or pass an empty value to hide the button: <code>today: ''</code>. Default is <code>'Today'</code>.</td>
      </tr>
      <tr>
        <td class="text-nowrap">weekdaysFull</td>
        <td>Change labels of weekdays.</td>
      </tr>
      <tr>
        <td class="text-nowrap">weekdaysShort</td>
        <td>Change abbreviations of weekdays.</td>
      </tr>
    </tbody>
  </table>
</div>

### Date limit

Maximum and minimum selectable dates can be set on the picker.

{% capture example %}
<label for="exampleInputDatePicker3">Using boolean or integers:</label>
<input class="form-control" id="exampleInputDatePicker3" placeholder="Pick a date" type="text">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('.datepicker').pickdate({
  // Default is `false` which removes any limits. `true` sets it to today.
  max: true,
  // An integer (negative or positive) sets it relative to today.
  min: -10
});
{% endhighlight %}

{% capture example %}
<label for="exampleInputDatePicker4">Using JavaScript date:</label>
<input class="form-control" id="exampleInputDatePicker4" placeholder="Pick a date" type="text">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('.datepicker').pickdate({
  max: new Date(2016,1,13),
  min: new Date(2016,0,3)
});
{% endhighlight %}

{% capture example %}
<label for="exampleInputDatePicker5">Using <code>[YEAR,MONTH,DATE]</code>:</label>
<input class="form-control" id="exampleInputDatePicker5" placeholder="Pick a date" type="text">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('.datepicker').pickdate({
  max: [2016,1,13],
  min: [2016,0,3]
});
{% endhighlight %}

### Disable dates

Disable a specific or arbitrary set of dates selectable on the picker.

{% capture example %}
<label for="exampleInputDatePicker6">Using JavaScript date or <code>[YEAR,MONTH,DATE]</code>:</label>
<input class="form-control" id="exampleInputDatePicker6" placeholder="Pick a date" type="text" value="1/1/2016">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('.datepicker').pickdate({
  disable: [
    new Date(2016,0,16),
    new Date(2016,0,20),
    [2016,0,24]
  ]
});
{% endhighlight %}

{% capture example %}
<label for="exampleInputDatePicker7">Using integers as days of the week:</label>
<input class="form-control" id="exampleInputDatePicker7" placeholder="Pick a date" type="text" value="1/1/2016">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('.datepicker').pickdate({
  disable: [
    1, 2, 3
  ]
});
{% endhighlight %}

{% capture example %}
<label for="exampleInputDatePicker8">Using objects as a range of dates:</label>
<input class="form-control" id="exampleInputDatePicker8" placeholder="Pick a date" type="text" value="1/1/2016">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
$('.datepicker').pickdate({
  disable: [
    { from: new Date(2016,0,16), to: [2016,0,24] }
  ]
});
{% endhighlight %}

The values for <code>from</code> and <code>to</code> can be:

* Array formatted as <code>[YEAR,MONTH,DATE]</code>
* JavaScript date
* <code>true</code> to set it as "today"

The values can also be integers representing dates relative to the other:

{% capture example %}
<label for="exampleInputDatePicker9"><code>from</code> can only be negative:</label>
<input class="form-control" id="exampleInputDatePicker9" placeholder="Pick a date" type="text">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
{ from: -10, to: true }
{% endhighlight %}

{% capture example %}
<label for="exampleInputDatePicker10"><code>to</code> can only be positive:</label>
<input class="form-control" id="exampleInputDatePicker10" placeholder="Pick a date" type="text" value="1/1/2016">
{% endcapture %}
{% include example.html content=example %}

{% highlight js %}
{ from: [2016,0,16], to: 10 }
{% endhighlight %}

### Formatting rules

The following rules can be used to format any date:

<div class="table-responsive mb-3">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th>Rule</th>
        <th>Description</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>d</code></td>
        <td>Date of the month</td>
        <td>1 – 31</td>
      </tr>
      <tr>
        <td><code>dd</code></td>
        <td>Date of the month with a leading zero</td>
        <td>01 – 31</td>
      </tr>
      <tr>
        <td><code>ddd</code></td>
        <td>Day of the week in short form</td>
        <td>Sun – Sat</td>
      </tr>
      <tr>
        <td><code>dddd</code></td>
        <td>Day of the week in full form</td>
        <td>Sunday – Saturday</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td><code>m</code></td>
        <td>Month of the year</td>
        <td>1 – 12</td>
      </tr>
      <tr>
        <td><code>mm</code></td>
        <td>Month of the year with a leading zero</td>
        <td>01 – 12</td>
      </tr>
      <tr>
        <td><code>mmm</code></td>
        <td>Month name in short form</td>
        <td>Jan – Dec</td>
      </tr>
      <tr>
        <td><code>mmmm</code></td>
        <td>Month name in full form</td>
        <td>January – December</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td><code>yy</code></td>
        <td>Year in short form <strong>*</strong></td>
        <td>00 – 99</td>
      </tr>
      <tr>
        <td><code>yyyy</code></td>
        <td>Year in full form</td>
        <td>2000 – 2999</td>
      </tr>
    </tbody>
  </table>
</div>
