// menu backdrop
	if ((($('html').hasClass('touch') && $('.menu').length) || $('.nav-drawer').length) && !$('.menu-backdrop').length) {
		$('body').append('<div class="menu-backdrop"></div>');
	};

	var menuBD = document.getElementsByClassName('menu-backdrop')[0];

	if (menuBD !== undefined) {
		var menuBDTap = new Hammer(menuBD);

		menuBDTap.on('tap', function(e) {
			if ($('.menu.open').length) {
				mReset();
			};
		});
	};

// menu close
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($('.menu.open').length && !$target.is('.fbtn-container *, .menu *')) {
			mReset();
		};
	});
	
	function mReset() {
		var $bd = $('body');

		if ($bd.hasClass('menu-open')) {
			$bd.removeClass('menu-open');
		};

		if ($bd.hasClass('nav-drawer-open')) {
			$bd.removeClass('nav-drawer-open');
		};

		$('.menu-toggle').closest('li.active').removeClass('active');

		if ($('.menu.open .menu-search-focus').length) {
			$('.menu.open .menu-search-focus').blur();
		};

		$('.menu.open').removeClass('open');
	}

// menu open
	$(document).on('click', '.menu-toggle', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
		    $thisLi = $this.closest('li'),
		    $thisMenu = $(getTargetFromTrigger($this));

		if ($thisLi.hasClass('active')) {
			mReset();
		} else {
			mReset();

			if ($thisMenu.hasClass('nav-drawer')) {
				$('body').addClass('nav-drawer-open');
			} else {
				$('body').addClass('menu-open');
			}

			$thisLi.addClass('active');
			$thisMenu.addClass('open');

			if ($('.menu.open .menu-search-focus').length) {
				$('.menu.open .menu-search-focus').focus();
			};
		}
	});

// menu toggle collapse
	if ($('.menu-collapse').length) {
		$('.menu-collapse').each(function(index) {
			var $this = $(this),
			    $thisLi = $this.closest('li');
			if ($this.hasClass('in')) {
				$thisLi.attr('data-height', $thisLi.height());
			};
		});
	};

	$(document).on('show.bs.collapse', '.menu-collapse', function() {
		var $this = $(this),
		    $thisLi = $this.closest('li'),
		    height,
		    offset = $thisLi.offset().top - window.pageYOffset,
		    winHeight = window.innerHeight;

		if ($thisLi.attr('data-height') == null) {
			$thisLi.attr('data-height', $this.height() + $('> a', $thisLi).outerHeight());
		};

		height = parseInt($thisLi.attr('data-height'));

		if (height + offset > winHeight) {
			var $thisMenu = $this.closest('.menu-wrap');

			$thisMenu.animate({
				scrollTop: height + offset - winHeight + $thisMenu.scrollTop()
			}, 300);
		};
	});