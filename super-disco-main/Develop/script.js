// VARIABLES


// when opened display current month, day, year
$("#currentDay").text(moment().format('MM/DD/YY'));
// console.log(currentDay);

// color code blocks for past, present, or future

$(document).ready(function() {
    colorChange();
    renderText();
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

// ability to add tasks
function renderText() {

}



// save task function
$(".saveBtn").click(function() {

}) 




