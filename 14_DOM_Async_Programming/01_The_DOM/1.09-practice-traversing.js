'use strict'

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// Problem 1
// let onTheRiver = document.lastChild.lastChild.childNodes[1];
// onTheRiver.style.color = 'red';
// onTheRiver.style.fontSize = '48px';

let html = document.childNodes[1];
let body = html.lastChild;
let h1 = body.childNodes[1];
h1.style.color = 'red';
h1.style.fontSize = '48px';


// Problem 2
(() => {
  let count = 0;

  walk(document.body, function(node) {
    if (node.nodeName === 'P') {
      count += 1;
    }
  });

  console.log(count);
})();

// Problem 3
(() => {
  let count = 0;

  let words = [];
  walk(document, node => {
    if (node.nodeName === 'P') {
      words.push(node.firstChild.data.trim().split(' ')[0]);
    }
  });

  console.log(words);
})();

// Problem 4
(() => {

  let pElems = [];

  walk(document, node => {
    if (node.nodeName === 'P') {
      pElems.push(node);      
    }
  });

  pElems = pElems.slice(1);
  pElems.forEach(pElem => {
    pElem.classList.add('stanza');
  });

// })();

// Problem 5
let imgCount = 0;
let pngCount = 0;

walk(document, node => {
  if (node.tagName === 'IMG') {
    imgCount += 1;

    if (/.png/.test(node.src)) {
      pngCount += 1;
    }
  }
});

console.log(imgCount);
console.log(pngCount);

// Problem 6
walk(document, node => {
  if (node.tagName === 'A') {
    node.style.color = 'red';
  }
});