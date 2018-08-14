import bulmaCalendar from '/node_modules/bulma-extensions/bulma-calendar/dist/bulma-calendar.min.js';

// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

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
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

// Quote API ** NEED TO ATTRIBUTE somewhere on page.
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

// Progress Chart
var ctx1 = document.getElementById("testChart1").getContext("2d");
var ctx2 = document.getElementById("testChart2").getContext("2d");
var ctx3 = document.getElementById("testChart3").getContext("2d");
var ctx4 = document.getElementById("goalTestChart").getContext("2d");

var testChart1 = makeDonutChart(ctx1, [], []);
var testChart2 = makeDonutChart(ctx2, [], []);
var testChart3 = makeDonutChart(ctx3, [], []);
var goalTestChart = makeGoalChart(ctx4, [], []);

// DB: NEED TO PUT THIS INSIDE WHERE WE CONNECT TO DB.
// var progress = res.progress;
// var remaining = 100 - res.progress;

function makeDonutChart(ctx, labelNames, data) {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "Points",
          backgroundColor: ["#1d8348", "#28b463", "#58d68d00"],
          data: [20, 60, 20]
          // data: [progress, remaining]
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

function makeGoalChart(ctx, labelNames, data) {
  return new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["Get 8 hrs sleep daily", "Exercise", "Meditate", "Meal-prep"],
      datasets: [
        {
          label: "Points",
          backgroundColor: ["#ecf0f1", "#bdc3c7", "#909497", "#626567"],
          data: [50, 80, 20, 50]
        }
      ]
    },
    options: {
      animation: {
        animateScale: true
      }
    }
  });
}

$("#chart-container1").append(testChart1);
$("#chart-container2").append(testChart2);
$("#chart-container3").append(testChart3);
$("#goal-progress").append(goalTestChart);

// options for Bulma Calendar Extension
document.addEventListener('DOMContentLoaded', function () {
  var datePickers = bulmaCalendar.attach('[type="date"]', {
    overlay: true,
    minDate: '2018-01-01',
    maxDate: '2018-12-31'
  });
  // datePickers now contains an Array of all datePicker instances
});

var defaultOptions = {
  startDate: new Date(),
  weekStart: null,
  minDate: null,
  maxDate: null,
  disabledDates: null,
  dateFormat: 'yyyy-mm-dd', // the default data format 'field' value
  lang: 'en', // internationalization
  overlay: false,
  closeOnOverlayClick: true,
  closeOnSelect: true,
  toggleOnInputClick: true,
  icons: {
    month: {
      previous: '<svg viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
      </svg>',
      next: '<svg viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
      </svg>'
    },
    year: {
      previous: '<svg viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
      </svg>',
      next: '<svg viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
      </svg>'
    }
  };