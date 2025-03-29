
// Elements
const goButton = document.getElementById('go_button');
let notes;

// Settings Elements
const openCloseSettingsButton = document.getElementById('opencloseSettings');
const settingsMenu = document.getElementById('settingsMenu');


function go() {
    notes = document.getElementById('notes').value;
    localStorage.setItem('user_notes', notes)
    window.location.href='../html/timer_screen.html';
}

const { openCloseSettingsFunction, saveSettings } = require('./timer_screen.js');

openCloseSettingsButton.addEventListener('click', openCloseSettingsFunction);
saveSettingsButton.addEventListener('click', saveSettings);


goButton.addEventListener('click', go);