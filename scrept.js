const counter = document.querySelector('.text-number')
const DECREASE = document.getElementById("DECREASE");
const INCREASE = document.getElementById("INCREASE");
const RESET = document.getElementById("RESET");

let count = 3;
text.innerHTML = count

function increase (){
    count = count + 1
    text.innerHTML = count
}

function reset (){
    count = 0
    text.innerHTML = count
}

function Decrease (){
    count = count - 1
    text.innerHTML = count
}

INCREASE.addEventListener("click", increase);
RESET.addEventListener("click", reset);
DECREASE.addEventListener("click", Decrease);


