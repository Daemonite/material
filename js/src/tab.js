// tab index
	$('.tab-nav').each(function() {
		$('a[data-toggle="tab"]', $(this)).each(function(index) {
			$(this).attr('data-tab-index', index);
		});
	});

// tab switch
	$('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		var $newTab = $(e.target),
		    $oldTab = $(e.relatedTarget);
		if ($newTab.attr('data-tab-index') < $oldTab.attr('data-tab-index')) {
			$newTab.addClass('from-right');
			$oldTab.addClass('to-left');
			setTimeout(function() {
				$newTab.removeClass('from-right');
				$oldTab.removeClass('to-left');
			}, 300);
		};
	});