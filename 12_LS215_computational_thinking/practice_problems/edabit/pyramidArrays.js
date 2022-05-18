/*
Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

Examples
pyramidArrays(1) ➞ [[1]]

pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]

pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]



INPUT
 - integer n
 - 

OUTPUT
- 2d array

RULES
- Each  subarray increments in size, from range 1 to n inclusive
- number of sub arrays in output array is equal to n
- each sub array contains n elements
- the value of each element in the sub array is equal to the sub array'ss length


// TEST CASES - PROVIDED -------------------------------

pyramidArrays(1) 
// ➞ [[1]]

pyramidArrays(3) 
// ➞ [[1], [2, 2], [3, 3, 3]]

pyramidArrays(5) 
// ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

// TEST CASES - ADDITIONAL -----------------------------

pyramidArrays(0) 
// ➞ []

DATA STRUCTURE/ALGO

pyramidArrays(3) 
Input - 3

- create empty array called allArr
- iterate from 1 to n (inclusive) - i
  - create empty array called subArr
  - iterate from 1 to i
    - push value of i to subArr
  - push subArr to allArr

i
1 - [] - 1 to 1
2 - [] - 1 to 2
3 - [] - 1 to 3


Output - [[1], [2, 2], [3, 3, 3]]
*/


function pyramidArrays(n) {
  let allArr = [];
  let currentNum = 1;

  for (let i = 1; i <= n; i += 1) {
    let subArr = [];
    for (let j = 1; j <= i; j += 1) {
      subArr.push(currentNum)
    }
    allArr.push(subArr)
    currentNum += 1;
  }

  return allArr;
}

pyramidArrays(1) 
// ➞ [[1]]

pyramidArrays(3) 
// ➞ [[1], [2, 2], [3, 3, 3]]

pyramidArrays(5) 
// ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

// TEST CASES - ADDITIONAL -----------------------------

pyramidArrays(0) 
// ➞ []