/*

INPUT
- string
- words separated by spaces

OUTPUT
- string
- words separated by spaces

RULES/REQUIREMENTS
- first and last letter of every word is swapped
- every word contains at least one letter
- input string wil always contain at least 1 word (no empty string input)
- each string contains words and spaces (no special chars or numbers)
- no leading, trailing, or repeated spaces

QUESTIONS


APPROACH
- 'Oh what'
- ['Oh', 'what']
- ['hO', 'thaw']
- 'hO thaw'

EXAMPLES/TEST CASES


DATE STRUCTURE/ALGO

- create a function swap(string)
  - split string into array of individual words
  - map over each word
    - on each iteration
      - return the word with the first and last letters swapped (helper function)
  - join array back into string
  - return string

- SWAP LETTERS
  - create function swapLetters(word)
    - set first = word[0]
    - set last = word.at(-1)
    - set middle = word.slice(1, word.length - 1)
    - return last + middle + first 
*/

function swap(string) {
  return string.split(' ').map(swapLetters).join(' ');
}


function swapLetters(word) {
  if (word.length === 1) return word;

  let first = word[0];
  let last = word.at(-1);
  let middle = word.slice(1, -1);
  return last + middle + first;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"