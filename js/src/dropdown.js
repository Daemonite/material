// dropdown menu max width
	$(document).on('show.bs.dropdown', '.dropdown', function () {
		var $dropdownMenu = $('.dropdown-menu', $(this)),
		    $dropdownToggle = $('[class*="dropdown-toggle"]', $(this)),
		    dropdownWidth;

		if ($dropdownMenu.length && $dropdownToggle.length) {
			if ($dropdownMenu.hasClass('dropdown-menu-right') || $dropdownMenu.parents('.dropdown.pull-right').length || $dropdownMenu.parents('.nav.pull-right').length) {
				dropdownWidth = $dropdownToggle.offset().left + $dropdownToggle.outerWidth();
			} else {
				dropdownWidth = window.innerWidth - $dropdownToggle.offset().left;
			}

			$dropdownMenu.css('max-width', dropdownWidth);
		};
	});
