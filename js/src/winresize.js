// window resize
	on_resize(function() {
		// fixed left/right hand side column padding bottom and width
			if ($('.content-fix').length) {
				contentFixPushCal();
			};

		// footer push
			footerPush();

		// header height
			headerHeightCal();

		// tab switch
			$('.tab-nav').each(function() {
				tabSwitch($('.nav > li.active', $(this)), null);
			});

		// tile in view
			if ($('.tile-wrap-animation:not(.isinview)').length) {
				tileInView();
			};
	})();