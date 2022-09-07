let firstValue = document.querySelector('#valueOne');
let secondValue = document.querySelector('#valueTwo');
let btn = document.querySelector("#calculate");
btn.addEventListener('click', calculators);
let message = document.querySelector("#result");


function calculators() {
    let result = parseInt(firstValue.value) + parseInt(secondValue.value);
    message.innerHTML = 'El resultado es: ' + result;
}