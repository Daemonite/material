/*!
 * waterfall header:
 * header is initially presented as seamed,
 * but then separates to form the step
 *
 * waterfall toggle binds to JavaScript's scroll event
 * since bootstrap (v4.0.0) removes affix.js
 */
var $toolbarWaterfall = $('.toolbar-waterfall');

if ($toolbarWaterfall.length) {
  var toolbarWaterfallOffset = $toolbarWaterfall.offset().top;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > toolbarWaterfallOffset) {
      $toolbarWaterfall.addClass('waterfall');
    } else {
      $toolbarWaterfall.removeClass('waterfall');
    };
  });
};
