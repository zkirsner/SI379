const timeDisplay = document.querySelector('#time-display'); // Displays the time
const startButton = document.querySelector('#start-button'); // Starts the timer
const pauseButton = document.querySelector('#pause-button'); // Pauses the timer
const resetButton = document.querySelector('#reset-button'); // Resets the timer

let elapsedTime = 0; // The time in milliseconds that has elapsed
let startedTime;
let updateInterval;
/**
 * Update the content in the #time-display element to reflect the current time
 * @param {*} value Time in milliseconds
 */
function updateDisplay(value) {
    timeDisplay.innerText = (value/1000).toFixed(0);
}
updateDisplay(0);
function updateTime() {
    const currentTime = Date.now() - startedTime;
    const totalTime = currentTime + elapsedTime;
    updateDisplay(totalTime);
    // document.getElementById("time-display").innerHTML = currentTime;
}
function startTimer() {
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    startedTime = Date.now() - elapsedTime;
    updateInterval = setInterval(updateTime, 100);
}
function stopTimer() {  
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
    clearInterval(updateInterval);
}

function pauseTimer() {
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
    clearInterval(updateInterval);
}

function resetTimer() {
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    elapsedTime = 0;
    updateDisplay(0);
    clearInterval(updateInterval);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer); 
resetButton.addEventListener('click', resetTimer);

resetTimer();