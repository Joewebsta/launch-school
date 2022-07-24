const header = document.querySelector('body > header');
const h1 = document.querySelector('main > h1');
const content = document.querySelector('#content');
const article = document.querySelector('article');
const images = document.querySelectorAll('img');
const figureElems = content.querySelectorAll('figure'); 

document.body.insertAdjacentElement('afterbegin', header);
header.insertAdjacentElement('afterbegin', h1);

let imagesArr = Array.from(images).reverse();
Array.from(figureElems).forEach((figure, index) => {
  figure.insertAdjacentElement('afterbegin', imagesArr[index]);
  article.appendChild(figure);
});