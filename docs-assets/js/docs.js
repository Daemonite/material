(function ($) {
  'use strict'

  $(function () {
    // Floating labels

    $('.floating-label .form-control').floatinglabel()

    // Navbar examples

    $('.navbar-brand img[src="/material/assets/brand/bootstrap-solid.svg"]')
      .addClass('mr-2 rounded')
      .attr({
        height : 36,
        src    : '/material/apple-touch-icon.png',
        width  : 36
      })

    // Pickers

    $('#exampleInputDatePicker1').pickdate()

    $('#exampleInputDatePicker2').pickdate({
      cancel           : 'Clear',
      closeOnCancel    : false,
      closeOnSelect    : true,
      container        : 'body',
      containerHidden  : 'body',
      firstDay         : 1,
      format           : 'You selecte!d: dddd, d mm, yy',
      formatSubmit     : 'dd/mmmm/yyyy',
      hiddenPrefix     : 'prefix_',
      hiddenSuffix     : '_suffix',
      labelMonthNext   : 'Go to the next month',
      labelMonthPrev   : 'Go to the previous month',
      labelMonthSelect : 'Choose a month from the dropdown menu',
      labelYearSelect  : 'Choose a year from the dropdown menu',
      ok               : 'Close',
      onClose          : function () {
        console.log('Datepicker closes')
      },
      onOpen           : function () {
        console.log('Datepicker opens')
      },
      selectMonths     : true,
      selectYears      : 10,
      today            : 'Today'
    })

    $('#exampleInputDatePicker3').pickdate({
      max : true,
      min : -10
    })

    $('#exampleInputDatePicker4').pickdate({
      max : new Date(2016, 1, 13),
      min : new Date(2016, 0, 3)
    })

    $('#exampleInputDatePicker5').pickdate({
      max : [2016, 1, 13],
      min : [2016, 0, 3]
    })

    $('#exampleInputDatePicker6').pickdate({
      disable: [
        new Date(2016, 0, 16),
        new Date(2016, 0, 20),
        [2016, 0, 24]
      ]
    })

    $('#exampleInputDatePicker7').pickdate({
      disable: [
        1, 2, 3
      ]
    })

    $('#exampleInputDatePicker8').pickdate({
      disable: [
        { from: new Date(2016, 0, 16), to: [2016, 0, 24] }
      ]
    })

    $('#exampleInputDatePicker9').pickdate({
      disable: [
        { from: -10, to: true }
      ]
    })

    $('#exampleInputDatePicker10').pickdate({
      disable: [
        { from: [2016, 0, 16], to: 10 }
      ]
    })

    // Snackbar

    $('.snackbar-btn').on('click', function () {
      $(this).parent('.snackbar').removeClass('show')
    })

    $('.snackbar-example .btn').on('click', function () {
      var $snackbar = $(this).next('.snackbar')

      if ($('.snackbar.show').length > 0) {
        $('.snackbar.show').removeClass('show').one('webkitTransitionEnd transitionEnd', function () {
          $snackbar.addClass(function () {
            setTimeout(function () {
              $snackbar.removeClass('show')
            }, 6000)

            return 'show'
          })
        })
      } else {
        $snackbar.addClass(function () {
          setTimeout(function () {
            $snackbar.removeClass('show')
          }, 6000)

          return 'show'
        })
      }
    })
  })
}(jQuery))
