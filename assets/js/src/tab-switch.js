import $ from 'jquery'
import Util from './util'

/*
 * Tab indicator animation
 * Requires Bootstrap's (v4.1.X) `tab.js`
 */

const TabSwitch = (($) => {
  // constants >>>
  const DATA_KEY    = 'md.tabswitch'
  const NAME        = 'tabswitch'
  const NO_CONFLICT = $.fn[NAME]

  const ClassName = {
    ANIMATE       : 'animate',
    DROPDOWN_ITEM : 'dropdown-item',
    INDICATOR     : 'nav-tabs-indicator',
    MATERIAL      : 'nav-tabs-material',
    SCROLLABLE    : 'nav-tabs-scrollable',
    SHOW          : 'show'
  }

  const Event = {
    SHOW_BS_TAB : 'show.bs.tab'
  }

  const Selector = {
    DATA_TOGGLE : '.nav-tabs [data-toggle="tab"]',
    DROPDOWN    : '.dropdown',
    NAV         : '.nav-tabs'
  }
  // <<< constants

  class TabSwitch {
    constructor(nav) {
      this._nav          = nav
      this._navindicator = null
    }

    switch(element, relatedTarget) {
      const navLeft            = $(this._nav).offset().left
      const navScrollLeft      = $(this._nav).scrollLeft()
      const navWidth           = $(this._nav).outerWidth()

      if (!this._navindicator) {
        this._createIndicator(navLeft, navScrollLeft, navWidth, relatedTarget)
      }

      if ($(element).hasClass(ClassName.DROPDOWN_ITEM)) {
        element = $(element).closest(Selector.DROPDOWN)
      }

      const elLeft  = $(element).offset().left
      const elWidth = $(element).outerWidth()

      $(this._navindicator).addClass(ClassName.SHOW)

      Util.reflow(this._navindicator)

      $(this._nav).addClass(ClassName.ANIMATE)

      $(this._navindicator).css({
        left  : elLeft + navScrollLeft - navLeft,
        right : navWidth - (elLeft + navScrollLeft - navLeft + elWidth)
      })

      const complete = () => {
        $(this._nav).removeClass(ClassName.ANIMATE)

        $(this._navindicator).removeClass(ClassName.SHOW)
      }

      const transitionDuration = Util.getTransitionDurationFromElement(this._navindicator)

      $(this._navindicator)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(transitionDuration)
    }

    _createIndicator(navLeft, navScrollLeft, navWidth, relatedTarget) {
      this._navindicator = document.createElement('div')

      $(this._navindicator)
        .addClass(ClassName.INDICATOR)
        .appendTo(this._nav)

      if (typeof relatedTarget !== 'undefined') {
        if ($(relatedTarget).hasClass(ClassName.DROPDOWN_ITEM)) {
          relatedTarget = $(relatedTarget).closest(Selector.DROPDOWN)
        }

        const relatedLeft  = $(relatedTarget).offset().left
        const relatedWidth = $(relatedTarget).outerWidth()

        $(this._navindicator).css({
          left  : relatedLeft + navScrollLeft - navLeft,
          right : navWidth - (relatedLeft + navScrollLeft - navLeft + relatedWidth)
        })
      }

      $(this._nav).addClass(ClassName.MATERIAL)
    }

    static _jQueryInterface(relatedTarget) {
      return this.each(function () {
        const nav = $(this).closest(Selector.NAV)[0]

        if (!nav) {
          return
        }

        let data = $(nav).data(DATA_KEY)

        if (!data) {
          data = new TabSwitch(nav)

          $(nav).data(DATA_KEY, data)
        }

        data.switch(this, relatedTarget)
      })
    }
  }

  $(document).on(Event.SHOW_BS_TAB, Selector.DATA_TOGGLE, function (event) {
    TabSwitch._jQueryInterface.call($(this), event.relatedTarget)
  })

  $.fn[NAME]             = TabSwitch._jQueryInterface
  $.fn[NAME].Constructor = TabSwitch
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT

    return TabSwitch._jQueryInterface
  }

  return TabSwitch
})($)

export default TabSwitch
