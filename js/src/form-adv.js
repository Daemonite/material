// floating label
	(function ($) {
		'use strict';

		$.fn.floatingLabel = function (option) {
			var parent = this.closest('.form-group-label');

			if (parent.length) {
				switch (option) {
					case 'focusin':
						parent.addClass('control-focus');
						break;
					case 'focusout':
						parent.removeClass('control-focus');
						break;
					default: 
						if (this.val()) {
							parent.addClass('control-highlight');
						} else {
							parent.removeClass('control-highlight');
						};
				};
			};
		};
	}(jQuery));

	$('.form-group-label .form-control').each(function() {
		$(this).floatingLabel('change');
	});

	$(document).on('change', '.form-group-label .form-control', function() {
		$(this).floatingLabel('change');
	});

	$(document).on('focusin', '.form-group-label .form-control', function() {
		$(this).floatingLabel('focusin');
	});

	$(document).on('focusout', '.form-group-label .form-control', function() {
		$(this).floatingLabel('focusout');
	});

// textarea autosize v0.4.0
// Javier Julio: https://github.com/javierjulio/textarea-autosize
	!function(t,e){function i(e){this.element=e,this.$element=t(e),this.init()}var n="textareaAutoSize",h="plugin_"+n,s=function(t){return t.replace(/\s/g,"").length>0};i.prototype={init:function(){var i=(this.$element.outerHeight(),parseInt(this.$element.css("paddingBottom"))+parseInt(this.$element.css("paddingTop")));s(this.element.value)&&this.$element.height(this.element.scrollHeight-i),this.$element.on("input keyup",function(){var n=t(e),h=n.scrollTop();t(this).height(0).height(this.scrollHeight-i),n.scrollTop(h)})}},t.fn[n]=function(e){return this.each(function(){t.data(this,h)||t.data(this,h,new i(this,e))}),this}}(jQuery,window,document);

	$('.textarea-autosize').textareaAutoSize();
