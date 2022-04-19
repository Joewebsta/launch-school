'use strict'

/*

Input
- A single word
- string data type

Output
- The sum of all letter values in the string

Rules
- Uppercase letters

ALGO
- Create a multi-dimensional array
  - subArr consists of two elements
    - array of letters
    - letter value

- set score to 0
- Iterate over each character
- Determine value of each character
- Add value of character to score

Determine value of each character
*/ 

function scrabbleScore(word) {
  let score = 0;

  for (let i = 0; i < word.length; i += 1) {
    score += letterVal(word[i]);
  }

  return score;
}

function letterVal(char) {
  let letterValues = [
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2],
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'W', 'Y'], 4],
    [['K'], 5],
    [['J', 'X'], 8],
    [['Q', 'Z'], 8],
  ]
  
  let letterVal;

  letterValues.forEach(([ letterArr, val]) => {
    if (letterArr.includes(char)) {
      letterVal = val;
    }  
  })

  return letterVal;
}

console.log(scrabbleScore('A')); //1
console.log(scrabbleScore('LESSON')); 
// 1 1 1 1 1 1 -> 6
console.log(scrabbleScore('EXERCISE'));
console.log(scrabbleScore('CABBAGE'));
// console.log(scrabbleScore('AEDG'));
// 1 8 1 1 3 1 1 1 -> 17