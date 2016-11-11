/*!
 * floating label:
 * when a user engages with the text input field,
 * the floating inline labels move to float above the field
 */
const FloatingLabel = (($) => {
  // constants >>>
    const DATA_API_KEY        = '.data-api';
    const DATA_KEY            = 'md.floatinglabel';
    const EVENT_KEY           = `.${DATA_KEY}`;
    const NAME                = 'floatinglabel';
    const NO_CONFLICT         = $.fn[NAME];

    const ClassName = {
      IS_FOCUSED : 'is-focused',
      HAS_VALUE  : 'has-value'
    };

    const Event = {
      CHANGE   : `change${EVENT_KEY}`,
      FOCUSIN  : `focusin${EVENT_KEY}`,
      FOCUSOUT : `focusout${EVENT_KEY}`
    };

    const Selector = {
      DATA_PARENT : '.floating-label',
      DATA_TOGGLE : '.floating-label .form-control'
    };
  // <<< constants

  class FloatingLabel {
    constructor(element) {
      this._element = element;
    }

    change(relatedTarget) {
      if ($(this._element).val() ||
        ($(this._element).is('select') && 
          $('option:first-child', $(this._element)).html().replace(' ', '') !== '')) {
        $(relatedTarget).addClass(ClassName.HAS_VALUE);
      } else {
        $(relatedTarget).removeClass(ClassName.HAS_VALUE);
      }
    }

    focusin(relatedTarget) {
      $(relatedTarget).addClass(ClassName.IS_FOCUSED);
    }

    focusout(relatedTarget) {
      $(relatedTarget).removeClass(ClassName.IS_FOCUSED);
    }

    static _jQueryInterface(event) {
      return this.each(function () {
        let data           = $(this).data(DATA_KEY);
        let _event         = event ? event : 'change';

        if (!data) {
          data = new FloatingLabel(this);
          $(this).data(DATA_KEY, data);
        }

        if (typeof _event === 'string') {
          if (data[_event] === undefined) {
            throw new Error(`No method named "${_event}"`);
          }

          data[_event]($(this).closest(Selector.DATA_PARENT));
        }
      });
    }
  }

  $(document).on(`${Event.CHANGE} ${Event.FOCUSIN} ${Event.FOCUSOUT}`,
    Selector.DATA_TOGGLE,
    function (event) {
    let data          = $(this).data(DATA_KEY);

    FloatingLabel._jQueryInterface.call($(this), event.type);
  });

  $.fn[NAME]             = FloatingLabel._jQueryInterface;
  $.fn[NAME].Constructor = FloatingLabel;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT;
    return FloatingLabel._jQueryInterface;
  };

  return FloatingLabel;
})(jQuery);
