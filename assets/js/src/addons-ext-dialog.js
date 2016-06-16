/*!
 * dialogs are displayed centered vertically on the screen
 * based on Bootstrap's (v4.0.0-alpha.2) modal.js
 */
$(document).on('hidden.bs.modal', '.modal-va-middle', function () {
  $(this).removeClass('modal-va-middle-show');
});

$(document).on('show.bs.modal', '.modal-va-middle', function () {
  $(this).addClass('modal-va-middle-show');
});
