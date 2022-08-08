function highlight({target}) {
  let element;
  let id;

  removeHighlight();

  if (target.tagName === 'A') {
    id = '#' + target.href.split('#')[1];
    element = document.querySelector(id);
  } else {
    element = document.querySelector('main');
  }
  
  element.classList.add('highlight');
}


function removeHighlight() {
  const highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

const nav = document.querySelector('header ul');
const main = document.querySelector('main');

nav.addEventListener('click', highlight);
document.addEventListener('click', highlight);
main.addEventListener("click", e => {
  e.preventDefault();
  let article = e.target;
  if (article.tagName !== 'ARTICLE') { article = article.parentNode; }

  if (article.tagName === "ARTICLE") {
    e.stopPropagation();
    removeHighlight();
    article.classList.add("highlight");
  }
});


// // When article 1 is clicked


// const main = document.querySelector('main');
// const articleList = document.querySelector('header ul');
// let lastHighlighted;

// main.addEventListener('click', e => {
//   if (lastHighlighted) {
//     lastHighlighted.classList.remove('highlight');
//   }

//   if (e.target.tagName !== 'H1') {
//     const article = e.target.closest('article');
//     article.classList.add('highlight');
//     lastHighlighted = article;
//   } else {
//     main.classList.add('highlight');
//     lastHighlighted = main;
//   }
// })

// articleList.addEventListener('click', e => {
//   e.preventDefault();

//   if (lastHighlighted) {
//     lastHighlighted.classList.remove('highlight');
//   }

//   const articleId = e.target.href.split('#')[1];
//   const article = document.querySelector(`#${articleId}`);
//   article.scrollIntoView({behavior: "smooth"});
//   article.classList.add('highlight');
//   lastHighlighted = article;
// });
