<!-- Date picker -->
('#cract_Dpiker').pickdate({
    cancel: 'Clear',
    closeOnCancel: false,
    closeOnSelect: true,
    container: '',
    disable: [6,7],
    format: 'dddd',
    max:7,
    min:true,
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
    selectMonths: false,
    selectYears: false,
    today: 'Today'
});
