// tile close
	function tReset() {
		$('.tile-collapse.active .tile-active-show').collapse('hide');
		$('.tile-collapse.active').removeClass('active');
	}

// tile toggle
	function tileToggle(thisTile) {
		if (thisTile.hasClass('active')) {
			tReset();
		} else {
			tReset();
			$('.tile-active-show', thisTile).collapse('show');
			thisTile.addClass('active');
		}
	}