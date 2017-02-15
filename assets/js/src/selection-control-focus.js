/*!
 * selection control focus:
 * chrome persists the focus style on checkboxes/radio buttons
 * after clicking with the mouse
 */
const ControlFocus = (($) => {
  // constants >>>
    const DATA_KEY  = 'md.controlfocus';
    const EVENT_KEY = `.${DATA_KEY}`;

    const ClassName = {
      FOCUS : 'focus'
    };

    const LastInteraction = {
      IS_MOUSEDOWN : false
    };

    const Event = {
      BLUR      : `blur${EVENT_KEY}`,
      FOCUS     : `focus${EVENT_KEY}`,
      MOUSEDOWN : `mousedown${EVENT_KEY}`,
      MOUSEUP   : `mouseup${EVENT_KEY}`
    };

    const Selector = {
      CONTROL : '.custom-control',
      INPUT   : '.custom-control-input'
    };
  // <<< constants

  $(document)
    .on(`${Event.BLUR}`,
      Selector.INPUT,
      function (event) {
        $(event.target).removeClass(ClassName.FOCUS);
      }
    )
    .on(`${Event.FOCUS}`,
      Selector.INPUT,
      function (event) {
        if (LastInteraction.IS_MOUSEDOWN === false) {
          $(event.target).addClass(ClassName.FOCUS);
        }
      }
    )
    .on(`${Event.MOUSEDOWN}`,
      Selector.CONTROL,
      function (event) {
        LastInteraction.IS_MOUSEDOWN = true;
      }
    )
    .on(`${Event.MOUSEUP}`,
      Selector.CONTROL,
      function (event) {
        setTimeout(function () {
          LastInteraction.IS_MOUSEDOWN = false;
        }, 1);
      }
    );
})(jQuery);
