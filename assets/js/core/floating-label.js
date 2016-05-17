/*
 * floating label:
 * when a user engages with the text input field,
 * the floating inline labels move to float above the field
 */
(function ($) {
	'use strict';

	$.fn.floatingLabel = function (option) {
		var parent = this.closest('.form-group-label');

		if (parent.length) {
			switch (option) {
				case 'focusin':
					parent.addClass('control-focus');
					break;
				case 'focusout':
					parent.removeClass('control-focus');
					break;
				default: 
					if (this.val()) {
						parent.addClass('control-highlight');
					} else if (this.is('select') && $('option:first-child', this).html().replace(' ', '') !== '') {
						parent.addClass('control-highlight');
					} else {
						parent.removeClass('control-highlight');
					};
			};
		};

		return this;
	};
}(jQuery));

$(function () {
	'use strict';

	// change floating label states when a page is initially loaded
	$('.form-group-label .form-control').each(function () {
		$(this).floatingLabel('change');
	});

	// change floating label states when a user engages with the text input field
	$(document).on('change', '.form-group-label .form-control', function () {
		$(this).floatingLabel('change');
	});

	$(document).on('focusin', '.form-group-label .form-control', function () {
		$(this).floatingLabel('focusin');
	});

	$(document).on('focusout', '.form-group-label .form-control', function () {
		$(this).floatingLabel('focusout');
	});
});
