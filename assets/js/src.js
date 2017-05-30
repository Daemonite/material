/*!
 * floating label:
 * when a user engages with the text input field,
 * the floating inline labels move to float above the field
 */
const FloatingLabel = (($) => {
  // constants >>>
    const DATA_API_KEY = '.data-api';
    const DATA_KEY     = 'md.floatinglabel';
    const EVENT_KEY    = `.${DATA_KEY}`;
    const NAME         = 'floatinglabel';
    const NO_CONFLICT  = $.fn[NAME];

    const ClassName = {
      IS_FOCUSED : 'is-focused',
      HAS_VALUE  : 'has-value'
    };

    const Event = {
      CHANGE   : `change${EVENT_KEY}`,
      FOCUSIN  : `focusin${EVENT_KEY}`,
      FOCUSOUT : `focusout${EVENT_KEY}`
    };

    const Selector = {
      DATA_PARENT : '.floating-label',
      DATA_TOGGLE : '.floating-label .form-control'
    };
  // <<< constants

  class FloatingLabel {
    constructor(element) {
      this._element = element;
    }

    change(relatedTarget) {
      if ($(this._element).val() ||
        ($(this._element).is('select') && 
          $('option:first-child', $(this._element)).html().replace(' ', '') !== '')) {
        $(relatedTarget).addClass(ClassName.HAS_VALUE);
      } else {
        $(relatedTarget).removeClass(ClassName.HAS_VALUE);
      }
    }

    focusin(relatedTarget) {
      $(relatedTarget).addClass(ClassName.IS_FOCUSED);
    }

    focusout(relatedTarget) {
      $(relatedTarget).removeClass(ClassName.IS_FOCUSED);
    }

    static _jQueryInterface(event) {
      return this.each(function () {
        let data           = $(this).data(DATA_KEY);
        let _event         = event ? event : 'change';

        if (!data) {
          data = new FloatingLabel(this);
          $(this).data(DATA_KEY, data);
        }

        if (typeof _event === 'string') {
          if (data[_event] === undefined) {
            throw new Error(`No method named "${_event}"`);
          }

          data[_event]($(this).closest(Selector.DATA_PARENT));
        }
      });
    }
  }

  $(document).on(`${Event.CHANGE} ${Event.FOCUSIN} ${Event.FOCUSOUT}`,
    Selector.DATA_TOGGLE,
    function (event) {
    let data          = $(this).data(DATA_KEY);

    FloatingLabel._jQueryInterface.call($(this), event.type);
  });

  $.fn[NAME]             = FloatingLabel._jQueryInterface;
  $.fn[NAME].Constructor = FloatingLabel;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT;
    return FloatingLabel._jQueryInterface;
  };

  return FloatingLabel;
})(jQuery);

/*!
 * navigation drawer
 * based on bootstrap's (v4.0.0-alpha.6) modal.js
 */
