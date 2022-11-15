// setting the time in the header
function updateTime() {
  let today = moment();

  // time updates 
  $("#today").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

  // time blocks for past, present, and future
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

renderLocalStorage();
updateTime();
setInterval(updateTime, 1000); 

// puts schedule in local storage
function renderLocalStorage() {
  for (let el of scheduleElArray) {
      el.val(localStorage.getItem("current-time" + el.data("hour")));

  }
}

//save button function
function saveToLocalStorage(event) {
  event.preventDefault();

  let btnClicked = $(event.currentTarget);

  let targetText = btnClicked.siblings("textarea");

  let targetTimeBlock = targetText.data("hour");

  localStorage.setItem("current-time" +  targetTimeBlock, targetText.val());
}

saveBttn.on("click", saveToLocalStorage);
