const textField = document.querySelector('.text-field');
let cursorInterval;
let focusedTextField;

document.addEventListener('DOMContentLoaded', () => {
    
  textField.addEventListener('click', (e) => {
    e.stopPropagation();

    textField.classList.add('focused');

    if (!cursorInterval) {
      cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
    }
  });

  document.addEventListener('keydown', (e) => {
    const content = document.querySelector('.content');

    if (textField.classList.contains('focused')) {
      if (e.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1);
      } else if (e.key.length === 1) {
        content.textContent += e.key;
      }
    }
  });
});

document.addEventListener('click', () => {
  clearInterval(cursorInterval);
  textField.classList.remove('focused', 'cursor');
});

