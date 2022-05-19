/*

Create a function that takes an array as an argument and return an array of the sum of each of its slices. An array's slices are groups of consecutive values that add up to a maximum of 100. No slice's total sum should exceed 100. However, if a single integer equals or exceeds 100, return the integer as well.

Examples
sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100])
➞ [97, 78, 87, 68, 100]

// First slice: [10, 29, 13, 14, 15, 16]
// 10 + 29 + 13 + 14 + 15 + 16 = 97
// The next value could not be included in this slice because
// the total would exceed 100.

// Second slice: [17, 31, 20, 10]
// 17 + 31 + 20 + 10 = 78
// The next value could not be included in this slice because
// the total would exceed 100.

// And so on ...

sumOfSlices([58, 3, 38, 99, 10]) ➞ [99, 99, 10]

sumOfSlices([13]) ➞ [13]

Notes
Do not sort the array.



2C
- Modify input?
- Invalid inputs


INPUT
- array
  - contains integers


2C
- consider different data types
- 

OUTPUT
  - array
    - contains sum of each of its slices
  

RULES
- Do not sort the array

- slice 
  - groups of consecutive values that add up to a maximum of 100. <= 100
  - No slice's total sum should exceed 100. 
  - If a single integer equals 100, return it
  - If a single integer exceeds 100, return it

- input array may contain various numbers -
  - pos 
  - neg 
  - 0 
  - decimal
- input array may contain 0 numbers
- input array may contain 1 numbers
- input array may contain many numbers

- Counting of consequtive numbers stops when an iteger 100 or greater is encountered

1C
- 0, 1, many


TEST CASES - PROVIDED ---------------------------

sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100])
// ➞ [97, 78, 87, 68, 100]

sumOfSlices([58, 3, 38, 99, 10]) 
// ➞ [99, 99, 10]

sumOfSlices([13]) 
// ➞ [13]


TEST CASES - ADDITIONAL ---------------------------

sumOfSlices([]) 
// ➞ []

sumOfSlices([100]) 
// ➞ [100]

sumOfSlices([25]) 
// ➞ [100]

sumOfSlices([5, 100]) 
// ➞ [5, 100]

sumOfSlices([5, 20]) 
// ➞ [5, 200]

sumOfSlices([50, -50, 99]) 
// ➞ [99]

sumOfSlices([-100, 100, 100]) 
// ➞ [100]

DATA STRUCTURE / ALGO

sumOfSlices([75, 24.9]) 
// ➞ [99.9]

sumOfSlices([75, 25.1]) 
// ➞ [75, 25.1]

sumOfSlices([25, 25, 25, 25, 25]) 
// ➞ [100, 25]

sumOfSlices([25, 25, 25, 24, 25]) 
// ➞ [99, 25]


3C

- normalize the data
- Test algo against all test cases
- Read problem problem description 1 last time 

Input
[25, 25, 25, 24, 25]

- sumOfSlices(arr) 

- set sum 0
- set slices to empty arr
- iterate over each num in arr
  - check if sum + num <= 100
    - if true
      - add num to sum
    - if false
      - append sum to slices
      - set sum to 0
      - add num to sum
- if sum > 0
  - append sum to slices
- return slices

Output
[99, 25]
*/

function sumOfSlices(arr) {
  let sum = 0;
  let slices = [];

  arr.forEach(num => {
    if (sum + num <= 100) {
      sum += num;
    } else {
      slices.push(sum)
      sum = num;
    }
  });

  if (sum > 0) slices.push(sum);

  return slices;
}


// TEST CASES - PROVIDED ---------------------------

// sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100])
// // ➞ [97, 78, 87, 68, 100]

// sumOfSlices([58, 3, 38, 99, 10]) 
// // ➞ [99, 99, 10]

// sumOfSlices([13]) 
// // ➞ [13]


// TEST CASES - ADDITIONAL ---------------------------

// sumOfSlices([]) 
// // ➞ []

// sumOfSlices([100]) 
// // ➞ [100]

// sumOfSlices([25]) 
// // ➞ [25]

// sumOfSlices([5, 100]) 
// // ➞ [5, 100]

// sumOfSlices([5, 20]) 
// // ➞ [5, 200]

// sumOfSlices([50, -50, 99]) 
// // ➞ [99]

// sumOfSlices([-100, 100, 100]) 
// // ➞ [100]

// DATA STRUCTURE / ALGO

// sumOfSlices([75, 24.9]) 
// // ➞ [99.9]

sumOfSlices([75, 25.1]) 
// // ➞ [75, 25.1]

sumOfSlices([25, 25, 25, 25, 25]) 
// // ➞ [100, 25]

sumOfSlices([25, 25, 25, 24, 25]) 
// // ➞ [99, 25]