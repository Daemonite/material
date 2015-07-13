// header waterfall
	$(function () {
		$(window).on('scroll', function() {
			$('.header-waterfall').each(function () {
				var $this = $(this);

				if (window.pageYOffset > 0) {
					$this.addClass('header-waterfall-fixed');
				} else {
					$this.removeClass('header-waterfall-fixed');
				}
			});
		});
	});
