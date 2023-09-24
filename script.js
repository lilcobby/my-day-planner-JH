// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// date.now or datejs?? 

var timeClock= new Date().getHours()

var saveButtons = $('.btn');

var timeClockText = $('#currentDay');

var eight = $('#hour-8');
var nine = $('#hour-9');
var ten = $('#hour-10');
var eleven = $('#hour-11');
var twelve = $('#hour-12');
var thirteen = $('#hour-13');
var fourteen = $('#hour-14');
var fifteen = $('#hour-15');
var sixteen = $('#hour-16');
var seventeen = $('#hour-17');
// display time in time element
timeClockText.html(timeClock);

// element id = a value so the clock can check it.
eight = 8
nine = 9
ten = 10
eleven = 11
twelve = 12
thirteen = 13
fourteen = 14
fifteen = 15
sixteen = 16
seventeen = 17;


// functionality block not ready yet need to make it whilre time is ><= a number in out set, do something
while (timeClock == eight) {
  eight.removeClass('future');

}
while (timeClock != eight){

  if (timeClock > eight){
  eight.addClass ('past');}
  else { eight.addClass('future');}

};


console.log(timeClockText);
// does my iff then work with values

// lets see if we can change the background colors/ playground
if (timeClock > 5 ){
  console.log("it worked")
  $('div').removeClass('future');
  $('div').removeClass('present');
  $('div').addClass('past');
};
 

if (timeClock == 18) {
  console.log("im sleepy");
  seventeen.addClass('present');
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
