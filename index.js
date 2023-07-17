var operationButton = document.getElementsByClassName('operation-button')

function element(result) {
    var elementOne = Number(document.getElementById('numberOne').value)
    var elementTwo = Number(document.getElementById('numberTwo').value)
    if (result === '+') { var result = elementOne + elementTwo }
    else if (result === '-') { var result = elementOne - elementTwo }
    else if (result ==='*') { var result = elementOne * elementTwo }
    else if (result === '/') { var result = elementOne / elementTwo }
    var resultButton = document.getElementById('result')
    resultButton.className = 'result_color'
    resultButton.innerHTML = result;
}

function onClickButtonListener (eventObject) {
    var clickButton = eventObject.currentTarget
    var result = clickButton.innerHTML
    element(result)

}

for (var i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener('click', onClickButtonListener)
    
}