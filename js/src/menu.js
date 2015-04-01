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

// menu toggle collapse
	if ($('.menu-collapse').length) {
		$('.menu-collapse').each(function(index) {
			var $this = $(this);
			if ($this.hasClass('in')) {
				$this.attr('data-height', $this.height());
			};
		});
	};

	$(document).on('show.bs.collapse', '.menu-collapse', function() {
		var $this = $(this),
		    $thisLi = $this.closest('li'),
		    height,
		    offset = $thisLi.offset().top - window.pageYOffset;

		if ($this.attr('data-height') == null) {
			$this.attr('data-height', $this.height());
		};

		height = parseInt($this.attr('data-height'));

		if (height + offset > window.innerHeight) {
			$this.closest('.menu-wrap').animate({
				scrollTop: height
			}, 300);
		};
	});