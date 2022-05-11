/*
Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

Examples
isScalable([1, 2, 4, 6, 7, 8]) ➞ true

isScalable([40, 45, 50, 45, 47, 52]) ➞ true

isScalable([2, 9, 11, 10, 18, 21]) ➞ false

Notes
The array may start at any number and can be any length.

INPUT
- Array of integers
  - represents the height of a mountain in certain intervals
  - may start at any number
  - may be any length

OUTPUT
- boolean true or false

RULES
- scalable mountain
  - each number is within 5 units of the next number in either direction.
- input array integers may increase or decrease from to the next
- input array integers may be negative
- What about
  - decimals/fractional nums - yes
  - infinity - no
  - 0 - Yes
  - NaN - no
  - Non numbers?
- If input array is empty return false


-5 -10 -13

    5  3

TEST CASES - PROVIDED
isScalable([2, 9, 11, 10, 18, 21]) 
// ➞ false

isScalable([1, 2, 4, 6, 7, 8]) 
// ➞ true

isScalable([40, 45, 50, 45, 47, 52]) 
// ➞ true


TEST CASES - ADDITONAL

isScalable([0, 10, 20]) 
// false

isScalable([0, 2, 4]) 
// true

isScalable([0.3, 2.7, 4.8]) 
// true


isScalable([-10, -5, 0, 5, 10, 5, 0, -5, -10]) 
// true

DATA STRUCTURE
[el1, el2, el3, ...]

abs(el1 - el2) <= 5
abs(el2 - el3) <= 5


true/false

APPROACH
- iterate over each num in arr
  - stop iteration when i reaches final element
  - set var for current num
  - set var for next num
  - subtract current num from next num
    - if abs value is > 5 return false
    - otherwise continue
- return true
ALGO

- iterate over each num in arr - for loop
  - stop iteration when i reaches final element
    - break if i === length - 1
  - set var for current num let currentNum = arr[i]
  - set var for next num let nextNum = arr[i+1]
  - subtract current num from next num
    - elevationDiff = Math.abs(currentNum - nextNum)
    - if abs value is > 5 return false
      if elevationDiff > 5 return false
    - otherwise continue
- return true


*/


function isScalable(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) break;
    
    let current = arr[i];
    let next = arr[i + 1];

    let elevationDiff = Math.abs(current - next)
    if (elevationDiff > 5) return false;
  }

  return true;
}

console.log(isScalable([2, 9, 11, 10, 18, 21]))
// ➞ false

console.log(isScalable([1, 2, 4, 6, 7, 8]))
// ➞ true

console.log(isScalable([40, 45, 50, 45, 47, 52]))
// ➞ true


// TEST CASES - ADDITONAL

console.log(isScalable([0, 10, 20]))
// false

console.log(isScalable([0, 2, 4]))
// // true

console.log(isScalable([0.3, 2.7, 4.8]))
// // true


console.log(isScalable([-10, -5, 0, 5, 10, 5, 0, -5, -10]))
// true