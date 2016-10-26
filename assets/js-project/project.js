$(function () {

  // project js
  	if ($('.doc-toolbar').length) {
  		var docToolbarHeight = $('.doc-toolbar').outerHeight();

  		$(window).on('scroll', function () {
  			if ($(this).scrollTop() > docToolbarHeight) {
  				$('.doc-toolbar').addClass('waterfall');
  			} else {
  				$('.doc-toolbar').removeClass('waterfall');
  			}
  		});
  	}

});
