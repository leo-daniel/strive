// import bulmaCalendar from "/node_modules/bulma-extensions/bulma-calendar/dist/bulma-calendar.min.js";

// Get references to page elements
var $exampleText = $('#example-text');
var $exampleDescription = $('#example-description');
var $submitBtn = $('#submit');
var $exampleList = $('#example-list');

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/examples',
      data: JSON.stringify(example),
    });
  },
  getExamples: function() {
    return $.ajax({
      url: 'api/examples',
      type: 'GET',
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: 'api/examples/' + id,
      type: 'DELETE',
    });
  },
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $('<a>')
        .text(example.text)
        .attr('href', '/example/' + example.id);

      var $li = $('<li>')
        .attr({
          class: 'list-group-item',
          'data-id': example.id,
        })
        .append($a);

      var $button = $('<button>')
        .addClass('btn btn-danger float-right delete')
        .text('ｘ');

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim(),
  };

  if (!(example.text && example.description)) {
    alert('You must enter an example text and description!');
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val('');
  $exampleDescription.val('');
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr('data-id');

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);
$exampleList.on('click', '.delete', handleDeleteBtnClick);

// Quote API ** NEED TO ATTRIBUTE somewhere on page. -------------
// Commented out due to limit 10 API calls/hr

// var queryURL = "http://quotes.rest/qod.json";

// $.ajax({
//   url: queryURL,
//   method: "GET",
// }).then(function(response) {
//   var quote = response.contents.quotes[0].quote;
//   console.log(quote);
//   $("#quote").append(quote);
// });

// var API = {
//   updateProgress: function(data) {
//     return $.ajax({
//       type: "GET",
//       url: "/api/projects",
//       data: JSON.stringify(data)
//     });
//   }
// };

// GOAL PROGRESS --------------------------------------------------
$.get('/api/goals', function(data) {
  console.log('Goals', data);
  var goal1 = data[0].goal_name;
  var goalProgress1 = data[0].progress;
  var goal2 = data[1].goal_name;
  var goalProgress2 = data[1].progress;
  var goal3 = data[2].goal_name;
  var goalProgress3 = data[2].progress;
  var goalLabels = [goal1, goal2, goal3];
  var goalProgress = [goalProgress1, goalProgress2, goalProgress3];

  console.log('Goal Labels', goalLabels);
  console.log('Goal Data', goalProgress);

  var ctx = document.getElementById("goalChart").getContext("2d");

  var goalChart = makeGoalChart(ctx, goalLabels, goalProgress);

  $("#goal-progress").append(goalChart);

  function makeGoalChart(ctx, goalLabels, goalProgress) {
    return new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: goalLabels,
        datasets: [
          {
            label: 'Points',
            backgroundColor: ['#F5CBA7', '#F0B27A', '#CA6F1E'],
            data: goalProgress,
          },
        ],
      },
      options: {
        animation: {
          animateScale: true,
        },
      },
    });
  }
});

// PROJECT PROGRESS --------------------------------------------

// Project 1
$.ajax({
  method: "GET",
  url: "/api/tasks/projectId/1"
}).then(function(data) {
  var projectProgress1 = 100 * data.percentage;
  var projectRemaining1 = 100 - projectProgress1;
  var ctx1 = document.getElementById("project1").getContext("2d");

  var project1 = makeProjectChart(
    ctx1,
    ["Science Project"],
    [projectProgress1, projectRemaining1]
  );

  $("#chart-container1").append(project1);
});

// Project 2
$.ajax({
  method: "GET",
  url: "/api/tasks/projectId/2"
}).then(function(data) {
  var projectProgress2 = 100 * data.percentage;
  var projectRemaining2 = 100 - projectProgress2;
  var ctx2 = document.getElementById("project2").getContext("2d");

  var project2 = makeProjectChart(
    ctx2,
    ["Space Station Construction"],
    [projectProgress2, projectRemaining2]
  );

  $("#chart-container2").append(project2);
});

// Project 3
$.ajax({
  method: "GET",
  url: "/api/tasks/projectId/1"
}).then(function(data) {
  var projectProgress3 = 100 * data.percentage;
  var projectRemaining3 = 100 - projectProgress3;
  var ctx3 = document.getElementById("project3").getContext("2d");

  var project3 = makeProjectChart(
    ctx3,
    ["DIY Nuclear Reactor"],
    [projectProgress3, projectRemaining3]
  );

  $("#chart-container1").append(project3);
});

function makeProjectChart(ctx, [], data) {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: [],
          backgroundColor: ["#1d8348", "#58d68d00"],
          data: data
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 80,
      rotation: Math.PI * -0.5,
      animation: {
        animateScale: true
      }
    }
  });
}

// options for Bulma Calendar Extension
document.addEventListener('DOMContentLoaded', function() {
  var datePickers = bulmaCalendar.attach('[type="date"]', {
    overlay: true,
    minDate: '2018-01-01',
    maxDate: '2018-12-31',
  });
  // datePickers now contains an Array of all datePicker instances
});

// var defaultOptions = {
//   startDate: new Date(),
//   weekStart: null,
//   minDate: null,
//   maxDate: null,
//   disabledDates: null,
//   dateFormat: 'yyyy-mm-dd', // the default data format 'field' value
//   lang: 'en', // internationalization
//   overlay: false,
//   closeOnOverlayClick: true,
//   closeOnSelect: true,
//   toggleOnInputClick: true,
//   icons: {
//     month: {
//       previous: '<svg viewBox="0 0 50 80" xml:space="preserve">
//         <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
//       </svg>',
//       next: '<svg viewBox="0 0 50 80" xml:space="preserve">
//         <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
//       </svg>'
//     },
//     year: {
//       previous: '<svg viewBox="0 0 50 80" xml:space="preserve">
//         <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
//       </svg>',
//       next: '<svg viewBox="0 0 50 80" xml:space="preserve">
//         <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
//       </svg>'
//     }
//   };
