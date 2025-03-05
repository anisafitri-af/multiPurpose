var number = 0;
var numberDisplay = document.getElementById('count');
var  mainBlock = document.getElementById('mainBlock');
function dec() {
    if (number <= 0) {
        numberDisplay.textContent = 0;
    } else {
        number--;
        numberDisplay.textContent = number;
        mainBlock.classList.add('blockMoveLeft');
        setTimeout(function() {
        mainBlock.classList.remove('blockMoveLeft');
    }, 500);
    }
}

function inc() {
    number++;
    numberDisplay.textContent = number;
    mainBlock.classList.add('blockMoveRight');
    setTimeout(function() {
        mainBlock.classList.remove('blockMoveRight');
    }, 500);
}