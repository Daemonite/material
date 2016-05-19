// todo: rename "tile" to "panel" based on material design specs
// https://www.google.com/design/spec/components/expansion-panels.html

/*
 * expansion panels
 * based on Bootstrap's (v4.0.0-alpha.2) collapse.js
 */
var Tile = (function ($) {
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.tile';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'tile';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    COLLAPSE: 'collapse',
    COLLAPSED: 'collapsed',
    COLLAPSING: 'collapsing',
    IN: 'in'
  };

  var Default = {
    keyboard: true,
    parent: '',
    toggle: true
  };

  var DefaultType = {
    keyboard: 'boolean',
    parent: 'string',
    toggle: 'boolean'
  };

  var Dimension = {
    HEIGHT: 'height',
    WIDTH: 'width'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY
  };

  var Selector = {
    ACTIVES: '.tile-active-show.collapsing, .tile-active-show.in',
    DATA_TOGGLE: '[data-toggle="tile"]',
    PARENT: '.tile-collapse'
  };

  var Tile = (function () {
    function Tile(element, config) {
      _classCallCheck(this, Tile);

      this._config = this._getConfig(config);
      this._element = element;
      this._isTransitioning = false;
      this._parent = this._config.parent ? this._getParent() : null;
      this._triggerArray = $.makeArray($('[data-toggle="tile"][href="#' + element.id + '"],' + ('[data-toggle="tile"][data-target="#' + element.id + '"]')));

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      };

      if (this._config.toggle) {
        this.toggle();
      };
    }

    _createClass(Tile, [{
      key: 'hide',
      value: function hide() {
        var _this = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
          return;
        };

        var startEvent = $.Event(Event.HIDE);

        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        };

        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

        this._element.style[dimension] = this._element[offsetDimension] + 'px';
        Util.reflow(this._element);
        $(this._element).closest(Selector.PARENT).removeClass(ClassName.IN);
        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);
        this._element.setAttribute('aria-expanded', false);

        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        };

        this.setTransitioning(true);

        var complete = function complete() {
          _this.setTransitioning(false);
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = 0;

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        };

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'setTransitioning',
      value: function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }
    }, {
      key: 'show',
      value: function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
          return;
        };

        var actives = undefined;
        var activesData = undefined;

        if (this._parent) {
          actives = $.makeArray($(Selector.ACTIVES, this._parent));

          if (!actives.length) {
            actives = null;
          };
        };

        if (actives) {
          activesData = $(actives).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          };
        };

        var startEvent = $.Event(Event.SHOW);

        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        };

        if (actives) {
          Tile._jQueryInterface.call($(actives), 'hide');

          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          };
        };

        var dimension = this._getDimension();

        $(this._element).closest(Selector.PARENT).addClass(ClassName.IN);
        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;
        this._element.setAttribute('aria-expanded', true);

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        };

        this.setTransitioning(true);

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);
          _this._element.style[dimension] = '';
          _this.setTransitioning(false);
          $(_this._element).trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        };

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
        };
      }
    }, {
      key: '_addAriaAndCollapsedClass',
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.IN);

          element.setAttribute('aria-expanded', isOpen);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          };
        };
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
        var _this = this;
        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="tile"][data-parent="' + this._config.parent + '"]';

        $(parent).find(selector).each(function (i, element) {
          _this._addAriaAndCollapsedClass(Tile._getTargetFromElement(element), [element]);
        });
        return parent;
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
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          };

          if (!data) {
            data = new Tile(this, _config);
            $this.data(DATA_KEY, data);
          };

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            };
            data[config]();
          };
        });
      }
    }]);

    return Tile;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Tile._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Tile._jQueryInterface.call($(target), config);
  });

  $.fn[NAME] = Tile._jQueryInterface;
  $.fn[NAME].Constructor = Tile;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tile._jQueryInterface;
  };

  return Tile;
})(jQuery);
