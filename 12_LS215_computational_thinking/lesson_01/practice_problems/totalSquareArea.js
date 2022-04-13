function totalArea(rectangles) {
  return rectangles.map(area).reduce(sum);
}

function area([height, width]) {
  return height * width;
}

function sum(sum, areaArr) {
  return sum + areaArr;
}

function squares([height, width]) {
  return height == width;
}

function totalSquareArea(rectangles) {
  return rectangles.filter(squares).map(area).reduce(sum);
}


let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles)); // 141

let rectangles2 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectangles2)); // 121