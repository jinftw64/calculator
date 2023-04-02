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

const operate = function() {
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
}

const round = function(num) {
  return num.toFixed(7);
}

const updateDisplay = function() {
  const display = document.querySelector('.display');
  displayString = displayString.concat(this.value);
  display.textContent = displayString;
}

const updateOperator = function() {
}

const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
operands.forEach(operand => operand.addEventListener('click', updateDisplay));
operators.forEach(operator => operator.addEventListener('click', updateOperator));
equalSign.addEventListener('click',);
