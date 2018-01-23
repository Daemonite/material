import $ from 'jquery'

/*
 * global util js
 * based on bootstrap's (v4.0.0-beta) util.js
 */

const Util = (($) => {

  const MAX_UID  = 1000000
  let transition = false

  function getSpecialTransitionEndEvent() {
    return {
      bindType     : transition.end,
      delegateType : transition.end,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
        }
        return undefined // eslint-disable-line no-undefined
      }
    }
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest()

    $.fn.emulateTransitionEnd = transitionEndEmulator

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
    }
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

  function transitionEndTest() {
    if (window.QUnit) {
      return false
    }

    return {
      end: 'transitionend'
    }
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
      return Boolean(transition)
    },

    triggerTransitionEnd(element) {
      $(element).trigger(transition.end)
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
