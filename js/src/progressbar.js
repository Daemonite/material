function _updateProgressBar(bar) {
	if (bar) {
		var min = parseInt(bar.attr("aria-valuemin")) || 0;
		var max = parseInt(bar.attr("aria-valuemax")) || 100;
		var now = parseInt(bar.attr("aria-valuenow")) || 0;
		var range = max - min;
		var perc = (now / range * 100).toFixed(3);
		bar.css("width", perc + "%");
	}
}

$(".progress").each(function() {
	var bar = $(this).children(".progress-bar");
	_updateProgressBar(bar);
});

function updateProgressBar(el, val) {
	$(el).attr("aria-valuenow", parseInt(val));
	_updateProgressBar($(el));
}