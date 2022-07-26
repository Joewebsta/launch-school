// // Problem 1

// document.addEventListener('click', e => {
//   const x = document.querySelector('.x');
//   const pointerX = e.clientX;
//   const pointerY = e.clientY;

//   x.style.top = `${pointerY}px`;
//   x.style.left = `${pointerX}px`;
// });

// // Problem 2
// document.addEventListener('mousemove', e => {
  
//   const x = document.querySelector('.x');
//   const pointerX = e.clientX;
//   const pointerY = e.clientY;

//   x.style.top = `${pointerY}px`;
//   x.style.left = `${pointerX}px`;
// });

// // Problem 3
// document.addEventListener('keyup', e => {
//   const key = e.key;
//   let color;

//   if (key === 'b') {
//     color = 'blue';
//   } else if (key === 'g') {
//     color = 'green';
//   } else if (key === 'r') {
//     color = 'red';
//   }
  
//   if (color) {
//     const xChildren = document.querySelector('.x').children;
//     xChildren.forEach(elem => elem.style.background = color);
//   }
// });

// Problem 4
document.addEventListener('DOMContentLoaded', () => {
  const MAXCHARS = 140;
  const composer = document.querySelector('.composer');
  const textArea = composer.firstElementChild;

  textArea.addEventListener('keyup', e => {
    const currentChars = textArea.value.length;
    const remainingCharsText = document.querySelector('.remainingChars'); 
    
    remainingCharsText.textContent = MAXCHARS - currentChars;
  
    if (currentChars > MAXCHARS) {
      textArea.style.color = 'red';
    } else if (currentChars <= MAXCHARS) {
      textArea.style.color = 'black';
    }
  });
});