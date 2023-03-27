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

const operate = function(operator, firstNum, secondNum) {
  switch (operator) {
    case '+':
      return add(firstNum, secondNum);
    case '-':
      return subtract(firstNum, secondNum);
    case '*':
      return multiply(firstNum, secondNum);
    case '/':
      return divide(firstNum, secondNum);
  }
}

const updateDisplay = function() {
  const display = document.querySelector('.display');
  if (operator) {
    secondOperand = display.textContent;
  }
  display.textContent = displayString.concat(this.value);
}

const updateOperator = function() {
  const display = document.querySelector('.display');
  operator = this.value;
  if (firstOperand && secondOperand) {
    firstOperand = operate(operator, firstOperand, secondOperand);
    secondOperand = '';
    display.textContent = firstOperand;
  } else if (firstOperand) {
    secondOperand = display.textContent;
  } else if (!firstOperand) {
    firstOperand = display.textContent;
  }
}

const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', updateOperator));
