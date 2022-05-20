/*

Given a word, create an object that stores the indexes of each letter in an array.

Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays are values.


Examples
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

Notes
All strings given will be lowercase.

INPUT
- string
  - may be empty
  - may contain 1 char
  - may contain many chars
  - digits? - no
  - special characters? - no
  - white space? - no

  - all strings are lowercase
   

OUTPUT
- an object
  - keys - letters in the input string
    - order of keys is based on order of chars in input string
    - NO DUPLICATE KEYS
  - values - array - the index of these letters
    - may contain 1 or more index integer values


RULES
- Make sure the letters are the keys.
- Make sure the letters are symbols.
- Make sure the indexes are stored in an array and those arrays are values.

// TEST CASES - PROVIDED -----------------------------

// mapLetters("dodo") 
// // ➞ { d: [0, 2], o: [1, 3] }

// mapLetters("froggy") 
// // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

// mapLetters("grapes") 
// // ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }


// TEST CASES - ADDITIONAL -----------------------------

// mapLetters("") 
// // ➞ { }

// mapLetters("d") 
// // ➞ { d: [0] }


// mapLetters("dddd") 
// // ➞ { d: [0,1,2,3] }


DATA STRUCTURE/ALGO

Input - "dodo"

- FUNCTION: mapLetters(str)

- set result to empty object
- chars array - Split str into array of chars
- uniqueChars variable - Identify unique alphabetic characters in str - ['d', 'o']

- iterate over each uniqueChar in uniqueChars - ['d', 'o']
  - set result[char] to empty array
  - iterate over each char in chars array - track index - ["d","o","d","o"]
    - if current char is equal to uniqueChar
      - push index to result[char]

- return result 


Output ➞ { d: [0, 2], o: [1, 3] }
*/

function mapLetters(word) {
  let result = {};
  let chars = word.split('');

  chars.forEach((char,index) => {
    result[char] = result[char]
    
    if (result[char]) {
      result[char].push(index);
    } else {
      result[char] = [index];
    }
  });
  
  console.log(result);
}

// TEST CASES - PROVIDED -----------------------------

// mapLetters("dodo") 
// // ➞ { d: [0, 2], o: [1, 3] }

// mapLetters("froggy") 
// // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

// mapLetters("grapes") 
// ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }


// TEST CASES - ADDITIONAL -----------------------------

// mapLetters("") 
// // ➞ { }

// mapLetters("d") 
// // ➞ { d: [0] }


// mapLetters("dddd") 
// // ➞ { d: [0,1,2,3] }
