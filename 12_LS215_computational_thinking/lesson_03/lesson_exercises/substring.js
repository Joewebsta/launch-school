/*
Input
- String

Output
- An array that contains all substrings of the input string

Rules
- The returned list should be ordered by where in the string th substring begins
- Substrings should be returned in order of shortest to longest

Data Structure

- Arrays

ALGO

Step 1 - Create array of substrings for a particular string
- Set substrings to []
- Iterate from string index 0 to string.length - 1
- On each iteration, push string returned by substring(0, currentIdx) to substrings
- Return substrings array.

Step 2 - Pass all substrings of string to leadingSubstring
- Concat return values to substrings array
*/

function leadingSubstrings(string) {
  let leadingSubstrings = [];

  for (let i = 0; i < string.length; i += 1) {
    leadingSubstrings.push(string.substring(0, i + 1));
  }

  return leadingSubstrings;
}

function substrings(string) {
  let substrings = [];

  for (let i = 0; i < string.length; i += 1) {
    let subString = string.substring(i, string.length)
    substrings = substrings.concat(leadingSubstrings(subString));
  }

  return substrings;
}


// substrings()
console.log(substrings('')); 
console.log(substrings('a')); 
console.log(substrings('abc')); 
/*
[
  'a', 'ab', 'abc',
  'b', 'bc',
  'c'
]
*/

console.log(substrings('abcde'));

