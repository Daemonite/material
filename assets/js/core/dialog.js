/*
 * dialogs are displayed centered vertically on the screen
 * requires bootstrap's modal js (/assets/js/addons/bootstrap.js)
 */
$(function () {
	'use strict';

	$(document).on('hidden.bs.modal', '.modal-va-middle', function () {
		$(this).removeClass('modal-va-middle-show');
	});

	$(document).on('show.bs.modal', '.modal-va-middle', function () {
		$(this).addClass('modal-va-middle-show');
	});
});
