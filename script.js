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

let firstOperand = '';
let secondOperand = '';
let operator;
let displayString = ''
let chainingOperators = false;

const operate = function() {
  const display = document.querySelector('.display');
  secondOperand = display.textContent;
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
  display.textContent = displayString;
}

const updateDisplay = function() {
  const display = document.querySelector('.display');
  if (operator && firstOperand) {
    displayString = '';
  }
  displayString = displayString.concat(this.value);
  display.textContent = displayString;
}

const updateOperator = function() {
  const display = document.querySelector('.display');
  if (operator) {
    operate();
  }
  firstOperand = display.textContent;
  operator = this.value;
}

const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', updateOperator));
equalSign.addEventListener('click', operate);
