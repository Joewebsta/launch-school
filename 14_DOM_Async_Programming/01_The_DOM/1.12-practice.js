// Problem 1

let h2Count = 0;
const h2Elems = Array.from(document.querySelectorAll('h2'))
h2Elems.forEach(elem => {
  const h2Words = elem.textContent.replace(/\,/g, '').split(' ');
  h2Words.forEach(word => h2Count += 1);
});

console.log(h2Count);

// Problem 2

document.getElementsByClassName('toc');
document.getElementById('toc');
document.querySelector('.toc');
document.querySelector('#toc');

// Problem 3

const links = document.querySelectorAll('.toc a');
links.forEach((link, index) => {
  if (index % 2 === 1) {
    link.style.color = 'green';
  }
});

// Problem 4

const thumbCaptions = Array.from(document.querySelectorAll('.thumbcaption'));
const text = thumbCaptions.map(caption => caption.textContent.trim());


// Problem 5

const ranks = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];