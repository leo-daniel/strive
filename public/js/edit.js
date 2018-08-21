$('.updateGoal').on('click', function () {

    let goalName = $("#goalName-" + $(this).data('id')).html()
    let goalDescription = $("#goalDescription-" + $(this).data('id')).html()
    let goalProgress = parseInt($("#goalProgress-" + $(this).data('id')).html())

    let data = {
        goal_name: goalName,
        description: goalDescription,
        progress: goalProgress
    }
    updatePutAjax(data, 'goals', $(this).data('id'))
})

$('.updateProject').on('click', function () {

    let projectName = $("#projectName-" + $(this).data('id')).html()
    let projectDescription = $("#projectDescription-" + $(this).data('id')).html()
    let projectDatedue = parseInt($("#projectProgress-" + $(this).data('id')).html())
    console.log(projectName);

    let data = {
        project_name: projectName,
        description: projectDescription
        // date_due: projectDatedue
    }
    updatePutAjax(data, 'projects', $(this).data('id'))

})

$('.updateTask').on('click', function () {

    let taskName = $("#taskName-" + $(this).data('id')).html()
    let taskCategory = $("#taskCategory-" + $(this).data('id')).html()
    let taskAddress = $("#taskAddress-" + $(this).data('id')).html()
    let taskDescription = $("#taskDescription-" + $(this).data('id')).html()
    let taskPriority = $("#taskPriority-" + $(this).data('id')).html()
    let taskDatedue = $("#taskDatedue-" + $(this).data('id')).html()

    let data = {
        task_name: taskName,
        category: taskCategory,
        address: taskAddress,
        description: taskDescription,
        priority: taskPriority,
        date_due: taskDatedue,
    }
    updatePutAjax(data, 'tasks', $(this).data('id'))

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