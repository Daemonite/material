// btn active
	$('.btn').on('mousedown', function() {
		var $this = $(this);
		if (!$this.hasClass('btn-active')) {
			$this.addClass('btn-active');
			setTimeout(function() {
				$this.removeClass('btn-active');
			}, 450);
		}
	})