/*
 * activate textarea-autosize for material
 * requires textarea-autosize js (/assets/js/addons/textarea-autosize.js)
 */
$(function () {
	'use strict';

	if ($('.textarea-autosize').length && (typeof $.fn.textareaAutoSize === 'undefined')) {
		throw new Error('Material\'s JavaScript requires textarea-autosize.js');
	} else if ($('.textarea-autosize').length) {
		$('.textarea-autosize').textareaAutoSize();
	};
});
