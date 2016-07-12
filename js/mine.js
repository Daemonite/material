<!-- Date picker -->
$('#act_Dpiker').pickdate({
    cancel: 'Clear',
    closeOnCancel: false,
    closeOnSelect: true,
    container: '',
    firstDay: 1,
    format: 'You selecte!d: dddd, d mm, yy',
    formatSubmit: 'dd/mmmm/yyyy',
    ok: 'Close',
    onClose: function () {
        $('body').snackbar({
            content: 'Datepicker closes'
        });
    },
    onOpen: function () {
        $('body').snackbar({
            content: 'Datepicker opens'
        });
    },
    selectMonths: true,
    selectYears: 10,
    today: ''
});
