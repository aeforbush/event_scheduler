// when opened display current month, day, year
$("#currentDay").text(moment().format('MM/DD/YY'));
// console.log(currentDay);

// color code blocks for past, present, or future
$(document).ready(function() {
    colorChange();
    renderText();
});


function colorChange() {
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);
// function that tells blocks whether they are past, present or future
$(".input").each(function() {
    // fetching an id attribute and parsing it into an integer
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);

    // check for past currentTime
    if(currentTime > scheduledTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        // check for future of currentTime
    } else if (currentTime < scheduledTime) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        // check if present time is equal to currentTime
    } else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
});
};

// variables for saving task and where it goes
var taskText;
var taskTime;

// event handler for saveBtn (getting value from content and saving it to local storage)
$(".saveBtn").click(function() {
    taskText = $(this).siblings(".input").val();
    console.log(taskText);
    taskTime = $(this).siblings(".hour").text();
    console.log(taskTime);

    localStorage.setItem(taskTime, JSON.stringify(taskText));

    colorChange();
    renderText();
});

$(".deleteBtn").click(function() {
    taskText = $(this).siblings(".input").val("");
    taskText = $(this).siblings(".input").val();
    taskTime = $(this).siblings(".hour").text();
    localStorage.setItem(taskTime, JSON.stringify(taskText));

colorChange ();
renderText ();

});


// ability to add and display tasks
function renderText() {
    var addTaskText8 = JSON.parse(localStorage.getItem("8:00 AM"));
    $("#8").val("");
    $("#8").val(addTaskText8);

    var addTaskText9 = JSON.parse(localStorage.getItem("9:00 AM"));
    $("#9").val("");
    $("#9").val(addTaskText9);

    var addTaskText10 = JSON.parse(localStorage.getItem("10:00 AM"));
    $("#10").val("");
    $("#10").val(addTaskText10);

    var addTaskText11 = JSON.parse(localStorage.getItem("11:00 AM"));
    $("#11").val("");
    $("#11").val(addTaskText11);

    var addTaskText12 = JSON.parse(localStorage.getItem("12:00 PM"));
    $("#12").val("");
    $("#12").val(addTaskText12);

    var addTaskText1 = JSON.parse(localStorage.getItem("1:00 PM"));
    $("#13").val("");
    $("#13").val(addTaskText1);

    var addTaskText2 = JSON.parse(localStorage.getItem("2:00 PM"));
    $("#14").val("");
    $("#14").val(addTaskText2);

    var addTaskText3 = JSON.parse(localStorage.getItem("3:00 PM"));
    $("#15").val("");
    $("#15").val(addTaskText3);

    var addTaskText4 = JSON.parse(localStorage.getItem("4:00 PM"));
    $("#16").val("");
    $("#16").val(addTaskText4);

    var addTaskText5 = JSON.parse(localStorage.getItem("5:00 PM"));
    $("#17").val("");
    $("#17").val(addTaskText5);
}










