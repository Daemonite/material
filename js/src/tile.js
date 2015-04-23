// tile
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($target.is('[data-toggle="tile"], [data-toggle="tile"] *') && !$target.is('[data-ignore="tile"], [data-ignore="tile"] *')) {
			var $trigger = $target.closest('[data-toggle="tile"]');
			if ($trigger.attr('data-parent') != null) {
				$($trigger.attr('data-parent')).find('.tile-active-show').collapse('hide');
			};
			$(getTargetFromTrigger($trigger)).collapse('toggle');
		} else if ($target.is('[data-dismiss="tile"]')) {
			$target.closest('.tile-collapse').find('.tile-active-show').collapse('hide');
		} else if (!$target.is('.tile-collapse, .tile-collapse *')) {
			tReset();
		};
	});

	function tReset() {
		$('.tile-collapse.active').each(function(index) {
			var $collapse = $('.tile-active-show', $(this));
			if (!$collapse.hasClass('tile-active-show-still')) {
				$collapse.collapse('hide');
			};
		});
	}

// tile hide
	$(document).on('hide.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').removeClass('active');
	});

// tile show
	$(document).on('show.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').addClass('active');
	});

// tile wrap animation
	var tileAnimationDelay = 0,
	    tileAnimationTransform = 100;

	$('.tile-wrap-animation .tile').each(function(index) {
		$(this).css({
			'-webkit-transform': 'translate(0, ' + tileAnimationTransform + '%)',
			'-ms-transform': 'translate(0, ' + tileAnimationTransform + '%)',
			'transform': 'translate(0, ' + tileAnimationTransform + '%)',
			'-webkit-transition-delay': tileAnimationDelay + 's',
			'transition-delay': tileAnimationDelay + 's'
		});

		tileAnimationDelay = tileAnimationDelay + 0.1;
		tileAnimationTransform = tileAnimationTransform + 10;
	});

	$(window).on('DOMContentLoaded load scroll', function() {
		tileAnimationInView();
	});

	function tileAnimationInView() {
		$('.tile-wrap-animation:not(.isinview)').each(function() {
			var $this = $(this);
			if (tileAnimationIsInView($this)) {
				$this.addClass('isinview');
			};
		});
	}

	function tileAnimationIsInView(el) {
		el = el[0];

		var rect = el.getBoundingClientRect();

		return (
			rect.top <= window.innerHeight &&
			rect.right >= 0 &&
			rect.bottom >= 0 &&
			rect.left <= window.innerWidth
		);
	}