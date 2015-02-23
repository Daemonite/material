// menu close
	$('html').on('click', function(e) {
		if ($('body').hasClass('menu-open') && !$(e.target).is('.fbtn-container *, .header *, .menu *')) {
			mReset();
		};
	});

	function mReset() {
		$('body').removeClass('menu-open');
		$('.header .nav > li.active').removeClass('active');
		$('.menu.open').removeClass('open');
	}

// menu open
	$('.header .nav > li > a').on('click', function(e) {
		e.preventDefault();
		var $this = $(this),
		    $thisLi = $this.parent('li'),
		    $thisMenu = $($this.attr('href'));
		if ($thisLi.hasClass('active')) {
			$('body').removeClass('menu-open');
			$thisLi.removeClass('active');
			$thisMenu.removeClass('open');
		} else {
			$('body').addClass('menu-open');
			$('.header .nav > li.active').removeClass('active');
			$('.menu.open').removeClass('open');
			$thisLi.addClass('active');
			$thisMenu.addClass('open');
			if ($thisMenu.hasClass('menu-search')) {
				$('#menu-search').focus();
			};
		}
	});