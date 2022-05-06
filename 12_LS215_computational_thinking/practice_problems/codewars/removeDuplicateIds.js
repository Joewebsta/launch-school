/*

You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}

Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}

Rules
Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character.

That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.

If duplicate characters are found in the same array, the first occurance should be kept.

INPUT
- Object 
  - every key is a stringified number
  - each corresponding value is an array of characters

OUTPUT
- new Object 
  - contains the same keys, 
  - each character should appear only once among the value-arrays
  - keys may be unordered
  - the largest key - value array maintains its chars (other than duplicates)
  - chars in val array are NOT orderd alphabetically

RULES
- Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character.
- Larger key numbers take precedence
- If duplicate characters are found in the same array, the first occurance should be kept.
- keys are ordered from lowest to highest


QUESTIONS
- What about special characters in value array?

TEST CASES - ORIGINAL


TEST CASES - ADDITIONAL


APPROACH

// obj = {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }

["1", "2"]
["2", "1"]

{
  "2": []
}

{
  "2": ["A", "B", "D"]
}

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}


DATA STRUCTURE 
- Object and arrays

ALGO
- create duplicateIds(obj)
  - set keys var = obj keys
    - order keys from largest to smallest 
      - sort((a,b) => { Number(a) - Number(b)}
  - set result = {}
  - set seen = []
  - iterate over each key in obj
    - set obj[key] = []
    - set charsArr = obj[key]
    - iterate over each char in charsArr
      - if char is not included in seen array
        - append char to obj[key]
        - add char to seen array

*/

// Example 0
// let obj = {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }

const removeDuplicateIds = (obj) => {
  let keys = Object.keys(obj).sort((a, b) => Number(b) - Number(a));
  let seen = [];
  let result = {};

  keys.forEach(key => {
    result[key] = [];
    let charsArr = obj[key];

    charsArr.forEach(char => {
      if (!seen.includes(char)) {
        result[key].push(char);
        seen.push(char)
      }
    })
  })
  return result;
};



// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }


// // Example 1
let obj = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
obj = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
obj = {
  "11": ["P", "R", "S", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "432": ["A", "A", "B", "D"],
}

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }



// Example 2
// obj = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

console.log(removeDuplicateIds(obj))