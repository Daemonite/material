// toast
	(function ($) {
		'use strict';

		var Toast = function (options) {
			this.options  = options;
			this.$element = $('<div class="toast-inner">' + this.options.content + '</div>');
		};

		Toast.DEFAULTS = {
			alive: 6000,
			content: '&nbsp;',
			hide: function () {},
			show: function () {}
		};

		Toast.prototype.fbtn = function (margin) {
			if ($(window).width() < 768 && $('.fbtn-container').length) {
				$('.fbtn-container').css('margin-bottom', margin);
			};
		};

		Toast.prototype.hide = function () {
			var that = this;

			this.$element.removeClass('in');

			clearTimeout(this.$element.data('timer'));

			if ($.support.transition) {
				this.$element.one('bsTransitionEnd', function () {
					that.options.hide(that.options);
					that.$element.remove();
				});
			} else {
				that.options.hide(that.options);
				that.$element.remove();
			}

			this.fbtn('');
		};

		Toast.prototype.show = function () {
			var that = this;

			if (!$('.toast').length) {
				$(document.body).append('<div class="toast"></div>');
			};

			this.$element.appendTo('.toast').show().addClass(function () {
				that.$element.on('click', '[data-dismiss="toast"]', function () {
					that.hide();
				});

				that.$element.data('timer', setTimeout(function () {
					that.hide();
				}, that.options.alive));

				that.$element.on('mouseenter', function () {
					clearTimeout(that.$element.data('timer'));
				}).on('mouseleave', function () {
					that.$element.data('timer', setTimeout(function () {
						that.hide();
					}, that.options.alive));
				});

				that.options.show(that.options);

				return 'in';
			});

			this.fbtn(this.$element.outerHeight());
		};

		function Plugin (option) {
			return this.each(function () {
				var $this    = $(document.body);
				var data     = $this.data('bs.toast');
				var options  = $.extend({}, Toast.DEFAULTS, option);

				if (!data) {
					$this.data('bs.toast', (data = new Toast(options)));
					data.show();
				} else if ($('.toast-inner').length && !$('.toast-inner.old').length) {
					$('.toast-inner.in').addClass('old')
					data.hide();
					if ($.support.transition) {
						$(document).one('bsTransitionEnd', '.toast-inner.old', function () {
							$this.data('bs.toast', (data = new Toast(options)));
							data.show();
						});
					} else {
						$this.data('bs.toast', (data = new Toast(options)));
						data.show();
					};
				} else if (!$('.toast-inner').length) {
					$this.data('bs.toast', (data = new Toast(options)));
					data.show();
				};
			});
		};

		var old = $.fn.toast;

		$.fn.toast             = Plugin;
		$.fn.toast.Constructor = Toast;

		$.fn.toast.noConflict = function () {
			$.fn.toast = old;
			return this;
		};
	}(jQuery));
