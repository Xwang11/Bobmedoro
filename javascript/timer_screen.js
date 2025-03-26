// Read from html file
// Display 
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const lockInStatus =document.getElementById('lock_in_status');

// Needed buttons
const playPauseButton = document.getElementById('play_pause_button');
const skipButton = document.getElementById('skip_button');
const resetButton = document.getElementById('reset_button');
const nyoButton = document.getElementById('nyo_button');
const yemshButton = document.getElementById('yemsh_button');
const roundDisplay = document.getElementById('round_display');
const doneButton = document.getElementById('done_button');
const continueButton = document.getElementById('continue_button');
const saveSettingsButton = document.getElementById('saveSettingsButton');

// Popups
const finishedPopUp = document.getElementById('finished');
const timerFinishedPopUp = document.getElementById('timer_finished_popup');

// Settings
const openCloseSettingsButton = document.getElementById('opencloseSettings');
const settingsMenu = document.getElementById('settingsMenu');

// Define variables
let totalFocusTime=0; // in seconds
let totalMinutes;
let totalSeconds;
let timerInterval;
let counting;

let lockInTime = 25;
let shortRestTime = 5;
let longRestTime = 10;

let state = 0;
// 0 -> focus , 1 -> short rest, 2 -> long rest

let roundCount = 0;
const totalRounds = 4;

// Opening settings
function openCloseSettingsFunction() {
    settingsMenu.classList.toggle('active');
}

// Timer finished alert
function timerFinished() {
    // Play a noise, give an alert, and move on to the next screen
    counting = false;
    timerFinishedPopUp.style.display = 'block';  
}

// Update timer
function updateDisplay(){
    const minutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds % 60;

    minutesDisplay.innerText = minutes.toString().padStart(2, '0');
    secondsDisplay.innerText = seconds.toString().padStart(2, '0');
    roundDisplay.innerText = `${roundCount.toString()} / 4`;
};

// Calculate what state it should be: focus, short rest, or long reset
function updateState() {
    if (state == 0) {
        roundCount +=1; 
        if (roundCount > totalRounds-1) {
            roundCount = 0;
            state = 2;
        } else {
            state = 1;
        }
    } else if (state==1){
        state = 0;
    } else {
        state = 0;
    }
    setup(state);
}

// Run the timer
function theTimer() {
    if (counting) {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
            if (state == 0) {
                totalFocusTime +=1;
            }
        } else {
            // Timer finished
            clearInterval(timerInterval);
            updateState();
            timerFinished();
        }
    }
}

// Set up timer
function setup(state) {
    if (state==0){
        time= lockInTime;
        lockInStatus.innerText="Locked In";
    }
    if (state==1) {
        time= shortRestTime;
        lockInStatus.innerText="Short Rest";
    } 
    if (state==2){
        time = longRestTime;
        lockInStatus.innerText="Long Rest";
    }

    clearInterval(timerInterval);
    totalMinutes = time;
    totalSeconds = totalMinutes * 60;
    counting = true;
    updateDisplay();
    timerInterval = setInterval(theTimer, 1000);

}

// Save settings
function saveSettings() {
    lockInTime = document.getElementById('focusTime').value;
    shortRestTime = document.getElementById('shortRestTime').value;
    longRestTime = document.getElementById('longRestTime').value;

    if (lockInTime == 0) {
        lockInTime = 25;
    }
    if (shortRestTime == 0) {
        shortRestTime = 5;
    }
    if (longRestTime == 0) {
        longRestTime = 15;
    }
    setup(0);
    openCloseSettingsFunction();
}

// Pause Play Button
function playPauseTimer() {
    counting = false;
    finishedPopUp.style.display = 'block';
};

// Skip Button
function skip() {
    updateState();
};

// reset button
function reset() {
    roundCount=0;
    setup(0);
    totalFocusTime = 0;
    updateDisplay();
};

// nyo button
function nyoFunction(){
    finishedPopUp.style.display = 'none';
    counting = true;
}

// yemsh button
function finished() {
    localStorage.setItem('totalFocusTime', totalFocusTime);
    window.location.href="../html/finishedScreen.html";
}

// continue button
function continue_function() {
    counting = true;
    timerFinishedPopUp.style.display= 'none';
}
// Run when starting initially
setup(0);

playPauseButton.addEventListener('click', playPauseTimer);
skipButton.addEventListener('click', skip);
resetButton.addEventListener('click', reset);
nyoButton.addEventListener('click', nyoFunction);
yemshButton.addEventListener('click', finished);
doneButton.addEventListener('click', finished);
continueButton.addEventListener('click', continue_function);

openCloseSettingsButton.addEventListener('click', openCloseSettingsFunction);
saveSettingsButton.addEventListener('click', saveSettings);