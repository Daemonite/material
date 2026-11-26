import $ from 'jquery'

/*
 * Global util js
 * Based on Bootstrap's (v4.6.X) `util.js`
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
    // Bootstrap's `util.js` defines an equivalent `$.fn.emulateTransitionEnd`. Don't replace it:
    // Material's plugins call `Util.emulateTransitionEnd()` instead.
    if (!$.fn.emulateTransitionEnd) {
      $.fn.emulateTransitionEnd = transitionEndEmulator
    }

    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
  }

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return `${obj}`
    }

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

    emulateTransitionEnd(element, duration) {
      return transitionEndEmulator.call(element, duration)
    },

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')

      if (!selector || selector === '#') {
        const hrefAttr = element.getAttribute('href')

        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : ''
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
      let transitionDelay    = $(element).css('transition-delay')

      const floatTransitionDuration = parseFloat(transitionDuration)
      const floatTransitionDelay    = parseFloat(transitionDelay)

      // Return 0 if the element has no transition duration or delay
      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0
      }

      // If multiple durations are defined, take the first
      transitionDuration = transitionDuration.split(',')[0]
      transitionDelay    = transitionDelay.split(',')[0]

      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
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
