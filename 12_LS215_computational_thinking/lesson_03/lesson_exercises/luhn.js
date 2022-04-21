'use strict'

/*

INPUT
- String
- 

OUTPUT
- boolean true or false (?)


RULES
VALIDATION
- Non numeric characters should be ignored

STRING PARSING AND CONVERSION
- Input string is parsed from right to left
- Every second digit is doubled
- Remaining digits remain unchanged
- 1111 -> 2121
- 8763 -> 7733

- Any doubled digit greater than 10 must subtract 9

CHECKSUM GENERATION
- Checksum is generated after every second digit is parsed
- Checksum is the sum of all digits 
- If checksum ends in 0 (checksum % 10 === 0) THEN checksum is valid
  - checksum is invalid otherwise

- 2121 -> 6
- 7733 -> 20

DATA STRUCTURE / ALGO
- Array

- removeSpecialChars
  - replace non digit values with empty spaces
  - /D/

- double2ndDigit
  - input: string
  - output array

  - split string into individual chars ['8', '7', '6', '3']
  - reverse array ['3', '6', '7', '8']
  - map array and keep track of index
    - convert to number
    
    - if index is even (num % 2 === 0)
      - double number
      - if number is greater than 10, subtract 9
      - return number 
    - else
      - return number
    [3, 3, 7, 7]
  - reverse array back to original order ['7', '7', '3', '3']

- checksum 
  - return sum of all numbers

CODE
  
 
 */

function generateChecksum(digits) {
  return digits.reduce((sum, digit) => sum + digit )
}

function double2ndDigit(numString) {
  let digits = numString.split('').reverse();

  digits = digits.map((digit, index) => {
    digit = Number(digit);

    if (index % 2 === 1) {
      digit = digit * 2;
      return (digit >= 10) ? (digit - 9) : digit;
    }

    return digit;    
  })

  return digits.reverse();
}

function removeSpecialChars(numString) {
  return numString.replace(/\D/g, '');
}

function luhn(numString) {
  let cleanNum = removeSpecialChars(numString);
  let convertedNum = double2ndDigit(cleanNum);
  let checksum = generateChecksum(convertedNum);

  return checksum % 10 === 0;
}


// console.log(luhn()); // false
// console.log(luhn('')); // false
console.log(luhn('0')); // true ?
console.log(luhn('0000')); // true ?
console.log(luhn('1111')); // false
console.log(luhn('8763')); // true
console.log(luhn('!8763!')); // true
console.log(luhn('87   63')); // true
console.log(luhn('87*^%63')); // true
console.log(luhn('2323 2005 7766 3554')); // true


// console.log(checksum(double2ndDigit('8763')));
// console.log(checksum(double2ndDigit('1111'))); 

// console.log(removeSpecialChars('!8763!'));
// console.log(removeSpecialChars('87   63'));
// console.log(removeSpecialChars('87*^%63'));
// console.log(removeSpecialChars('2323 2005 7766 3554'));

