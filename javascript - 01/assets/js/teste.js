
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

document.getElementById("soma").addEventListener("click", function () {
    increment();
});

document.getElementById("subtração").addEventListener("click", function () {
    decrement();
});

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    desabilita(currentNumber);
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    desabilita(currentNumber);
}

function desabilita(int) {
    if (int >= 10) {
        document.getElementById("soma").disabled = true;
    } else if (int <= -10) {
        document.getElementById("subtração").disabled = true;
    } else {
        document.getElementById("soma").disabled = false;
        document.getElementById("subtração").disabled = false;
    }

    if(int < 0){
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "black";
    }
}

