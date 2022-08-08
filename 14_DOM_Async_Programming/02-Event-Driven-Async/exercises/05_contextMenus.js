let main = document.querySelector('main');
let subArea = document.querySelector('#sub');


main.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('main');
});

subArea.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  e.stopPropagation();
  alert('sub');
});
