const add = (a, b) => +a + +b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === '0') {
    return 'BRAZY';
  } else {
    return a / b;
  }
};

const percentage = (a, b) => {
  b = 100
  return a / b;
};

const power = (a, b) => a ** b;

const operate = (operator, a, b) => {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
    case '%':
      return percentage(a, b);
    case '^':
      return power(a, b);
  }
};

let firstNumber = '';
let currentOperator = '';
let secondNumber = '';

const numbers = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
const operators = document.querySelectorAll('#add, #subtract, #multiply, #divide, #percentage, #power');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');
const allClear = document.querySelector('#all-clear');
const display = document.querySelector('#display');
const display2 = document.querySelector('#display2');

numbers.forEach(number => number.addEventListener('click', () => {
  display.value += number.textContent;
  displayFont();
}));

operators.forEach(operator => operator.addEventListener('click', () => {
  math();
  if (operator.id === 'add') {
    currentOperator = '+';
  } else if (operator.id === 'subtract') {
    currentOperator = '-';
  } else if (operator.id === 'multiply') {
    currentOperator = '×';
  } else if (operator.id === 'divide') {
    currentOperator = '÷';
  } else if (operator.id === 'percentage') {
    currentOperator = '%';
  } else if (operator.id === 'power') {
    currentOperator = '^';
  }
  history();
  displayFont();
  display.value = '';
}));

decimal.addEventListener('click', () => {
  if (display.value.indexOf('.') === -1) {
    display.value += '.';
  } else {
    display.value = display.value;
  }
  displayFont();
});

equals.addEventListener('click', () => {
  math();
  display.value = firstNumber;
  displayFont();
  firstNumber = '';
});

backspace.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
  displayFont();
});

allClear.addEventListener('click', () => {
  display.value = '';
  display2.value = '';
  firstNumber = '';
  currentOperator = '';
  secondNumber = '';
});

// Round to two decimal places, check for dividing by zero, and check for NaN

const round = (num) => {
  if (num === 'BRAZY') {
    return 'It\'s Over 9000!';
  } else if (Number.isNaN(num) || num === Infinity || num === -Infinity) {
    return 'Press AC';
  } else {
    return Math.round(num * 100) / 100;
  }
};

// Takes two numbers, operator and performs the operation

const math = () => {
  if (firstNumber === '') {
    firstNumber = display.value;
    history();
  } else {
    secondNumber = display.value;
    history();
    firstNumber = round(operate(currentOperator, firstNumber, secondNumber));
    secondNumber = '';
  }
};

const history = () => {
  display2.value = firstNumber + ' ' + currentOperator + ' ' + secondNumber;
};

// Change the font size of the display based on the amount of symbols of the display

const displayFont = () => { 
  if (display.value.length >= 0 && display.value.length < 12) {
    display.style.fontSize = '48px';
  } else if (display.value.length > 12 && display.value.length < 18) {
    display.style.fontSize = '32px';
  } else if (display.value.length > 18) {
    display.style.fontSize = '24px';
  }
  if (display2.value.length >= 0 && display2.value.length < 18) {
    display2.style.fontSize = '32px';
  } else if (display2.value.length > 18 && display2.value.length < 32) {
    display2.style.fontSize = '16px';
  }
};

// Keybinds

window.addEventListener('keydown', (event) => {
  if (event.key === '1') {document.getElementById('one').click();}
  if (event.key === '2') {document.getElementById('two').click();}
  if (event.key === '3') {document.getElementById('three').click();}
  if (event.key === '4') {document.getElementById('four').click();}
  if (event.key === '5') {document.getElementById('five').click();}
  if (event.key === '6') {document.getElementById('six').click();}
  if (event.key === '7') {document.getElementById('seven').click();}
  if (event.key === '8') {document.getElementById('eight').click();}
  if (event.key === '9') {document.getElementById('nine').click();}
  if (event.key === '0') {document.getElementById('zero').click();}
  if (event.key === '+') {document.getElementById('add').click();}
  if (event.key === '-') {document.getElementById('subtract').click();}
  if (event.key === '*') {document.getElementById('multiply').click();}
  if (event.key === 'x') {document.getElementById('multiply').click();}
  if (event.key === '/') {document.getElementById('divide').click();}
  if (event.key === '%') {document.getElementById('percentage').click();}
  if (event.key === '=') {document.getElementById('equals').click();}
  if (event.key === 'Backspace') {document.getElementById('backspace').click();}
  if (event.key === 'Delete') {document.getElementById('all-clear').click();}
  if (event.key === 'Escape') {document.getElementById('all-clear').click();}
  if (event.key === '.') {document.getElementById('decimal').click();}
  if (event.key === ',') {document.getElementById('decimal').click();}
  if (event.key === '^') {document.getElementById('power').click();}
});