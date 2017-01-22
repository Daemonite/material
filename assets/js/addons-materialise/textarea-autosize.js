/*!
 * activate textarea-autosize for material
 * requires textarea-autosize.js
 */
(function($){
  $(function () {
    if ($('.textarea-autosize').length && (typeof $.fn.textareaAutoSize !== 'undefined')) {
      $('.textarea-autosize').textareaAutoSize();
    };
  });
})(jQuery);
