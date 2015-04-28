// menu backdrop
	if ($('.menu').length && !$('.menu-backdrop').length) {
		$('body').append('<div class="menu-backdrop"></div>');
	};

	var menuBD = document.getElementsByClassName('menu-backdrop')[0],
	    menuBDTap = new Hammer(menuBD);

	menuBDTap.on('tap', function(e) {
		if ($('body').hasClass('menu-open')) {
			mReset();
		};
	});

// menu close
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($('body').hasClass('menu-open') && !$target.is('.fbtn-container *, .menu *')) {
			mReset();
		};
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
			mReset();
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