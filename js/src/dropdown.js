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
		};
	});
