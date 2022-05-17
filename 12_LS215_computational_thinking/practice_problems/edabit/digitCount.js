/*

Given a number, create a function which returns a new number based on the following rules:

For each digit, replace it by the number of times it appears in the number.
The final instance of the number will be an integer, not a string.

The following is a working example:

digitCount(136116) ➞ 312332
// The number 1 appears thrice, so replace all 1s with 3s.
// The number 3 appears only once, so replace all 3s with 1s.
// The number 6 appears twice, so replace all 6s with 2s.


Examples
digitCount(221333) ➞ 221333

digitCount(136116) ➞ 312332

digitCount(2) ➞ 1


Notes
Each test will have a positive whole number in its parameter.

INPUT
- Integer
  - always a whole number

OUTPUT
- Integer

RULES
- For each digit, replace it by the number of times it appears in the number.

- Digit occurrences
- Replace original digits with occurence equivalent


DATA STRUCTURE / Algo
Input - Integer - 136116 


Function: digitCount(num)

- set result array to empty array
- set numString to String version of num - "136116"
- set num arr to array of str digits - ['1','3','6','1','1','6']
- set counts to hash that contains occurences of each digit
  - let counts = { 1: 3, 3: 1, 6: 2 }

- set convertedNumArr
  - map over each digit in numArr
  - return counts[digit]

- set uniqueDigits to array of counts keys - [1, 3, 6]
- Iterate over each digit in uniqueDigits array
  - Replace all occurences of current digit in numString with counts[digit]
    1 - ['1', '3', '6']
    2 - "136116"
- Convert numString to number

Output - Integer = 312332


CODE
*/

function digitCount(num) {
  let numArr = String(num).split('')
  let counts = {}
  numArr.forEach(num => counts[num] = (counts[num] || 0) + 1);

  let convertedNumArr = numArr.map(digit => String(counts[digit]));
  return Number(convertedNumArr.join(''));
}


// TEST CASES - PROVIDED

// console.log(digitCount(221333))
// ➞ 221333

// console.log(digitCount(136116))
// // ➞ 312332

// console.log(digitCount(2))
// // ➞ 1

// // TEST CASES - ADDITONAL


// console.log(digitCount(0))
// // ➞ 1

console.log(digitCount(10000))
// // ➞ 94444


// // Integers
// // Decimals
// // 0
// // Infinity
// // Negatives
// // NaN