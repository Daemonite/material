import $ from 'jquery'

/*
 * Expansion panel plugins expands a collapsed panel in full upon selecting
 */

const ExpansionPanel = (($) => {
  // constants >>>
  const DATA_KEY  = 'bs.collapse'
  const EVENT_KEY = `.${DATA_KEY}`

  const ClassName = {
    SHOW             : 'show',
    SHOW_PREDECESSOR : 'show-predecessor'
  }

  const Event = {
    HIDE : `hide${EVENT_KEY}`,
    SHOW : `show${EVENT_KEY}`
  }

  const Selector = {
    PANEL      : '.expansion-panel',
    PANEL_BODY : '.expansion-panel .collapse'
  }
  // <<< constants

  $(document).on(`${Event.HIDE}`, Selector.PANEL_BODY, function () {
    const target = $(this).closest(Selector.PANEL)

    target.removeClass(ClassName.SHOW)

    const predecessor = target.prev(Selector.PANEL)

    if (predecessor.length) {
      predecessor.removeClass(ClassName.SHOW_PREDECESSOR)
    }
  }).on(`${Event.SHOW}`, Selector.PANEL_BODY, function () {
    const target = $(this).closest(Selector.PANEL)

    target.addClass(ClassName.SHOW)

    const predecessor = target.prev(Selector.PANEL)

    if (predecessor.length) {
      predecessor.addClass(ClassName.SHOW_PREDECESSOR)
    }
  })
})($)

export default ExpansionPanel
