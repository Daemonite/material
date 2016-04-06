// project
	// ui-picker.html
		$('#doc_datepicker_example_1').pickdate();

		$('#doc_datepicker_example_2').pickdate({
			cancel: 'Clear',
			closeOnCancel: false,
			closeOnSelect: true,
			container: '',
			firstDay: 1,
			format: 'You selecte!d: dddd, d mm, yy',
			formatSubmit: 'dd/mmmm/yyyy',
			ok: 'Close',
			onClose: function () {
				$('body').snackbar({
					content: 'Datepicker closes'
				});
			},
			onOpen: function () {
				$('body').snackbar({
					content: 'Datepicker opens'
				});
			},
			selectMonths: true,
			selectYears: 10,
			today: ''
		});

		$('#doc_datepicker_example_3').pickdate({
			disable: [
				[2016,0,12],
				[2016,0,13],
				[2016,0,14]
			],
			today: ''
		});

		$('#doc_datepicker_example_4').pickdate({
			disable: [
				new Date(2016,0,12),
				new Date(2016,0,13),
				new Date(2016,0,14)
			],
			today: ''
		});

		$('#doc_datepicker_example_5').pickdate({
			disable: [
				2, 4, 6
			],
			today: ''
		});

		$('#doc_datepicker_example_6').pickdate({
			disable: [
				{
					from: [2016,0,12],
					to: 2
				}
			],
			today: ''
		});

		$('#doc_datepicker_example_7').pickdate({
			disable: [
				true,
				3,
				[2016,0,13],
				new Date(2016,0,14)
			],
			today: ''
		});

		$('#doc_datepicker_example_8').pickdate({
			disable: [
				{
					from: [2016,0,10],
					to: [2016,0,30]
				},
				[2016,0,13, 'inverted'],
				{
					from: [2016,0,19],
					to: [2016,0,21],
					inverted: true
				}
			],
			today: ''
		});

		$('#doc_datepicker_example_9').pickdate({
			max: [2016,0,30],
			min: [2016,0,10],
			today: ''
		});

		$('#doc_datepicker_example_10').pickdate({
			max: new Date(2016,0,30),
			min: new Date(2016,0,10),
			today: ''
		});

		$('#doc_datepicker_example_11').pickdate({
			max: true,
			min: -10,
			today: ''
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
