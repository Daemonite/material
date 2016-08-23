/*!
 * selection control focus state
 */
  $(document).on('change focusout', '.custom-control-input', function () {
    $(this).removeClass('focus');
  });

  $(document).on('focusin', '.custom-control-input', function () {
    $(this).addClass('focus');
  });
