/*
var plusButton = document.getElementById('plus')
var minusButton = document.getElementById('minus')
var multButton = document.getElementById('multiple')
var devideButton = document.getElementById('devide')
*/

var operationButton = document.getElementsByClassName('operation-button')

function element(result) {
    var elementOne = Number(document.getElementById('numberOne').value)
    var elementTwo = Number(document.getElementById('numberTwo').value)
    /* var elemNumOne = Number(elementOne.value)
     var elemNumTwo = Number(elementTwo.value)*/
    if (result === '+') { var result = elementOne + elementTwo }
    else if (result === '-') { var result = elementOne - elementTwo }
    else if (result ==='*') { var result = elementOne * elementTwo }
    else if (result === '/') { var result = elementOne / elementTwo }
    var resultButton = document.getElementById('result')
    resultButton.className = 'result_color'
    resultButton.innerHTML = result;
}

/*
function onClickPlus() {
    element('resultPlus')
    /*var elementOne = document.getElementById('numberOne')
    var elementTwo = document.getElementById('numberTwo')
    var resultPlus = Number(elementOne.value) - Number(elementTwo.value)
    var resultButton = document.getElementById('result')
    resultButton.innerHTML = resultPlus;
}

function onClickMinus() {
    element('resultMinus')
    var elementOne = document.getElementById('numberOne')
    var elementTwo = document.getElementById('numberTwo')
    var resultMinus = Number(elementOne.value) - Number(elementTwo.value)
    var resultButton = document.getElementById('result')
    resultButton.innerHTML = resultMinus;
}
function onClickMultiple() {
    element('resultMultiply')
    /*var elementOne = document.getElementById('numberOne')
    var elementTwo = document.getElementById('numberTwo')
    var resultMultiple = Number(elementOne.value) * Number(elementTwo.value)
    var resultButton = document.getElementById('result')
    resultButton.innerHTML = resultMultiple;
}
function onClickDevide() {
    element('resultDevide')
    /* var elementOne = document.getElementById('numberOne')
     var elementTwo = document.getElementById('numberTwo')
     var resultDevide = Number(elementOne.value) / Number(elementTwo.value)
     var resultButton = document.getElementById('result')
     resultButton.innerHTML = resultDevide;
}
*/

function onClickButtonListener (eventObject) {
    var clickButton = eventObject.currentTarget
    var result = clickButton.innerHTML
    element(result)

}

for (var i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener('click', onClickButtonListener)
    
}

/*
minusButton.addEventListener('click', onClickMinus)
plusButton.addEventListener('click', onClickPlus)
multButton.addEventListener('click', onClickMultiple)
devide.addEventListener('click', onClickDevide)
*/