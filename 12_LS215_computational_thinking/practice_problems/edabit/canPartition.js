/*

Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples

canPartition([2, 8, 4, 1])  
// ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) 
// ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) 
// ➞ true

Notes
The array may contain duplicates.


INPUT
- Array
  - empty?
  - other element data types? - no
  - sparse arrays/non indec property
  - numbers
    - whole numbers
    - pos
    - negative
    
    - Some digits may repeat

OUTPUT
- true/false


RULES


// TEST CASES - PROVIDED ---------------------

// canPartition([2, 8, 4, 1])  
// // ➞ true
// // 8 = 2 x 4 x 1

// canPartition([-1, -10, 1, -2, 20]) 
// // ➞ false

// canPartition([-1, -20, 5, -1, -2, 2]) 
// // ➞ true

// TEST CASES - ADDITIONAL ---------------------

// canPartition([])  
// // ➞ false

DATA STRUCTURE / ALGO

- FUNCTION: canPartition(arr)

input - [2, 8, 4, 1]

2 - [8, 4, 1]
8 - [2, 4, 1] = 2 * 4 * 1 => 8
4 - [2, 8, 1]
1 - [2, 8, 4]

- iterate over each num in arr - track index - for loop?
  - set arrCopy to copy of array - [2, 8, 4, 1] => [8, 4, 1]
  - set elem - 2
    - remove element at index 1 - splice

  - set product to product of remaining element in arrCopy - reduce

  - check if elem and product are equal
    - if true, return true

- return false
  
Output - false


*/


function canPartition(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let arrCopy = [...arr];    
    let elem = arrCopy.splice(i, 1)[0];
    let product = arrCopy.reduce((sum, num) => sum * num);

    if (elem === product) return true;
  }

  return false;
}

// TEST CASES - PROVIDED ---------------------

console.log(canPartition([2, 8, 4, 1])  )
// // ➞ true
// // 8 = 2 x 4 x 1

console.log(canPartition([-1, -10, 1, -2, 20]) )
// // ➞ false

console.log(canPartition([-1, -20, 5, -1, -2, 2]) )
// // ➞ true

// TEST CASES - ADDITIONAL ---------------------

console.log(canPartition([])  )
// // ➞ false
