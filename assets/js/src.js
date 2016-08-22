/*!
 * Material
 */
if (typeof jQuery === 'undefined') {
	throw new Error('Material\'s JavaScript requires jQuery')
}

+function ($) {
	var version = $.fn.jquery.split(' ')[0].split('.')
	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 3)) {
		throw new Error('Material\'s JavaScript requires at least jQuery v1.9.1 but less than v3.0.0')
	}
}(jQuery);

+function ($) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * waterfall header:
 * header is initially presented as seamed,
 * but then separates to form the step
 *
 * waterfall toggle binds to JavaScript's scroll event
 * since Bootstrap (v4.0.0-alpha.2) removes affix.js
 */
var $navbarWaterfall = $('.navbar-waterfall-top');

if ($navbarWaterfall.length) {
  var navbarWaterfallOffset = $navbarWaterfall.offset().top;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > navbarWaterfallOffset) {
      $navbarWaterfall.addClass('waterfall');
    } else {
      $navbarWaterfall.removeClass('waterfall');
    };
  });
};

/*!
 * customise pickadate js for material
 * based on pickadate.js
 */
var Datepicker = function Datepicker(element, options) {
  this._element = element;
  this._options = options;
};

if (typeof $.fn.pickadate === 'undefined') {
  throw new Error('Material\'s JavaScript requires pickadate.js');
};

Datepicker.DEFAULTS = {
  cancel: 'Cancel',
  closeOnCancel: true,
  closeOnSelect: false,
  container: 'body',
  disable: [],
  firstDay: 0,
  format: 'd/m/yyyy',
  formatSubmit: '',
  max: false,
  min: false,
  monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ok: 'OK',
  onClose: false,
  onOpen: false,
  onRender: false,
  onSet: false,
  onStart: false,
  onStop: false,
  selectMonths: false,
  selectYears: false,
  today: 'Today',
  weekdaysFull: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};

Datepicker.prototype.display = function (datepickerApi, datepickerRoot, datepickerValue) {
  $('.picker__date-display', datepickerRoot).remove();

  $('.picker__wrap', datepickerRoot).prepend('<div class="picker__date-display">' + '<div class="picker__date-display-top">' + '<span class="picker__year-display">' + datepickerApi.get(datepickerValue, 'yyyy') + '</span>' + '</div>' + '<div class="picker__date-display-bottom">' + '<span class="picker__weekday-display">' + datepickerApi.get(datepickerValue, 'dddd') + '</span>' + '<span class="picker__day-display">' + datepickerApi.get(datepickerValue, 'd') + '</span>' + '<span class="picker__month-display">' + datepickerApi.get(datepickerValue, 'mmm') + '</span>' + '</div>' + '</div>');
};

Datepicker.prototype.show = function () {
  var that = this;

  $(this._element).pickadate({
    clear: that._options.cancel,
    close: that._options.ok,
    closeOnClear: that._options.closeOnCancel,
    closeOnSelect: that._options.closeOnSelect,
    container: that._options.container,
    disable: that._options.disable,
    firstDay: that._options.firstDay,
    format: that._options.format,
    formatSubmit: that._options.formatSubmit,
    klass: {
      buttonClear: 'btn btn-flat btn-brand picker__button--clear',
      buttonClose: 'btn btn-flat btn-brand picker__button--close',
      buttonToday: 'btn btn-flat btn-brand picker__button--today',
      navPrev: 'material-icons picker__nav--prev',
      navNext: 'material-icons picker__nav--next'
    },
    max: that._options.max,
    min: that._options.min,
    monthsFull: that._options.monthsFull,
    monthsShort: that._options.monthsShort,
    onClose: that._options.onClose,
    onOpen: that._options.onOpen,
    onRender: that._options.onRender,
    onSet: that._options.onSet,
    onStart: that._options.onStart,
    onStop: that._options.onStop,
    selectMonths: that._options.selectMonths,
    selectYears: that._options.selectYears,
    today: that._options.today,
    weekdaysFull: that._options.weekdaysFull,
    weekdaysShort: that._options.weekdaysShort
  });

  var datepickerApi = $(this._element).pickadate('picker'),
      datepickerNode = datepickerApi.$node,
      datepickerRoot = datepickerApi.$root;

  datepickerApi.on({
    close: function close() {
      $(document.activeElement).blur();
    },
    open: function open() {
      if (!$('.picker__date-display', datepickerRoot).length) {
        that.display(datepickerApi, datepickerRoot, 'highlight');
      };
    },
    set: function set() {
      if (datepickerApi.get('select') !== null) {
        that.display(datepickerApi, datepickerRoot, 'select');
      };
    }
  });
};

