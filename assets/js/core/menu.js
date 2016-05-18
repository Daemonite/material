// todo: rename "menu" to "navdrawer" based on material design specs
// https://www.google.com/design/spec/patterns/navigation-drawer.html

/*
 * navigation drawer
 * based on Bootstrap's (v4.0.0-alpha.2) modal.js
 */
var Menu = (function ($) {
  var BACKDROP_TRANSITION_DURATION = 150;
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.menu';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'menu';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    BACKDROP: 'menu-backdrop',
    IN: 'in',
    OPEN: 'menu-open'
  };

  var Default = {
    keyboard: true,
    show: true
  };

  var DefaultType = {
    keyboard: 'boolean',
    show: 'boolean'
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
    CONTENT: '.menu-scroll',
    DATA_DISMISS: '[data-dismiss="menu"]',
    DATA_TOGGLE: '[data-toggle="menu"]'
  };

  var Menu = (function () {
    function Menu(element, config) {
      _classCallCheck(this, Menu);

      this._backdrop = null;
      this._config = this._getConfig(config);
      this._content = $(element).find(Selector.CONTENT)[0];
      this._element = element;
      this._ignoreBackdropClick = false;
      this._isShown = false;
    }

    _createClass(Menu, [{
      key: 'hide',
      value: function hide(event) {
        if (event) {
          event.preventDefault();
        };

        var hideEvent = $.Event(Event.HIDE);

        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        };

        this._isShown = false;
        this._setEscapeEvent();
        $(document).off(Event.FOCUSIN);
        $(this._element).removeClass(ClassName.IN);
        $(this._element).off(Event.CLICK_DISMISS);
        $(this._content).off(Event.MOUSEDOWN_DISMISS);

        if (Util.supportsTransitionEnd()) {
          $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideMenu, this)).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideMenu();
        };
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
        };

        this._isShown = true;
        $(document.body).addClass(ClassName.OPEN);
        this._setEscapeEvent();
        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

        $(this._content).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            };
          });
        });

        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
      }
    }, {
      key: 'toggle',
      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: '_enforceFocus',
      value: function _enforceFocus() {
        var _this = this;

        $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function (event) {
          if (_this._element !== event.target && !$(_this._element).has(event.target).length) {
            _this._element.focus();
          };
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
      key: '_hideMenu',
      value: function _hideMenu() {
        var _this = this;

        this._showBackdrop(function () {
          $(document.body).removeClass(ClassName.OPEN);
          $(_this._element).trigger(Event.HIDDEN);
        });
      }
    }, {
      key: '_removeBackdrop',
      value: function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        };
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        };
      }
    }, {
      key: '_showBackdrop',
      value: function _showBackdrop(callback) {
        var _this = this;

        if (this._isShown) {
          var doAnimate = Util.supportsTransitionEnd();

          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;
          $(this._backdrop).addClass('fade');

          $(this._backdrop).appendTo(document.body);
          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this._ignoreBackdropClick) {
              _this._ignoreBackdropClick = false;
              return;
            };

            if (event.target !== event.currentTarget) {
              return;
            };

            _this.hide();
          });

          if (doAnimate) {
            Util.reflow(this._backdrop);
          };

          $(this._backdrop).addClass(ClassName.IN);

          if (!callback) {
            return;
          };

          if (!doAnimate) {
            callback();
            return;
          };

          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else if (this._backdrop) {
          $(this._backdrop).removeClass(ClassName.IN);

          var callbackRemove = function callbackRemove() {
            _this._removeBackdrop();

            if (callback) {
              callback();
            };
          };

          if (Util.supportsTransitionEnd()) {
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {
            callbackRemove();
          };
        } else if (callback) {
          callback();
        };
      }
    }, {
      key: '_showElement',
      value: function _showElement(relatedTarget) {
        var _this = this;
        var transition = Util.supportsTransitionEnd();

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          document.body.appendChild(this._element);
        };

        if (transition) {
          Util.reflow(this._element);
        };

        $(this._element).addClass(ClassName.IN);
        this._enforceFocus();

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          _this._element.focus();
          $(_this._element).trigger(shownEvent);
        };

        if (transition) {
          $(this._content).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        };
      }
    }], [{
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Menu.Default, $(this).data(), typeof config === 'object' && config);

          if (!data) {
            data = new Menu(this, _config);
            $(this).data(DATA_KEY, data);
          };

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            };
            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          };
        });
      }
    }]);

    return Menu;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this = this;
    var selector = Util.getSelectorFromElement(this);
    var target = undefined;

    if (selector) {
      target = $(selector)[0];
    };

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A') {
      event.preventDefault();
    };

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        return;
      };

      $target.one(Event.HIDDEN, function () {
        if ($(_this).is(':visible')) {
          _this.focus();
        };
      });
    });

    Menu._jQueryInterface.call($(target), config, this);
  });

  $.fn[NAME] = Menu._jQueryInterface;
  $.fn[NAME].Constructor = Menu;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Menu._jQueryInterface;
  };

  return Menu;
})(jQuery);
