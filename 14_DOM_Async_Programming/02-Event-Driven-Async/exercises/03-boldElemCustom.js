function makeBold(sectionElement, callback) {
  sectionElement.style.fontWeight = 'bold';

  if (callback && typeof callback === 'function') {
    callback(sectionElement);
  }
}

let sectionElement = document.querySelector('section');

makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });

// sectionElement.classList.contains('highlight');
// true
// sectionElement.style.fontWeight;
// "bold"