function Plugin(option) {
  return this.each(function () {
    var data = $(this).data('bs.pickdate');
    var options = $.extend({}, Datepicker.DEFAULTS, $(this).data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

    if (!data) {
      $(this).data('bs.pickdate', data = new Datepicker(this, options));
    };

    data.show();
  });
};

var old = $.fn.pickdate;

$.fn.pickdate = Plugin;
$.fn.pickdate.Constructor = Datepicker;

$.fn.pickdate.noConflict = function () {
  $.fn.pickdate = old;
  return this;
};

/*!
 * activate textarea-autosize for material
 * based on textarea-autosize.js
 */
if ($('.textarea-autosize').length && typeof $.fn.textareaAutoSize !== 'undefined') {
  $('.textarea-autosize').textareaAutoSize();
};

/*!
 * activate waves for material
 * requires waves.js
 */
if ($('.waves-attach').length && typeof Waves !== 'undefined') {
  Waves.attach('.waves-attach');
  Waves.init({
    duration: 300
  });
};

/*!
 * floating label:
 * when a user engages with the text input field,
 * the floating inline labels move to float above the field
 */
var Floatinglabel = function ($) {
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
    CHANGE_DATA_API: 'change' + EVENT_KEY + DATA_API_KEY,
    FOCUSIN_DATA_API: 'focusin' + EVENT_KEY + DATA_API_KEY,
    FOCUSOUT_DATA_API: 'focusout' + EVENT_KEY + DATA_API_KEY
  };

  var Selector = {
    DATA_PARENT: '.floating-label',
    DATA_TOGGLE: '.floating-label .form-control'
  };
  // <<< constants

  var Floatinglabel = function () {
    function Floatinglabel(element) {
      _classCallCheck(this, Floatinglabel);

      this._element = element;
    }

    _createClass(Floatinglabel, [{
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
            data = new Floatinglabel(this);
            $(this).data(DATA_KEY, data);
          }

          if (typeof _event === 'string') {
            if (data[_event] === undefined) {
              throw new Error('No method named "' + _event + '"');
            }

            data[_event]($(this).parent(Selector.DATA_PARENT));
          }
        });
      }
    }]);

    return Floatinglabel;
  }();

  $(document).on(Event.CHANGE_DATA_API + ' ' + Event.FOCUSIN_DATA_API + ' ' + Event.FOCUSOUT_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var data = $(this).data(DATA_KEY);

    Floatinglabel._jQueryInterface.call($(this), event.type);
  });

  $.fn[NAME] = Floatinglabel._jQueryInterface;
  $.fn[NAME].Constructor = Floatinglabel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Floatinglabel._jQueryInterface;
  };

  return Floatinglabel;
}(jQuery);

/*!
 * navigation drawer
 * based on Bootstrap's (v4.0.0-alpha.2) modal.js
 */
