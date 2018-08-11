// hide forms until user clicks icon to select new task or goal
$("#taskInputForm").hide();
$("#goalInputForm").hide();

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
        // 1) hide/clear task input form.
        $("#taskInputForm").hide();
        var taskData = {
            task_name: $("#inputTitle").val().trim(),
            address: $("#inputAddress").val().trim(),
            category: $("#inputCategory").val().trim(),
            date_due: $("#inputTaskDate").val().trim(),
            priority: $("#inputPriority").val().trim(),
            hours_complete: $("#inputTaskLength").val().trim(),
            description: $("#inputNotes").val().trim()
        }

        // 2) insert task into the db.
        console.log('submitted');
        postAjax(taskData, 'tasks')

        // 3) display "success" modal.

    });
};






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

function postAjax(data, URL) {
    $.ajax({
        method: "POST",
        url: "/api/" + URL,
        data: data
    }).then(function (result) {
        console.log(result);
    })
}

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
clearTask();
clearGoal();