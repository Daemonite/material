import Util from './util'

/*
 * tab indicator animation
 * requires bootstrap's (v4.0.0-alpha.6) tab.js
 */

const TabSwitch = (($) => {

  // constants >>>
  const DATA_KEY            = 'md.tabswitch'
  const NAME                = 'tabswitch'
  const NO_CONFLICT         = $.fn[NAME]
  const TRANSITION_DURATION = 390

  const ClassName = {
    ANIMATE    : 'animate',
    INDICATOR  : 'nav-tabs-indicator',
    MATERIAL   : 'nav-tabs-material',
    SCROLLABLE : 'nav-tabs-scrollable',
    SHOW       : 'show'
  }

  const Event = {
    SHOW_BS_TAB : 'show.bs.tab'
  }

  const Selector = {
    DATA_TOGGLE : '.nav-tabs [data-toggle="tab"]',
    NAV         : '.nav-tabs',
    NAV_ITEM    : '.nav-item'
  }
  // <<< constants

  class TabSwitch {
    constructor(nav) {
      if (typeof $.fn.tab === 'undefined') {
        throw new Error('Material\'s JavaScript requires Bootstrap\'s tab.js')
      }

      this._nav          = nav
      this._navindicator = null
    }

    switch(element, relatedTarget) {
      const supportsTransition = Util.supportsTransitionEnd()

      if (!this._navindicator) {
        this._createIndicator()
      }

      const elLeft        = $(element).closest(Selector.NAV_ITEM).offset().left
      const elWidth       = $(element).closest(Selector.NAV_ITEM).outerWidth()
      const navLeft       = $(this._nav).offset().left
      const navScrollLeft = $(this._nav).scrollLeft()
      const navWidth      = $(this._nav).outerWidth()

      if (relatedTarget !== undefined) {
        const relatedLeft  = $(relatedTarget).closest(Selector.NAV_ITEM).offset().left
        const relatedWidth = $(relatedTarget).closest(Selector.NAV_ITEM).outerWidth()

        $(this._navindicator).css({
          left  : relatedLeft + navScrollLeft - navLeft,
          right : navWidth - (relatedLeft + navScrollLeft - navLeft + relatedWidth)
        })

        $(this._navindicator).addClass(ClassName.SHOW)
        Util.reflow(this._navindicator)

        if (supportsTransition) {
          $(this._nav).addClass(ClassName.ANIMATE)
        }
      }

      $(this._navindicator).css({
        left  : elLeft + navScrollLeft - navLeft,
        right : navWidth - (elLeft + navScrollLeft - navLeft + elWidth)
      })

      const complete = () => {
        $(this._nav).removeClass(ClassName.ANIMATE)
        $(this._navindicator).removeClass(ClassName.SHOW)
      }

      if (!supportsTransition) {
        complete()
        return
      }

      $(this._navindicator)
      .one(Util.TRANSITION_END, complete)
      .emulateTransitionEnd(TRANSITION_DURATION)
    }

    _createIndicator() {
      this._navindicator = document.createElement('div')

      $(this._navindicator)
      .addClass(ClassName.INDICATOR)
      .appendTo(this._nav)

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

  $(document).on(Event.SHOW_BS_TAB, Selector.DATA_TOGGLE, (event) => {
    TabSwitch._jQueryInterface.call($(event.target), event.relatedTarget)
  })

  $.fn[NAME]             = TabSwitch._jQueryInterface
  $.fn[NAME].Constructor = TabSwitch
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT
    return TabSwitch._jQueryInterface
  }

  return TabSwitch

})(jQuery)

export default TabSwitch
