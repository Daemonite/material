// fixed left/right hand side column affix
	var contentPadding = 0,
	    footerOffset = 0;

	if ($('.content').length) {
		contentPadding = parseInt($('.content').css('padding-bottom').replace('px', ''));
	};

	$(window).on('scroll', function() {
		$('.content-fix').each(function(index) {
			if ($(this).outerHeight() < $(this).closest('.row-fix').outerHeight()) {
				contentFix($(this));
			}
		});
	});

	contentFix = function (content) {
		var scrolled = window.innerHeight + window.pageYOffset;

		if (window.pageYOffset >= (content.offset().top - headerHeight)) {
			if ((content.is('[class*="col-xx"]')) || (content.is('[class*="col-xs"]') && $(window).width() >= 480) || (content.is('[class*="col-sm"]') && $(window).width() >= 768) || (content.is('[class*="col-md"]') && $(window).width() >= 992) || (content.is('[class*="col-lg"]') && $(window).width() >= 1440)) {
				if (!content.hasClass('fixed')) {
					content.addClass('fixed');
					$('.content-fix-wrap', content).scrollTop(0);
				};
				if (footerOffset != 0 && footerOffset <= scrolled) {
					$('.content-fix-inner', content).css('padding-bottom', (scrolled - footerOffset + contentPadding));
				};
			};
		} else {
			content.removeClass('fixed');
			$('.content-fix-inner', content).css('padding-bottom', '');
		}
	}

// fixed left/right hand side column padding bottom and width
	contentFixPushCal = function () {
		$('.content-fix-scroll').each(function(index) {
			$(this).css('width', $(this).closest('.content-fix').outerWidth());
			$('.content-fix-inner', $(this)).css('width', $(this).closest('.content-fix').width());
		});

		if ($('.footer').length) {
			footerOffset = $('.footer').offset().top;
		};
	}
// default datepicker
	$('.datepicker-adv-default').each(function(index) {
		var datepickerAdv = $(this).pickadate({container: 'body'}),
		    datepickerApi = datepickerAdv.pickadate('picker');

		datepickerApi.on({
			close: function() {
				$(document.activeElement).blur();
			},
			open: function() {
				datepickerApi.set('select', datepickerApi.get(), {format: 'd/m/yyyy'});
			}
		});
	});
// dropdown menu hide
	$(document).on('hide.bs.dropdown', '.dropdown', function() {
		// header affix
			if ($(this).parents('.header').length) {
				$('header').removeClass('open');
			};
	});
		
// dropdown menu show
	$(document).on('show.bs.dropdown', '.dropdown', function() {
		var $dropdownMenu = $('.dropdown-menu', $(this)),
		    $dropdownToggle = $('[class*="dropdown-toggle"]', $(this)),
		    dropdownPadding = $('a', $dropdownMenu).css('padding-left').replace('px', ''),
		    dropdownWidth;

		if ($dropdownMenu.length && $dropdownToggle.length) {
			// dropdown menu max width
				if ($dropdownMenu.hasClass('dropdown-menu-right') || $dropdownMenu.parents('.nav.pull-right').length) {
					dropdownWidth = $dropdownToggle.offset().left + $dropdownToggle.outerWidth() - dropdownPadding;
				} else {
					dropdownWidth = window.innerWidth - $dropdownToggle.offset().left - dropdownPadding;
				}

				$dropdownMenu.css('max-width', dropdownWidth);

			// header affix
				if ($dropdownMenu.parents('.header').length) {
					$('header').addClass('open');
				};
		};
	});

// close menu and/or tile if esc key is pressed
	$(document).keyup(function(e) {
		if (e.which == '27') {
			if ($('.menu.open').length) {
				mReset();
			} else if (!$('body').hasClass('modal-open')) {
				tReset();
			}
		};
	});
// footer push
	footerPush = function () {
		if ($('.footer').length) {
			$('body').css('margin-bottom', $('.footer').outerHeight());
		};
	}
// checkbox & radio
	$('.checkbox-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span><span class="circle-icon icon icon-done"></span>');
	});

	$('.radio-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span>');
	});

// floating label
	if($('.form-group-label').length) {
		$('.form-group-label .form-control').each(function() {
			floatingLabel($(this));
		});
	};

	$(document).on('change', '.form-group-label .form-control', function() {
		floatingLabel($(this));
	});

	$(document).on('focusin', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').removeClass('control-focus');
	});

	function floatingLabel(input) {
		var parent = input.closest('.form-group-label');

		if(input.val()) {
			parent.addClass('control-highlight');
		} else {
			parent.removeClass('control-highlight');
		}
	}

// icon label
	$(document).on('focusin', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').removeClass('control-focus');
	});