var NavDrawer = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.navdrawer';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'navdrawer';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var TRANSITION_DURATION_BACKDROP = 150;

  var ClassName = {
    BACKDROP: 'navdrawer-backdrop',
    IN: 'in',
    OPEN: 'navdrawer-open'
  };

  var Default = {
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

        $(this._element).off(Event.CLICK_DISMISS).removeClass(ClassName.IN);

        if (Util.supportsTransitionEnd()) {
          $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideNavdrawer, this, hideClassName)).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideNavdrawer();
        }
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
        var _this2 = this;

        $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function (event) {
          if (_this2._element !== event.target && !$(_this2._element).has(event.target).length) {
            _this2._element.focus();
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

        this._element.style.display = 'none';

        this._showBackdrop(function () {
          $(document.body).removeClass(className);
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

          $(this._backdrop).addClass(ClassName.IN);

          if (!callback) {
            return;
          }

          if (!supportsTransition) {
            callback();
            return;
          }

          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(TRANSITION_DURATION_BACKDROP);
        } else if (this._backdrop && !this._isShown) {
          $(this._backdrop).removeClass(ClassName.IN);

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

        this._element.style.display = 'block';

        if (supportsTransition) {
          Util.reflow(this._element);
        }

        $(this._element).addClass(ClassName.IN);
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
 * expansion panel
 * based on Bootstrap's (v4.0.0-alpha.2) collapse.js
 */
var Panel = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.panel';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'panel';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    IN: 'in',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Default = {
    keyboard: true,
    parent: ''
  };

  var DefaultType = {
    keyboard: 'boolean',
    parent: 'string'
  };

  var Dimension = {
    HEIGHT: 'height',
    WIDTH: 'width'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY
  };

  var Selector = {
    ACTIVES: '.tile-active-show.collapsing, .tile-active-show.in',
    DATA_TOGGLE: '[data-toggle="panel"]',
    PARENT: '.tile-collapse'
  };
  // <<< constants

  var Panel = function () {
    function Panel(element, config) {
      _classCallCheck(this, Panel);

      this._config = this._getConfig(config);
      this._element = element;
      this._isTransitioning = false;
      this._parent = this._config.parent ? this._getParent() : null;
      this._triggerArray = $.makeArray($('[data-toggle="panel"][data-target="#' + element.id + '"],' + '[data-toggle="panel"][href="#' + element.id + '"]'));

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      this.toggle();
    }

    _createClass(Panel, [{
      key: 'hide',
      value: function hide() {
        var _this8 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);

        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

        this._element.style[dimension] = this._element[offsetDimension] + 'px';
        Util.reflow(this._element);

        $(this._element).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN).addClass(ClassName.COLLAPSING);

        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        }

        this._isTransitioning = true;

        var complete = function complete() {
          _this8._isTransitioning = false;

          $(_this8._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);

          _this8._setEscapeEvent();
          $(document).off(Event.FOCUSIN);
        };

        this._element.style[dimension] = 0;

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'show',
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var actives = void 0;
        var activesData = void 0;

        if (this._parent) {
          actives = $.makeArray($(Selector.ACTIVES, this._parent));

          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);

        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Panel._jQueryInterface.call($(actives), 'hide');

          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

        this._element.focus();
        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this._isTransitioning = true;

        var complete = function complete() {
          $(_this9._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);

          _this9._element.style[dimension] = '';
          _this9._isTransitioning = false;

          if (_this9._config.keyboard) {
            _this9._setEscapeEvent();
          };

          $(_this9._element).trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

        this._element.style[dimension] = this._element[scrollSize] + 'px';
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if ($(this._element).hasClass(ClassName.IN)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: '_addAriaAndCollapsedClass',
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.IN);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }
    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_getDimension',
      value: function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);

        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      }
    }, {
      key: '_getParent',
      value: function _getParent() {
        var _this10 = this;

        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="panel"][data-parent="' + this._config.parent + '"]';

        $(parent).find(selector).each(function (i, element) {
          _this10._addAriaAndCollapsedClass(Panel._getTargetFromElement(element), [element]);
        });

        return parent;
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this11 = this;

        if ($(this._element).hasClass(ClassName.IN) && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this11.hide();
            }
          });
        } else if (!$(this._element).hasClass(ClassName.IN)) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      }
    }], [{
      key: '_getTargetFromElement',
      value: function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);

        return selector ? $(selector)[0] : null;
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Panel(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }

            data[config]();
          }
        });
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Panel;
  }();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Panel._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Panel._jQueryInterface.call($(target), config);
  });

  $.fn[NAME] = Panel._jQueryInterface;
  $.fn[NAME].Constructor = Panel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Panel._jQueryInterface;
  };

  return Panel;
}(jQuery);

