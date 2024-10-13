function addToCalculator(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        alert('Invalid expression');
        clearCalculator();
    }
}

function applySqrt() {
    let val = document.getElementById('result').value;
    if (val !== '') {
        document.getElementById('result').value = Math.sqrt(parseFloat(val));
    }
}

function applyAbs() {
    let val = document.getElementById('result').value;
    if (val !== '') {
        document.getElementById('result').value = Math.abs(parseFloat(val));
    }
}

function applyRound() {
    let val = document.getElementById('result').value;
    if (val !== '') {
        document.getElementById('result').value = Math.round(parseFloat(val));
    }
}

function clearCalculator() {
    document.getElementById('result').value = '';
}

function applyPower() {
    let resultField = document.getElementById('result');
    let currentValue = parseFloat(resultField.value);
    if (!isNaN(currentValue)) {
        resultField.value = Math.pow(currentValue, 2); // به توان 2
    }
}

function applyPercentage() {
    let resultField = document.getElementById('result');
    let currentValue = parseFloat(resultField.value);
    if (!isNaN(currentValue)) {
        resultField.value = currentValue / 100; // درصد
    }
}
