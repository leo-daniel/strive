// hide forms until user clicks icon to select new task or goal
$("#taskInputForm").hide();
$("#goalInputForm").hide();
$("#projectShowHide").hide();
$("#projectDropdown").hide();
$("#projectInputForm").hide();

function setTask() {
    $("#newTask").on("click", function () {
        if ($("#goalInputForm").is(":visible")) {
            $("#goalInputForm").hide();
            $("#taskInputForm").show();
        } else {
            $("#taskInputForm").show();
        }
    });

    $("#submitTask").on("click", function () {
        // if priority's value is 'Choose...' don't post AJAX
        if ($("#inputPriority").val().trim() === 'Choose...') {
            // don't post 
        } else {
            // post AJAX
        }
        submitTask();

        // hide/clear task input form.
        $("#taskInputForm").hide();

        // display "success" modal.

    });
}

function setProject() {
    $("#inputProjectTask").on("click", function () {
        submitTask();

        var projectData = {
            project_name: $("#inputProjectTitle").val().trim(),
            address: $("#inputProjectAddress").val().trim(),
            category: $("#inputProjectCategory").val().trim(),
            date_due: $("#inputProjectDate").val().trim(),
            priority: $("#inputProjectPriority").val().trim(),
            hours_complete: $("#inputProjectLength").val().trim(),
            description: $("#inputProjectNotes").val().trim()
        }
        console.log('project submitted');
        postAjax(projectData, 'projects');

    })
}


function setGoal() {
    $("#newGoal").on("click", function () {
        // if the task form is visible, close it and show the goal form.
        if ($("#taskInputForm").is(":visible")) {
            $("#taskInputForm").hide();
            $("#goalInputForm").show();
        } else {
            $("#goalInputForm").show();
        }
    });

    $("#submitGoal").on("click", function () {
        // 1) hide/clear task input form.
        $("#goalInputForm").hide();
        var goalData = {
            goal_name: $("#inputGoalName").val().trim(),
            description: $("#inputGoalDescription").val().trim()
        };

        // 2) insert task into the db.
        console.log('submitted');
        postAjax(goalData, 'goals');

        // 3) display "success" modal.

    });
}

// Submitting task function
function submitTask() {
    var taskData = {
        task_name: $("#inputTitle").val().trim(),
        address: $("#inputAddress").val().trim(),
        category: $("#inputCategory").val().trim(),
        date_due: $("#inputTaskDate").val().trim(),
        priority: $("#inputPriority").val().trim(),
        hours_complete: $("#inputTaskLength").val().trim(),
        description: $("#inputNotes").val().trim()
    }

    // insert task into the db.
    console.log('submitted');
    postAjax(taskData, 'tasks')
}

// postAJAX function to put data in calendar_db

function postAjax(data, URL) {
    $.ajax({
        method: "POST",
        url: "/api/" + URL,
        data: data
    }).then(function (result) {
        console.log(result);
    });
}

// Project click functions
$('#projectCheckbox').click(function () {
    if (this.checked) {
        $("#projectShowHide").show();
        $("#submitTask").hide();
    } else {
        $("#projectShowHide").hide();
        $("#submitTask").show();
    }
});

$('#createNewProject').click(function () {
    if ($('#createNewProject').is(':checked')) {
        $("#projectInputForm").show();
        $("#projectDropdown").hide();
    }
});

$('#useExistingProject').click(function () {
    if ($("#useExistingProject").is(':checked')) {
        $("#projectDropdown").show();
        $("#projectInputForm").hide();
    }
});

$('#useExistingProject').click(function () {
    if ($("#useExistingProject").is(':checked')) {
        $("#projectDropdown").show();
    }
});

//this function clears the input form and then hides the form

function clearTask() {
    $("#cancelTask").on("click", function () {
        $("#taskInputForm").hide();
    })
}
//clears the goal form and then hides the form
function clearGoal() {
    $("#cancelGoal").on("click", function () {
        $("#goalInputForm").hide();
    })
}


setTask();
setGoal();
setProject();
clearTask();
clearGoal();