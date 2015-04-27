// toast
	var toastTimeout,
	    toastTimeoutInner;

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

	function toastHide(timerOne) {
		clearTimeout(toastTimeoutInner);
		clearTimeout(toastTimeout);

		var timerTwo = timerOne + 300;

		toastTimeout = setTimeout(function() {
			$('.toast').removeClass('toast-show');
			$('.fbtn-container').css('margin-bottom', '');
		}, timerOne);

		toastTimeoutInner = setTimeout(function() {
			$('.toast-toggled').tooltip('hide').removeClass('toast-toggled');
		}, timerTwo);
	}

// toast hover
	$(document).on('mouseenter', '.toast', function() {
		clearTimeout(toastTimeoutInner);
		clearTimeout(toastTimeout);
	});

	$(document).on('mouseleave', '.toast', function() {
		toastHide(5000);
	});

// toast show
	$(document).on('click', '[data-toggle="toast"]', function() {
		var $this = $(this);

		if (!$('.toast').length) {
			$('body').append('<div class="toast"></div>');
		};

		if (!$this.hasClass('toast-toggled')) {
			$('.toast-toggled').tooltip('hide').removeClass('toast-toggled');
			$this.tooltip('show').addClass('toast-toggled');
		};
	});

	$(document).on('shown.bs.tooltip', '[data-toggle="toast"]', function() {
		var $this = $(this);

		$('.toast').addClass('toast-show');

		if ($(window).width() < 768 && $('.fbtn-container').length) {
			$('.fbtn-container').css('margin-bottom', $('.toast').outerHeight());
		};

		toastHide(5000);
	});