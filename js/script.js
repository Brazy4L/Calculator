const add = (a, b) => parseInt(a) + parseInt(b);

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    }
};

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');

numbers.forEach(number => number.addEventListener('click', () => {
  display.value += number.textContent;
}));

let firstNumber = '';
let currentOperator = '';
const operators = document.querySelectorAll('#add, #subtract, #multiply, #divide');
operators.forEach(operator => operator.addEventListener('click', () => {
  firstNumber = display.value;
  display.value = '';
  if (operator.id === 'add') {
    currentOperator = '+';
  } else if (operator.id === 'subtract') {
    currentOperator = '-';
  } else if (operator.id === 'multiply') {
    currentOperator = '*';
  } else if (operator.id === 'divide') {
    currentOperator = '/';
  }
}));

const addOperator = () => {
  if (operator.id === 'add') {
    currentOperator = '+';
  } else if (operator.id === 'subtract') {
    currentOperator = '-';
  } else if (operator.id === 'multiply') {
    currentOperator = '*';
  } else if (operator.id === 'divide') {
    currentOperator = '/';
  }
}


let secondNumber = '';
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
  math();
});

const math = () => {
  secondNumber = display.value;
  display.value = operate(currentOperator, firstNumber, secondNumber);
};

let allClear = document.querySelector('#all-clear');
allClear.addEventListener('click', () => {
  display.value = '';
  firstNumber = '';
  currentOperator = '';
  secondNumber = '';
});