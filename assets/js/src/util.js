import $ from 'jquery'

/*
 * Global util js
 * Based on Bootstrap's (v4.1.X) `util.js`
 */

const Util = (($) => {
  const MAX_UID                 = 1000000
  const MILLISECONDS_MULTIPLIER = 1000
  const TRANSITION_END          = 'transitionend'

  function getSpecialTransitionEndEvent() {
    return {
      bindType     : TRANSITION_END,
      delegateType : TRANSITION_END,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
        }
        return undefined // eslint-disable-line no-undefined
      }
    }
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
  }

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()
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

  const Util = {

    TRANSITION_END: 'mdTransitionEnd',

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || ''
      }

      try {
        const $selector = $(document).find(selector)

        return $selector.length > 0 ? selector : null
      } catch (err) {
        return null
      }
    },

    getTransitionDurationFromElement(element) {
      if (!element) {
        return 0
      }

      let transitionDuration = $(element).css('transition-duration')

      if (!transitionDuration) {
        return 0
      }

      transitionDuration = transitionDuration.split(',')[0]

      return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER
    },

    getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID)
      } while (document.getElementById(prefix))
      return prefix
    },

    isElement(obj) {
      return (obj[0] || obj).nodeType
    },

    reflow(element) {
      return element.offsetHeight
    },

    supportsTransitionEnd() {
      return Boolean(TRANSITION_END)
    },

    triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END)
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (const property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          const expectedTypes = configTypes[property]
          const value         = config[property]
          const valueType     = value && Util.isElement(value) ? 'element' : toType(value)

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
})($)

export default Util
