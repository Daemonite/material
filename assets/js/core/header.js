/*
 * waterfall header:
 * header is initially presented as seamed,
 * but then separates to form the step
 */
$(function () {
	'use strict';

	if ($('.header-waterfall').length) {
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 1) {
				$('.header-waterfall').addClass('affix');
			} else {
				$('.header-waterfall').removeClass('affix');
			};
		});
	};
});
