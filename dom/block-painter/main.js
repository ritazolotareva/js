const colorInput = document.querySelector('.color-input');
const colorBlock = document.querySelector('.color-block');
const clearButton = document.querySelector('.clear-color-button');

function paintBlock() {
    colorBlock.style.backgroundColor = colorInput.value;
}

colorInput.addEventListener('input', paintBlock);
paintBlock();

clearButton.addEventListener('click', function(){
    colorBlock.style.removeProperty('background-color');
    colorInput.value = '';
});
