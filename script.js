

// worst code ive ever written... im traveling it's hard...need help with loops and functions
var timeClock= new Date().getHours();
var todaysDate = new Date().getDate();
var todaysMonth = new Date().getMonth();

// button id's
var saveButton1 = $('#1');
var saveButton2 = $('#2');
var saveButton3 = $('#3');
var saveButton4 = $('#4');
var saveButton5 = $('#5');
var saveButton6 = $('#6');
var saveButton7 = $('#7');
var saveButton8 = $('#8');
var saveButton9 = $('#9');
var saveButton10 = $('#10');
// title text
var timeClockText = $('#currentDay');

// vars for text box functions
var first1 = $("#first");
var second2 = $("#second");
var third3 = $("#third");
var fourth4 = $("#fourth");
var fifth5 = $("#fifth");
var sixth6 = $("#sixth");
var seventh7 = $("#seventh");
var eighth8 = $("#eighth");
var ninth9 = $("#ninth");
var tenth10 = $("#tenth");

// vars to display text in boxes
first1.text(localStorage.getItem("inputval1"));
second2.text(localStorage.getItem("inputval2"));
third3.text(localStorage.getItem("inputval3"));
fourth4.text(localStorage.getItem("inputval4"));
fifth5.text(localStorage.getItem("inputval5"));
sixth6.text(localStorage.getItem("inputval6"));
seventh7.text(localStorage.getItem("inputval7"));
eighth8.text(localStorage.getItem("inputval8"));
ninth9.text(localStorage.getItem("inputval9"));
tenth10.text(localStorage.getItem("inputval10"));

//functions for each button
saveButton1.click(function(){
 
  var theInput = first1.val();
  localStorage.setItem("inputval1", theInput);
  first1.text(localStorage.getItem("inputval1"));

});  
saveButton2.click(function(){
 
  var theInput = second2.val();
  localStorage.setItem("inputval2", theInput);
  second2.text(localStorage.getItem("inputval2"));

});  
saveButton3.click(function(){
 
  var theInput = third3.val();
  localStorage.setItem("inputval3", theInput);
  third3.text(localStorage.getItem("inputval3"));

});  
saveButton4.click(function(){
 
  var theInput = fourth4.val();
  localStorage.setItem("inputval4", theInput);
  fourth4.text(localStorage.getItem("inputval4"));

});  
saveButton5.click(function(){
 
  var theInput = fifth5.val();
  localStorage.setItem("inputval5", theInput);
  fifth5.text(localStorage.getItem("inputval5"));

});  
saveButton6.click(function(){
 
  var theInput = sixth6.val();
  localStorage.setItem("inputval6", theInput);
  sixth6.text(localStorage.getItem("inputval6"));

});  
saveButton7.click(function(){
 
  var theInput = seventh7.val();
  localStorage.setItem("inputval7", theInput);
  seventh7.text(localStorage.getItem("inputval7"));

});  
saveButton8.click(function(){
 
  var theInput = eighth8.val();
  localStorage.setItem("inputval8", theInput);
  eighth8.text(localStorage.getItem("inputval8"));

});  
saveButton9.click(function(){
 
  var theInput = ninth9.val();
  localStorage.setItem("inputval9", theInput);
  ninth9.text(localStorage.getItem("inputval9"));

});  
saveButton10.click(function(){
 
  var theInput = tenth10.val();
  localStorage.setItem("inputval10", theInput);
  tenth10.text(localStorage.getItem("inputval10"));

});  
 

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
timeClockText.html(todaysDate + " day, on the " + todaysMonth + " month of the year."  );

// location.reload() every 10 minutes or so
setInterval(function(){location.reload()}, 180000);

// functions to color the boxes
if (timeClock == 8) {
  eight.addClass('present');
  eight.removeClass('past');
  eight.removeClass('future');

}
if (timeClock == 9) {
  nine.addClass('present');
  eight.addClass('past');
  eight.removeClass('present');

  }
if (timeClock == 10) {
    ten.addClass('present');
    ten.removeClass('future');
    
    nine.addClass('past');
    nine.removeClass('future')

    eight.addClass('past');
    eight.removeClass('future');

   

  }
if (timeClock == 11){
  eleven.addClass('present');
  eleven.removeClass('future');
  ten.addClass('past');
  ten.removeClass('future');
  nine.addClass('past');
  nine.removeClass('future')
  eight.addClass('past');
  eight.removeClass('future');

}
if (timeClock == 12){
  twelve.addClass('present');
  twelve.removeClass('future');
  eleven.addClass('past');
  eleven.removeClass('future');
  ten.addClass('past');
  ten.removeClass('future');
  nine.addClass('past');
  nine.removeClass('future')
  eight.addClass('past');
  eight.removeClass('future');
}
if (timeClock == 13){
  thirteen.addClass('present');
  thirteen.removeClass('future');
  twelve.addClass('past');
  twelve.removeClass('future');
  eleven.addClass('past');
  eleven.removeClass('future');
  ten.addClass('past');
  ten.removeClass('future');
  nine.addClass('past');
  nine.removeClass('future')
  eight.addClass('past');
  eight.removeClass('future');
}
if (timeClock == 14){
  fourteen.addClass('present');
  fourteen.removeClass('future');
  thirteen.addClass('past');
  thirteen.removeClass('future');
  twelve.addClass('past');
  twelve.removeClass('future');
  eleven.addClass('past');
  eleven.removeClass('future');
  ten.addClass('past');
  ten.removeClass('future');
  nine.addClass('past');
  nine.removeClass('future')
  eight.addClass('past');
  eight.removeClass('future');
}
if (timeClock == 15){
  fifteen.addClass('present');
  fifteen.removeClass('future');
  fourteen.addClass('past');
  fourteen.removeClass('future');
  thirteen.addClass('past');
  thirteen.removeClass('future');
  twelve.addClass('past');
  twelve.removeClass('future');
  eleven.addClass('past');
  eleven.removeClass('future');
  ten.addClass('past');
  ten.removeClass('future');
  nine.addClass('past');
  nine.removeClass('future')
  eight.addClass('past');
  eight.removeClass('future');
}
if (timeClock == 16){
  sixteen.addClass('present');
  sixteen.removeClass('future');
  fifteen.addClass('past');
  fifteen.removeClass('future');
  fourteen.addClass('past');
  fourteen.removeClass('future');
  thirteen.addClass('past');
  thirteen.removeClass('future');
  twelve.addClass('past');
  twelve.removeClass('future');
  eleven.addClass('past');
  eleven.removeClass('future');
  ten.addClass('past');
  ten.removeClass('future');
  nine.addClass('past');
  nine.removeClass('future')
  eight.addClass('past');
  eight.removeClass('future');

}
if (timeClock == 17){
  seventeen.addClass('present');
  seventeen.removeClass('future');
  sixteen.addClass('past')
  sixteen.removeClass('future');
  fifteen.addClass('past');
  fifteen.removeClass('future');
  fourteen.addClass('past');
  fourteen.removeClass('future');
  thirteen.addClass('past');
  thirteen.removeClass('future');
  twelve.addClass('past');
  twelve.removeClass('future');
  eleven.addClass('past');
  eleven.removeClass('future');
  ten.addClass('past');
  ten.removeClass('future');
  nine.addClass('past');
  nine.removeClass('future')
  eight.addClass('past');
  eight.removeClass('future');
}
if (timeClock > 18){
  $('div').addClass('future');
  
};
// button to reset our list and page
$('#resetb').click(function(){
  localStorage.clear();
  location.reload();
});







