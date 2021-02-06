---
layout: docs
title: DataTables
description: Add advanced interaction controls to your HTML tables the free & easy way.
group: plugins
plugin: true
datatables: true
---

<div class="list-group my-2 my-lg-5">
  <a href="https://material.io/components/data-tables" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-md"></span>
      Material Design guidelines: Data tables</a>
  <a href="https://material-components.github.io/material-components-web-catalog/#/component/data-table" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-mdc"></span>
    Material Components for the web: Data Table</a>
  <a href="https://datatables.net/" target="_blank" class="list-group-item list-group-item-action d-flex font-weight-bold">
    <span class="list-group-item-icon lgi-icon-plugin"></span>
    DataTables: Official documentation</a>
</div>

{% capture callout %}
This plugin requires `material-plugins.css` and **DataTables** official CSS.

**jQuery** is also required.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Demo

{% capture example %}
<table id="datatables-example" class="table"></table>
{% endcapture %}
{% include example.html content=example %}

## Features

### Compatible features

- Display
- Sort
- Dense
- Snackbar notification
- Pagination
- Row selection row
- Column sorting
- Responsive
- Search

### Missing features

- [Row selection with checkbox](https://datatables.net/extensions/select/examples/initialisation/checkbox.html)
- Filter icon
- More vertical button
- Plugins not listed above

You can create an [Issue](https://github.com/djibe/material/issues) if you need some extra styling.

## Using DataTables

Import **DataTables.net** CSS (Bootstrap 4 version) before Material CSS.

{% highlight html %}
<link href="https://cdn.datatables.net/v/bs4/jszip-2.5.0/b-1.6.5/b-colvis-1.6.5/b-flash-1.6.5/b-html5-1.6.5/b-print-1.6.5/cr-1.5.2/fc-3.3.1/r-2.2.6/rr-1.2.7/sl-1.3.1/datatables.css" rel="stylesheet" crossorigin>
{% endhighlight %}

Import **material-plugins.css** after Material CSS.

{% highlight html %}
<link href="https://cdn.jsdelivr.net/gh/djibe/material@{{ site.current_version }}-{{ site.material_version }}/css/material-plugins.min.css" rel="stylesheet" crossorigin>
{% endhighlight %}

Import **DataTables** JS (Bootstrap 4 version) and its dependencies after Material JS.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/pdfmake@0.1.68/build/pdfmake.min.js" integrity="sha256-Xf58sgO5ClVXPyDzPH+NtjN52HMC0YXBJ3rp8sWnyUk=" crossorigin></script>
<script src="https://cdn.jsdelivr.net/npm/pdfmake@0.1.68/build/vfs_fonts.js" integrity="sha256-vEmrkqA2KrdjNo0/IWMNelI6jHuWAOkIJxGf88r4iic=" crossorigin></script>
<script src="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.10.22/b-1.6.5/b-colvis-1.6.5/b-flash-1.6.5/b-html5-1.6.5/b-print-1.6.5/cr-1.5.2/fc-3.3.1/r-2.2.6/rr-1.2.7/sl-1.3.1/datatables.min.js" crossorigin></script>
{% endhighlight %}

Insert your HTML table. This one is declared via a JS array.

{% highlight html %}
<table id="datatables-example" class="table"></table>
{% endhighlight %}

Override **DataTables** default parameters once.

{% highlight js %}
$.extend($.fn.dataTable.defaults, {
  // Display
  dom: '<"top"f><"data-table"rt<"bottom"Blip>>', // https://datatables.net/examples/basic_init/dom.html
  lengthMenu: [ // https://datatables.net/examples/advanced_init/length_menu.html
    [10, 25, 50, -1],
    [10, 25, 50, "All"],
  ],
  language: {
    search: '_INPUT_',
    searchPlaceholder: 'Search', // https://datatables.net/reference/option/language.searchPlaceholder
    info: '_START_-_END_ of _MAX_', // https://datatables.net/examples/basic_init/language.html
    lengthMenu: 'Rows per page _MENU_',
    infoEmpty: '0 of _MAX_',
    infoFiltered: '',
    paginate: {
      first: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M18.41 16.59L13.82 12l4.59-4.59L6l-6 6 6 6zM6 6h2v12H6z"/></svg>',
      previous: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.4141z"/></svg>',
      next: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>',
      last: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM6h2v12h-2z"/></svg>'
    },
    decimal: ',',
    thousands: '.',
    zeroRecords: 'No results found'
  },
  buttons: {
    buttons: [
      {
        extend: 'copy',
        text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>',
        className: 'btn-icon',
        attr: { title: 'Copy table data to clipboard', 'data-toggle': 'tooltip' }
      },
      {
        extend: 'print',
        text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"/></svg>',
        className: 'btn-icon',
        attr: { title: 'Print full table', 'data-toggle': 'tooltip' }
      },
      {
        extend: 'csv',
        text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M10 19L12 15H9V10H15V15L13 19H10"/></svg>',
        className: 'btn-icon',
        attr: { title: 'Export to CSV', 'data-toggle': 'tooltip' }
      },
      {
        text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z"/></svg>',
        action: function (e, dt, button, config) {
          let data = dt.buttons.exportData();
          $.fn.dataTable.fileSave(
            new Blob([JSON.stringify(data)]),
            'Data ExportJSON.json'
          );
        },
        className: 'btn-icon',
        attr: { title: 'Export to JSON', 'data-toggle': 'tooltip' }
      },
      {
        extend: 'excel',
        text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M12.9 14.5L15.8 19H14L12 15.6L10 19H8.2L11.1 14.5L8.2 10H10L12 13.4L14 10H15.8L12.9 14.5Z"/></svg>',
        className: 'btn-icon',
        attr: { title: 'Export to Excel', 'data-toggle': 'tooltip' }
      },
      {
        extend: 'pdf',
        download: 'open',
        text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M10.92,12.31C10.68,11.54 10.15,9.08 11.55,9.04C12.95,9 12.03,12.16 12.03,12.16C12.42,13.65 14.05,14.72 14.05,14.72C14.55,14.57 17.4,14.24 17,15.72C16.57,17.2 13.5,15.81 13.5,15.81C11.55,15.95 10.09,16.47 10.09,16.47C8.96,18.58 7.64,19.5 7.1,18.61C6.43,17.5 9.23,16.07 9.23,16.07C10.68,13.72 10.9,12.35 10.92,12.31M11.57,13.15C11.17,14.45 10.37,15.84 10.37,15.84C11.22,15.5 13.08,15.11 13.08,15.11C11.94,14.11 11.59,13.16 11.57,13.15M14.71,15.32C14.71,15.32 16.46,15.97 16.5,15.71C16.57,15.44 15.17,15.2 14.71,15.32M9.05,16.81C8.28,17.11 7.54,18.39 7.72,18.39C7.9,18.4 8.63,17.79 9.05,16.81M11.57,11.26C11.57,11.21 12,9.58 11.57,9.53C11.27,9.5 11.56,11.22 11.57,11.26Z"/></svg>',
        className: 'btn-icon',
        attr: { title: 'Export to PDF', 'data-toggle': 'tooltip' }
      }
    ],
    dom: {
      container: { className: 'dt-buttons d-none d-md-flex flex-wrap' },
      buttonContainer: {},
      button: { className: 'btn' }
    }
  },
  // Data display
  colReorder: true,
  fixedHeader: true,
  ordering: true,
  paging: true,
  pageLength: 10,
  pagingType: 'full', // https://datatables.net/reference/option/pagingType
  responsive: true,
  searching: true,
  select: {
    style: 'multi+shift', // https://datatables.net/reference/option/select.style
    className: 'table-active' // https://datatables.net/reference/option/select.className
  },
  stateSave: true,
})
{% endhighlight %}

Define your table array (or any type: HTML, JSON..).

{% highlight js %}
const dataSet=[["Tiger Nixon","System Architect","Edinburgh","5421","2011/04/25","$320,800"],["Garrett Winters","Accountant","Tokyo","8422","2011/07/25","$170,750"],["Ashton Cox","Junior Technical Author","San Francisco","1562","2009/01/12","$86,000"],["Cedric Kelly","Senior Javascript Developer","Edinburgh","6224","2012/03/29","$433,060"],["Airi Satou","Accountant","Tokyo","5407","2008/11/28","$162,700"],["Brielle Williamson","Integration Specialist","New York","4804","2012/12/02","$372,000"],["Herrod Chandler","Sales Assistant","San Francisco","9608","2012/08/06","$137,500"],["Rhona Davidson","Integration Specialist","Tokyo","6200","2010/10/14","$327,900"],["Colleen Hurst","Javascript Developer","San Francisco","2360","2009/09/15","$205,500"],["Sonya Frost","Software Engineer","Edinburgh","1667","2008/12/13","$103,600"],["Jena Gaines","Office Manager","London","3814","2008/12/19","$90,560"],["Quinn Flynn","Support Lead","Edinburgh","9497","2013/03/03","$342,000"],["Charde Marshall","Regional Director","San Francisco","6741","2008/10/16","$470,600"],["Haley Kennedy","Senior Marketing Designer","London","3597","2012/12/18","$313,500"],["Tatyana Fitzpatrick","Regional Director","London","1965","2010/03/17","$385,750"],["Michael Silva","Marketing Designer","London","1581","2012/11/27","$198,500"],["Paul Byrd","Chief Financial Officer (CFO)","New York","3059","2010/06/09","$725,000"],["Gloria Little","Systems Administrator","New York","1721","2009/04/10","$237,500"],["Bradley Greer","Software Engineer","London","2558","2012/10/13","$132,000"],["Dai Rios","Personnel Lead","Edinburgh","2290","2012/09/26","$217,500"],["Jenette Caldwell","Development Lead","New York","1937","2011/09/03","$345,000"],["Yuri Berry","Chief Marketing Officer (CMO)","New York","6154","2009/06/25","$675,000"],["Caesar Vance","Pre-Sales Support","New York","8330","2011/12/12","$106,450"],["Doris Wilder","Sales Assistant","Sydney","3023","2010/09/20","$85,600"],["Angelica Ramos","Chief Executive Officer (CEO)","London","5797","2009/10/09","$1,200,000"],["Gavin Joyce","Developer","Edinburgh","8822","2010/12/22","$92,575"],["Jennifer Chang","Regional Director","Singapore","9239","2010/11/14","$357,650"],["Brenden Wagner","Software Engineer","San Francisco","1314","2011/06/07","$206,850"],["Fiona Green","Chief Operating Officer (COO)","San Francisco","2947","2010/03/11","$850,000"],["Shou Itou","Regional Marketing","Tokyo","8899","2011/08/14","$163,000"],["Michelle House","Integration Specialist","Sydney","2769","2011/06/02","$95,400"],["Suki Burks","Developer","London","6832","2009/10/22","$114,500"],["Prescott Bartlett","Technical Author","London","3606","2011/05/07","$145,000"],["Gavin Cortez","Team Leader","San Francisco","2860","2008/10/26","$235,500"],["Martena Mccray","Post-Sales support","Edinburgh","8240","2011/03/09","$324,050"],["Unity Butler","Marketing Designer","San Francisco","5384","2009/12/09","$85,675"]];
{% endhighlight %}

Initialize plugin on your table element.

{% highlight js %}
$(function() {
  $('#datatables-example').DataTable({
    // Table data
    data: dataSet, // My JS array
    columns: [ // Define table Headers for each column
      { title: 'name' },
      { title: 'position' },
      { title: 'office' },
      { title: 'extn' },
      { title: 'start date' },
      { title: 'salary' },
    ],
  })
  .column([2]).visible(false) // Hide Office column for demo suitable width
  .on('page.dt', function () {
    $('[data-toggle="tooltip"]').tooltip({placement: 'bottom'})
  })
})
{% endhighlight %}

All parameters are detailed in [official documentation](https://datatables.net/).

That's it.

## Customization

### Localization

Replace `language` object translations of `$.extend($.fn.dataTable.defaults...` for locale texts.

### Remove search bar

Set `dom` value to `'<"data-table"rt<"bottom"Blip>>'`.

### Remove export buttons

Set `dom` value to `'<"top"f><"data-table"rt<"bottom"lip>>'`.

### Dense table

Add `table-sm` CSS class to your HTML table declaration in order to render table as dense layout.

### Responsive

Resize this window in order to see the **Responsive** plugin in action.

### Row selection

Click on a row to select this row.

All parameters are detailed in [official documentation](https://datatables.net/).
