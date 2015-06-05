// menu close
	$(document).on('click touchend', function(e) {
		var $target = $(e.target);

		if ($('.menu.open').length && !$target.is('.fbtn-container *, .menu-scroll *')) {
			mReset();
		};
	});
	
	mReset = function () {
		var $bd = $('body');

		if ($bd.hasClass('nav-drawer-open')) {
			$bd.removeClass('nav-drawer-open');
		};

		$('[data-toggle="menu"]').closest('.active').removeClass('active');
		$('.menu.open').removeClass('open');
	}

// menu open
	$(document).on('click', '[data-toggle="menu"]', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
		    $thisLi = $this.parent(),
		    $thisMenu = $(getTargetFromTrigger($this));

		if ($thisLi.hasClass('active')) {
			mReset();
		} else {
			mReset();

			if ($thisMenu.hasClass('nav-drawer')) {
				$('body').addClass('nav-drawer-open');
			}

			$thisLi.addClass('active');
			$thisMenu.addClass('open');
		}
	});