/*!
 * snackbar:
 * snackbars provide brief feedback about an operation
 * through a message at the bottom of the screen
 */
var Snackbar = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.snackbar';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'snackbar';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    IN: 'in',
    INNER: 'snackbar-inner',
    SNACKBAR: 'snackbar'
  };

  var Default = {
    alive: 6000,
    content: '',
    hidden: function hidden() {},
    hide: function hide() {},
    show: function show() {},
    shown: function shown() {}
  };

  var DefaultType = {
    alive: 'integer',
    content: 'string',
    hidden: 'function',
    hide: 'function',
    show: 'function',
    shown: 'function'
  };

  var Event = {
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    MOUSE_ENTER: 'mouseenter' + EVENT_KEY + DATA_API_KEY,
    MOUSE_LEAVE: 'mouseleave' + EVENT_KEY + DATA_API_KEY
  };

  var Selector = {
    DATA_DISMISS: '[data-dismiss="snackbar"]'
  };
  // <<< constants

  var Snackbar = function () {
    function Snackbar(element, config) {
      _classCallCheck(this, Snackbar);

      this._config = config;
      this._element = element;
      this._isShowing = false;
      this._snackbar = null;
      this._snackbarInner = null;
      this._timer = null;

      this.toggle();
    }

    _createClass(Snackbar, [{
      key: 'hide',
      value: function hide(callback) {
        var _this12 = this;

        if (!this._isShowing) {
          if (callback) {
            callback();
          }

          return;
        }

        this._config.hide.call(this._element);
        $(this._snackbarInner).removeClass(ClassName.IN);
        clearTimeout(this._timer);

        var complete = function complete() {
          _this12._isShowing = false;

          $(_this12._snackbarInner).remove();
          $(_this12._snackbar).remove();

          if (callback) {
            callback();
          }

          _this12._config.hidden.call(_this12._element);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._snackbarInner).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'show',
      value: function show() {
        var _this13 = this;

        if (this._isShowing || this._config.content === '') {
          return;
        }

        this._config.show.call(this._element);

        var supportsTransition = Util.supportsTransitionEnd();

        this._isShowing = true;
        this._snackbar = document.createElement('div');
        this._snackbarInner = document.createElement('div');

        $(this._snackbar).addClass(ClassName.SNACKBAR).appendTo(this._element);

        $(this._snackbarInner).addClass(ClassName.INNER).appendTo(this._snackbar).html(this._config.content).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this, undefined));

        if (supportsTransition) {
          Util.reflow(this._snackbarInner);
        }

        $(this._snackbarInner).addClass(ClassName.IN);

        var complete = function complete() {
          _this13._timer = setTimeout($.proxy(_this13.hide, _this13, undefined), _this13._config.alive);

          $(_this13._snackbarInner).on(Event.MOUSE_ENTER, function () {
            clearTimeout(_this13._timer);
          }).on(Event.MOUSE_LEAVE, function () {
            _this13._timer = setTimeout($.proxy(_this13.hide, _this13, undefined), _this13._config.alive);
          });

          _this13._config.shown.call(_this13._element);
        };

        if (!supportsTransition) {
          complete();
          return;
        }

        $(this._snackbarInner).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if (this._isShowing) {
          this.hide();
        } else {
          this.show();
        }
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var body = $(document.body);
          var data = body.data(DATA_KEY);
          var _config = $.extend({}, Default, body.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          var configIsString = typeof config === 'string';

          var newSnackbar = function newSnackbar() {
            data = new Snackbar(body, _config);
            body.data(DATA_KEY, data);
          };

          if (!data) {
            newSnackbar();
          } else if (!configIsString) {
            data['hide']($.proxy(newSnackbar, body));
          }

          if (configIsString) {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }

            data[config]();
          }
        });
      }
    }]);

    return Snackbar;
  }();

  $.fn[NAME] = Snackbar._jQueryInterface;
  $.fn[NAME].Constructor = Snackbar;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Snackbar._jQueryInterface;
  };

  return Snackbar;
}(jQuery);

