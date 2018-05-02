import '../../../node_modules/pickadate/lib/picker.date.js'
import $ from 'jquery'
import Util from './util'

/*
 * Date picker plugin extends `pickadate.js` by Amsul
 */

const PickDate = (($) => {
  // constants >>>
  const DATA_KEY    = 'md.pickdate'
  const NAME        = 'pickdate'
  const NO_CONFLICT = $.fn[NAME]

  const Default = {
    cancel           : 'Cancel',
    closeOnCancel    : true,
    closeOnSelect    : false,
    container        : '',
    containerHidden  : '',
    disable          : [],
    firstDay         : 0,
    format           : 'd/m/yyyy',
    formatSubmit     : '',
    hiddenName       : false,
    hiddenPrefix     : '',
    hiddenSuffix     : '',
    klass            : {
      // button
      buttonClear    : 'btn btn-outline-primary picker-button-clear',
      buttonClose    : 'btn btn-outline-primary picker-button-close',
      buttonToday    : 'btn btn-outline-primary picker-button-today',

      // day
      day            : 'picker-day',
      disabled       : 'picker-day-disabled',
      highlighted    : 'picker-day-highlighted',
      infocus        : 'picker-day-infocus',
      now            : 'picker-day-today',
      outfocus       : 'picker-day-outfocus',
      selected       : 'picker-day-selected',
      weekdays       : 'picker-weekday',

      // element
      box            : 'picker-box',
      footer         : 'picker-footer',
      frame          : 'picker-frame',
      header         : 'picker-header',
      holder         : 'picker-holder',
      table          : 'picker-table',
      wrap           : 'picker-wrap',

      // input element
      active         : 'picker-input-active',
      input          : 'picker-input',

      // month and year nav
      month          : 'picker-month',
      navDisabled    : 'picker-nav-disabled',
      navNext        : 'material-icons picker-nav-next',
      navPrev        : 'material-icons picker-nav-prev',
      selectMonth    : 'picker-select-month',
      selectYear     : 'picker-select-year',
      year           : 'picker-year',

      // root picker
      focused        : 'picker-focused',
      opened         : 'picker-opened',
      picker         : 'picker'
    },
    labelMonthNext   : 'Next month',
    labelMonthPrev   : 'Previous month',
    labelMonthSelect : 'Select a month',
    labelYearSelect  : 'Select a year',
    max              : false,
    min              : false,
    monthsFull       : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ok               : 'OK',
    onClose          : () => {
      // Do nothing
    },
    onOpen           : () => {
      // Do nothing
    },
    onRender         : () => {
      // Do nothing
    },
    onSet            : () => {
      // Do nothing
    },
    onStart          : () => {
      // Do nothing
    },
    onStop           : () => {
      // Do nothing
    },
    selectMonths     : false,
    selectYears      : false,
    today            : '',
    weekdaysFull     : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdaysShort    : ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  }

  const DefaultType = {
    cancel           : 'string',
    closeOnCancel    : 'boolean',
    closeOnSelect    : 'boolean',
    container        : 'string',
    containerHidden  : 'string',
    disable          : 'array',
    firstDay         : 'number',
    format           : 'string',
    formatSubmit     : 'string',
    hiddenName       : 'boolean',
    hiddenPrefix     : 'string',
    hiddenSuffix     : 'string',
    klass            : 'object',
    labelMonthNext   : 'string',
    labelMonthPrev   : 'string',
    labelMonthSelect : 'string',
    labelYearSelect  : 'string',
    max              : 'boolean || date',
    min              : 'boolean || date',
    monthsFull       : 'array',
    monthsShort      : 'array',
    ok               : 'string',
    onClose          : 'function',
    onOpen           : 'function',
    onRender         : 'function',
    onSet            : 'function',
    onStart          : 'function',
    onStop           : 'function',
    selectMonths     : 'boolean',
    selectYears      : 'boolean || number',
    today            : 'string',
    weekdaysFull     : 'array',
    weekdaysShort    : 'array'
  }

  class PickDate {
    constructor(element, config) {
      this._config  = this._getConfig(config)
      this._element = element
    }

    display(datepickerApi, datepickerRoot, datepickerValue) {
      $('.picker-date-display', datepickerRoot).remove()

      $('.picker-wrap', datepickerRoot).prepend(`<div class="picker-date-display"><div class="picker-date-display-top"><span class="picker-year-display">${datepickerApi.get(datepickerValue, 'yyyy')}</span></div><div class="picker-date-display-bottom"><span class="picker-weekday-display">${datepickerApi.get(datepickerValue, 'dddd')}</span><span class="picker-day-display">${datepickerApi.get(datepickerValue, 'd')}</span><span class="picker-month-display">${datepickerApi.get(datepickerValue, 'mmm')}</span></div></div>`)
    }

    show() {
      $(this._element).pickadate({
        clear            : this._config.cancel,
        close            : this._config.ok,
        closeOnClear     : this._config.closeOnCancel,
        closeOnSelect    : this._config.closeOnSelect,
        container        : this._config.container,
        containerHidden  : this._config.containerHidden,
        disable          : this._config.disable,
        firstDay         : this._config.firstDay,
        format           : this._config.format,
        formatSubmit     : this._config.formatSubmit,
        klass            : this._config.klass,
        hiddenName       : this._config.hiddenName,
        hiddenPrefix     : this._config.hiddenPrefix,
        hiddenSuffix     : this._config.hiddenSuffix,
        labelMonthNext   : this._config.labelMonthNext,
        labelMonthPrev   : this._config.labelMonthPrev,
        labelMonthSelect : this._config.labelMonthSelect,
        labelYearSelect  : this._config.labelYearSelect,
        max              : this._config.max,
        min              : this._config.min,
        monthsFull       : this._config.monthsFull,
        monthsShort      : this._config.monthsShort,
        onClose          : this._config.onClose,
        onOpen           : this._config.onOpen,
        onRender         : this._config.onRender,
        onSet            : this._config.onSet,
        onStart          : this._config.onStart,
        onStop           : this._config.onStop,
        selectMonths     : this._config.selectMonths,
        selectYears      : this._config.selectYears,
        today            : this._config.today,
        weekdaysFull     : this._config.weekdaysFull,
        weekdaysShort    : this._config.weekdaysShort
      })

      const datepickerApi  = $(this._element).pickadate('picker')
      const datepickerRoot = datepickerApi.$root

      datepickerApi.on({
        close: () => {
          $(document.activeElement).blur()
        },
        open: () => {
          if (!$('.picker__date-display', datepickerRoot).length) {
            this.display(datepickerApi, datepickerRoot, 'highlight')
          }
        },
        set: () => {
          if (datepickerApi.get('select') !== null) {
            this.display(datepickerApi, datepickerRoot, 'select')
          }
        }
      })
    }

    _getConfig(config) {
      config = {
        ...Default,
        ...config
      }

      Util.typeCheckConfig(NAME, config, DefaultType)

      return config
    }

    static _jQueryInterface(config) {
      return this.each(function () {
        const _config = {
          ...Default,
          ...$(this).data(),
          ...typeof config === 'object' && config ? config : {}
        }

        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new PickDate(this, _config)

          $(this).data(DATA_KEY, data)
        }

        data.show()
      })
    }
  }

  $.fn[NAME]             = PickDate._jQueryInterface
  $.fn[NAME].Constructor = PickDate
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT

    return PickDate._jQueryInterface
  }
})($)

export default PickDate
