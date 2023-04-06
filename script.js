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
  let operator = secondOperator ? secondOperator : firstOperator;
  switch (operator) {
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
  displayString = String(displayString);
  display.textContent = displayString;
  displayString = '';
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
  if (!firstOperator && !secondOperator) {
    firstOperand = display.textContent;
    firstOperator = this.value;
    displayString = '';
  } else if (firstOperator && !secondOperator) {
    secondOperator = this.value;
    operate();
  }
}

const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', updateOperator));
equalSign.addEventListener('click', operate);