// switch
	$(document).on('click', '.switch-toggle', function() {
		var $this = $(this);

		if (!$this.hasClass('switch-toggle-on')) {
			$this.addClass('switch-toggle-on');
			setTimeout(function() {
				$this.removeClass('switch-toggle-on');
			}, 300);
		};
	});


	$('.textarea-autosize').textareaAutoSize();
// get target from trigger
	getTargetFromTrigger = function(trigger) {
		var href;
		var target = trigger.attr('data-target')
		    || (href = trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

		return target;
	}
// header
	var $header = $('.header'),
	    headerHeight,
	    headerNavMinWidth = 0;

// header affix
	$(window).on('scroll', function() {
		if ($('.header').length) {
			if (window.pageYOffset > headerHeight) {
				$header.addClass('fixed');
			} else {
				$header.removeClass('fixed');
			}
		};
	});

// header height
	headerHeightCal = function () {
		if ($('.header').length) {
			headerHeight = $header.height();
		};
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

	headerNavPos  = function () {
		var $headerNav = $('.header-nav-scroll');

		$headerNav.removeClass('pull-down');

		if ($headerNav.width() < headerNavMinWidth) {
			$headerNav.addClass('pull-down');
		} else {
			$headerNav.removeClass('pull-down');
		}
	}
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
	
	mReset = function () {
		var $bd = $('body');

		if ($bd.hasClass('menu-open')) {
			$bd.removeClass('menu-open');
		};

		if ($bd.hasClass('nav-drawer-open')) {
			$bd.removeClass('nav-drawer-open');
		};

		$('.menu-toggle').closest('.active').removeClass('active');

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
		    $thisLi = $this.parent(),
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

			if ($('.menu-search-focus', $thisMenu).length) {
				$('.menu-search-focus', $thisMenu).focus();
			};
		}
	});
// modal iframe
	$(document).on('click', '.modal-close-iframe', function(e) {
		e.preventDefault();

		window.parent.closeModal(getTargetFromTrigger($(this)));
	});

	window.closeModal = function(iframe) {
		$(iframe).modal('hide');
	};
// default sortable list
	$('.sortable-list').sortable({
		draggable: '.sortable-item',
		ghostClass: 'sortable-ghost',
		handle: '.sortable-handle'
	});
// tab switch
	tabSwitch = function(newTab, oldTab) {
		var $nav = newTab.closest('.tab-nav'),
		    $navIndicator = $('.tab-nav-indicator', $nav),
		    navOffset = $nav.offset().left,
		    navWidth = $nav.width(),
		    newTabOffset = newTab.offset().left,
		    newTabWidth = newTab.outerWidth();

		if (oldTab != null && oldTab.offset().left > newTabOffset) {
			$navIndicator.addClass('reverse');
			setTimeout(function() {
				$navIndicator.removeClass('reverse');
			}, 450);
		};

		$navIndicator.css({
			left: (newTabOffset - navOffset),
			right: navOffset + navWidth - newTabOffset - newTabWidth
		});
	}

	$(document).on('show.bs.tab', '.tab-nav a[data-toggle="tab"]', function(e) {
	 	tabSwitch($(e.target), $(e.relatedTarget));
	});

// tab switch indicator
	$('.tab-nav').each(function() {
		$(this).append('<div class="tab-nav-indicator"></div>');
		tabSwitch($('.nav > li.active', $(this)), null);
	});
// tile
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($target.is('[data-toggle="tile"], [data-toggle="tile"] *') && !$target.is('[data-ignore="tile"], [data-ignore="tile"] *')) {
			var $trigger = $target.closest('[data-toggle="tile"]');
			if ($trigger.attr('data-parent') != null) {
				$($trigger.attr('data-parent')).find('.tile-active-show').collapse('hide');
			};
			$(getTargetFromTrigger($trigger)).collapse('toggle');
		} else if ($target.is('[data-dismiss="tile"]')) {
			$target.closest('.tile-collapse').find('.tile-active-show').collapse('hide');
		} else if (!$target.is('.tile-collapse, .tile-collapse *')) {
			tReset();
		};
	});

	tReset = function () {
		$('.tile-collapse.active').each(function(index) {
			var $collapse = $('.tile-active-show', $(this));
			if (!$collapse.hasClass('tile-active-show-still')) {
				$collapse.collapse('hide');
			};
		});
	}

// tile hide
	$(document).on('hide.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').css({
			'-webkit-transition-delay': '',
			'transition-delay': ''
		}).removeClass('active');
	});

// tile show
	$(document).on('show.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').css({
			'-webkit-transition-delay': '',
			'transition-delay': ''
		}).addClass('active');
	});

