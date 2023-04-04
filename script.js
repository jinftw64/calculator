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

let displayString = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

const operate = function() {
  const display = document.querySelector('.display');
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
  displayString = displayString.toString();
  display.textContent = displayString;
  firstOperand = displayString;
  secondOperand = '';
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
  if (firstOperand && !secondOperand) {
    secondOperand = displayString;
  } else {
    firstOperand = displayString;
  }
}

const updateOperator = function() {
  if (operator) {
    operate();
  }
  displayString = '';
  operator = this.value;
}

const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', updateOperator));
equalSign.addEventListener('click', operate);
