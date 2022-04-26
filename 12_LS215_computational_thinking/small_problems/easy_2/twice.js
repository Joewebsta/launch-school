function twice(num) {
  if (isDoubleNumber(num)) {
    return num; 
  } 

  return num * 2;
}


function isDoubleNumber(num) {
  if (num < 0 || String(num).length % 2 !== 0) return false;
  
  let numString = String(num);
  let left = numString.slice(0, numString.length / 2)
  let right = numString.slice(numString.length / 2)

  return left === right;
}


// DOUBLE NUMBER 
console.log(twice(44));          // 44
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
console.log(twice(103103));      // 103103

// NOT DOUBLE NUMBER
console.log(twice(0));          // 0
console.log(twice(1));          // 2
console.log(twice(37));          // 74
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214

/* 
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

- Input
  - Integer
  - Always positive?
  - 0?
  - Single digit?
  - 

- Output
  - Integer

- Rules/Requirements
  - Double number
    - Positive integer
    - Even length
    - Left half digits === right half digits
  - If argument is a double number
    - Return double number as is  
  - If argument is NOT a double number
    - Return double number * 2

- Examples/Test Cases
// DOUBLE NUMBER 
twice(44);          // 44
twice(3333);        // 3333
twice(7676);        // 7676
twice(103103);      // 103103

// NOT DOUBLE NUMBER
twice(0);          // 0
twice(1);          // 2
twice(37);          // 74
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214


  - Double number
    - Positive integer
    - Even length
    - Left half digits === right half digits

- Data Structure / Algo
  - Check if integer is double number (below)
    - if true, return 
    - if false, return integer * 2

  - Check if integer is double number
    - if integer is less than zero or if integer length is odd
      - return false
    - Split digit into two (below)
      - set leftDigits to left digits
      - set rigthDigits to right digits
    - Return leftDigits === rightDigits

  - Split digit into two pieces
    - Convert digit to string
    - left = slice(0, length / 2)
    - right = slice(length / 2)

- Code
*/
