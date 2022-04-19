function diamond(gridSize) {
  let numTopRows = Math.ceil(gridSize / 2);
  let numBottomRows = Math.floor(gridSize / 2);

  for (let rowNum = 1; rowNum <= numTopRows; rowNum += 1) {
    console.log(gridRow(gridSize, rowNum));
  }
  
  for (let rowNum = numBottomRows; rowNum >= 1; rowNum -= 1) {
    console.log(gridRow(gridSize, rowNum));
  }
}

function gridRow(gridSize, lineNum) {
  let numStars = lineNum * 2 - 1;
  let numSpaces = (gridSize - numStars) / 2;

  return ' '.repeat(numSpaces) + '*'.repeat(numStars)
}

diamond(9);
diamond(3);
diamond(1);

/*

Input
- integer (n) with an odd value (represents grid size)

Output
- multiple strings (1 per line) that combine to display a four point diamond

Rules
- Input is always an odd integer
- n is equal to the total number of stars on middle line

Data structure
- Strings

Algo
- 

*/

// Function gridRow(lineNum)
/*

Input:
- line number
- grid size

Output:
- A string that contains spaces and star

ALGO
- Set numStars to (2 * lineNum) - 1
- Set numSpaces to (gridSize - numStars) / 2
- Set stars to string that contains numStars repeating stars
- Set spaces to string that contains numSpaces repeating spaces

- return spaces + stars

Iterate from 1 to half of grid + 1

Iterate from half of grid - 1 to 1

*/


// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

/*
1 to Math.ceil(n/2) 5

line spaces stars
1    4       1
2    3       3
3    2       5
4    1       7
5    0       9



input: 
line number
grid size 


Math.floor(n/2) to 1

line   -> num
stars  -> 2 * num - 1 
spaces -> (grid size - stars) / 2         

line spaces stars
6  4  1      7
7  3  2      5
8  2  3      3
9  1  4      1
*/