// updates time on the webpage
function updateTime() {
  let today = moment();

  // updates the time element in the header
  $("#today").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

  // For coloring the past, present, and future time blocks
  let now = moment().format("kk");
  for (let i = 0; i < scheduleElArray.length; i++) {
      scheduleElArray[i].removeClass("future past present");

      if (now > scheduleElArray[i].data("hour")) {
          scheduleElArray[i].addClass("past");

      } else if (now === scheduleElArray[i].attr("data-hour")) {
          scheduleElArray[i].addClass("current");

      } else {

          scheduleElArray[i].addClass("future");
      }
  }
}

// textarea elements
let saveBttn = $(".saveBtn");
let containerEl = $(".container");
let schedule09 = $("#09");
let schedule10 = $("#10");
let schedule11 = $("#11");
let schedule12 = $("#12");
let schedule13 = $("#13");
let schedule14 = $("#14");
let schedule15 = $("#15");
let schedule16 = $("#16");
let schedule17 = $("#17");

let scheduleElArray = [
  schedule09,
  schedule10,
  schedule11,
  schedule12,
  schedule13,
  schedule14,
  schedule15,
  schedule16,
  schedule17,
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000); 

// render schedule saved in local storage
function renderLastRegistered() {
  for (let el of scheduleElArray) {
      el.val(localStorage.getItem("time block " + el.data("hour")));

  }
}

$('#clear-day').on('click',function(){
  localStorage.clear();
  //initPage()
})
console.log()


// function for handling clicks
function handleFormSubmit(event) {
  event.preventDefault();

  let btnClicked = $(event.currentTarget);

  let targetText = btnClicked.siblings("textarea");

  let targetTimeBlock = targetText.data("hour");

  localStorage.setItem("time block " +  targetTimeBlock, targetText.val());
}

saveBttn.on("click", handleFormSubmit);
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

