// when the page loads, set checkboxes to checked if the item is complete
$(document).ready(
    highlightCompletions()
);

// when a checkbox is toggled, add/remove styling as necessary; tell database item completion state
$('.due-item').click(function () {
    var thisID = $(this).attr('data-id');

    // determine whether this checkbox has been checked
    if ($(this).prop('checked')) {
        // add green backround styling
        $('#list-item-' + thisID).addClass('list-group-item-success');

        // tell the dataabse this item is done
        var completionState = {
            id: thisID,
            is_complete: true
        };
        putAjax(completionState, 'tasks', thisID);
    } else {
        // remove green background styling
        $('#list-item-' + thisID).removeClass('list-group-item-success');

        // tell the dataabse this item is NOT done
        var completionState = {
            id: thisID,
            is_complete: false
        };
        putAjax(completionState, 'tasks', thisID);
    }
});

function highlightCompletions() {
    $('.list-group-item').each(function() {
        var num = $(this).attr('data-id');
        var complete = $(this).attr('data-complete');
        console.log(num + ", " + complete);

        if (complete === 'true') {
            $('#list-item-' + num).addClass('list-group-item-success');
            $('#checkbox-' + num).prop('checked', true);
            console.log('parsing for completion');
        }
    });
}

function putAjax(data, URL) {
    $.ajax({
        url: "api/" + URL,
        method: "PUT",
        data: data
    }).then(function () {
        console.log('talked to the db');
    });
}