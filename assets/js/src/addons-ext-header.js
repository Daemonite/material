/*!
 * waterfall header:
 * header is initially presented as seamed,
 * but then separates to form the step
 *
 * waterfall toggle binds to JavaScript's scroll event
 * since Bootstrap (v4.0.0-alpha.2) removes affix.js
 */
var $headerWaterfall = $('.header-waterfall');

if ($headerWaterfall.length) {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
      $headerWaterfall.addClass('affix');
    } else {
      $headerWaterfall.removeClass('affix');
    };
  });
};
