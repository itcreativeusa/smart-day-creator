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
      $("#hour" + i).addClass("past"); //+"textarea"
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
  var hour = hourBlock.attr("id").split("-")[1];
  $(this).text("Saved!");
  eventsData["hour" + hour] = value;
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

  console.log(eventsData);

  for (var i = 0; i < 10; i++){
    var hour = 9 + i;
    $(textareaEl[i]).text(eventsData["hour" + hour]);
  }
     /* //TODO function
      $(textareaEl[0]).text(eventsData.hour9);
      $(textareaEl[1]).text(eventsData.hour10);
      $(textareaEl[3]).text(eventsData.hour11);
      $(textareaEl[4]).text(eventsData.hour12);
      $(textareaEl[5]).text(eventsData.hour14);
      $(textareaEl[6]).text(eventsData.hour15);
      $(textareaEl[7]).text(eventsData.hour16);
      $(textareaEl[8]).text(eventsData.hour17);
      $(textareaEl[9]).text(eventsData.hour18);
  */
}



// Create event listener on the submit button element
$(".saveBtn").on("click", handleSaveClick);

$(function () {
  setHourColors();
  loadStorageData();
  displayTime();
});
