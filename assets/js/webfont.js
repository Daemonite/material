// webfont.js
	WebFontConfig = {
		classes: false,
		google: {
			families: ['Roboto:300,300italic,400,400italic,500,500italic']
		},
		// callbacks
			active: function() {
				$('.avoid-fout').each(function(index) {
					$(this).addClass('avoid-fout-done');
				});
			},
			inactive: function() {
				$('.avoid-fout').each(function(index) {
					$(this).addClass('avoid-fout-done');
				});
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
