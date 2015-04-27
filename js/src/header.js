// header
	var $header = $('.header'),
	    headerHeight,
	    headerNavMinWidth = 0;

// header affix
	$(window).on('scroll', function() {
		if (window.pageYOffset > headerHeight) {
			$header.addClass('fixed');
		} else {
			$header.removeClass('fixed');
		}
	});

// header height
	function headerHeightCal() {
		headerHeight = $header.height();
	}

// header nav positioning
	if ($('.header-nav-scroll').length) {
		$('.header-nav-scroll .nav > li').each(function(index) {
			var $this = $(this);

			if (index < 3) {
				headerNavMinWidth += $this.width();
			} else {
				return false;
			}
		});
	};

	function headerNavPos() {
		var $headerNav = $('.header-nav-scroll');

		$headerNav.removeClass('pull-down');

		if ($headerNav.width() < headerNavMinWidth) {
			$headerNav.addClass('pull-down');
		} else {
			$headerNav.removeClass('pull-down');
		}
	}