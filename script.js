let displayString = '';
let firstOperand = '';
let secondOperand = '';
let firstOperator = '';
let secondOperator = '';

const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
}

const multiply = function(a, b) {
  return a * b
}

const divide = function(a, b) {
  return a / b
}

const operate = function() {
  const display = document.querySelector('.display');
  secondOperand = display.textContent;
  if (secondOperand == 0) {
    display.textContent = 'NOPE!';
  } else {
    switch (firstOperator) {
      case '+':
        displayString = add(+firstOperand, +secondOperand);
        break;
      case '-':
        displayString = subtract(firstOperand, secondOperand);
        break;
      case '*':
        displayString = multiply(firstOperand, secondOperand);
        break;
      case '/':
        displayString = divide(firstOperand, secondOperand);
        break;
    }
    if (displayString % 1 !== 0) {
      displayString = parseFloat(displayString.toFixed(7))
    }
    displayString = String(displayString);

    display.textContent = displayString;

    if (secondOperator) {
      firstOperator = secondOperator;
      secondOperator = '';
      firstOperand = displayString;
    } else {
      firstOperand = '';
      secondOperand = '';
    }
    displayString = '';
  }
}

const round = function(num) {
  return num.toFixed(7);
}

const updateDisplay = function() {
  const display = document.querySelector('.display');
  if (displayString.length <= 8) {
    displayString = displayString.concat(this.value);
  }
  display.textContent = displayString;
}

const updateOperator = function() {
  const display = document.querySelector('.display');
  displayString = '';
  if (!firstOperand) {
    firstOperand = display.textContent;
    firstOperator = this.value;
  } else {
    secondOperator = this.value;
    operate();
  }
}

const clear = function() {
  const display = document.querySelector('.display');
  firstOperand = '';
  secondOperand = '';
  firstOperator = '';
  secondOperator = '';
  displayString = '';
  display.textContent = displayString;
}

const changeSign = function() {
  const display = document.querySelector('.display');
  if (display.textContent.charAt(0) == '-') {
    display.textContent = display.textContent.slice(1);
  } else {
    display.textContent = `-${display.textContent}`;
  }
}

const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
const clearAC = document.querySelector('.clear');
const sign = document.querySelector('.sign');
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', updateOperator));
equalSign.addEventListener('click', operate);
clearAC.addEventListener('click', clear);
sign.addEventListener('click', changeSign);
