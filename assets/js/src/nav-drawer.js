import $ from 'jquery'
import Util from './util'

/*
 * Navigation drawer plguin
 * Based on Bootstrap's (v4.6.X) `modal.js`
 */

const NavDrawer = (($) => {
  // constants >>>
  const DATA_API_KEY   = '.data-api'
  const DATA_KEY       = 'md.navdrawer'
  const ESCAPE_KEYCODE = 27
  const EVENT_KEY      = `.${DATA_KEY}`
  const NAME           = 'navdrawer'
  const NO_CONFLICT    = $.fn[NAME]
  const OPENED_KEY     = `${DATA_KEY}.openedAt`

  const ClassName = {
    BACKDROP : 'navdrawer-backdrop',
    OPEN     : 'navdrawer-open',
    SHOW     : 'show'
  }

  const Default = {
    breakpoint : '',
    keyboard   : true,
    show       : true,
    type       : 'default'
  }

  const DefaultType = {
    keyboard : 'boolean',
    show     : 'boolean',
    type     : 'string'
  }

  const Event = {
    CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`,
    CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,
    FOCUSIN           : `focusin${EVENT_KEY}`,
    HIDDEN            : `hidden${EVENT_KEY}`,
    HIDE              : `hide${EVENT_KEY}`,
    KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,
    MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,
    MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,
    RESIZE            : `resize${EVENT_KEY}`,
    SHOW              : `show${EVENT_KEY}`,
    SHOW_BS_MODAL     : 'show.bs.modal',
    SHOWN             : `shown${EVENT_KEY}`
  }

  const Selector = {
    CONTENT      : '.navdrawer-content',
    DATA_DISMISS : '[data-dismiss="navdrawer"]',
    DATA_TOGGLE  : '[data-toggle="navdrawer"]',
    DIALOG       : '.modal.show, [aria-modal="true"]:not(.navdrawer)'
  }
  // <<< constants

  // Focus management >>>
  // Open drawers, oldest first. Only the topmost drawer that is modal right now (its backdrop is
  // visible) traps focus. One shared handler does this, so stacked drawers don't fight over focus,
  // and closing one drawer doesn't remove the trap of a modal drawer still open below it.
  const openDrawers = []
  let focusTrapOwner = null
  let openCount      = 0

  // Record when each Bootstrap modal opens, to tell whether it's above or below a drawer
  $(document).on(Event.SHOW_BS_MODAL, (event) => {
    $(event.target).data(OPENED_KEY, ++openCount)
  })

  function setFocusHandlers(on) {
    $(document)[on ? 'on' : 'off'](Event.FOCUSIN, onFocusin)
    $(window)[on ? 'on' : 'off'](Event.RESIZE, onResize)
  }

  function topModalDrawer() {
    for (let i = openDrawers.length - 1; i >= 0; i--) {
      // A drawer detached from the page is skipped, not forgotten, so it traps focus again if it's
      // reinserted
      if ($.contains(document.documentElement, openDrawers[i]._element) && openDrawers[i]._isModal()) {
        return openDrawers[i]
      }
    }

    return null
  }

  // Whether `dialog` (an open Bootstrap modal or aria-modal dialog) was opened over `drawer`. A dialog
  // that opened before the drawer, or contains it, is below it.
  function isAbove(dialog, drawer) {
    if ($.contains(dialog, drawer._element)) {
      return false
    }

    const openedAt = $(dialog).data(OPENED_KEY)

    return openedAt ? openedAt > drawer._openedAt : drawer._dialogsBelow.indexOf(dialog) === -1
  }

  // Whether focus on `element` should be pulled into `drawer`. A dialog opened over the drawer keeps
  // its own focus.
  function isOutside(drawer, element) {
    const dialog = $(element).closest(Selector.DIALOG)[0]

    return element !== document &&
      element !== drawer._element &&
      !$.contains(drawer._element, element) &&
      !(dialog && isAbove(dialog, drawer))
  }

  function onFocusin(event) {
    const drawer = topModalDrawer()

    if (drawer && isOutside(drawer, event.target)) {
      drawer._element.focus()
    }
  }

  // Resizing across a breakpoint can make an open drawer modal. When that happens, pull focus in
  // from the page behind it.
  function onResize() {
    const drawer = topModalDrawer()

    if (drawer && drawer !== focusTrapOwner && isOutside(drawer, document.activeElement)) {
      drawer._element.focus()
    }

    focusTrapOwner = drawer
  }

  function addOpenDrawer(drawer) {
    if (openDrawers.length === 0) {
      setFocusHandlers(true)
    }

    drawer._openedAt     = ++openCount
    drawer._dialogsBelow = $(Selector.DIALOG).toArray()

    openDrawers.push(drawer)
    focusTrapOwner = topModalDrawer()
  }

  function removeOpenDrawer(drawer) {
    const index = openDrawers.indexOf(drawer)

    if (index > -1) {
      openDrawers.splice(index, 1)
    }

    if (openDrawers.length === 0) {
      setFocusHandlers(false)
    }

    focusTrapOwner = topModalDrawer()
  }
  // <<< focus management

  class NavDrawer {
    constructor(element, config) {
      this._backdrop            = null
      this._config              = this._getConfig(config)
      this._content             = $(element).find(Selector.CONTENT)[0]
      this._element             = element
      this._ignoreBackdropClick = false
      this._isShown             = false
      this._typeBreakpoint      = this._config.breakpoint === '' ? '' : `-${this._config.breakpoint}`
    }

    hide(event) {
      if (event) {
        event.preventDefault()
      }

      if (this._isTransitioning || !this._isShown) {
        return
      }

      const hideEvent = $.Event(Event.HIDE)

      $(this._element).trigger(hideEvent)

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = false

      this._isTransitioning = true

      this._setEscapeEvent()

      removeOpenDrawer(this)

      $(document.body).removeClass(`${ClassName.OPEN}-${this._config.type}${this._typeBreakpoint}`)

      $(this._element).removeClass(ClassName.SHOW)

      $(this._element).off(Event.CLICK_DISMISS)

      $(this._content).off(Event.MOUSEDOWN_DISMISS)

      const transitionDuration = Util.getTransitionDurationFromElement(this._content)

      $(this._content).one(Util.TRANSITION_END, (event) => this._hideNavdrawer(event))

      Util.emulateTransitionEnd(this._content, transitionDuration)

      this._showBackdrop()
    }

    show(relatedTarget) {
      if (this._isTransitioning || this._isShown) {
        return
      }

      // Guards against a `show` handler re-entering `show()`
      this._isTransitioning = true

      const showEvent = $.Event(Event.SHOW, {
        relatedTarget
      })

      $(this._element).trigger(showEvent)

      if (this._isShown || showEvent.isDefaultPrevented()) {
        // Reset, or a prevented `show` leaves the drawer unable to open again
        this._isTransitioning = false

        return
      }

      this._isShown = true

      this._setEscapeEvent()

      $(this._element).addClass(`${NAME}-${this._config.type}${this._typeBreakpoint}`)

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, (event) => this.hide(event))

      $(this._content).on(Event.MOUSEDOWN_DISMISS, () => {
        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {
          if ($(event.target).is(this._element)) {
            this._ignoreBackdropClick = true
          }
        })
      })

      this._showBackdrop()
      this._showElement(relatedTarget)
    }

    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    }

    // Above their breakpoint, permanent, persistent and temporary drawers hide the backdrop and sit
    // beside the page content, so they mustn't trap focus
    _isModal() {
      return Boolean(this._backdrop) && $(this._backdrop).css('display') !== 'none'
    }

    _getConfig(config) {
      config = {
        ...Default,
        ...config
      }

      Util.typeCheckConfig(NAME, config, DefaultType)

      return config
    }

    _hideNavdrawer() {
      // `display: none` already hides the drawer from assistive technology. Don't add
      // `aria-hidden`: a permanent drawer (`.navdrawer-permanent-{breakpoint}`) is forced visible
      // by CSS above its breakpoint, where `aria-hidden` would hide it from screen readers.
      this._element.style.display = 'none'

      this._isTransitioning = false

      $(this._element).trigger(Event.HIDDEN)
    }

    _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove()
        this._backdrop = null
      }
    }

    _setEscapeEvent() {
      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault()

            this.hide()
          }
        })
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS)
      }
    }

    _showBackdrop() {
      if (this._isShown) {
        this._backdrop = document.createElement('div')

        $(this._backdrop)
          .addClass(ClassName.BACKDROP)
          .addClass(`${ClassName.BACKDROP}-${this._config.type}${this._typeBreakpoint}`)
          .appendTo(document.body)

        $(this._element).on(Event.CLICK_DISMISS, (event) => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false

            return
          }

          if (event.target !== event.currentTarget) {
            return
          }

          this.hide()
        })

        Util.reflow(this._backdrop)

        $(this._backdrop).addClass(ClassName.SHOW)
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW)

        this._removeBackdrop()
      }
    }

    _showElement(relatedTarget) {
      if (!this._element.parentNode ||
          this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        document.body.appendChild(this._element)
      }

      this._element.style.display = 'block'

      this._element.removeAttribute('aria-hidden')

      Util.reflow(this._element)

      $(document.body).addClass(`${ClassName.OPEN}-${this._config.type}${this._typeBreakpoint}`)

      $(this._element).addClass(ClassName.SHOW)

      addOpenDrawer(this)

      const shownEvent = $.Event(Event.SHOWN, {
        relatedTarget
      })

      const transitionComplete = () => {
        this._element.focus()

        this._isTransitioning = false

        $(this._element).trigger(shownEvent)
      }

      const transitionDuration = Util.getTransitionDurationFromElement(this._content)

      $(this._content).one(Util.TRANSITION_END, transitionComplete)

      Util.emulateTransitionEnd(this._content, transitionDuration)
    }

    static get Default() {
      return Default
    }

    static _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const _config = {
          ...Default,
          ...$(this).data(),
          ...typeof config === 'object' && config ? config : {}
        }

        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new NavDrawer(this, _config)

          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }

          data[config](relatedTarget)
        } else if (_config.show) {
          data.show(relatedTarget)
        }
      })
    }
  }

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    const selector = Util.getSelectorFromElement(this)

    let target

    if (selector) {
      target = $(selector)[0]
    }

    const config = $(target).data(DATA_KEY) ? 'toggle' : {
      ...$(target).data(),
      ...$(this).data()
    }

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault()
    }

    const $target = $(target).one(Event.SHOW, (showEvent) => {
      if (showEvent.isDefaultPrevented()) {
        return
      }

      $target.one(Event.HIDDEN, () => {
        if ($(this).is(':visible')) {
          this.focus()
        }
      })
    })

    NavDrawer._jQueryInterface.call($(target), config, this)
  })

  $.fn[NAME]             = NavDrawer._jQueryInterface
  $.fn[NAME].Constructor = NavDrawer
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT

    return NavDrawer._jQueryInterface
  }

  return NavDrawer
})($)

export default NavDrawer
