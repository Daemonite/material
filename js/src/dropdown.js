// dropdown menu max-width
	$('.dropdown').on('show.bs.dropdown', function () {
		$('.dropdown-menu', $(this)).css('max-width', $(window).width() - $('.container').css('padding-left').replace('px', '') * 4);
	});