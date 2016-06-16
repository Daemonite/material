/*!
 * expansion panel
 * based on Bootstrap's (v4.0.0-alpha.2) collapse.js
 */
const Panel = (($) => {
  // constants >>>
    const DATA_API_KEY        = '.data-api';
    const DATA_KEY            = 'md.panel';
    const EVENT_KEY           = `.${DATA_KEY}`;
    const NAME                = 'panel';
    const NO_CONFLICT         = $.fn[NAME];
    const TRANSITION_DURATION = 300;

    const ClassName = {
      IN         : 'in',
      COLLAPSE   : 'collapse',
      COLLAPSING : 'collapsing',
      COLLAPSED  : 'collapsed'
    }

    const Default = {
      keyboard : true,
      parent   : ''
    };

    const DefaultType = {
      keyboard : 'boolean',
      parent   : 'string'
    };

    const Dimension = {
      HEIGHT : 'height',
      WIDTH  : 'width'
    }

    const Event = {
      CLICK_DATA_API  : `click${EVENT_KEY}${DATA_API_KEY}`,
      FOCUSIN         : `focusin${EVENT_KEY}`,
      HIDDEN          : `hidden${EVENT_KEY}`,
      HIDE            : `hide${EVENT_KEY}`,
      KEYDOWN_DISMISS : `keydown.dismiss${EVENT_KEY}`,
      SHOW            : `show${EVENT_KEY}`,
      SHOWN           : `shown${EVENT_KEY}`
    };

    const Selector = {
      ACTIVES     : '.tile-active-show.collapsing, .tile-active-show.in',
      DATA_TOGGLE : '[data-toggle="panel"]',
      PARENT      : '.tile-collapse'
    }
  // <<< constants

  class Panel {
    constructor(element, config) {
      this._config          = this._getConfig(config);
      this._element         = element;
      this._isTransitioning = false;
      this._parent          = this._config.parent ? this._getParent() : null;
      this._triggerArray    = $.makeArray($(
        '[data-toggle="panel"][data-target="#' + element.id + '"],' +
        '[data-toggle="panel"][href="#' + element.id + '"]'
      ));

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      this.toggle();
    }

    hide() {
      if (this._isTransitioning ||
        !$(this._element).hasClass(ClassName.IN)) {
        return;
      }

      let startEvent = $.Event(Event.HIDE);

      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      let dimension       = this._getDimension();
      let offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

      this._element.style[dimension] = `${this._element[offsetDimension]}px`;
      Util.reflow(this._element);

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.IN)
        .addClass(ClassName.COLLAPSING);

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .addClass(ClassName.COLLAPSED)
          .attr('aria-expanded', false);
      }

      this._isTransitioning = true;

      let complete = () => {
        this._isTransitioning = false;

        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN);

        this._setEscapeEvent();
        $(document).off(Event.FOCUSIN);
      }

      this._element.style[dimension] = 0;

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);
    }

    show() {
      if (this._isTransitioning ||
        $(this._element).hasClass(ClassName.IN)) {
        return;
      }

      let actives;
      let activesData;

      if (this._parent) {
        actives = $.makeArray($(
          Selector.ACTIVES,
          this._parent
        ));

        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);

        if (activesData &&
          activesData._isTransitioning) {
          return;
        }
      }

      let startEvent = $.Event(Event.SHOW);

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

      let dimension = this._getDimension();

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING);

      this._element.focus();
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true);
      }

      this._isTransitioning = true;

      let complete = () => {
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.IN);

        this._element.style[dimension] = '';
        this._isTransitioning = false;

        if (this._config.keyboard) {
          this._setEscapeEvent();
        };

        $(this._element).trigger(Event.SHOWN);
      }

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      let capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      let scrollSize           = `scroll${capitalizedDimension}`;

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    toggle() {
      if ($(this._element).hasClass(ClassName.IN)) {
        this.hide();
      } else {
        this.show();
      }
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        let isOpen = $(element).hasClass(ClassName.IN);

        if (triggerArray.length) {
          $(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen);
        }
      }
    }

    _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    }

    _getDimension() {
      let hasWidth = $(this._element).hasClass(Dimension.WIDTH);

      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    }

    _getParent() {
      let parent   = $(this._config.parent)[0];
      let selector = `[data-toggle="panel"][data-parent="${this._config.parent}"]`;

      $(parent).find(selector).each((i, element) => {
        this._addAriaAndCollapsedClass(
          Panel._getTargetFromElement(element),
          [element]
        );
      });

      return parent;
    }

    _setEscapeEvent() {
      if ($(this._element).hasClass(ClassName.IN) &&
        this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          if (event.which === 27) {
            this.hide();
          }
        });
      } else if (!$(this._element).hasClass(ClassName.IN)) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    }

    static get Default() {
      return Default;
    }

    static _getTargetFromElement(element) {
      let selector = Util.getSelectorFromElement(element);

      return selector ? $(selector)[0] : null;
    }

    static _jQueryInterface(config) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY);
        let _config = $.extend(
          {},
          Default,
          $(this).data(),
          typeof config === 'object' && config
        );

        if (!data && _config.toggle &&
          /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Panel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }
  }

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    let target = Panel._getTargetFromElement(this);
    let data   = $(target).data(DATA_KEY);
    let config = data ? 'toggle' : $(this).data();

    Panel._jQueryInterface.call($(target), config);
  });

  $.fn[NAME]             = Panel._jQueryInterface;
  $.fn[NAME].Constructor = Panel;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Panel._jQueryInterface;
  };

  return Panel;
})(jQuery);
