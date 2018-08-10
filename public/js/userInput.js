 // hide forms until user clicks icon to select new task or goal
 $("#taskInputForm").hide();
 $("#goalInputForm").hide();

 function setTask() {
     $("#newTask").on("click", function () {
         $("#taskInputForm").show();

         $("#submitGoal").on("click", function () {
             // 1) hide/clear task input form.
             $("#taskInputForm").hide();

             // 2) insert task into the calendar.

             // 3) display "success" modal.

         });
     });
 };

 function setGoal() {
     $("#newGoal").on("click", function () {
         $("#goalInputForm").show();

         var goal = $("#description").val().trim();

         $("#submitGoal").on("click", function () {
             // 1) hide/clear goal input form.
             $("#goalInputForm").hide();

             // 2) insert goal into the calendar.

             // 3) display "success" modal.

         });
     });
 };

 //this function clears the input form and then hides the form
 function clearTask(){
     $("#cancelTask").on("click",function(){
        $("#taskInputForm").hide();
     })
 }


 setTask();
 setGoal();
 clearTask();