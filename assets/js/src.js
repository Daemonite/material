/*!
 * Material
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Material\'s JavaScript requires jQuery')
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Material\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
}(jQuery);

+function ($) {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * floating label:
 * when a user engages with the text input field,
 * the floating inline labels move to float above the field
 */
var FloatingLabel = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.floatinglabel';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'floatinglabel';
  var NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    IS_FOCUSED: 'is-focused',
    HAS_VALUE: 'has-value'
  };

  var Event = {
    CHANGE: 'change' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY
  };

  var Selector = {
    DATA_PARENT: '.floating-label',
    DATA_TOGGLE: '.floating-label .form-control'
  };
  // <<< constants

  var FloatingLabel = function () {
    function FloatingLabel(element) {
      _classCallCheck(this, FloatingLabel);

      this._element = element;
    }

    _createClass(FloatingLabel, [{
      key: 'change',
      value: function change(relatedTarget) {
        if ($(this._element).val() || $(this._element).is('select') && $('option:first-child', $(this._element)).html().replace(' ', '') !== '') {
          $(relatedTarget).addClass(ClassName.HAS_VALUE);
        } else {
          $(relatedTarget).removeClass(ClassName.HAS_VALUE);
        }
      }
    }, {
      key: 'focusin',
      value: function focusin(relatedTarget) {
        $(relatedTarget).addClass(ClassName.IS_FOCUSED);
      }
    }, {
      key: 'focusout',
      value: function focusout(relatedTarget) {
        $(relatedTarget).removeClass(ClassName.IS_FOCUSED);
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(event) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _event = event ? event : 'change';

          if (!data) {
            data = new FloatingLabel(this);
            $(this).data(DATA_KEY, data);
          }

          if (typeof _event === 'string') {
            if (data[_event] === undefined) {
              throw new Error('No method named "' + _event + '"');
            }

            data[_event]($(this).closest(Selector.DATA_PARENT));
          }
        });
      }
    }]);

    return FloatingLabel;
  }();

  $(document).on(Event.CHANGE + ' ' + Event.FOCUSIN + ' ' + Event.FOCUSOUT, Selector.DATA_TOGGLE, function (event) {
    var data = $(this).data(DATA_KEY);

    FloatingLabel._jQueryInterface.call($(this), event.type);
  });

  $.fn[NAME] = FloatingLabel._jQueryInterface;
  $.fn[NAME].Constructor = FloatingLabel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return FloatingLabel._jQueryInterface;
  };

  return FloatingLabel;
}(jQuery);

/*!
 * navigation drawer
 * based on bootstrap's (v4.0.0-alpha.6) modal.js
 */
