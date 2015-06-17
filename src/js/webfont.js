// webfont.js
	WebFontConfig = {
		classes: false,
		google: {
			families: ['Roboto:300,300italic,400,400italic,700,700italic']
		},
		// callbacks
			active: function() {
				$('.avoid-fout').each(function(index) {
					$(this).addClass('avoid-fout-done');
				});

				// fixed left/right hand side column padding bottom and width
					contentFixPushCal();

				// footer push
					footerPush();

				// header height
					headerHeightCal();

				// tab indicator
					$('.tab-nav').each(function() {
						tabSwitch($('.nav > li.active', $(this)), null);
					});

				// tile wrap animation
					tileInView();
			},
			inactive: function() {
				$('.avoid-fout').each(function(index) {
					$(this).addClass('avoid-fout-done');
				});

				// tile wrap animation
					tileInView();
			}
	};

	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();