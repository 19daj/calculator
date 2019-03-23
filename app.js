var firstNumber = document.getElementById("first");
var secondNumber = document.getElementById("second");
var firstValue;
var secondValue;
var val1;
var val2;
var count = 0;
var count2 = 0;
var paragraph = document.createElement("p");
paragraph.style.display = "inline-block";
var inputResult = document.createElement("input");
inputResult.style.display = "none";
var nodeFather = document.getElementById("father");
nodeFather.appendChild(paragraph)
nodeFather.appendChild(inputResult);


function showValue() {
    firstValue = firstNumber.value;
    if (firstValue.charCodeAt(count) < 46 || firstValue.charCodeAt(count) > 57 || firstValue.charCodeAt(count) === 47) {
        alert("Caracter inválido. Por favor ingrese únicamente número(s)");
    }
    count += 1;
    return firstValue;
}

function showValue2() {
    secondValue = secondNumber.value;
    if (secondValue.charCodeAt(count2) < 46 || secondValue.charCodeAt(count2) > 57 || secondValue.charCodeAt(count2) === 47) {
        alert("Caracter inválido. Por favor ingrese únicamente número(s)");
    }
    count2 += 1;
    return secondValue;
}

function values(operation) {
    val1 = parseFloat(showValue());
    val2 = parseFloat(showValue2());
    inputResult.style.display = "inline-block";
    paragraph.innerHTML = "Resultado de la operación " + operation;
}

function addition() {
    values("suma");
    var additionTotal = val1 + val2;
    inputResult.value = additionTotal;
}

function substraction() {
    values("resta");
    var substractionTotal = val1 - val2;
    inputResult.value = substractionTotal;
}

function multiplication() {
    values("multiplicación");
    var multiplicationTotal = val1 * val2;
    inputResult.value = multiplicationTotal;
}

function division() {
    values("división");
    var divisionTotal = val1 / val2;
    inputResult.value = divisionTotal;
}

function residue() {
    values("residuo");
    var residueTotal = val1 % val2;
    inputResult.value = residueTotal;
}

function power() {
    values("potencia");
    var powerTotal = Math.pow(val1, val2);
    inputResult.value = powerTotal;
}

function clean() {
    firstNumber.value = "";
    secondNumber.value = "";
    inputResult.value = "";
    inputResult.style.display = "none";
    paragraph.innerHTML = "";
}

