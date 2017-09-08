/*
 * activate textarea-autosize for material
 * requires addons/textarea-autosize.js
 */

$(function () {
  if ($('.textarea-autosize').length && (typeof $.fn.textareaAutoSize !== 'undefined')) {
    $('.textarea-autosize').textareaAutoSize()
  }
})
