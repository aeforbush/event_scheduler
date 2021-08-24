// when opened display current month, day, year
$("#currentDay").text(moment().format('MM/DD/YY'));
// console.log(currentDay);

// color code blocks for past, present, or future
$(document).ready(function() {
    colorChange();
    //createTask();
})


function colorChange() {
    var currentTime = moment().hours();
    console.log(currentTime);
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
})
};

// variables for saving task and where it goes
var taskText;
var taskTime;

// event handler for saveBtn (getting value from content and saving it to local storage)
$(".saveBtn").click(function() {
    taskText = $(this).siblings(".input").val();
    console.log(taskText);
    taskTime = $(this).siblings("#hour").text();
    console.log(taskTime);

    localStorage.setItem(taskTime, JSON.stringify(taskText));

    colorChange();
    //createTask();
})

var tasks = []
// ability to add tasks
var createTask = function(taskText, taskTime) {
    var taskInput = $("<textarea")
    .addClass("input")
    .text(taskText);

    // append textarea and input element
    taskInput.append(taskText);

    // append to textarea on page
    $("hour" + taskInput).append(taskText);
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
}



// save task function
$(".saveBtn").click(function() {

}) 




