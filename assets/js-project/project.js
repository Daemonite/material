// project
	// ui-picker.html
		$('#doc_datepicker_example_1').datepicker();

		$('#doc_datepicker_example_2').datepicker({
			format: "dd-mmm-yyyy",
			selectMonths: true,
			selectYears: 30
		});

	// ui-progress.html
		$('.finish-loading').on('click', function(e) {
			e.stopPropagation();
			$($(this).attr('data-target')).addClass('el-loading-done');
		});

		$('#doc_el_loading_example_wrap .tile-active-show').each(function (index) {
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

	// ui-snackbar.html
		var snackbarText = 1;

		$('#doc_snackbar_toggle_1').on('click', function () {
			$('body').snackbar({
				content: 'Simple snackbar ' + snackbarText + ' with some text',
				show: function () {
					snackbarText++;
				}
			});
		});

		$('#doc_snackbar_toggle_2').on('click', function () {
			$('body').snackbar({
				content: '<a data-dismiss="snackbar">Dismiss</a><div class="snackbar-text">Simple snackbar ' + snackbarText + ' with some text and a simple <a href="javascript:void(0)">link</a>.</div>',
				show: function () {
					snackbarText++;
				}
			});
		});