var NavDrawer = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.navdrawer';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'navdrawer';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 292.5;
  var TRANSITION_DURATION_BACKDROP = 487.5;

  var ClassName = {
    BACKDROP: 'navdrawer-backdrop',
    OPEN: 'navdrawer-open',
    SHOW: 'show'
  };

  var Default = {
    breakpoint: 1280,
    keyboard: true,
    show: true,
    type: 'default'
  };

  var DefaultType = {
    keyboard: 'boolean',
    show: 'boolean',
    type: 'string'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY
  };

  var Selector = {
    CONTENT: '.navdrawer-content',
    DATA_DISMISS: '[data-dismiss="navdrawer"]',
    DATA_TOGGLE: '[data-toggle="navdrawer"]'
  };
  // <<< constants

  var NavDrawer = function () {
    function NavDrawer(element, config) {
      _classCallCheck(this, NavDrawer);

      this._backdrop = null;
      this._config = this._getConfig(config);
      this._content = $(element).find(Selector.CONTENT)[0];
      this._element = element;
      this._ignoreBackdropClick = false;
      this._isShown = false;
    }

    _createClass(NavDrawer, [{
      key: 'hide',
      value: function hide(event) {
        if (event) {
          event.preventDefault();
        }

        var hideClassName = ClassName.OPEN + '-' + this._config.type;
        var hideEvent = $.Event(Event.HIDE);

        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        this._setEscapeEvent();
        $(document).off(Event.FOCUSIN);
        $(this._content).off(Event.MOUSEDOWN_DISMISS);

        $(this._element).off(Event.CLICK_DISMISS).removeClass(ClassName.SHOW);

        this._hideNavdrawer(hideClassName);
      }
    }, {
      key: 'show',
      value: function show(relatedTarget) {
        var _this = this;

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });

        $(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;
        $(document.body).addClass(ClassName.OPEN + '-' + this._config.type);
        this._setEscapeEvent();
        $(this._element).addClass(NAME + '-' + this._config.type);
        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

        $(this._content).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop();
        this._showElement(relatedTarget);
      }
    }, {
      key: 'toggle',
      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: '_enforceFocus',
      value: function _enforceFocus() {
        var _this2 = this;

        $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function (event) {
          if (_this2._config.type === 'default' || $(window).width() <= _this2._config.breakpoint) {
            if (_this2._element !== event.target && !$(_this2._element).has(event.target).length) {
              _this2._element.focus();
            }
          }
        });
      }
    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_hideNavdrawer',
      value: function _hideNavdrawer(className) {
        var _this3 = this;

        this._showBackdrop(function () {
          $(document.body).removeClass(className);

          _this3._element.setAttribute('aria-hidden', 'true');
          _this3._element.style.display = 'none';

          $(_this3._element).trigger(Event.HIDDEN);
        });
      }
    }, {
      key: '_removeBackdrop',
      value: function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this4 = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this4.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      }
    }, {
      key: '_showBackdrop',
      value: function _showBackdrop(callback) {
        var _this5 = this;

        var supportsTransition = Util.supportsTransitionEnd();

        if (this._isShown) {
          this._backdrop = document.createElement('div');

          $(this._backdrop).addClass(ClassName.BACKDROP).addClass(ClassName.BACKDROP + '-' + this._config.type).appendTo(document.body);

          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this5._ignoreBackdropClick) {
              _this5._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            _this5.hide();
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

          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(TRANSITION_DURATION_BACKDROP);
        } else if (this._backdrop && !this._isShown) {
          $(this._backdrop).removeClass(ClassName.SHOW);

          var callbackRemove = function callbackRemove() {
            _this5._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if (supportsTransition) {
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(TRANSITION_DURATION_BACKDROP);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }
    }, {
      key: '_showElement',
      value: function _showElement(relatedTarget) {
        var _this6 = this;

        var supportsTransition = Util.supportsTransitionEnd();

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          document.body.appendChild(this._element);
        }

        this._element.removeAttribute('aria-hidden');
        this._element.style.display = 'block';

        if (supportsTransition) {
          Util.reflow(this._element);
        }

        $(this._element).addClass(ClassName.SHOW);
        this._enforceFocus();

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          _this6._element.focus();
          $(_this6._element).trigger(shownEvent);
        };

        if (supportsTransition) {
          $(this._content).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, NavDrawer.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data) {
            data = new NavDrawer(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return NavDrawer;
  }();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this7 = this;

    var selector = Util.getSelectorFromElement(this);
    var target = void 0;

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this7).is(':visible')) {
          _this7.focus();
        }
      });
    });

    NavDrawer._jQueryInterface.call($(target), config, this);
  });

  $.fn[NAME] = NavDrawer._jQueryInterface;
  $.fn[NAME].Constructor = NavDrawer;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return NavDrawer._jQueryInterface;
  };

  return NavDrawer;
}(jQuery);

/*!
 * selection control focus:
 * chrome persists the focus style on checkboxes/radio buttons
 * after clicking with the mouse
 */
var ControlFocus = function ($) {
  // constants >>>
  var DATA_KEY = 'md.controlfocus';
  var EVENT_KEY = '.' + DATA_KEY;

  var ClassName = {
    FOCUS: 'focus'
  };

  var LastInteraction = {
    IS_MOUSEDOWN: false
  };

  var Event = {
    BLUR: 'blur' + EVENT_KEY,
    FOCUS: 'focus' + EVENT_KEY,
    MOUSEDOWN: 'mousedown' + EVENT_KEY,
    MOUSEUP: 'mouseup' + EVENT_KEY
  };

  var Selector = {
    CONTROL: '.custom-control',
    INPUT: '.custom-control-input'
  };
  // <<< constants

  $(document).on('' + Event.BLUR, Selector.INPUT, function (event) {
    $(event.target).removeClass(ClassName.FOCUS);
  }).on('' + Event.FOCUS, Selector.INPUT, function (event) {
    if (LastInteraction.IS_MOUSEDOWN === false) {
      $(event.target).addClass(ClassName.FOCUS);
    }
  }).on('' + Event.MOUSEDOWN, Selector.CONTROL, function (event) {
    LastInteraction.IS_MOUSEDOWN = true;
  }).on('' + Event.MOUSEUP, Selector.CONTROL, function (event) {
    setTimeout(function () {
      LastInteraction.IS_MOUSEDOWN = false;
    }, 1);
  });
}(jQuery);

/*!
 * tab indicator animation
 * requires bootstrap's (v4.0.0-alpha.6) tab.js
 */
