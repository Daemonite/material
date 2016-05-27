/*!
 * navigation drawer
 * based on Bootstrap's (v4.0.0-alpha.2) modal.js
 */
const NavDrawer = (($) => {
  // constants >>>
    const DATA_API_KEY                 = '.data-api';
    const DATA_KEY                     = 'md.navdrawer';
    const EVENT_KEY                    = '.' + DATA_KEY;
    const NAME                         = 'navdrawer';
    const NO_CONFLICT                  = $.fn[NAME];
    const TRANSITION_DURATION          = 300;
    const TRANSITION_DURATION_BACKDROP = 150;

    const ClassName = {
      BACKDROP : 'navdrawer-backdrop',
      IN       : 'in',
      OPEN     : 'navdrawer-open'
    };

    const Default = {
      keyboard : true,
      show     : true,
      type     : 'temporary'
    };

    const DefaultType = {
      keyboard : 'boolean',
      show     : 'boolean',
      type     : 'string'
    };

    const Event = {
      CLICK_DATA_API    : 'click' + EVENT_KEY + DATA_API_KEY,
      CLICK_DISMISS     : 'click.dismiss' + EVENT_KEY,
      FOCUSIN           : 'focusin' + EVENT_KEY,
      HIDDEN            : 'hidden' + EVENT_KEY,
      HIDE              : 'hide' + EVENT_KEY,
      KEYDOWN_DISMISS   : 'keydown.dismiss' + EVENT_KEY,
      MOUSEDOWN_DISMISS : 'mousedown.dismiss' + EVENT_KEY,
      MOUSEUP_DISMISS   : 'mouseup.dismiss' + EVENT_KEY,
      SHOW              : 'show' + EVENT_KEY,
      SHOWN             : 'shown' + EVENT_KEY
    };

    const Selector = {
      CONTENT      : '.navdrawer-scroll',
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

      let hideClassName = ClassName.OPEN + '-' + this._config.type;
      let hideEvent = $.Event(Event.HIDE);

      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._content).off(Event.MOUSEDOWN_DISMISS);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._element).removeClass(ClassName.IN);

      if (Util.supportsTransitionEnd()) {
        $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideNavdrawer, this, hideClassName)).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideNavdrawer();
      }
    }

    show(relatedTarget) {
      let showEvent = $.Event(Event.SHOW, {
        relatedTarget
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
      $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, (event) => {
        if (this._element !== event.target && (!$(this._element).has(event.target).length)) {
          this._element.focus();
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
      if (this._isShown && this._config.keyboard) {
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

      if (this._config.type === 'temporary' && this._isShown) {
        this._backdrop = document.createElement('div');

        $(this._backdrop).addClass(ClassName.BACKDROP).appendTo(document.body);

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

        let callbackRemove = () => {
          this._removeBackdrop();

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

    _showElement(relatedTarget) {
      let supportsTransition = Util.supportsTransitionEnd();

      if (!this._element.parentNode || (this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      if (supportsTransition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.IN);

      this._enforceFocus();

      let shownEvent = $.Event(Event.SHOWN, {
        relatedTarget
      });

      let transitionComplete = () => {
        this._element.focus();

        $(this._element).trigger(shownEvent);
      };

      if (supportsTransition) {
        $(this._content).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
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
        let _config = $.extend({}, NavDrawer.Default, $(this).data(), typeof config === 'object' && config);

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

    let config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

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
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return NavDrawer._jQueryInterface;
  };

  return NavDrawer;
})(jQuery);
