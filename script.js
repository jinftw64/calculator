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

const updateDisplay = function(string) {
  const display = document.querySelector('.display');
  display.textContent = string;
}

const update1stOperand = function() {
  firstOperand = firstOperand.concat(this.value);
  updateDisplay(firstOperand);
}

const updateOperator = function() {
  operator = this.value;
  chainingOperators = true;
  // add css here to highlight the current operator
}

const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
operands.forEach(operand => operand.addEventListener('click', update1stOperand));
operators.forEach(operator => operator.addEventListener('click', updateDisplay));
