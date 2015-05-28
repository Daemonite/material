// default datepicker
	$('.datepicker-adv-default').each(function(index) {
		var datepickerAdv = $(this).pickadate({container: 'body'}),
		    datepickerApi = datepickerAdv.pickadate('picker');

		datepickerApi.on({
			close: function() {
				$(document.activeElement).blur();
			},
			open: function() {
				datepickerApi.set('select', datepickerApi.get(), {format: 'd/m/yyyy'});
			}
		});
	});