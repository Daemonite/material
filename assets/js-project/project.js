$(function () {

  // bootstrap doc js
    // disable empty links in doc
      $('.bd-content [href="#"]').click(function (e) {
        e.preventDefault();
      });

    // form: indeterminate checkbox
      $('.bd-example-indeterminate [type="checkbox"]').prop('indeterminate', true);

    // modal: related target demo
      $('#exampleModal').on('show.bs.modal', function (event) {
        var $button   = $(event.relatedTarget);
        var $modal    = $(this);
        var recipient = $button.data('whatever');

        $modal.find('.modal-title').text('New message to ' + recipient);
        $modal.find('.modal-body input').val(recipient);
      });

    // progress: activate animated progress bar
      $('.bd-toggle-animated-progress').on('click', function () {
        $(this).siblings('.progress').find('.progress-bar-striped').toggleClass('progress-bar-animated');
      });

    // tooltip
      $('[data-toggle="popover"]').popover();
      $('[data-toggle="tooltip"]').tooltip();

      $('.popover-test').popover();
      $('.tooltip-test').tooltip();
    
    // vendor: clipboard.js
      $('.highlight').each(function () {
        var btnHtml = '<div class="bd-clipboard"><span class="btn-clipboard" title="Copy to clipboard">Copy</span></div>';

        $(this).before(btnHtml);
        $('.btn-clipboard').tooltip();
      });

      var clipboard = new Clipboard('.btn-clipboard', {
        target: function (trigger) {
          return trigger.parentNode.nextElementSibling;
        }
      });

      clipboard.on('success', function (e) {
        $(e.trigger)
          .attr('title', 'Copied!')
          .tooltip('_fixTitle')
          .tooltip('show')
          .attr('title', 'Copy to clipboard')
          .tooltip('_fixTitle');

        e.clearSelection();
      });

      clipboard.on('error', function (e) {
        var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-';
        var fallbackMsg = 'Press ' + modifierKey + 'C to copy';

        $(e.trigger)
          .attr('title', fallbackMsg)
          .tooltip('_fixTitle')
          .tooltip('show')
          .attr('title', 'Copy to clipboard')
          .tooltip('_fixTitle');
      });

    // vendor: holder.js
      Holder.addTheme('gray', {
        bg         : '#757575',
        fg         : 'rgba(255, 255, 255, 0.7)',
        font       : 'Helvetica',
        fontweight : 'normal'
      });

  // material pickers
    $('#exampleInputDatePicker1').pickdate();

    $('#exampleInputDatePicker2').pickdate({
      cancel        : 'Clear',
      closeOnCancel : false,
      closeOnSelect : true,
      container     : '',
      firstDay      : 1,
      format        : 'You selecte!d: dddd, d mm, yy',
      formatSubmit  : 'dd/mmmm/yyyy',
      ok            : 'Close',
      onClose       : function () {
        console.log('Datepicker closes');
      },
      onOpen        : function () {
        console.log('Datepicker opens');
      },
      selectMonths  : true,
      selectYears   : 10,
      today         : ''
    });

    $('#exampleInputDatePicker3').pickdate({
      max : true,
      min : -10
    });

    $('#exampleInputDatePicker4').pickdate({
      max : new Date(2016,1,13),
      min : new Date(2016,0,3)
    });

    $('#exampleInputDatePicker5').pickdate({
      max : [2016,1,13],
      min : [2016,0,3]
    });

    $('#exampleInputDatePicker6').pickdate({
      disable: [
        new Date(2016,0,16),
        new Date(2016,0,20),
        [2016,0,24]
      ]
    });

    $('#exampleInputDatePicker7').pickdate({
      disable: [
        1, 2, 3
      ]
    });

    $('#exampleInputDatePicker8').pickdate({
      disable: [
        { from: new Date(2016,0,16), to: [2016,0,24] }
      ]
    });

    $('#exampleInputDatePicker9').pickdate({
      disable: [
        { from: -10, to: true }
      ]
    });

    $('#exampleInputDatePicker10').pickdate({
      disable: [
        { from: [2016,0,16], to: 10 }
      ]
    });

});