var TabSwitch = function ($) {
  // constants >>>
  var DATA_KEY = 'md.tabswitch';
  var NAME = 'tabswitch';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    ANIMATE: 'animate',
    INDICATOR: 'nav-tabs-indicator',
    MATERIAL: 'nav-tabs-material',
    SCROLLABLE: 'nav-tabs-scrollable',
    SHOW: 'show'
  };

  var Event = {
    SHOW_BS_TAB: 'show.bs.tab'
  };

  var Selector = {
    DATA_TOGGLE: '.nav-tabs [data-toggle="tab"]',
    NAV: '.nav-tabs',
    NAV_ITEM: '.nav-item'
  };
  // <<< constants

  var TabSwitch = function () {
    function TabSwitch(nav) {
      _classCallCheck(this, TabSwitch);

      if (typeof $.fn.tab === 'undefined') {
        throw new Error('Material\'s JavaScript requires Bootstrap\'s tab.js');
      };

      this._nav = nav;
      this._navindicator = null;
    }

    _createClass(TabSwitch, [{
      key: 'switch',
      value: function _switch(element, relatedTarget) {
        var _this8 = this;

        var supportsTransition = Util.supportsTransitionEnd();

        if (!this._navindicator) {
          this._createIndicator();
        }

        var elLeft = $(element).closest(Selector.NAV_ITEM).offset().left;
        var elWidth = $(element).closest(Selector.NAV_ITEM).outerWidth();
        var navLeft = $(this._nav).offset().left;
        var navScrollLeft = $(this._nav).scrollLeft();
        var navWidth = $(this._nav).outerWidth();

        if (relatedTarget !== undefined) {
          var relatedLeft = $(relatedTarget).closest(Selector.NAV_ITEM).offset().left;
          var relatedWidth = $(relatedTarget).closest(Selector.NAV_ITEM).outerWidth();

          $(this._navindicator).css({
            left: relatedLeft + navScrollLeft - navLeft,
            right: navWidth - (relatedLeft + navScrollLeft - navLeft + relatedWidth)
          });

          $(this._navindicator).addClass(ClassName.SHOW);
          Util.reflow(this._navindicator);

          if (supportsTransition) {
            $(this._nav).addClass(ClassName.ANIMATE);
          }
        }

        $(this._navindicator).css({
          left: elLeft + navScrollLeft - navLeft,
          right: navWidth - (elLeft + navScrollLeft - navLeft + elWidth)
        });

        var complete = function complete() {
          $(_this8._nav).removeClass(ClassName.ANIMATE);
          $(_this8._navindicator).removeClass(ClassName.SHOW);
        };

        if (!supportsTransition) {
          complete();
          return;
        }

        $(this._navindicator).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: '_createIndicator',
      value: function _createIndicator() {
        this._navindicator = document.createElement('div');

        $(this._navindicator).addClass(ClassName.INDICATOR).appendTo(this._nav);

        $(this._nav).addClass(ClassName.MATERIAL);
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(relatedTarget) {
        return this.each(function () {
          var nav = $(this).closest(Selector.NAV)[0];

          if (!nav) {
            return;
          }

          var data = $(nav).data(DATA_KEY);

          if (!data) {
            data = new TabSwitch(nav);
            $(nav).data(DATA_KEY, data);
          }

          data.switch(this, relatedTarget);
        });
      }
    }]);

    return TabSwitch;
  }();

  $(document).on(Event.SHOW_BS_TAB, Selector.DATA_TOGGLE, function (event) {
    TabSwitch._jQueryInterface.call($(event.target), event.relatedTarget);
  });

  $.fn[NAME] = TabSwitch._jQueryInterface;
  $.fn[NAME].Constructor = TabSwitch;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return TabSwitch._jQueryInterface;
  };

  return TabSwitch;
}(jQuery);

/*!
 * global util js
 * based on bootstrap's (v4.0.0-alpha.6) util.js
 */
var Util = function ($) {
  var transition = false;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
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
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function transitionEndEmulator(duration) {
    var _this9 = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this9);
      }
    }, duration);

    return this;
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('material');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] };
      }
    };

    return false;
  }

  var Util = {
    TRANSITION_END: 'mdTransitionEnd',

    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },
    getUID: function getUID(prefix) {
      do {
        prefix += ~ ~(Math.random() * 1000000);
      } while (document.getElementById(prefix));
      return prefix;
    },
    reflow: function reflow(element) {
      new Function('md', 'return md')(element.offsetHeight);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = void 0;

          if (value && isElement(value)) {
            valueType = 'element';
          } else {
            valueType = toType(value);
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      };
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

}(jQuery);