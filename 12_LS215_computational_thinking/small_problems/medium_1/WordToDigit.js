/*

INPUT
- A sentence string
- Will contain string digits

OUTPUT
- A sentence string
- number words are converted to Digits

RULES
- non-digit words remain unchanged
- Some number words may have special characters (e.g. period)


QUESTIONS
Special characters other than '.'? Commas? Exclamations?
Empty string?
Number words zero through 9?
Input string always contains number word?
Empty string?
What about invalid input? (What is returned if input is invalid?)


TEST CASES

console.log(wordToDigit());
console.log(wordToDigit(''));
console.log(wordToDigit('Please call me at five! Thanks.'));
console.log(wordToDigit('Please call me at six seven eight. Thanks.'));
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

APPROACH
- 

- Check for (special char) period
  - remove special char (period)
  - check for number word
    if true, convert to digit and add back special char
    if false, return word

DATA STRUCTURE
- String
- Array
- Back to string

- hash to store number associated with number word

ALGO
- set numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  - 

four.

- create function wordToDigit(sentence)
  - set words to array of words
  - map over each word in words array
    - check if word contains special char
      - if true
        - save special char
        - remove special char
      - if false, continue
    - check if word is a number - NUMBERS.indexOf(word) !== -1 NUMBERS.includes(word)
      - if true convert number
      - if false, return word
    - return digit + punctuation
      
- check if word contains punctuation
  /[^a-z\d]/i.test(word)

- check if word is a number word
  - set numbers var to array     
*/

// const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const NUM_WORDS = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
};

function wordToDigit(sentence) {
  let numbers = Object.keys(NUM_WORDS);

  numbers.forEach(num => {
    let regex = new RegExp('\\b' + num + '\\b', 'g');
    // console.log(sentence.match(regex));
    // console.log(sentence.m)
    sentence = sentence.replace(regex, NUM_WORDS[num]);
    console.log(sentence)
  });
  // console.log(numbers);
}

// function wordToDigit(sentence) {
//   let words = sentence.split(' ');

//   let convertedSentence =  words.map(word => {
//     let specialChar = '';
    
//     if (/[^a-z\d]/i.test(word)) {
//       specialChar = word.at(-1);
//       word = word.substring(0, word.length - 1);
//     }

//     if (NUMBERS.includes(word)) {
//       word = NUMBERS.indexOf(word);
//     }

//     return `${word}${specialChar}`;
//   });
  
//   return convertedSentence.join(' ');
// }

// console.log(wordToDigit());
// console.log(wordToDigit(''));
// console.log(wordToDigit('Please call me at five! Thanks.'));
// console.log(wordToDigit('Please call me at six seven eight. Thanks.'));
console.log(wordToDigit('Please call me at weight five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// let num = 'five';

// let regex = new RegExp(num, 'g');
// console.log(string.match(regex));
// let string = 'Please call me at five five five one two three four. Thanks.'