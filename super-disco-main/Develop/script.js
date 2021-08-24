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
};
// function that tells blocks whether they are past, present or future
$(".input").each(function() {
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);
})

// ability to add tasks
function renderText() {

}



// save task function
$(".saveBtn").click(function() {

}) 




