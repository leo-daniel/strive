$('.due-item').click(function() {
    var thisID = $(this).attr('data-id');
    // determine whether this checkbox has been checked
    if ($(this).prop('checked')) {
        // TODO: tell database this is complete
        $('#list-item-' + thisID).addClass('list-group-item-success');
        console.log('checked');
    } else {
        // TODO: tell database this is not complete
        console.log('unchecked');
        $('#list-item-' + thisID).removeClass('list-group-item-success');
    }
});