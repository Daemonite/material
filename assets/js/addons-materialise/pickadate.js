/*!
 * customise pickadate js for material
 * requires pickadate.js
 */
+function ($) {
  'use strict';

  var Datepicker = function (element, options) {
    this._element = element;
    this._options = options;
  };

  if (typeof $.fn.pickadate === 'undefined') {
    throw new Error('Material\'s JavaScript requires pickadate.js');
  };

  Datepicker.DEFAULTS = {
    cancel        : 'Cancel',
    closeOnCancel : true,
    closeOnSelect : false,
    container     : 'body',
    disable       : [],
    firstDay      : 0,
    format        : 'd/m/yyyy',
    formatSubmit  : '',
    max           : false,
    min           : false,
    monthsFull    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort   : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ok            : 'OK',
    onClose       : false,
    onOpen        : false,
    onRender      : false,
    onSet         : false,
    onStart       : false,
    onStop        : false,
    selectMonths  : false,
    selectYears   : false,
    today         : 'Today',
    weekdaysFull  : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdaysShort : ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  };

  Datepicker.prototype.display = function (datepickerApi, datepickerRoot, datepickerValue) {
    $('.picker__date-display', datepickerRoot).remove();

    $('.picker__wrap', datepickerRoot).prepend('<div class="picker__date-display">' +
      '<div class="picker__date-display-top">' +
        '<span class="picker__year-display">' + datepickerApi.get(datepickerValue, 'yyyy') + '</span>' +
      '</div>' +
      '<div class="picker__date-display-bottom">' +
        '<span class="picker__weekday-display">' + datepickerApi.get(datepickerValue, 'dddd') + '</span>' +
        '<span class="picker__day-display">' + datepickerApi.get(datepickerValue, 'd') + '</span>' +
        '<span class="picker__month-display">' + datepickerApi.get(datepickerValue, 'mmm') + '</span>' +
      '</div>' +
    '</div>');
  };

  Datepicker.prototype.show = function () {
    var that = this;

    $(this._element).pickadate({
      clear         : that._options.cancel,
      close         : that._options.ok,
      closeOnClear  : that._options.closeOnCancel,
      closeOnSelect : that._options.closeOnSelect,
      container     : that._options.container,
      disable       : that._options.disable,
      firstDay      : that._options.firstDay,
      format        : that._options.format,
      formatSubmit  : that._options.formatSubmit,
      klass         : {
        buttonClear : 'btn btn-flat btn-brand picker__button--clear',
        buttonClose : 'btn btn-flat btn-brand picker__button--close',
        buttonToday : 'btn btn-flat btn-brand picker__button--today',
        navPrev     : 'material-icons picker__nav--prev',
        navNext     : 'material-icons picker__nav--next',
      },
      max           : that._options.max,
      min           : that._options.min,
      monthsFull    : that._options.monthsFull,
      monthsShort   : that._options.monthsShort,
      onClose       : that._options.onClose,
      onOpen        : that._options.onOpen,
      onRender      : that._options.onRender,
      onSet         : that._options.onSet,
      onStart       : that._options.onStart,
      onStop        : that._options.onStop,
      selectMonths  : that._options.selectMonths,
      selectYears   : that._options.selectYears,
      today         : that._options.today,
      weekdaysFull  : that._options.weekdaysFull,
      weekdaysShort : that._options.weekdaysShort
    });

    var datepickerApi  = $(this._element).pickadate('picker'),
        datepickerNode = datepickerApi.$node,
        datepickerRoot = datepickerApi.$root;

    datepickerApi.on({
      close: function () {
        $(document.activeElement).blur();
      },
      open: function () {
        if (!$('.picker__date-display', datepickerRoot).length) {
          that.display(datepickerApi, datepickerRoot, 'highlight');
        };
      },
      set: function () {
        if (datepickerApi.get('select') !== null) {
          that.display(datepickerApi, datepickerRoot, 'select');
        };
      }
    });
  };

  function Plugin (option) {
    return this.each(function () {
      var data    = $(this).data('bs.pickdate');
      var options = $.extend({}, Datepicker.DEFAULTS, $(this).data(), typeof option == 'object' && option);

      if (!data) {
        $(this).data('bs.pickdate', (data = new Datepicker(this, options)));
      };

      data.show();
    });
  };

  var old = $.fn.pickdate;

  $.fn.pickdate             = Plugin;
  $.fn.pickdate.Constructor = Datepicker;

  $.fn.pickdate.noConflict = function () {
    $.fn.pickdate = old;
    return this;
  };
}(jQuery);
