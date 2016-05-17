/*
 * tab indicator
 * requires bootstrap's tab js (/assets/js/addons/bootstrap.js)
 */
(function ($) {
	'use strict';

	$.fn.tabSwitch = function (oldTab) {
		var $this = $(this),
		    $thisNav = $this.closest('.tab-nav'),
		    thisLeft = $this.offset().left,
		    thisNavLeft = $thisNav.offset().left,
		    thisNavWidth = $thisNav.outerWidth();

		if (!$('.tab-nav-indicator', $thisNav).length) {
			$thisNav.append('<div class="tab-nav-indicator"></div>');
		};

		var $thisNavIndicator = $('.tab-nav-indicator', $thisNav);

		if (oldTab !== undefined && oldTab[0] !== undefined) {
			var oldTabLeft = oldTab.offset().left;

			$thisNavIndicator.css({
				left: (oldTabLeft - thisNavLeft),
				right: (thisNavLeft + thisNavWidth - oldTabLeft - oldTab.outerWidth())
			});

			if (oldTab.offset().left > thisLeft) {
				$thisNavIndicator.addClass('reverse');
			};
		};

		$thisNavIndicator.addClass('animate').css({
			left: (thisLeft - thisNavLeft),
			right: (thisNavLeft + thisNavWidth - thisLeft - $this.outerWidth())
		}).one($.support.transition.end, function () {
			$thisNavIndicator.removeClass('animate reverse');
		});

		return this;
	}
}(jQuery));

$(function () {
	'use strict';

	$(document).on('show.bs.tab', '.tab-nav a[data-toggle="tab"]', function (e) {
		$(e.target).tabSwitch($(e.relatedTarget));
	});
});
