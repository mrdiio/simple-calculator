let expression = [];
let result = false;
let dot = false;

// keydown event
$(document).keydown(function (e) {
  let value = e.key;
  if (value === '0') {
    add('0');
  } else if (value === '1') {
    add('1');
  } else if (value === '2') {
    add('2');
  } else if (value === '3') {
    add('3');
  } else if (value === '4') {
    add('4');
  } else if (value === '5') {
    add('5');
  } else if (value === '6') {
    add('6');
  } else if (value === '7') {
    add('7');
  } else if (value === '8') {
    add('8');
  } else if (value === '9') {
    add('9');
  } else if (value === '.') {
    add('.');
  } else if (value === '+') {
    add('+');
  } else if (value === '-') {
    add('-');
  } else if (value === '*') {
    add('*');
  } else if (value === '/') {
    add('/');
  } else if (e.key === 'Enter') {
    equal();
  } else if (e.key === 'Backspace') {
    clearEntry();
  } else if (e.key === 'Escape') {
    allClear();
  }
});

// add value to expression with class 'number'
$('.expression').click(function () {
  let value = $(this).text();
  add(value);
});

function add(value) {
  const operators = ['+', '-', '*', '/'];

  if (expression.length > 0) {
    let last = expression[expression.length - 1];
    if (operators.includes(last) && operators.includes(value)) {
      expression.pop();
      expression.push(value);
      dot = false;
    } else {
      if (!!result && !operators.includes(value)) {
        expression = [];
      }

      if (operators.includes(value)) {
        dot = false;
      }

      if (value === '.') {
        if (dot) {
          return;
        } else {
          dot = true;
        }
      }
      result = false;
      expression.push(value);
    }
  } else {
    if (operators.includes(value)) {
      expression.push('0');
      expression.push(value);
    } else if (value === '.') {
      expression.push('0');
      dot = true;
      expression.push(value);
    } else {
      expression.push(value);
    }
  }

  document.getElementById('expression').value = expression.join('');
}

// AC button
function allClear() {
  expression = [];
  document.getElementById('expression').value = '';
  dot = false;
  result = false;
}

// CE button
function clearEntry() {
  // if last element is dot, set dot to false
  if (expression[expression.length - 1] === '.') {
    dot = false;
  }
  expression.pop();
  document.getElementById('expression').value = expression.join('');
}

// Equal Button
function equal() {
  document.getElementById('expression').value =
    expression.join('') + '=' + eval(expression.join(''));

  result = true;
}
