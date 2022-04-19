/*
Input:
- A string representation of a chess board
- Empty squares are represented as _
- White queen is represented at W
- Black queen is represented at B
vertically and diagonally

Output
- true or false
- true => queens can attack one another
- false => queens cannot attack one another

Rules
- Chess board is an 8x8 grid
- Chess positions are zero indexed
- Queens can attack horizontally, 
- Queen position coordinates are (vertical, horizontal) - (2, 3)


- 

ALGO

HORIZONTAL
- IF queen horizontal value === queen horizontal value -> return true
- IF queen vertical value === queen vertical value -> return true



(0,0)

White queen diagonal

(2,3) - Queen position
(3,4)
(4,5)
(5,6) 



0, 5
2, 3
*/

let board = '_ _ _ _ _ _ _ W' + '\n' +
            '_ _ _ _ _ _ _ _' + '\n' +
            '_ _ _ _ _ _ _ _' + '\n' +
            '_ _ _ _ _ _ _ _' + '\n' +
            '_ _ _ _ _ _ _ _' + '\n' +
            '_ _ _ _ _ _ _ _' + '\n' +
            '_ _ _ _ _ _ _ _' + '\n' +
            'B _ _ _ _ _ _ _';


function queenAttack(board) {
  let boardArray = board.split('\n').map(row => row.split(' '));
  let [ queen1, queen2 ] = queenPositions(boardArray);

  return canAttack(queen1, queen2);
}

function queenPositions(board) {
  let queenPositions = [];
  
  board.forEach((row, verticalIdx) => {
    row.forEach((col, horizontalIdx) => {
      if (col === 'W' || col === 'B') {
        queenPositions.push([verticalIdx, horizontalIdx]);
      }
    });
  });

  return queenPositions;
}

function canAttack([ q1Vertical, q1Horizontal ], [ q2Vertical, q2Horizontal ]) {
  if (q1Horizontal === q2Horizontal) return true;
  if (q1Vertical === q2Vertical) return true;
  if (Math.abs(q1Vertical - q2Vertical) === Math.abs(q1Horizontal - q2Horizontal)) return true;

  return false;
}

console.log(queenAttack(board)); 