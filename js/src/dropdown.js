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

		// dropdown menu max width
			if ($dropdownMenu.hasClass('dropdown-menu-right') || $dropdownMenu.parents('.nav.pull-right').length) {
				dropdownWidth = $dropdownToggle.offset().left + $dropdownToggle.outerWidth() - dropdownPadding;
			} else {
				dropdownWidth = $(window).width() - $dropdownToggle.offset().left - dropdownPadding;
			}

			$dropdownMenu.css('max-width', dropdownWidth);

		// header affix
			if ($dropdownMenu.parents('.header').length) {
				$('header').addClass('open');
			};
	});
