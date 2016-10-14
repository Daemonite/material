/*!
 * tab indicator animation
 * requires bootstrap's (v4.0.0-alpha.3) tab.js
 */
const TabSwitch = (($) => {
  // constants >>>
    const DATA_KEY            = 'md.tabswitch';
    const NAME                = 'tabswitch';
    const NO_CONFLICT         = $.fn[NAME];
    const TRANSITION_DURATION = 450;

    const ClassName = {
      ANIMATE    : 'animate',
      IN         : 'in',
      INDICATOR  : 'nav-tabs-indicator',
      MATERIAL   : 'nav-tabs-material',
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
          right : (navWidth - ((relatedLeft + navScrollLeft) - navLeft + relatedWidth))
        });

        $(this._navindicator).addClass(ClassName.IN);
        Util.reflow(this._navindicator);

        if (supportsTransition) {
          $(this._navindicator).addClass(ClassName.ANIMATE);

          if (relatedLeft > elLeft) {
            $(this._navindicator).addClass(ClassName.REVERSE);
          }
        }
      }

      $(this._navindicator).css({
        left  : ((elLeft + navScrollLeft) - navLeft),
        right : (navWidth - ((elLeft + navScrollLeft) - navLeft + elWidth))
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

      $(this._nav).addClass(ClassName.MATERIAL);
    }

    static _jQueryInterface(relatedTarget) {
      return this.each(function () {
        let nav = $(this).closest(Selector.TAB_NAV)[0];

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
