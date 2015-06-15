// checkbox & radio
	$('.checkbox-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span><span class="circle-icon icon">done</span>');
	});

	$('.radio-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span>');
	});

// floating label
	if($('.form-group-label').length) {
		$('.form-group-label .form-control').each(function() {
			floatingLabel($(this));
		});
	};

	$(document).on('change', '.form-group-label .form-control', function() {
		floatingLabel($(this));
	});

	$(document).on('focusin', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').removeClass('control-focus');
	});

	function floatingLabel(input) {
		var parent = input.closest('.form-group-label');

		if(input.val()) {
			parent.addClass('control-highlight');
		} else {
			parent.removeClass('control-highlight');
		}
	}

// icon label
	$(document).on('focusin', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').removeClass('control-focus');
	});

// switch
	$(document).on('click', '.switch-toggle', function() {
		var $this = $(this);

		if (!$this.hasClass('switch-toggle-on')) {
			$this.addClass('switch-toggle-on');
			setTimeout(function() {
				$this.removeClass('switch-toggle-on');
			}, 300);
		};
	});

// textarea autosize v0.4.0
// Javier Julio: https://github.com/javierjulio/textarea-autosize
	!function(t,e){function i(e){this.element=e,this.$element=t(e),this.init()}var n="textareaAutoSize",h="plugin_"+n,s=function(t){return t.replace(/\s/g,"").length>0};i.prototype={init:function(){var i=(this.$element.outerHeight(),parseInt(this.$element.css("paddingBottom"))+parseInt(this.$element.css("paddingTop")));s(this.element.value)&&this.$element.height(this.element.scrollHeight-i),this.$element.on("input keyup",function(){var n=t(e),h=n.scrollTop();t(this).height(0).height(this.scrollHeight-i),n.scrollTop(h)})}},t.fn[n]=function(e){return this.each(function(){t.data(this,h)||t.data(this,h,new i(this,e))}),this}}(jQuery,window,document);

	$('.textarea-autosize').textareaAutoSize();
