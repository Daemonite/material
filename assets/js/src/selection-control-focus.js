/*
 * selection control focus
 * chrome persists the focus style on checkboxes/radio buttons after clicking
 */

const ControlFocus = (($) => {

  // constants >>>
  const DATA_KEY  = 'md.controlfocus'
  const EVENT_KEY = `.${DATA_KEY}`

  const ClassName = {
    FOCUS : 'focus'
  }

  const LastInteraction = {
    IS_MOUSEDOWN : false
  }

  const Event = {
    BLUR      : `blur${EVENT_KEY}`,
    FOCUS     : `focus${EVENT_KEY}`,
    MOUSEDOWN : `mousedown${EVENT_KEY}`,
    MOUSEUP   : `mouseup${EVENT_KEY}`
  }

  const Selector = {
    CONTROL : '.custom-control',
    INPUT   : '.custom-control-input'
  }
  // <<< constants

  $(document)
  .on(`${Event.BLUR}`,
    Selector.INPUT,
    (event) => {
      $(event.target).removeClass(ClassName.FOCUS)
    }
  )
  .on(`${Event.FOCUS}`,
    Selector.INPUT,
    (event) => {
      if (LastInteraction.IS_MOUSEDOWN === false) {
        $(event.target).addClass(ClassName.FOCUS)
      }
    }
  )
  .on(`${Event.MOUSEDOWN}`,
    Selector.CONTROL,
    () => {
      LastInteraction.IS_MOUSEDOWN = true
    }
  )
  .on(`${Event.MOUSEUP}`,
    Selector.CONTROL,
    () => {
      setTimeout(() => {
        LastInteraction.IS_MOUSEDOWN = false
      }, 1)
    }
  )

})(jQuery)

export default ControlFocus
