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

var testChart1 = makeChart(ctx1, [], []);
var testChart2 = makeChart(ctx2, [], []);
var testChart3 = makeChart(ctx3, [], []);

// DB: NEED TO PUT THIS INSIDE WHERE WE CONNECT TO DB.
// var progress = res.progress;
// var remaining = 100 - res.progress;

function makeChart(ctx, labelNames, data) {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      // labels: ['section name', 'name', 'name'],
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

$("#chart-container1").append(testChart1);
$("#chart-container2").append(testChart2);
$("#chart-container3").append(testChart3);
