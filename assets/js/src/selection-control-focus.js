import $ from 'jquery'

/*
 * Selection control plugin fixes the focus state problem with
 * Chrome persisting focus state on checkboxes/radio buttons after clicking
 */

const SelectionControlFocus = (($) => {
  // constants >>>
  const DATA_KEY  = 'md.selectioncontrolfocus'
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

  $(document).on(`${Event.BLUR}`, Selector.INPUT, function () {
    $(this).removeClass(ClassName.FOCUS)
  }).on(`${Event.FOCUS}`, Selector.INPUT, function () {
    if (LastInteraction.IS_MOUSEDOWN === false) {
      $(this).addClass(ClassName.FOCUS)
    }
  }).on(`${Event.MOUSEDOWN}`, Selector.CONTROL, () => {
    LastInteraction.IS_MOUSEDOWN = true
  }).on(`${Event.MOUSEUP}`, Selector.CONTROL, () => {
    setTimeout(() => {
      LastInteraction.IS_MOUSEDOWN = false
    }, 1)
  })
})($)

export default SelectionControlFocus
