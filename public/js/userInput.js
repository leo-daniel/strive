// hide forms until user clicks icon to select new task or goal

$("#goalInputForm").hide();
$("#taskInputForm").hide();

var myNewTask;

//Create a New Task
$("#newTask").on("click", function(event) {
  event.preventDefault();
  $("#taskInputForm").show();
  $("#goalInputForm").hide();


  $("#submitMyTask").on("click", function(event) {
    event.preventDefault();
    // 1) Collect values from form input
    //JSON variables to store locally until submitted
    var myNewTask = {
      taskTitle: (taskTitle = $("#inputTitle")
        .val()
        .trim()),
      taskAddress: (taskAddress = $("#inputAddress")
        .val()
        .trim()),
      taskCategory: (taskCategory = $("#inputCategory")
        .val()
        .trim()),
      taskDate: (taskDate = $("#inputTaskDate")
        .val()
        .trim()),
      taskPriority: (taskPriority = $("#inputPriority").val()),
      taskHours: (taskHours = $("#inputTaskLength").val()),
      taskNotes: (taskNotes = $("#inputNotes").val())
    };

    // 2) display modal with information to confirm submission of task
    $(".modal-title").text("Confrim New Task");
    $("#modalTitle").html("Title: " + myNewTask.taskTitle);
    $("#modalAddress").html("Address: " + myNewTask.taskAddress);
    $("#modalCategory").html("Category: " + myNewTask.taskCategory);
    $("#modalDate").html("Date: " + myNewTask.taskDate);
    $("#modalPriority").html("Priority: " + myNewTask.taskPriority);
    $("#modalHours").html("Hours: " + myNewTask.taskHours);
    $("#modalNotes").html("Notes: " + myNewTask.taskNotes);
  });



  // 4) reset form and hide
//   $("#taskInputForm")[0].reset();
//   $("#taskInputForm").hide();
});

$("#confirm").on("click",function(){
    // 3) send data back to MySQL DB
    console.log('submitted');
    postAjax(myNewTask, 'tasks');
})

//Create a New Goal
$("#newGoal").on("click", function() {
  // if the task form is visible, close it and show the goal form.
  $("#taskInputForm").hide();
  $("#goalInputForm").show();

  var goal = $("#description")
    .val()
    .trim();

  $("#submitGoal").on("click", function() {
    // 1) hide/clear goal input form.
    $("#goalInputForm").hide();

    // 2) insert goal into the calendar.

    // 3) display "success" modal.
  });
});

//this function clears the input form and then hides the form
$("#cancelTask").on("click", function() {
  //resets the form
  $("#taskInputForm")[0].reset();
  $("#taskInputForm").hide();
});

//clears the goal form and then hides the form
$("#cancelGoal").on("click", function() {
  $("#goalInputForm").hide();
});

// postAJAX function to put data in calendar_db
function postAjax(data, URL) {
  $.ajax({
    method: "POST",
    url: "/api/" + URL,
    data: data
  }).then(function(result) {
    console.log(result);
  });
}