// tile wrap animation
	$('.tile-wrap-animation').each(function(index) {
		var tileAnimationDelay = 0,
		    tileAnimationTransform = 100;

		$('> .tile', $(this)).each(function(index) {
			$(this).css({
				'-webkit-transform': 'translate(0, ' + tileAnimationTransform + '%)',
				'-ms-transform': 'translate(0, ' + tileAnimationTransform + '%)',
				'transform': 'translate(0, ' + tileAnimationTransform + '%)',
				'-webkit-transition-delay': tileAnimationDelay + 's',
				'transition-delay': tileAnimationDelay + 's'
			});

			tileAnimationDelay = tileAnimationDelay + 0.1;
			tileAnimationTransform = tileAnimationTransform + 10;
		});
	});

	$(window).on('DOMContentLoaded scroll', function() {
		tileInView();
	});

	tileInView = function () {
		$('.tile-wrap-animation:not(.isinview)').each(function() {
			var $this = $(this);
			if (tileInViewCheck($this) && (!$this.hasClass('avoid-fout') || ($this.hasClass('avoid-fout') && $this.hasClass('avoid-fout-done'))) && (!$this.hasClass('el-loading') || ($this.hasClass('el-loading') && $this.hasClass('el-loading-done'))) && !$this.parents('.avoid-fout:not(.avoid-fout-done)').length && !$this.parents('.el-loading:not(.el-loading-done)').length) {
				$this.addClass('isinview');
			};
		});
	}

	tileInViewCheck = function (tile) {
		tile = tile[0];

		var rect = tile.getBoundingClientRect();

		return (
			rect.top <= window.innerHeight &&
			rect.right >= 0 &&
			rect.bottom >= 0 &&
			rect.left <= window.innerWidth
		);
	}
// toast
	var toastTimeout;

	$('[data-toggle="toast"]').tooltip({
		animation: false,
		container: '.toast',
		html: true,
		placement: 'bottom',
		template: '<div class="tooltip"><div class="toast-inner tooltip-inner"></div></div>',
		trigger: 'manual'
	});

// toast dismiss
	$(document).on('click', '[data-dismiss="toast"]', function(e) {
		e.preventDefault();
		toastHide(0);
	});

	toastHide = function (timer, toast) {
		clearTimeout(toastTimeout);

		toastTimeout = setTimeout(function() {
			$('.toast').removeClass('toast-show');

			if ($('.fbtn-container').length) {
				$('.fbtn-container').css('margin-bottom', '');
			};

			$('.toast-inner').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
				$('.toast-toggled').tooltip('hide').removeClass('toast-toggled');

				if (toast !== null && toast !== undefined) {
					toast.tooltip('show').addClass('toast-toggled');
				} else {
					$('.toast').remove();
				}
			});
		}, timer);
	}

// toast hover
	$(document).on('mouseenter', '.toast', function() {
		clearTimeout(toastTimeout);
	});

	$(document).on('mouseleave', '.toast', function() {
		toastHide(6000);
	});

// toast show
	$(document).on('click', '[data-toggle="toast"]', function() {
		var $this = $(this);

		if (!$('.toast').length) {
			$('body').append('<div class="toast"></div>');
		};

		if (!$this.hasClass('toast-toggled')) {
			if ($('.toast').hasClass('toast-show')) {
				toastHide(0, $this);
			} else {
				$this.tooltip('show').addClass('toast-toggled');
			}
		};
	});

	$(document).on('shown.bs.tooltip', '[data-toggle="toast"]', function() {
		var $this = $(this);

		$('.toast').addClass('toast-show');

		if ($(window).width() < 768 && $('.fbtn-container').length) {
			$('.fbtn-container').css('margin-bottom', $('.toast').outerHeight());
		};

		$('.toast-inner').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
			toastHide(6000);
		});
	});
	Waves.displayEffect({
		duration: 900
	});
// webfont.js
	WebFontConfig = {
		classes: false,
		fontactive: function() {
			$('.avoid-fout').each(function(index) {
				$(this).addClass('avoid-fout-done');
			});

			// fixed left/right hand side column padding bottom and width
				contentFixPushCal();

			// footer push
				footerPush();

			// header height
				headerHeightCal();

			// tile wrap animation
				tileInView();
		},
		fontinactive: function() {
			$('.avoid-fout').each(function(index) {
				$(this).addClass('avoid-fout-done');
			});

			// fixed left/right hand side column padding bottom and width
				contentFixPushCal();

			// footer push
				footerPush();

			// header height
				headerHeightCal();

			// tile wrap animation
				tileInView();
		},
		google: {
			families: ['Roboto:300,300italic,400,400italic,700,700italic']
		}
	};

	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
// window smart resize
	on_resize = function (c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

	on_resize(function() {
		// fixed left/right hand side column padding bottom and width
			contentFixPushCal();

		// footer push
			footerPush();

		// header height
			headerHeightCal();

		// header nav positioning
			if ($('.header-nav-scroll').length) {
				headerNavPos();
			};

		// tab switch
			$('.tab-nav').each(function() {
				tabSwitch($('.nav > li.active', $(this)), null);
			});

		// tile in view
			if ($('.tile-wrap-animation:not(.isinview)').length) {
				tileInView();
			};
	})();