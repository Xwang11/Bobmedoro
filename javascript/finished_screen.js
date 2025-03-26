const startOverButton = document.getElementById('startover');
const finalMessage = document.getElementById('study_time');


let totalTimeSeconds;
let totalTimeHours;
let totalTimeMinutes;
let user_notes;

totalTimeSeconds = localStorage.getItem('totalFocusTime');
user_notes = localStorage.getItem('user_notes');
console.log(user_notes);

totalTimeMinutes = Math.floor(totalTimeSeconds / 60);
totalTimeHours = totalTimeMinutes % 60;

// Check is user notes has value
function isEmptyString(value) {
    return typeof value == "string" && value.trim().length === 0;
}

// Print final message
if (isEmptyString(user_notes)) {
    finalMessage.innerHTML = `You focused for ${totalTimeHours} hr ${totalTimeMinutes} min!`
} else {
    finalMessage.innerHTML = `You focused for ${totalTimeHours} hr ${totalTimeMinutes} min on ${user_notes}!`
}

// start over button
function startOver() {
    window.location.href="../html/index.html";
}

startOverButton.addEventListener('click', startOver);