/*!
 * tab indicator animation
 * works together with Bootstrap's (v4.0.0-alpha.2) tab.js
 */
var Tabswitch = function ($) {
  // constants >>>
  var DATA_KEY = 'md.tabswitch';
  var NAME = 'tabswitch';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    ANIMATE: 'animate',
    IN: 'in',
    INDICATOR: 'nav-tabs-indicator',
    REVERSE: 'reverse',
    SCROLLABLE: 'nav-tabs-scrollable'
  };

  var Event = {
    SHOW_BS_TAB: 'show.bs.tab'
  };

  var Selector = {
    DATA_TOGGLE: '.nav-tabs [data-toggle="tab"]',
    TAB_NAV: '.nav-tabs'
  };
  // <<< constants

  var Tabswitch = function () {
    function Tabswitch(nav) {
      _classCallCheck(this, Tabswitch);

      if (typeof $.fn.tab === 'undefined') {
        throw new Error('Material\'s JavaScript requires Bootstrap\'s tab.js');
      };

      this._nav = nav;
      this._navindicator = null;
    }

    _createClass(Tabswitch, [{
      key: 'switch',
      value: function _switch(element, relatedTarget) {
        var _this14 = this;

        var supportsTransition = Util.supportsTransitionEnd();

        if (!this._navindicator) {
          this._createIndicator();
        }

        var elLeft = $(element).offset().left;
        var elWidth = $(element).outerWidth();
        var navLeft = $(this._nav).offset().left;
        var navScrollLeft = $(this._nav).scrollLeft();
        var navWidth = $(this._nav).outerWidth();

        if (relatedTarget !== undefined) {
          var relatedLeft = $(relatedTarget).offset().left;
          var relatedWidth = $(relatedTarget).outerWidth();

          $(this._navindicator).css({
            left: relatedLeft + navScrollLeft - navLeft,
            right: navLeft + navWidth - (relatedLeft + navScrollLeft) - relatedWidth
          });

          if (supportsTransition) {
            $(this._navindicator).addClass(ClassName.ANIMATE);

            if (relatedLeft + navScrollLeft > elLeft) {
              $(this._navindicator).addClass(ClassName.REVERSE);
            }

            Util.reflow(this._navindicator);
          }
        }

        $(this._navindicator).addClass(ClassName.IN).css({
          left: elLeft + navScrollLeft - navLeft,
          right: navLeft + navWidth - (elLeft + navScrollLeft) - elWidth
        });

        var complete = function complete() {
          $(_this14._navindicator).removeClass(ClassName.ANIMATE).removeClass(ClassName.IN).removeClass(ClassName.REVERSE);
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
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(relatedTarget) {
        return this.each(function () {
          var nav = $(this).closest(Selector.TAB_NAV)[0];

          if (!nav) {
            return;
          }

          var data = $(nav).data(DATA_KEY);

          if (!data) {
            data = new Tabswitch(nav);
            $(nav).data(DATA_KEY, data);
          }

          data.switch(this, relatedTarget);
        });
      }
    }]);

    return Tabswitch;
  }();

  $(document).on(Event.SHOW_BS_TAB, Selector.DATA_TOGGLE, function (event) {
    Tabswitch._jQueryInterface.call($(event.target), event.relatedTarget);
  });

  $.fn[NAME] = Tabswitch._jQueryInterface;
  $.fn[NAME].Constructor = Tabswitch;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Tabswitch._jQueryInterface;
  };

  return Tabswitch;
}(jQuery);

/*!
 * global util js
 * based on Bootstrap's (v4.0.0-alpha.2) util.js
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
    var _this15 = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this15);
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
        prefix += ~~(Math.random() * 1000000);
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