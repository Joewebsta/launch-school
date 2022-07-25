function domTreeTracer(idNum) {
  let currentElem = document.getElementById(idNum);
  const elementsArray = [];

  while (currentElem.id) {
    if (currentElem.id === '1') {
      elementsArray.push([currentElem.nodeName]);
      return elementsArray;
    }

    const parent = currentElem.parentNode;
    const childrenArr = Array.from(parent.children);
    const siblingsArr = [];

    childrenArr.forEach(elem => {
      siblingsArr.push(elem.nodeName);
    });

    elementsArray.push(siblingsArr);

    currentElem = parent;
  }

  console.log(elementsArray);
}



// > domTreeTracer(1);
// = [["ARTICLE"]]
// > domTreeTracer(2);
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
// > domTreeTracer(22);
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]