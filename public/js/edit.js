// Control show and hide
$("#update-project-show").hide();
$("#update-goal-show").hide();
$("#update-task-show").hide();

$("#edit-task").on('click', function () {
    $("#update-task-show").fadeIn(400);
    $("#update-goal-show").hide();
    $("#update-project-show").hide();

})

$("#edit-project").on('click', function () {
    $("#update-project-show").fadeIn(400);
    $("#update-task-show").hide();
    $("#update-goal-show").hide();
})

$("#edit-goal").on('click', function () {
    $("#update-goal-show").fadeIn(400);
    $("#update-task-show").hide();
    $("#update-project-show").hide();
})

// Update database onclicks
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
});

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

// Delete task

$(".deleteTask").on('click', function () {
    var id = $(this).data('id')
    deleteAjax('tasks', id)
})


// AJAX call
function updatePutAjax(data, URL, id) {
    $.ajax({
        type: "PUT",
        url: "/api/" + URL + '/' + id,
        data: data
    }).then(function (result) {

    });
}

function deleteAjax(URL, id) {
    $.ajax({
        type: "DELETE",
        url: "/api/" + URL + '/' + id
    }).then(function (result) {

    })
}