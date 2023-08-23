var description=document.querySelector(".description");
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//put current date and time at top of page
  // TODO: Add code to display the current date in the header of the page.
// });
var currentDay = dayjs().format('dddd, MMM D, YYYY');
$('#currentDay').text(currentDay);
var storageSave=[];
var currentHour=dayjs().format('H');
$('#hour').text(currentHour);
console.log(currentHour);

// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
$(document).ready(function(){
  $(".time-block").each(function(){

    var timeBlock = ""; 
    timeBlock = JSON.stringify($(this).attr("id"));
    timeBlocks=timeBlock.substring(0, timeBlock.length-1);
    var timeBlockTwo=timeBlocks.slice(6);
    var timeBlockNumber=parseInt(timeBlockTwo);
    
    console.log("Block hour is "+ timeBlockNumber);
    
     if (timeBlockNumber==currentHour){
      //apply class present
      $(this).find(".colorArea").addClass("present")
     }else if (timeBlockNumber > currentHour){
     $(this).find(".colorArea").addClass("future")}
     //apply class future
     else if (timeBlockNumber< currentHour){
     $(this).find(".colorArea").addClass("past")}
     //apply class past 

  });
});

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  
$(".saveBtn").on("click", function(event){
  event.preventDefault();
  var timeSection = $(this).parent().attr("id");
    console.log("id for the section= "+timeSection)
  var writtenSection=$(this).parent().find(".colorArea").val();
  console.log("written info= "+writtenSection)

  storageSave[0]=writtenSection
  localStorage.setItem(timeSection,JSON.stringify(writtenSection));
    console.log( "Local storage is "+localStorage.getItem(timeSection,writtenSection));

   renderItems()
   function renderItems(){
    localStorage.getItem(timeSection,JSON.stringify(writtenSection));
    var textSave = JSON.parse(localStorage.getItem(timeSection, writtenSection));
    

  console.log("textSave ="+textSave)
    description.textContent = textSave;
    console.log("description is "+description.textContent)
    document.querySelector(".description").innerHTML=textSave;
   }
   
  
  }
);
$('#hour-9').children('textarea').val(localStorage.getItem('hour-9'));
$('#hour-10').children('textarea').val(localStorage.getItem('hour-10'));
$('#hour-11').children('textarea').val(localStorage.getItem('hour-11'));
$('#hour-12').children('textarea').val(localStorage.getItem('hour-12'));
$('#hour-13').children('textarea').val(localStorage.getItem('hour-13'));
$('#hour-14').children('textarea').val(localStorage.getItem('hour-14'));
$('#hour-15').children('textarea').val(localStorage.getItem('hour-15'));
$('#hour-16').children('textarea').val(localStorage.getItem('hour-16'));
$('#hour-17').children('textarea').val(localStorage.getItem('hour-17'));