const NavDrawer = (($) => {
  // constants >>>
    const DATA_API_KEY                 = '.data-api';
    const DATA_KEY                     = 'md.navdrawer';
    const EVENT_KEY                    = `.${DATA_KEY}`;
    const NAME                         = 'navdrawer';
    const NO_CONFLICT                  = $.fn[NAME];
    const TRANSITION_DURATION          = 375;
    const TRANSITION_DURATION_BACKDROP = 225;

    const ClassName = {
      BACKDROP : 'navdrawer-backdrop',
      OPEN     : 'navdrawer-open',
      SHOW     : 'show'
    };

    const Default = {
      breakpoint : 1280,
      keyboard   : true,
      show       : true,
      type       : 'default'
    };

    const DefaultType = {
      keyboard : 'boolean',
      show     : 'boolean',
      type     : 'string'
    };

    const Event = {
      CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`,
      CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,
      FOCUSIN           : `focusin${EVENT_KEY}`,
      HIDDEN            : `hidden${EVENT_KEY}`,
      HIDE              : `hide${EVENT_KEY}`,
      KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,
      MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,
      MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,
      SHOW              : `show${EVENT_KEY}`,
      SHOWN             : `shown${EVENT_KEY}`
    };

    const Selector = {
      CONTENT      : '.navdrawer-content',
      DATA_DISMISS : '[data-dismiss="navdrawer"]',
      DATA_TOGGLE  : '[data-toggle="navdrawer"]'
    };
  // <<< constants

  class NavDrawer {
    constructor(element, config) {
      this._backdrop            = null;
      this._config              = this._getConfig(config);
      this._content             = $(element).find(Selector.CONTENT)[0];
      this._element             = element;
      this._ignoreBackdropClick = false;
      this._isShown             = false;
    }

    hide(event) {
      if (event) {
        event.preventDefault();
      }

      let hideClassName = `${ClassName.OPEN}-${this._config.type}`;
      let hideEvent     = $.Event(Event.HIDE);

      $(this._element).trigger(hideEvent);

      if (!this._isShown ||
        hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      this._setEscapeEvent();
      $(document).off(Event.FOCUSIN);
      $(this._content).off(Event.MOUSEDOWN_DISMISS);

      $(this._element)
        .off(Event.CLICK_DISMISS)
        .removeClass(ClassName.SHOW);

      if (Util.supportsTransitionEnd()) {
        $(this._element)
          .one(Util.TRANSITION_END, $.proxy(this._hideNavdrawer, this, hideClassName))
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideNavdrawer();
      }
    }

    show(relatedTarget) {
      let showEvent = $.Event(Event.SHOW, {
        relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown ||
        showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;
      $(document.body).addClass(`${ClassName.OPEN}-${this._config.type}`);
      this._setEscapeEvent();
      $(this._element).addClass(`${NAME}-${this._config.type}`);
      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

      $(this._content).on(Event.MOUSEDOWN_DISMISS, () => {
        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {
          if ($(event.target).is(this._element)) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
    }

    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    _enforceFocus() {
      $(document)
        .off(Event.FOCUSIN)
        .on(Event.FOCUSIN, (event) => {
        if ((this._config.type === 'default') ||
          ($(window).width() <= this._config.breakpoint)) {
          if (this._element !== event.target &&
            (!$(this._element).has(event.target).length)) {
            this._element.focus();
          }
        }
      });
    }

    _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    }

    _hideNavdrawer(className) {
      this._element.style.display = 'none';

      this._showBackdrop(() => {
        $(document.body).removeClass(className);
        $(this._element).trigger(Event.HIDDEN);
      });
    }

    _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null
      }
    }

    _setEscapeEvent() {
      if (this._isShown &&
        this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          if (event.which === 27) {
            this.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    }

    _showBackdrop(callback) {
      let supportsTransition = Util.supportsTransitionEnd();

      if (this._isShown) {
        this._backdrop = document.createElement('div');

        $(this._backdrop)
          .addClass(ClassName.BACKDROP)
          .addClass(`${ClassName.BACKDROP}-${this._config.type}`)
          .appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, (event) => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          this.hide();
        });

        if (supportsTransition) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!supportsTransition) {
          callback();
          return;
        }

        $(this._backdrop)
          .one(Util.TRANSITION_END, callback)
          .emulateTransitionEnd(TRANSITION_DURATION_BACKDROP);
      } else if (this._backdrop && !this._isShown) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        let callbackRemove = () => {
          this._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (supportsTransition) {
          $(this._backdrop)
            .one(Util.TRANSITION_END, callbackRemove)
            .emulateTransitionEnd(TRANSITION_DURATION_BACKDROP);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }

    _showElement(relatedTarget) {
      let supportsTransition = Util.supportsTransitionEnd();

      if (!this._element.parentNode ||
        (this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      if (supportsTransition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);
      this._enforceFocus();

      let shownEvent = $.Event(Event.SHOWN, {
        relatedTarget
      });

      let transitionComplete = () => {
        this._element.focus();
        $(this._element).trigger(shownEvent);
      };

      if (supportsTransition) {
        $(this._content)
          .one(Util.TRANSITION_END, transitionComplete)
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    }

    static get Default() {
      return Default;
    }

    static _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY);
        let _config = $.extend(
          {},
          NavDrawer.Default,
          $(this).data(),
          typeof config === 'object' && config
        );

        if (!data) {
          data = new NavDrawer(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`);
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    }
  }

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    let selector = Util.getSelectorFromElement(this);
    let target;

    if (selector) {
      target = $(selector)[0];
    }

    let config = $(target).data(DATA_KEY) ? 'toggle' : $.extend(
      {},
      $(target).data(),
      $(this).data()
    );

    if (this.tagName === 'A') {
      event.preventDefault();
    }

    let $target = $(target).one(Event.SHOW, (showEvent) => {
      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $target.one(Event.HIDDEN, () => {
        if ($(this).is(':visible')) {
          this.focus();
        }
      });
    });

    NavDrawer._jQueryInterface.call($(target), config, this);
  });

  $.fn[NAME]             = NavDrawer._jQueryInterface;
  $.fn[NAME].Constructor = NavDrawer;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT;
    return NavDrawer._jQueryInterface;
  };

  return NavDrawer;
})(jQuery);

/*!
 * tab indicator animation
 * requires bootstrap's (v4.0.0-alpha.6) tab.js
 */
