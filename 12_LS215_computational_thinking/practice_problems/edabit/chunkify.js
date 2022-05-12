/*

Write a function that divides an array into chunks of size n, where n is the length of each chunk.

Examples

chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]

chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]

Notes
It's O.K. if the last chunk is not completely filled (see example #2).
Integers will always be single-digit.



INPUT
 - arrary
  - can contain any data type
  - may be empty
  - must not be mutated

- integer - n
  - may be 0
  - represents the length of each chunk OR the number of elements in a 'chunk'
  - may be larger than the number of elements in input array
  - will always be a single digit
  - will not be negative

OUPUT
- a new array!
- a 2d array
  - contains subarrays of length n
  - final sub array may have fewer elements than the value of n


RULES
- chunk
  - a subarry that contains n elements from the input array


DATA STRUCTURE/ALGO

chunkify([2, 3, 4, 5, 6], 2) 

index 0, slice 2 [2, 3]
index 2, slice 2 [4, 5]
index 4, slice 2 [6]


- Create an empty array to store chunks - named chunks
- iterate over the array of elements
  - start at i = 0 and continue while i < array length
    - Increment i by n on each iteration.
  - Create a subarr of arr
    - start at index i
    - stop at index + n
  - push subarray to chunks 
- return chunks
*/

function chunkify(arr, size) {
  let chunks = [];
  if (size === 0) return chunks;

  for (let i = 0; i < arr.length; i += size) {
    let startIdx = i;
    let endIdx = i + size;
    
    chunks.push(arr.slice(startIdx, endIdx));
  }

  return chunks;
}

// TEST CASES - PROVIDED -----------------------------------------------

// chunkify([2, 3, 4, 5, 6, 7], 1) 
// ➞ [[2], [3], [4], [5], [6], [7]]

// chunkify([2, 3, 4, 5], 2) 
// // ➞ [[2, 3], [4, 5]]

// chunkify([2, 3, 4, 5, 6], 2) 
// // ➞ [[2, 3], [4, 5], [6]]

// chunkify([2, 3, 4, 5, 6, 7], 3) 
// // ➞ [[2, 3, 4], [5, 6, 7]]

// chunkify([2, 3, 4, 5, 6, 7], 7) 
// // ➞ [[2, 3, 4, 5, 6, 7]]


// // TEST CASES - ADDITONAL -----------------------------------------------

// chunkify([], 3) 
// // ➞ []

// chunkify([2, 3, 4, 5], 0) 
// // ➞ [[]]

// chunkify([true, 3, 4, 5], 2) 
// // ➞ [[true, 3], [4, 5]]

chunkify([-100, 3, 4, 5], 2) 
// // ➞ [[-100, 3], [4, 5]]

chunkify(['hello', 3, 4, 5], 2) 
// // ➞ [['hello', 3], [4, 5]]

chunkify([NaN, 3, 4, 5], 2) 
// // ➞ [[NaN, 3], [4, 5]]

chunkify([[1,2,3], 3, 4, 5], 2) 
// // ➞ [[[], 3], [4, 5]]

chunkify([{}, 3, 4, 5], 2) 
// // ➞ [[{}, 3], [4, 5]]