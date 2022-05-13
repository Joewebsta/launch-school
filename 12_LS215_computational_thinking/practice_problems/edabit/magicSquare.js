/* 
In recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.

Create a function that takes a square 2D array as an argument and returns a Boolean (if it is: true, if it isn't: false).



INPUT
 - 2D array
 - may contain negative integers

OUTPUT
- boolean
  - true if square array of numbers
  - false otherwise

RULES
- magic square
  - a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.
- vertical
- horizontal
- diagonals


DATA STRUCTURE/ALGO
- isMagicSquare(squareArr)
  - determine sum of 1 array - sum - reduce - helper!
  - determine max num of elems in each arr - maxElems
  - set allSubArr = [] 
    - append rows
    - append columns
      - iterate over each subArr in squareArr
        - for loop - i = 0 -> i < maxElems
        - set colSubArr = [] 
        - iterate over each subArr in squareArr
    - append diagonals
  - check if all subArr in allSubArr are equal to sum
    - return true or false
*/

function isMagicSquare(squareArr) {
  let sum = calcSum(squareArr[0]);
  let cols = createCols(squareArr);
  let diagonals = createDiagonals(squareArr);
  let allSubArr = [...squareArr, ...cols, ...diagonals];

  return allSubArr.every(subArr => calcSum(subArr) === sum);
}

function calcSum(arr) {
  return arr.reduce((sum, num) => sum + num);
}

function createCols(squareArr) {
  let allCols = [];

  let index = 0;
  while (index < squareArr.length) {
    let colArr = [];
    for (let j = 0; j < squareArr.length; j += 1) {
      let subArr = squareArr[j];
      let elem = subArr[index];
      colArr.push(elem)
    }

    allCols.push(colArr);
    index += 1;
  }

  return allCols;
}

function createDiagonals(squareArr) {
  let rDiagonal = [];
  let lDiagonal = [];
  
  let j = 0;
  for (let i = 0; i < squareArr.length; i += 1) {
      lDiagonal.push(squareArr[i][j]);
      j += 1;
  } 

  let k = squareArr.length - 1;
  for (let i = 0; i < squareArr.length; i += 1) {
      rDiagonal.push(squareArr[i][k]);
      k -= 1;
  } 

  return [rDiagonal, lDiagonal];
}

// TEST CASES - PROVIDED --------------------------
// isMagicSquare([
//   [2, 7, 6], // 0 0
//   [9, 5, 1], // 1 1
//   [4, 3, 8]  // 2 2
// ]) 
// // ➞ true


// isMagicSquare([
//   [16, 3, 2, 13],
//   [5, 10, 11, 8],
//   [9, 6, 7, 12],
//   [4, 15, 14, 1]
// ]) 
// // ➞ true

isMagicSquare([
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
]) 
// // ➞ false