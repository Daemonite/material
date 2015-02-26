// $('html') on click
	$('html').on('click', function(e) {
		var $target = $(e.target);

		if ($('body').hasClass('menu-open') && !$target.is('.fbtn-container *, .menu *')) {
			mReset();
		} else if ($target.attr('data-dismiss') === 'tile' || !$target.is('.tile-collapse *')) {
			tReset();
		};

		if ($target.is('.tile-toggle, .tile-toggle *') && !$target.is('.tile-toggle-false, .tile-toggle-false *')) {
			tileToggle($target.parents('.tile-collapse'));
		};
	});
