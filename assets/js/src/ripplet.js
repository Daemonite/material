import ripplet,
{
  defaultOptions
} from 'ripplet.js'

/*
 * Config for ripplet.js by luncheon
 */

// Values from https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/_variables.scss

const Ripplet = (() => {
  /* eslint complexity: ["error", 40] */
  addEventListener('pointerdown', (event) => {
    defaultOptions.color = 'rgba(0,0,0,0.12)'
    defaultOptions.opacity = 1
    defaultOptions.spreadingDelay = '15ms'
    defaultOptions.spreadingDuration = '175ms'
    defaultOptions.clearingDelay = '300ms'
    defaultOptions.clearingDuration = '150ms'
    defaultOptions.clearingTimingFunction = 'linear'

    if (event.button !== 0) {
      return
    }
    const currentTarget = event.target.closest('.btn, .card-link, .card-primary-action, .list-group-item-action, [data-ripplet]')
    if (!currentTarget || currentTarget.disabled) {
      return
    }

    const rippleTarget = {
      currentTarget,
      clientX: event.clientX,
      clientY: event.clientY
    }

    currentTarget.setAttribute('data-ripplet', '')
    const cls = currentTarget.classList

    if (
      cls.contains('btn-outline-primary') ||
      cls.contains('btn-outline-secondary') ||
      cls.contains('btn-outline-danger') ||
      cls.contains('btn-outline-info') ||
      cls.contains('btn-outline-success') ||
      cls.contains('btn-outline-warning') ||
      cls.contains('btn-outline-dark') ||
      cls.contains('btn-outline-light') ||
      cls.contains('btn-link') ||
      cls.contains('card-link') ||
      cls.contains('btn-flat-primary') ||
      cls.contains('btn-flat-secondary') ||
      cls.contains('btn-flat-danger') ||
      cls.contains('btn-flat-info') ||
      cls.contains('btn-flat-success') ||
      cls.contains('btn-flat-warning') ||
      cls.contains('btn-flat-dark') ||
      cls.contains('btn-flat-light')
    ) {
      ripplet(rippleTarget, {
        color: getComputedStyle(currentTarget).color,
        opacity: 0.12
      })
    } else if (
      cls.contains('btn-primary') ||
      cls.contains('btn-secondary') ||
      cls.contains('btn-success') ||
      cls.contains('btn-danger') ||
      cls.contains('btn-warning') ||
      cls.contains('btn-info') ||
      cls.contains('btn-dark')
    ) {
      ripplet(rippleTarget, {
        color: 'rgba(255,255,255,0.24)'
      })
    } else {
      ripplet(rippleTarget)
    }
  })
})()

export default Ripplet
