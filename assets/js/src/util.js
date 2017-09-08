/*
 * global util js
 * based on bootstrap's (v4.0.0-beta) util.js
 */

const Util = (($) => {

  const MAX_UID  = 1000000
  let transition = false

  const TransitionEndEvent = {
    WebkitTransition : 'webkitTransitionEnd',
    MozTransition    : 'transitionend',
    OTransition      : 'oTransitionEnd otransitionend',
    transition       : 'transitionend'
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType     : transition.end,
      delegateType : transition.end,
      handle(event) {
        if ($(event.target).is(this)) {
          // eslint-disable-next-line prefer-rest-params
          return event.handleObj.handler.apply(this, arguments)
        }
        return undefined
      }
    }
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest()

    $.fn.emulateTransitionEnd = transitionEndEmulator

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
    }
  }

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function transitionEndEmulator(duration) {
    let called = false

    $(this).one(Util.TRANSITION_END, () => {
      called = true
    })

    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this)
      }
    }, duration)

    return this
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false
    }

    const el = document.createElement('material')

    for (const name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return {
          end: TransitionEndEvent[name]
        }
      }
    }

    return false
  }

  const Util = {
    TRANSITION_END: 'mdTransitionEnd',

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')

      if (!selector) {
        selector = element.getAttribute('href') || ''
        selector = /^#[a-z]/i.test(selector) ? selector : null
      }

      return selector
    },

    getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID)
      } while (document.getElementById(prefix))
      return prefix
    },

    reflow(element) {
      new Function('md', 'return md')(element.offsetHeight)
    },

    supportsTransitionEnd() {
      return Boolean(transition)
    },

    triggerTransitionEnd(element) {
      $(element).trigger(transition.end)
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (const property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          const expectedTypes = configTypes[property]
          const value         = config[property]
          const valueType     = value && isElement(value) ? 'element' : toType(value)

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  setTransitionEndSupport()

  return Util

})(jQuery)

export default Util
