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
