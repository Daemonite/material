// tab indicator
	$('.tab-nav').each(function() {
		$(this).append('<div class="tab-nav-indicator"></div>');
		tabSwitch($('.nav > li.active', $(this)), null);
	});

// tab switch
	$('.tab-nav a[data-toggle="tab"]').on('show.bs.tab', function(e) {
	 	tabSwitch($(e.target), $(e.relatedTarget));
	});

	function tabSwitch(newTab, oldTab) {
		var $nav = newTab.closest('.tab-nav'),
		    $navIndicator = $('.tab-nav-indicator', $nav),
		    navOffset = $nav.offset().left,
	 	    navWidth = $nav.width(),
	 	    newTabOffset = newTab.offset().left,
	 	    newTabWidth = newTab.outerWidth();

		if (oldTab != null && oldTab.offset().left > newTabOffset) {
			$navIndicator.addClass('reverse');
			setTimeout(function() {
				$navIndicator.removeClass('reverse');
			}, 450);
		};

	 	$navIndicator.css({
	 		left: (newTabOffset - navOffset),
	 		right: navOffset + navWidth - newTabOffset - newTabWidth
	 	});
	}