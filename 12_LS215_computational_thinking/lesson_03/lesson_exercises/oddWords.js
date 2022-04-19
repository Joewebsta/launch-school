/*
Input: 
- String

Output
- String

Rules
- Character set consists of letters, spaces and a point.
- Words consist of 1-20 characters

INPUT
- Input consists of one or more words
- Words are separated by one or more spaces
- Input is terminated by zero or more spaces
- Input ends with point
- Input is read from first letter of first word to terminating point (inclusive)

- All characters are lowercase

OUTPUT
- Words are separated by a single space
- String is terminated by a single point

- Even words remain unchanged
- Odd words are reversed

- All characters are lowercase

ALGO

- Set result to empty array
- Create new string with period removed
- Split string into an array of words
- Iterate over the array and keep track of index on each iteration
- If index is even, append string to result
- If index is odd, reverse string and append to result
- Join string
- Add period to end of string
*/

function oddWords(string) {
  if (string.length === 0) return "";

  let cleanString = string.replace('.', '');
  let newString = cleanString.trim()
                             .split(/\s+/)
                             .map(formatWord)
                             .join(' ');

  return `${newString}.`
}

function formatWord(word, index) {
  if (index % 2 === 0) {
    return word;
  } 

  return word.split('').reverse().join('');
}

console.log(oddWords("whats the matter with kansas."));
// console.log(oddWords("whats the matter with kansas     ."));
// console.log(oddWords("   whats the matter with kansas."));
// console.log(oddWords("   whats the matter with kansas    ."));
// console.log(oddWords("whats the matter with kansas    ."));
// console.log(oddWords("whats the    matter with     kansas."));
// console.log(oddWords("The grass is green."));
console.log(oddWords(""));

// "whats eht matter htiw kansas."