// project
	// ui-form-adv.html
		$('.datepicker-adv-doc-1').datepicker();

		$('.datepicker-adv-doc-2').datepicker({
			format: "dd-mmm-yyyy",
			selectMonths: true,
			selectYears: 30
		});

	// ui-modal.html
		var toastText = 1;

		$('#toast-1').on('click', function () {
			$('body').toast({
				content: 'Simple toast ' + toastText + ' with some text',
				show: function () {
					toastText++;
				}
			});
		});

		$('#toast-2').on('click', function () {
			$('body').toast({
				content: '<a data-dismiss="toast">Dismiss</a><div class="toast-text">Simple toast ' + toastText + ' with some text and a simple <a href="javascript:void(0)">link</a>.</div>',
				show: function () {
					toastText++;
				}
			});
		});

	// ui-progress.html
		$('.finish-loading').on('click', function(e) {
			e.stopPropagation();
			$($(this).attr('data-target')).addClass('el-loading-done');
		});

		$('#el-loading-tile-wrap .tile-active-show').each(function (index) {
			var $this = $(this),
			    timer;

			$this.on('hide.bs.tile', function(e) {
				clearTimeout(timer);
			});

			$this.on('show.bs.tile', function(e) {
				if (!$('.el-loading', $this).hasClass('el-loading-done')) {
					timer = setTimeout(function() {
						$('.el-loading', $this).addClass('el-loading-done');
						$this.prepend('<div class="tile-sub"><p>Additional information<br><small>Aliquam in pharetra leo. In congue, massa sed elementum dictum, justo quam efficitur risus, in posuere mi orci ultrices diam.</small></p></div>');
					}, 6000);
				};
			});
		});
