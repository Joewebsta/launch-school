function sliceTree(parentNodeId, childNodeId) {
  let currentNode = document.getElementById(childNodeId);
  const parentNode = document.getElementById(parentNodeId);
  const domTree = [];

  if (parentNode === null || currentNode === null) return undefined;

  while (currentNode.tagName !== 'BODY') {
    domTree.unshift(currentNode.tagName);

    if (currentNode === parentNode) {
      return domTree;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return undefined;
}

// > sliceTree(1, 4);
// = ["ARTICLE", "HEADER", "SPAN", "A"]
// > sliceTree(1, 76);
// = undefined
// > sliceTree(2, 5);
// = undefined
// > sliceTree(5, 4);
// = undefined
// > sliceTree(1, 23);
// = ["ARTICLE", "FOOTER"]
// > sliceTree(1, 22);
// = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
// > sliceTree(11, 19);
// = ["SECTION", "P", "SPAN", "STRONG", "A"]