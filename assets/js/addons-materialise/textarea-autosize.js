/*!
 * activate textarea-autosize for material
 * requires textarea-autosize.js
 */
$(function () {
  if ($('.textarea-autosize').length && (typeof $.fn.textareaAutoSize !== 'undefined')) {
    $('.textarea-autosize').textareaAutoSize();
  };
});
