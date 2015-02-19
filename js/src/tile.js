// tile close
	$('html').on('click', function(e) {
		if (!$(e.target).is('.header *, .menu *, .tile-action *, .tile-collapse *') || $(e.target).is('[data-dismiss="tile"]')) {
			tReset();
		};
	});

	function tReset() {
		$('.tile-collapse.active .tile-active-show').collapse('hide');
		$('.tile-collapse.active').removeClass('active');
	}

// tile open
	$('html').on('click', '.tile-toggle', function(e) {
		if (!$(e.target).is('.tile-action *')) {
			var $this = $(this),
			    $thisTile = $this.parents('.tile-collapse');
			if ($thisTile.hasClass('active')) {
				tReset();
			} else {
				tReset();
				$('.tile-active-show', $thisTile).collapse('show');
				$thisTile.addClass('active');
			}
		};
	});