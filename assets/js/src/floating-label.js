/*
 * floating label:
 * when a user engages with the text input field,
 * the floating inline labels move to float above the field
 */
const Floatinglabel = (($) => {
  // constants >>>
    const DATA_API_KEY        = '.data-api';
    const DATA_KEY            = 'md.floatinglabel';
    const EVENT_KEY           = `.${DATA_KEY}`;
    const NAME                = 'floatinglabel';
    const NO_CONFLICT         = $.fn[NAME];

    const ClassName = {
      focus     : 'control-focus',
      highlight : 'control-highlight'
    };

    const Event = {
      CHANGE_DATA_API   : `change${EVENT_KEY}${DATA_API_KEY}`,
      FOCUSIN_DATA_API  : `focusin${EVENT_KEY}${DATA_API_KEY}`,
      FOCUSOUT_DATA_API : `focusout${EVENT_KEY}${DATA_API_KEY}`
    };

    const Selector = {
      DATA_TOGGLE : `.floating-label-control`
    }
  // <<< constants

  class Floatinglabel {
    constructor(element) {
      this._element = element;
    }

    change(relatedTarget) {
      if ($(this._element).val() ||
        ($(this._element).is('select') && 
          $('option:first-child', $(this._element)).html().replace(' ', '') !== '')) {
        $(relatedTarget).addClass(ClassName.highlight);
      } else {
        $(relatedTarget).removeClass(ClassName.highlight);
      }
    }

    focusin(relatedTarget) {
      $(relatedTarget).addClass(ClassName.focus);
    }

    focusout(relatedTarget) {
      $(relatedTarget).removeClass(ClassName.focus);
    }

    static _getTargetFromElement(element) {
      let selector = element.getAttribute('id');
      let target   = null;

      if (selector) {
        target = $('[for=' + selector + ']');
        target = /[a-z]/i.test(target) ? target : null;
      }

      return target;
    }

    static _jQueryInterface(event, relatedTarget) {
      return this.each(function () {
        let data           = $(this).data(DATA_KEY);
        let _event         = event ? event : 'change';
        let _relatedTarget = relatedTarget ? relatedTarget : Floatinglabel._getTargetFromElement(this);

        if (!data) {
          data = new Floatinglabel(this);
          $(this).data(DATA_KEY, data);
        }

        if (typeof _event === 'string') {
          if (data[_event] === undefined) {
            throw new Error(`No method named "${_event}"`);
          }

          data[_event](_relatedTarget);
        }
      });
    }
  }

  $(document).on(`${Event.CHANGE_DATA_API} ${Event.FOCUSIN_DATA_API} ${Event.FOCUSOUT_DATA_API}`,
    Selector.DATA_TOGGLE,
    function (event) {
    let data          = $(this).data(DATA_KEY);
    let relatedTarget = Floatinglabel._getTargetFromElement(this);

    Floatinglabel._jQueryInterface.call($(this), event.type, relatedTarget);
  });

  $.fn[NAME]             = Floatinglabel._jQueryInterface;
  $.fn[NAME].Constructor = Floatinglabel;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Floatinglabel._jQueryInterface;
  };

  return Floatinglabel;
})(jQuery);