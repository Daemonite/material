/*!
 * snackbar:
 * snackbars provide brief feedback about an operation
 * through a message at the bottom of the screen
 */
const Snackbar = (($) => {
  // constants >>>
    const DATA_API_KEY        = '.data-api';
    const DATA_KEY            = 'md.snackbar';
    const EVENT_KEY           = `.${DATA_KEY}`;
    const NAME                = 'snackbar';
    const NO_CONFLICT         = $.fn[NAME];
    const TRANSITION_DURATION = 300;

    const ClassName = {
      IN       : 'in',
      INNER    : 'snackbar-inner',
      SNACKBAR : 'snackbar'
    };

    const Default = {
      alive   : 6000,
      content : '',
      hidden  : () => {},
      hide    : () => {},
      show    : () => {},
      shown   : () => {}
    };

    const DefaultType = {
      alive   : 'integer',
      content : 'string',
      hidden  : 'function',
      hide    : 'function',
      show    : 'function',
      shown   : 'function'
    };

    const Event = {
      CLICK_DISMISS : `click.dismiss${EVENT_KEY}`,
      MOUSE_ENTER   : `mouseenter${EVENT_KEY}${DATA_API_KEY}`,
      MOUSE_LEAVE   : `mouseleave${EVENT_KEY}${DATA_API_KEY}`,
    };

    const Selector = {
      DATA_DISMISS : '[data-dismiss="snackbar"]'
    };
  // <<< constants

  class Snackbar {
    constructor(element, config) {
      this._config        = config;
      this._element       = element;
      this._isShowing     = false;
      this._snackbar      = null;
      this._snackbarInner = null;
      this._timer         = null;

      this.toggle();
    }

    hide(callback) {
      if (!this._isShowing) {
        if (callback) {
          callback();
        }

        return;
      }

      this._config.hide.call(this._element);
      $(this._snackbarInner).removeClass(ClassName.IN);
      clearTimeout(this._timer);

      let complete = () => {
        this._isShowing = false;

        $(this._snackbarInner).remove();
        $(this._snackbar).remove();

        if (callback) {
          callback();
        }

        this._config.hidden.call(this._element);
      }

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._snackbarInner)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);
    }

    show() {
      if (this._isShowing || this._config.content === '') {
        return;
      }

      this._config.show.call(this._element);

      let supportsTransition = Util.supportsTransitionEnd();

      this._isShowing     = true;
      this._snackbar      = document.createElement('div');
      this._snackbarInner = document.createElement('div');

      $(this._snackbar)
        .addClass(ClassName.SNACKBAR)
        .appendTo(this._element);

      $(this._snackbarInner)
        .addClass(ClassName.INNER)
        .appendTo(this._snackbar)
        .html(this._config.content)
        .on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this, undefined));

      if (supportsTransition) {
        Util.reflow(this._snackbarInner);
      }

      $(this._snackbarInner).addClass(ClassName.IN);

      let complete = () => {
        this._timer = setTimeout(
          $.proxy(this.hide, this, undefined),
          this._config.alive
        );

        $(this._snackbarInner).on(Event.MOUSE_ENTER, () => {
          clearTimeout(this._timer);
        }).on(Event.MOUSE_LEAVE, () => {
          this._timer = setTimeout(
            $.proxy(this.hide, this, undefined),
            this._config.alive
          );
        });

        this._config.shown.call(this._element);
      }

      if (!supportsTransition) {
        complete();
        return;
      }

      $(this._snackbarInner)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);
    }

    toggle() {
      if (this._isShowing) {
        this.hide();
      } else {
        this.show();
      }
    }

    static _jQueryInterface(config) {
      return this.each(function () {
        let body    = $(document.body);
        let data    = body.data(DATA_KEY);
        let _config = $.extend(
          {},
          Default,
          body.data(),
          typeof config === 'object' && config
        );

        let configIsString = typeof config === 'string';

        let newSnackbar = () => {
          data = new Snackbar(body, _config);
          body.data(DATA_KEY, data);
        }

        if (!data) {
          newSnackbar();
        } else if (!configIsString) {
          data['hide']($.proxy(newSnackbar, body));
        }

        if (configIsString) {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }
  }

  $.fn[NAME]             = Snackbar._jQueryInterface;
  $.fn[NAME].Constructor = Snackbar;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Snackbar._jQueryInterface;
  };

  return Snackbar;
})(jQuery);
