// Variables
var eventData;
var now = moment();
var hoursEl = $(".hour").text();
var textareaEl = $("textarea");
var timeBlock = $(".time-block");
var eventsData;

// Display current day
function displayTime() {
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);
}
// Set colors of the timeblocks
function setHourColors() {
  for (var i = 9; i < 19; i++) {
    if (i < now.hour()) {
      $("#hour" + i).addClass("past"); //
    } else if (i == now.hour()) {
      $("#hour" + i).addClass("present");
    } else if (i > now.hour()) {
      $("#hour" + i).addClass("future");
    }
  }
}
// Save button function, set tasks to the localstorage
function handleSaveClick(event) {
  event.preventDefault();
  var hourBlock = $(event.currentTarget).parent();
  var value = hourBlock.children("textarea").val();
  var hour = hourBlock.attr("id");
  $(this).text("Saved!"); //button show text saved on click
  eventsData[hour] = value;
  localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}
// Load tasks from local storage
function loadStorageData() {
  eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
  if (!eventsData) {
    eventsData = {
      hour9: "",
      hour10: "",
      hour11: "",
      hour12: "",
      hour13: "",
      hour14: "",
      hour15: "",
      hour16: "",
      hour17: "",
      hour18: "",
    };
  }

  for (var i = 0; i < 10; i++) {
    var hour = 9 + i;
    $(textareaEl[i]).text(eventsData["hour" + hour]);
  }
}

// Create event listener on the submit button element
$(".saveBtn").on("click", handleSaveClick);

//when page loads
$(function () {
  setHourColors();
  loadStorageData();
  displayTime();
});
