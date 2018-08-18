$("#goalButton-1").on('click', function () {
    let goalName = $("#goalName-1").html()
    let goalDescription = $("#goalDescription-1").html()
    let goalProgress = $("#goalProgress-1").html()

    let data = {
        goal_name: goalName,
        description: goalDescription,
        progress: goalProgress
    }

    updatePutAjax(data, 'goals', '1')
})




function updatePutAjax(data, URL, id) {
    $.ajax({
        type: "PUT",
        url: "/api/" + URL + '/' + id,
        data: data
    }).then(function (result) {
        console.log('abc', result);
    });
}