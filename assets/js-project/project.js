$(function () {

  // project js
  Holder.addTheme('gray', {
    bg: '#757575',
    fg: 'rgba(255,255,255,.7)',
    font: 'Helvetica',
    fontweight: 'normal'
  });

});

// Search Box (components library - temporary)
'use strict';

$(function() {

  $('.search-input input').blur(function() {

    if ($(this).val()) {
      $(this)
        .find('~ label, ~ span:nth-of-type(n+3)')
        .addClass('not-empty');
    } else {
      $(this)
        .find('~ label, ~ span:nth-of-type(n+3)')
        .removeClass('not-empty');
    }
  });

  $('.search-input input ~ span:nth-of-type(4)').click(function() {
    $('.search-input input').val('');
    $('.search-input input')
      .find('~ label, ~ span:nth-of-type(n+3)')
      .removeClass('not-empty');
  });
  
  console.log('Hello from console!');

});
