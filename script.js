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
  const num = this.value;
  firstOperand = firstOperand.concat(num);
  const display = document.querySelector('.display');
  display.textContent = firstOperand;
}

const operands = document.querySelectorAll('.operand')
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
