document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let num1Input = document.querySelector('#first-number');
  let num2Input = document.querySelector('#second-number');
  let operatorSelect = document.querySelector('#operator');
  let result = document.querySelector('#result');

  form.addEventListener('submit', e => {
    e.preventDefault();

    let num1 = Number(num1Input.value);
    let num2 = Number(num2Input.value);
    let operator = operatorSelect.value;
    let output;

    if (operator === '+') output = num1 + num2;
    if (operator === '-') output = num1 - num2;
    if (operator === '*') output = num1 * num2;
    if (operator === '/') output = num1 / num2;
    
    result.textContent = String(output);
  });
})