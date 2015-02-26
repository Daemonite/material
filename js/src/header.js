// header affix
	var $header = $('.header');

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > $header.height()) {
			$header.addClass('fixed');
		} else {
			$header.removeClass('fixed');
		}
	});