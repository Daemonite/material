// header
	var $header = $('.header'),
	    headerHeight;

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