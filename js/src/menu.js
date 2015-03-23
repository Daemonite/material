// menu close
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($('body').hasClass('menu-open') && !$target.is('.fbtn-container *, .menu *')) {
			mReset();
		}
	});
	
	function mReset() {
		$('body').removeClass('menu-open');
		$('.menu-toggle').closest('li.active').removeClass('active');
		$('.menu.open').removeClass('open');
	}

// menu open
	$(document).on('click', '.menu-toggle', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
		    $thisLi = $this.closest('li'),
		    $thisMenu = $($this.attr('href'));

		if ($thisLi.hasClass('active')) {
			$('body').removeClass('menu-open');
			$thisLi.removeClass('active');
			$thisMenu.removeClass('open');
		} else {
			$('body').addClass('menu-open');
			$('.menu-toggle').closest('li.active').removeClass('active');
			$('.menu.open').removeClass('open');
			$thisLi.addClass('active');
			$thisMenu.addClass('open');
			if ($thisMenu.hasClass('menu-search')) {
				$('.menu-search-focus').focus();
			};
		}
	});