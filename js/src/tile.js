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
		$(this).closest('.tile-collapse').css({
			'-webkit-transition-delay': '',
			'transition-delay': ''
		}).removeClass('active');
	});

// tile show
	$(document).on('show.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').css({
			'-webkit-transition-delay': '',
			'transition-delay': ''
		}).addClass('active');
	});

// tile wrap animation
	$('.tile-wrap-animation').each(function(index) {
		var tileAnimationDelay = 0,
		    tileAnimationTransform = 100;

		$('> .tile', $(this)).each(function(index) {
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
	});

	$(window).on('DOMContentLoaded scroll', function() {
		tileInView();
	});

	function tileInView() {
		$('.tile-wrap-animation:not(.isinview)').each(function() {
			var $this = $(this);
			if (tileInViewCheck($this) && !$this.parents('.avoid-fout:not(.avoid-fout-done)').length) {
				$this.addClass('isinview');
			};
		});
	}

	function tileInViewCheck(tile) {
		tile = tile[0];

		var rect = tile.getBoundingClientRect();

		return (
			rect.top <= window.innerHeight &&
			rect.right >= 0 &&
			rect.bottom >= 0 &&
			rect.left <= window.innerWidth
		);
	}