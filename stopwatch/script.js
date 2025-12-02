// initail value of the Timer
let timer;
let isRunning = false;
let [hours, min, sec, millsec] = [0, 0, 0, 0];

// accessing all the Html elements to Js
let displayEle = document.querySelector(".Timer");
let startBtn = document.querySelector(".startbtn");
let stopBtn = document.querySelector(".stopbtn");
let resetBtn = document.querySelector(".resetbtn");

// adding the Functionalities to the buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click",resetTimerVal);

// function to start timer
function startTimer() {
   
    if(!isRunning){
        isRunning=true
        // setInterval(()=>{},1000)
       timer=setInterval(updateTimer,10)
    }
}
// function to stop timer
function stopTimer() {
    if(isRunning){
        isRunning=false
        clearInterval(timer)
    }
}
// function to reset timer
function resetTimerVal() {
    clearInterval(timer)
    isRunning=false;
    hours=0;
    min=0;
    sec=0;
    millsec=0;
    updateDisplay()

}
// function to update timer value
function updateTimer() {
  millsec = millsec + 10;
  if (millsec >= 1000) {
    millsec = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
      if (min >= 60) {
        min = 0;
        hours++;
      }
    }
  }
  updateDisplay()
}
// function to update The Display
function updateDisplay() {
  displayEle.textContent = `
    ${String(hours).padStart(2, 0)}:
    ${String(min).padStart(2, 0)}:
    ${String(sec).padStart(2, 0)}:
    ${String(millsec).padStart(2, 0)}`;
}
