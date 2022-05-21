/*

In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

Examples
returnUnique([1, 9, 8, 8, 7, 6, 1, 6])  
// ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) 
// ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) 
// ➞ [5, 6]

Notes
Keep the same ordering in the output.


INPUT
- array
  - May be empty
  - May have 1 element
  - May have 1+ elements
  - **May not contain two unique values
  - May contain any primitive
    - Number
    - String
    - Boolean
    - undefined
    - null
  - Will not contain compound data types
  
  - contains numbers
    - pos
    - neg
    - 0
    - fractional
    - special input values
      - NaN
      - Infinity

OUTPUT
- array
  - contains numbers (2 unique values0
  - 


RULES
- There are two elements that do not have duplicates
  - All other elements have 2 or more instanes
- Return the two unique numbers present in input array
- Keep the same ordering in the output.
- What if there are more than 2 unique values?

// TEST CASES - PROVIDED --------------------------

// // returnUnique([1, 9, 8, 8, 7, 6, 1, 6])  
// // ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) 
// // ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) 
// // ➞ [5, 6]


// TEST CASES - ADDITIONAL --------------------------


// DATA STRUCTURE / ALGO

// returnUnique([])  
// // ➞ []

// returnUnique([9 7])  
// // ➞ [9, 7]

// returnUnique([1, undefined, 8, 8, 7, 6, 1, 6])  
// // ➞ [undefined, 7]

// returnUnique([1, -10, 8, 8, 7, 6, 1, 6])  
// // ➞ [-10, 7]

// returnUnique([1, 9.7, 8, 8, 7, 6, 1, 6])  
// // ➞ [9.7, 7]



// TEMPLATES
returnUnique([1, 9, 8, 8, 7, 6, 1, 6])  
// ➞ [9, 7]


DATA STRUCTURE / ALGO



*/

function returnUnique(arr) {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
}


// TEST CASES - PROVIDED --------------------------

// returnUnique([1, 9, 8, 8, 7, 6, 1, 6])  
// // ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) 
// // ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) 
// // ➞ [5, 6]


// TEST CASES - ADDITIONAL --------------------------


// DATA STRUCTURE / ALGO

// returnUnique([])  
// // ➞ []

// returnUnique([9, 7])  
// // ➞ [9, 7]

// returnUnique([1, undefined, 8, 8, 7, 6, 1, 6])  
// // ➞ [undefined, 7]

// returnUnique([1, -10, 8, 8, 7, 6, 1, 6])  
// // ➞ [-10, 7]

// returnUnique([1, 9.7, 8, 8, 7, 6, 1, 6])  
// // ➞ [9.7, 7]
