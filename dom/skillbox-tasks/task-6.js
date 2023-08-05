let input = document.createElement('input');
let h1 = document.createElement('h1')
h1.textContent = '';

document.body.append(input);
document.body.append(h1);

let timeout;

function onTextChanged () {
    clearTimeout(timeout);
    timeout = setTimeout(updateHeader, 300);
}

function updateHeader() {
    console.log(input.value);
    h1.textContent = input.value;
}

input.addEventListener('input', onTextChanged);