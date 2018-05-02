/* global anchors: false, ClipboardJS: false, docsearch: false, Holder: false */

(function ($) {
  'use strict'

  $(function () {
    // Anchor
    anchors.options = {
      icon: '#'
    }

    anchors.add('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')

    $('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5').wrapInner('<div></div>')

    // Clipboard
    $('div.highlight, figure.highlight').each(function () {
      var btnHtml = '<div class="bd-clipboard"><button class="btn-clipboard" title="Copy to clipboard">Copy</button></div>'

      $(this).before(btnHtml)

      $('.btn-clipboard').on('mouseleave', function () {
        $(this).tooltip('hide')
      }).tooltip()
    })

    var clipboard = new ClipboardJS('.btn-clipboard', {
      target: function (trigger) {
        return trigger.parentNode.nextElementSibling
      }
    })

    clipboard.on('error', function (e) {
      var key = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
      var msg = 'Press ' + key + 'C to copy'

      $(e.trigger)
        .attr('title', msg)
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle')
    })

    clipboard.on('success', function (e) {
      $(e.trigger)
        .attr('title', 'Copied!')
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle')

      e.clearSelection()
    })

    // Disable empty links in docs examples
    $('.bd-content [href="#"]').on('click', function (e) {
      e.preventDefault()
    })

    // Docsearch
    docsearch({
      algoliaOptions: {
        facetFilters: ['version: 4.1']
      },
      apiKey: 'c1af50add5aa791153ec947a3035b0c4',
      debug: false,
      handleSelected: function (input, event, suggestion) {
        var url = suggestion.url

        url = suggestion.isLvl1 ? url.split('#')[0] : url

        window.location.href = url
      },
      indexName: 'daemonite_material',
      inputSelector: '#doc-search',
      transformData: function (hits) {
        return hits.map(function (hit) {
          var siteurl = document.getElementById('doc-search').getAttribute('data-siteurl')
          var urlRE = /^https?:\/\/daemonite\.github\.io/

          hit.url = siteurl.match(urlRE) ? hit.url : hit.url.replace(urlRE, '')

          return hit
        })
      }
    })

    // Floating labels
    $('.floating-label .custom-select, .floating-label .form-control').floatinglabel()

    // Holder
    Holder.addTheme('gray', {
      bg: '#424242',
      fg: 'rgba(255, 255, 255, .7)',
      fontweight: 'normal'
    })

    // Indeterminate checkbox example
    $('.bd-example-indeterminate [type="checkbox"]').prop('indeterminate', true)

    // Modal
    $('#exampleModal').on('show.bs.modal', function (event) {
      var $button   = $(event.relatedTarget)
      var $modal    = $(this)
      var recipient = $button.data('whatever')

      $modal.find('.modal-body input').val(recipient)
      $modal.find('.modal-title').text('New message to ' + recipient)
    })

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
        console.log('Datepicker closes') // eslint-disable-line no-console
      },
      onOpen           : function () {
        console.log('Datepicker opens') // eslint-disable-line no-console
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
        {
          from: new Date(2016, 0, 16),
          to: [2016, 0, 24]
        }
      ]
    })

    $('#exampleInputDatePicker9').pickdate({
      disable: [
        {
          from: -10,
          to: true
        }
      ]
    })

    $('#exampleInputDatePicker10').pickdate({
      disable: [
        {
          from: [2016, 0, 16],
          to: 10
        }
      ]
    })

    // Progress bar
    $('.bd-toggle-animated-progress').on('click', function () {
      $(this).siblings('.progress').find('.progress-bar-striped').toggleClass('progress-bar-animated')
    })

    // Snackbar
    $('.snackbar-btn').on('click', function () {
      $(this).parent('.snackbar').removeClass('show')
    })

    $('.snackbar-toggler').on('click', function () {
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

    // Toolbar
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 0) {
        $('.toolbar-waterfall').addClass('waterfall')
      } else {
        $('.toolbar-waterfall').removeClass('waterfall')
      }
    })

    // Tooltip
    $('[data-toggle="popover"]').popover()

    $('.popover-test').popover()

    $('.tooltip-demo').tooltip({
      container: 'body',
      selector: '[data-toggle="tooltip"]'
    })

    $('.tooltip-test').tooltip()
  })
}(jQuery))
