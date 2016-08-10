/*!
 * tab indicator animation
 * works together with Bootstrap's (v4.0.0-alpha.2) tab.js
 */
const Tabswitch = (($) => {
  // constants >>>
    const DATA_KEY            = 'md.tabswitch';
    const NAME                = 'tabswitch';
    const NO_CONFLICT         = $.fn[NAME];
    const TRANSITION_DURATION = 300;

    const ClassName = {
      ANIMATE    : 'animate',
      IN         : 'in',
      INDICATOR  : 'nav-tabs-indicator',
      REVERSE    : 'reverse',
      SCROLLABLE : 'nav-tabs-scrollable'
    };

    const Event = {
      SHOW_BS_TAB : 'show.bs.tab'
    };

    const Selector = {
      DATA_TOGGLE : '.nav-tabs [data-toggle="tab"]',
      TAB_NAV     : '.nav-tabs'
    };
  // <<< constants

  class Tabswitch {
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

      let elLeft        = $(element).offset().left;
      let elWidth       = $(element).outerWidth();
      let navLeft       = $(this._nav).offset().left;
      let navScrollLeft = $(this._nav).scrollLeft();
      let navWidth      = $(this._nav).outerWidth();

      if (relatedTarget !== undefined) {
        let relatedLeft  = $(relatedTarget).offset().left;
        let relatedWidth = $(relatedTarget).outerWidth();

        $(this._navindicator).css({
          left  : ((relatedLeft + navScrollLeft) - navLeft),
          right : (navLeft + navWidth - (relatedLeft + navScrollLeft) - relatedWidth)
        });

        if (supportsTransition) {
          $(this._navindicator).addClass(ClassName.ANIMATE);

          if ((relatedLeft + navScrollLeft) > elLeft) {
            $(this._navindicator).addClass(ClassName.REVERSE);
          }

          Util.reflow(this._navindicator);
        }
      }

      $(this._navindicator).addClass(ClassName.IN).css({
        left  : ((elLeft + navScrollLeft) - navLeft),
        right : (navLeft + navWidth - (elLeft + navScrollLeft) - elWidth)
      });

      let complete = () => {
        $(this._navindicator).removeClass(ClassName.ANIMATE).removeClass(ClassName.IN).removeClass(ClassName.REVERSE);
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
    }

    static _jQueryInterface(relatedTarget) {
      return this.each(function () {
        let nav = $(this).closest(Selector.TAB_NAV)[0];

        if (!nav) {
          return;
        }

        let data = $(nav).data(DATA_KEY);

        if (!data) {
          data = new Tabswitch(nav);
          $(nav).data(DATA_KEY, data);
        }

        data.switch(this, relatedTarget);
      });
    }
  }

  $(document).on(Event.SHOW_BS_TAB, Selector.DATA_TOGGLE, function (event) {
    Tabswitch._jQueryInterface.call($(event.target), event.relatedTarget);
  });

  $.fn[NAME]             = Tabswitch._jQueryInterface;
  $.fn[NAME].Constructor = Tabswitch;
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Tabswitch._jQueryInterface;
  };

  return Tabswitch;
})(jQuery);
