/* 
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) 
// ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]

Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without RegEx.

INPUT
- array of strings
  - strings contain letters and digits
  - all strings have alpha letters
  - not all string have digits
  - string may be composed of multiple words
  - digits may be positioned anywhere within the string

OUTPUT
- a new array
- an array of strings
  - strings from the input array that have digits are included in this array

RULES
- If there are no strings containing numbers, return an empty array.

TEST CASES - PROVIDED ***************************************

numInStr(["1a", "a", "2b", "b"]) 
// ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) 
// ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) 
// ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) 
// ➞ ["test1"]

TEST CASES - ADDITONAL ***************************************

numInStr(["this is a 1test", "test1"]) 
// ➞ ["this is a 1test", "test1"]

numInStr([]) 
// ➞ []

numInStr(["abc", "abc"]) 
// ➞ []


DATA STRUCTURE/ALGO

- numInStr(arr)
  - iterate over each string in arr - filter
    - check if the string contains a number
      - regex - /\d/
      - return true

- numInStr(arr)
  - iterate over each string in arr - filter
    - iterate over each char in string
      - check if char is a number
        - char === String(Number(char))
        - if true return true
    - return false

- numInStr(arr)
  - set idxToRemove to empty array
  - iterate over each string in arr - forEach - keep track of index
    - check if the string does not contains a number
      - regex - /\d/
    - if true add index to idxToRemove

  - sort idxToRemove from highest to lowest
  - iterate over each idx in idxToRemove
    - remove element - splice(idx,1)

*/

// function numInStr(arr) {
//   const idxToRemove = [];

//   arr.forEach((str, idx) => {
//     if (!/\d/.test(str)) {
//       idxToRemove.push(idx);
//     }
//   });

//   idxToRemove.sort((a, b) => b - a).forEach(idx => {
//     arr.splice(idx,1)
//   })

//   return arr;
// }

function numInStr(arr) {
  return arr.filter(str => /\d/.test(str));
}

// function numInStr(arr) {
//   return arr.filter(str => {
//     for (let i = 0; i < str.length; i += 1) {
//       let char = str[i];
       
//       if (char === String(Number(char))) {
//         return true;
//       }
//     }
//     return false;
//   })
// }

// TEST CASES - PROVIDED ***************************************

// console.log(numInStr(["1a", "a", "2b", "b"]))
// // ➞ ["1a", "2b"]

// console.log(numInStr(["abc", "abc10"]))
// // // // ➞ ["abc10"]

// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
// // // // ➞ ["ab10c", "a10bc"]

// console.log(numInStr(["this is a test", "test1"]))
// // // // ➞ ["test1"]

// // TEST CASES - ADDITONAL ***************************************

console.log(numInStr(["this is a 1test", "test1"]))
// // // ➞ ["this is a 1test", "test1"]

console.log(numInStr([]))
// // // ➞ []

console.log(numInStr(["abc", "abc"]))
// // // ➞ []