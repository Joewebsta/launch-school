/*
Create a function that takes an integer array and return the biggest between positive sum, negative sum, or 0s count. The major is understood as the greatest absolute.

arr = [1,2,3,4,0,0,-3,-2], the function has to return 10, because:

Positive sum = 1+2+3+4 = 10
Negative sum = (-3)+(-2) = -5
0s count = 2 (there are two zeros in array)

Examples

Notes
All numbers are integers.
There aren't empty arrays.
All tests are made to return only one value.


INPUT
- array - contains integers

OUTPUT
- integer


RULES
- positive sum
- negative sum (abs)
- 0 count
- Return the value that is the greatest of the three


DATA STRUCTURE/ALGO

- let posSum = filter array by positive values > 0
  - determine sum of positive integers
- let negSum = filter array by negative values
  - determine sum of negative integers abs
- let zeroCount =  filter array by 0
  - determine count of zeros - arry length

- if max value of posSum, negSum and zeroCount === posSum return posSum
- if max value of posSum, negSum and zeroCount === negSum return posSum
- else return zeroCount

// helper
 - sum

*/

function majorSum(arr) {
  let posSum = arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  let negSum = arr.filter(num => num < 0).reduce((sum, num) => sum + num, 0);
  let zeroCount = arr.filter(num => num === 0).length;
  let maxVal = Math.max(posSum, Math.abs(negSum), zeroCount);

  if (maxVal === posSum) return posSum;
  if (maxVal === Math.abs(negSum)) return negSum;
  return zeroCount;
}

// TEST CASES - PROVIDED -------------------------------------

// console.log(majorSum([1, 2, 3, 4, 0, 0, -3, -2]) )
// ➞ 10

console.log(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]) )
// ➞ -27

// console.log(majorSum([0, 0, 0, 0, 0, 1, 2, -3]) )
// ➞ 5
// Because -3 < 1+2 < 0sCount = 5



// TEST CASES - ADDITIONAL -------------------------------------

// console.log(majorSum([1.5, 2, 3, 4, 0, 0, -3, -2]) )
// // ➞ 10.5

// console.log(majorSum([0, 0]) )
// // ➞ 2

// console.log(majorSum([1, 2, 3, 4]) )
// // ➞ 10

// console.log(majorSum([-3, -2]) )
// // ➞ -5
