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
  displayString = displayString.concat(this.value);
  display.textContent = displayString;
}

const update1stOperand = function() {
}

const update2ndOperand = function() {
}

const updateOperator = function() {
  operator = this.value;
  const display = document.querySelector('.display');
  firstOperand = display.textContent;
  displayString = '';
  // add css to highlight the button
}

const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', updateOperator));
