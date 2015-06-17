// get target from trigger
	getTargetFromTrigger = function(trigger) {
		var href;
		var target = trigger.attr('data-target')
		    || (href = trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

		return target;
	}