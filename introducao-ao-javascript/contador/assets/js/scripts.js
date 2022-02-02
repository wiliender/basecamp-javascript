var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('add').addEventListener('click', increment);
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

document.getElementById('sub').addEventListener('click', decrement);
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
