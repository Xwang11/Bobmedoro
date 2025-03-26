const goButton = document.getElementById('go_button');
let notes;

function go() {
    notes = document.getElementById('notes').value;
    localStorage.setItem('user_notes', notes)
    window.location.href='timer_screen.html';
}

goButton.addEventListener('click', go);