document.querySelector('html').addEventListener('click', (event) => {
  if (event.target.id !== 'container') {
    document.querySelector('#container').style = 'display: none';
  }
});