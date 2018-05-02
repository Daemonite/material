import $ from 'jquery'

/*
 * Floating label plugin moves inline label to float above the field
 * when a user engages with the assosciated text input field
 */

const FloatingLabel = (($) => {
  // constants >>>
  const DATA_KEY    = 'md.floatinglabel'
  const EVENT_KEY   = `.${DATA_KEY}`
  const NAME        = 'floatinglabel'
  const NO_CONFLICT = $.fn[NAME]

  const ClassName = {
    IS_FOCUSED : 'is-focused',
    HAS_VALUE  : 'has-value'
  }

  const Event = {
    CHANGE   : `change${EVENT_KEY}`,
    FOCUSIN  : `focusin${EVENT_KEY}`,
    FOCUSOUT : `focusout${EVENT_KEY}`
  }

  const Selector = {
    DATA_PARENT : '.floating-label',
    DATA_TOGGLE : '.floating-label .custom-select, .floating-label .form-control'
  }
  // <<< constants

  class FloatingLabel {
    constructor(element) {
      this._element = element
      this._parent  = $(element).closest(Selector.DATA_PARENT)[0]
    }

    change() {
      if ($(this._element).val() ||
        $(this._element).is('select') &&
        $('option:first-child', $(this._element)).html().replace(' ', '') !== '') {
        $(this._parent).addClass(ClassName.HAS_VALUE)
      } else {
        $(this._parent).removeClass(ClassName.HAS_VALUE)
      }
    }

    focusin() {
      $(this._parent).addClass(ClassName.IS_FOCUSED)
    }

    focusout() {
      $(this._parent).removeClass(ClassName.IS_FOCUSED)
    }

    static _jQueryInterface(event) {
      return this.each(function () {
        const _event = event ? event : 'change'

        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new FloatingLabel(this)

          $(this).data(DATA_KEY, data)
        }

        if (typeof _event === 'string') {
          if (typeof data[_event] === 'undefined') {
            throw new Error(`No method named "${_event}"`)
          }

          data[_event]()
        }
      })
    }
  }

  $(document).on(`${Event.CHANGE} ${Event.FOCUSIN} ${Event.FOCUSOUT}`, Selector.DATA_TOGGLE, function (event) {
    FloatingLabel._jQueryInterface.call($(this), event.type)
  })

  $.fn[NAME]             = FloatingLabel._jQueryInterface
  $.fn[NAME].Constructor = FloatingLabel
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT

    return FloatingLabel._jQueryInterface
  }

  return FloatingLabel
})($)

export default FloatingLabel
