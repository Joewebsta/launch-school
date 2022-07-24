// Problem 1
document.querySelector('h1').className = 'heading';

// Problem 2
document.querySelector('#list').className = 'bulleted';

// Problem 3
document.querySelector('#toggle').addEventListener('click', function(e) {
  e.preventDefault();
  let hiddenElem = document.querySelector('#notice');
  
  if (hiddenElem.className === 'hidden') {
      hiddenElem.className = 'visible';
  } else {
      hiddenElem.className = 'hidden';
  }
});

// Problem 4
document.querySelector('#notice').onclick = e => {
  e.preventDefault();
  e.currentTarget.className = 'hidden';
}

// Problem 5
const multiplicationPara = document.querySelector('#multiplication');
multiplicationPara.textContent = '117';
// multiplicationPara.firstChild.data = '117';
// multiplicationPara.firstChild.nodeValue = '117';

// Problem 6
document.body.id = 'styled';
