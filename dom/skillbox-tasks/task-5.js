const input = document.querySelector('.input-number');
const button = document.querySelector('.start-btn');
const display = document.querySelector('.timer-counter');
let counter;

function timer() {
    if (input.value > 0) {
        display.textContent = input.value;
        counter = setInterval(count, 1000);
    } else {
        alert('Неправельно введено число')
    }
}

function count() {
    display.textContent -= 1;
    if (display.textContent == 0) {
        clearInterval(counter);
    }
}

button.addEventListener('click', timer);