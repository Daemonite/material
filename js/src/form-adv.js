// checkbox & radio
	$('.checkbox-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span><span class="circle-icon icon icon-done"></span>');
	});
	$('.radio-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span>');
	});

// floating label
	var allchecked;
	if($('.form-group-label').length) {
		$('.form-group-label .form-control').each(function() {
			floatingLabel($(this));
		});
	}
	$('.form-group-label .form-control').on('change', function() {
		floatingLabel($(this));
	});
	$('.form-group-label .form-control').on('focusin', function() {
		$(this).closest('.form-group-label').addClass('control-focus');
	});
	$('.form-group-label .form-control').on('focusout', function() {
		$(this).closest('.form-group-label').removeClass('control-focus');
	});

	function floatingLabel(input) {
		var parent = input.closest('.form-group-label');
		if(input.val()) {
			parent.addClass('control-highlight');
		} else {
			parent.removeClass('control-highlight');
		}
	}

// icon label
	$('.form-group-icon .form-control').on('focusin', function() {
		$(this).closest('.form-group-icon').addClass('control-focus');
	});
	$('.form-group-icon .form-control').on('focusout', function() {
		$(this).closest('.form-group-icon').removeClass('control-focus');
	});

// textarea autosize
	$('.textarea-autosize').textareaAutoSize();