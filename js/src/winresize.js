// window smart resize
	on_resize = function (c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

	on_resize(function() {
		// tile in view
			if ($('.tile-wrap-animation:not(.isinview)').length) {
				tileInView();
			};
	})();