// toast
	var toastTimeout,
	    toastTimeoutInner;

	// toast dismiss
		$(document).on('click', '[data-dismiss="toast"]', function(e) {
			e.preventDefault();
			clearTimeout(toastTimeoutInner);
			clearTimeout(toastTimeout);
			$('.fbtn-container').css('margin-bottom', '0');
			$('.toast').removeClass('in');
			toastTimeoutInner = setTimeout(function() {
				$('.toast').find('.in').removeClass('in');
				clearTimeout(toastTimeoutInner);
			}, 300);
		});

	// toast hover
		$('.toast-inner').on('mouseenter', function() {
			clearTimeout(toastTimeoutInner);
			clearTimeout(toastTimeout);
		});

		$('.toast-inner').on('mouseleave', function() {
			toastTimeout = setTimeout(function() {
				$('.fbtn-container').css('margin-bottom', '0');
				$('.toast').removeClass('in');
				clearTimeout(toastTimeout);
			}, 5000);
			toastTimeoutInner = setTimeout(function() {
				$('.toast').find('.in').removeClass('in');
				clearTimeout(toastTimeoutInner);
			}, 5300);
		});

	// toast open
		$(document).on('click', '[data-toggle="toast"]', function(e) {
			e.preventDefault();
			var $thisToast = $($(this).attr('href'));
			clearTimeout(toastTimeoutInner);
			clearTimeout(toastTimeout);
			if ($(window).width() < 768) {
				$('.fbtn-container').css('margin-bottom', $thisToast.outerHeight());
			};
			$('.toast').addClass('in');
			$('.toast').find('.in').removeClass('in');
			$thisToast.addClass('in');
			toastTimeout = setTimeout(function() {
				$('.fbtn-container').css('margin-bottom', '0');
				$('.toast').removeClass('in');
				clearTimeout(toastTimeout);
			}, 5000);
			toastTimeoutInner = setTimeout(function() {
				$('.toast').find('.in').removeClass('in');
				clearTimeout(toastTimeoutInner);
			}, 5300);
		});