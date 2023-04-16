//variables
var eventData;
var now = moment();
var hoursEl = $(".hour").text();
var textareaEl = $("textarea");
var timeBlock = $(".time-block");

// handle displaying the time
function displayTime() {
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);
}

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

 
}




function handleSaveClick(event) {
 // event.preventDefault();

  //   tasks =  textareaEl.val();
  //  var eventsAndTime = [hoursEl + tasks];
  //  console.log(eventsAndTime);
  //   // if there's nothing in the form entered, don't print to the page
  //   if (!textareaEl) {
  //     $("textarea").html("No tasks added! Add at last one task.");
  //     console.log("No tasks added! Add at last one task.");
  //     return;
  //   }

  //var hourBlock = $(event.target).parent().parent();
  var hourBlock = $(event.currentTarget).parent();
  var value = hourBlock.children("textarea").val();
  var hour = hourBlock.attr("id");//.split("-")[1];
  console.log(hour, value);
  $(this).text("Saved!");

  //textareaEl.text( );
  //console.log(value[1]);
  
  


}

//render schedule

// Create event listener on the submit button element
$(".saveBtn").on("click", handleSaveClick);

$(function () {
  loadStorageData();
  setHourColors();
  displayTime();
});
