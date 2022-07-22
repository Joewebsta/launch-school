// Problem 1

// function findAllParagraphs() {
//   const nodes = document.body.childNodes;
//   return Array.from(nodes).filter(elem => elem.tagName === 'P');
// }

// console.log(findAllParagraphs());

// Problem 2

// function addClassName(name) {
//   const nodes = Array.from(document.body.childNodes);
//   const outerDivElems = nodes.filter(elem => elem.tagName === 'DIV');
//   let innerDivElems = [];
//   const pElems = [];

//   outerDivElems.forEach(elem => {
//     innerDivElems = innerDivElems.concat(Array.from(elem.childNodes).filter(elem => elem.tagName === 'DIV'));
//     Array.from(elem.childNodes).forEach(elem => {
//       if (elem.tagName === 'P') {
//         pElems.push(elem);
//       }
//     });
//   });

//   innerDivElems.forEach(elem => {
//     Array.from(elem.childNodes).forEach(elem => {
//       if (elem.tagName === 'P') {
//         pElems.push(elem);
//       }
//     });
//   });
  
//   pElems.forEach(elem => {
//     elem.classList.add(name);
//   })
// }

// addClassName('article-text');

// function addClassToParagraphs(node) {
//   if (node instanceof HTMLParagraphElement) {
//     node.classList.add('article-text');
//   }

//   const nodes = node.childNodes;
//   for (let i = 0; i < nodes.length; i += 1) {
//     addClassToParagraphs(nodes[i])
//   }
// }

// addClassToParagraphs(document.body);


// // Problem 3

// function getElementsByTagName(tagName) {
//   const matchingElems = [];

//   walk(document.body, node => {
//     if (node.tagName === tagName) {
//       matchingElems.push(node);
//     }
//   });

//   return matchingElems;
// }


// function walk(node, callback){
//   callback(node);

//   for (let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i], callback);
//   }
// }

// getElementsByTagName('P').forEach(elem => {
//   elem.classList.add('article-text');
// });


// PROBLEM GROUP 2

// // Problem 1

// Array.from(document.getElementsByTagName('p')).forEach(elem => {
//   elem.classList.add('article-text');
// });

// Problem 2
const divs = Array.from(document.getElementsByClassName('intro'));
let allParagraphs = [];

divs.forEach(elem => {
  const paragraphs = Array.from(elem.getElementsByTagName('p'));
  allParagraphs = allParagraphs.concat(paragraphs);
});

allParagraphs.forEach(elem => {
  elem.classList.add('article-text');
})

console.log(allParagraphs);



