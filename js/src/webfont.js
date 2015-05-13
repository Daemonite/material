// webfont.js
	WebFontConfig = {
		classes: false,
		fontactive: function() {
			// fixed left/right hand side column padding bottom and width
				contentFixPushCal();

			// footer push
				footerPush();

			// header height
				headerHeightCal();
		},
		google: {
			families: ['Roboto:300,300italic,400,400italic,700,700italic']
		}
	};

	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();