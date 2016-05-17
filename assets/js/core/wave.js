/*
 * activate waves for material
 * requires waves js (/assets/js/addons/wave.js)
 */
$(function () {
	'use strict';

	if ($('.waves-attach').length && (typeof Waves === 'undefined')) {
		throw new Error('Material\'s JavaScript requires waves.js');
	} else if ($('.waves-attach').length) {
		Waves.attach('.waves-attach');

		Waves.init({
			duration: 600
		});
	};
});