const TabSwitch = (($) => {
  // constants >>>
    const DATA_KEY            = 'md.tabswitch';
    const NAME                = 'tabswitch';
    const NO_CONFLICT         = $.fn[NAME];
    const TRANSITION_DURATION = 300;

    const ClassName = {
      ANIMATE    : 'animate',
      INDICATOR  : 'nav-tabs-indicator',
      MATERIAL   : 'nav-tabs-material',
      SCROLLABLE : 'nav-tabs-scrollable',
      SHOW       : 'show'
    };

    const Event = {
      SHOW_BS_TAB : 'show.bs.tab'
    };

    const Selector = {
      DATA_TOGGLE : '.nav-tabs [data-toggle="tab"]',
      NAV         : '.nav-tabs',
      NAV_ITEM    : '.nav-item'
    };
  // <<< constants

  class TabSwitch {
    constructor(nav) {
      if (typeof $.fn.tab === 'undefined') {
        throw new Error('Material\'s JavaScript requires Bootstrap\'s tab.js');
      };

      this._nav          = nav;
      this._navindicator = null;
    }

    switch(element, relatedTarget) {
      let supportsTransition = Util.supportsTransitionEnd();

      if (!this._navindicator) {
        this._createIndicator();
      }

      let elLeft        = $(element).closest(Selector.NAV_ITEM).offset().left;
      let elWidth       = $(element).closest(Selector.NAV_ITEM).outerWidth();
      let navLeft       = $(this._nav).offset().left;
      let navScrollLeft = $(this._nav).scrollLeft();
      let navWidth      = $(this._nav).outerWidth();

      if (relatedTarget !== undefined) {
        let relatedLeft  = $(relatedTarget).closest(Selector.NAV_ITEM).offset().left;
        let relatedWidth = $(relatedTarget).closest(Selector.NAV_ITEM).outerWidth();

        $(this._navindicator).css({
          left  : ((relatedLeft + navScrollLeft) - navLeft),
          right : (navWidth - ((relatedLeft + navScrollLeft) - navLeft + relatedWidth))
        });

        $(this._navindicator).addClass(ClassName.SHOW);
        Util.reflow(this._navindicator);

        if (supportsTransition) {
          $(this._nav).addClass(ClassName.ANIMATE);
        }
      }

      $(this._navindicator).css({
        left  : ((elLeft + navScrollLeft) - navLeft),
        right : (navWidth - ((elLeft + navScrollLeft) - navLeft + elWidth))
      });

      let complete = () => {
        $(this._nav).removeClass(ClassName.ANIMATE);
        $(this._navindicator).removeClass(ClassName.SHOW);
      }

      if (!supportsTransition) {
        complete();
        return;
      }

      $(this._navindicator)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);
    }

    _createIndicator() {
      this._navindicator = document.createElement('div');

      $(this._navindicator)
        .addClass(ClassName.INDICATOR)
        .appendTo(this._nav);

      $(this._nav).addClass(ClassName.MATERIAL);
    }

    static _jQueryInterface(relatedTarget) {
      return this.each(function () {
        let nav = $(this).closest(Selector.NAV)[0];

        if (!nav) {
          return;
        }

        let data = $(nav).data(DATA_KEY);

        if (!data) {
          data = new TabSwitch(nav);
          $(nav).data(DATA_KEY, data);
        }

        data.switch(this, relatedTarget);
      });
    }
  }

  $(document).on(Event.SHOW_BS_TAB, Selector.DATA_TOGGLE, function (event) {
    TabSwitch._jQueryInterface.call($(event.target), event.relatedTarget);
  });

  $.fn[NAME]             = TabSwitch._jQueryInterface;
  $.fn[NAME].Constructor = TabSwitch;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT;
    return TabSwitch._jQueryInterface;
  };

  return TabSwitch;
})(jQuery);

/*!
 * global util js
 * based on bootstrap's (v4.0.0-alpha.6) util.js
 */
const Util = (($) => {
  let transition = false;

  const TransitionEndEvent = {
    WebkitTransition : 'webkitTransitionEnd',
    MozTransition    : 'transitionend',
    OTransition      : 'oTransitionEnd otransitionend',
    transition       : 'transitionend'
  };

  function getSpecialTransitionEndEvent() {
    return {
      bindType     : transition.end,
      delegateType : transition.end,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
        return undefined;
      }
    };
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function transitionEndEmulator(duration) {
    let called = false;

    $(this).one(Util.TRANSITION_END, () => {
      called = true;
    });

    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this);
      }
    }, duration);

    return this;
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    let el = document.createElement('material');

    for (let name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] };
      }
    };

    return false;
  }

  let Util = {
    TRANSITION_END: 'mdTransitionEnd',

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },

    getUID(prefix) {
      do {
        prefix += ~~(Math.random() * 1000000);
      } while (document.getElementById(prefix))
      return prefix;
    },

    reflow(element) {
      new Function('md', 'return md')(element.offsetHeight);
    },

    supportsTransitionEnd() {
      return Boolean(transition);
    },

    triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (let property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          let expectedTypes = configTypes[property];
          let value         = config[property];
          let valueType;

          if (value && isElement(value)) {
            valueType = 'element';
          } else {
            valueType = toType(value);
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`);
          }
        }
      };
    }
  }

  setTransitionEndSupport();

  return Util;
})(jQuery);
