$('.due-item').click(function() {
    var thisID = $(this).attr('data-id');

    // determine whether this checkbox has been checked
    if ($(this).prop('checked')) {
        // TODO: tell database this is complete
        $('#list-item-' + thisID).addClass('list-group-item-success');
    } else {
        // TODO: tell database this is not complete
        $('#list-item-' + thisID).removeClass('list-group-item-success');
    }
});

function putAjax(data, id) {
    $.ajax({
      method: 'PUT',
      url: '/api/tasks/' + id,
      data: data
    }).then(function(result) {});
  }

  var queryString = 'UPDATE tasks WHERE id = ? SET is_complete = ?'

  // TODO: when the page loads, set checkboxes to checked if the item is complete