

// hide forms until user clicks icon to select new task or goal
var total = 0;
$("#goalInputForm").hide();
$("#taskInputForm").hide();
$("#checkDateModal").hide();

var myNewTask;
var checkedProject;
var myNewProject;

//Create a New Task
$("#newTask").on("click", function (event) {
  event.preventDefault();
  $("#taskInputForm").show();
  $("#showProjects").hide();
  $("#goalInputForm").hide();

  myCheckBox();

  //onchange and check if date is taken
  $("#checkDateButton").on("click", function (event) {
    event.preventDefault();
    var myDate = new Date($("#inputTaskDate").val() + "EDT");
    let dateFormatted = moment(myDate).format('YYYY-MM-DD');
    console.log(dateFormatted)
    // var n = moment(myDate).date();

    console.log(dateFormatted);

    dateChecker(dateFormatted).then(function (result) {
      console.log(result)
      // if (result === 'Yes') {
      //   $("#dateChecked").text('No tasks are due on this date')
      // } else if (result === 'No') {
      //   $("#dateChecked").text('Please pick another date')
      // }
    });
    // $("#checkDateModal").show()

  })


  $("#submitMyTask").on("click", function (event) {
    event.preventDefault();

    var myDate = $("#inputTaskDate").val();
    var n = moment(myDate).date()

    // 1) Collect values from form input
    //JSON variables to store locally until submitted
    var myNewTask = {
      task_name: (taskTitle = $("#inputTitle")
        .val()
        .trim()),
      address: (taskAddress = $("#inputAddress")
        .val()
        .trim()),
      category: (taskCategory = $("#inputCategory")
        .val()
        .trim()),
      date_due: (taskDate = $("#inputTaskDate")
        .val()
        .trim()),
      complete: "false",
      priority: (taskPriority = $("#inputPriority").val()),
      hours_complete: (taskHours = $("#inputTaskLength").val()),
      description: (taskNotes = $("#inputNotes").val()),
      project: (taskProject = $("#inputProjects")
        .val()
        .trim()),
      projectId: $('#inputProjects option:selected').val(),
      is_complete: false,
      dateDay: n,
    };

    // 2) display modal with information to confirm submission of task
    $(".modal-title").text("Confirm New Task");
    $("#modalTitle").html("Title: " + myNewTask.task_name);
    $("#modalAddress").html("Address: " + myNewTask.address);
    $("#modalCategory").html("Category: " + myNewTask.category);
    $("#modalDate").html("Date: " + myNewTask.date_due);
    $("#modalPriority").html("Priority: " + myNewTask.priority);
    $("#modalHours").html("Hours: " + myNewTask.hours_complete);
    $("#modalNotes").html("Notes: " + myNewTask.description);
    $("#modalProject").html("Project: " + myNewTask.projectId);

    $("#confirm").on("click", function () {
      // 3) send data back to MySQL DB
      postAjax(myNewTask, "tasks");

      var projectUpdate = {
        total_tasks: 1
      }

      var projectId = $('#inputProjects option:selected').val()
      console.log('This is the project id:', projectId);

      putAjax(projectUpdate, 'projects', projectId);

      // 4) reset form and hide
      $("#taskInputForm")[0].reset();
      $("#taskInputForm").hide();
    });
  });
});

function myCheckBox() {
  $("#inputProject").on("click", function () {
    if ($(this).is(":checked")) {
      checkedProject = $("#inputProject[type=checkbox]").prop("checked");
      $("#showProjects").show();
    }
  });
}

//Create a New Goal
$("#newGoal").on("click", function () {
  // if the task form is visible, close it and show the goal form.
  $("#taskInputForm").hide();
  $("#goalInputForm").show();

  $("#submitGoal").on("click", function () {
    // 1) hide/clear goal input form.
    $("#goalInputForm").hide();

    // 2) insert goal into the calendar.
    var goalData = {
      goal_name: $("#goalName")
        .val()
        .trim(),
      description: $("#goalDescription")
        .val()
        .trim(),
      complete: "false"
    };


    // 3) send goals to DB
    postAjax(goalData, "goals");

    // 4) reset the goal form
    $("#goalInputForm")[0].reset();
    $("#goalInputForm").hide();

  });
});

//this function clears the input form and then hides the form
$("#cancelTask").on("click", function () {
  //resets the form
  $("#taskInputForm")[0].reset();
  $("#taskInputForm").hide();
});

//clears the goal form and then hides the form
$("#cancelGoal").on("click", function () {
  $("#goalInputForm").hide();
});

//add a new project to the projects table
$("#addProject").on("click", function () {
  // 1) collect project information
  myNewProject = {
    project_name: $("#inputProjectName")
      .val()
      .trim(),
    description: $("#inputProjectDescription")
      .val()
      .trim(),
    complete: "false"
  };

  // 2) send data back to MySQL DB
  postAjax2(myNewProject, "projects");

  // 3) reset form
  $("#projectForm")[0].reset();

});

// postAJAX function to put data in calendar_db
function postAjax(data, URL) {
  $.ajax({
    method: "POST",
    url: "/api/" + URL,
    data: data
  }).then(function (result) { });
}

function putAjax(data, URL, id) {
  $.ajax({
    method: "PUT",
    url: "/api/" + URL,
    data: data
  }).then(function (result) {
    console.log(result);
  });
}

function postAjax2(data, URL) {
  $.ajax({
    method: "POST",
    url: "/api/" + URL,
    data: data
  }).then(function (data) {

    $("#inputProjects").empty();
    $.each(data, function (i, item) {
      $("#inputProjects").append(
        $("<option>", {
          value: item.id,
          text: item.project_name
        })
      );
      console.log(item)
    });
  });
}

function dateChecker(n) {
  return $.ajax({
    method: "GET",
    url: "/checkdate/" + n
  });
}

function getExistingProjects() {
  $.ajax({
    method: "GET",
    url: "/api/projects"
  }).then(function (data) {
    $("#inputProjects").empty();

    $.each(data, function (i, item) {
      $("#inputProjects").append(
        $("<option>", {
          value: item.id,
          text: item.project_name
        })
      );
    });
  });
}


getExistingProjects();

// function getProjectsProgress(projectNumber) {
//   $.ajax({
//     method: "GET",
//     url: "/api/tasks/"
//   }).then(function (data) {
//     var taskComplete = 0;
//     var taskIncomplete = 0;
//     for (i = 0; i < data.length; i++) {
//       if (data[i].is_complete) {
//         taskComplete++;
//       } else if (data[i].is_complete === false) {
//         taskIncomplete++;
//       }
//     }
//     var percentage = taskComplete / taskIncomplete;
//     console.log(taskIncomplete, taskComplete);
//     console.log(percentage);
//   });
// }

// getProjectsProgress();
