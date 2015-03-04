// fixed left/right hand side column affix
	var contentFixPush,
	    contentFixPushIni;

	if ($('.content').length) {
		contentFixPushIni = parseInt($('.content').css('padding-bottom').replace('px', ''));
	};

	$(window).on('scroll', function() {
		$('.content-fix').each(function(index) {
			contentFix($(this));
		});
	});

	function contentFix(content) {
		if ($(window).scrollTop() > (content.offset().top - $('.header').height())) {
			if (!content.hasClass('fixed')) {
				if ((content.is('[class*="col-xx"]')) || (content.is('[class*="col-xs"]') && $(window).width() >= 480) || (content.is('[class*="col-sm"]') && $(window).width() >= 768) || (content.is('[class*="col-md"]') && $(window).width() >= 992) || (content.is('[class*="col-lg"]') && $(window).width() >= 1440)) {
					content.addClass('fixed');
					$('.content-fix-inner', content).css('padding-bottom', contentFixPush).scrollTop(0);
					$('.content-fix-wrap', content).scrollTop(0);
				};
			};
		} else {
			content.removeClass('fixed');
			$('.content-fix-inner', content).css('padding-bottom', '');
		}
	}

// fixed left/right hand side column padding bottom and width
	function contentFixPushCal() {
		$('.content-fix-scroll').each(function(index) {
			$(this).css('width', $(this).closest('.content-fix').outerWidth());
			$('.content-fix-inner', $(this)).css('width', $(this).closest('.content-fix').width());
		});
		if ($('.footer').length) {
			contentFixPush = contentFixPushIni + $('.footer').outerHeight();
		} else {
			contentFixPush = contentFixPushIni;
		}
	}