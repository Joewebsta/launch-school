function featured(num) {
  let error = "There is no possible number that fulfills those requirements."
  if (num >= 9876543201) return error;

  num += 1
  while (!isFeaturedNum(num)) {
    num += 1
  }

  return num;
}


function isFeaturedNum(num) {
  return (num % 2 !== 0 &&
         num % 7 === 0 &&
         noDuplicateNums(num));
}

function noDuplicateNums(num) {
  let seen = [];
  let result = true;
  
  [...String(num)].forEach(n => {
    if (seen.includes(n)) {
      result = false;
    } else {
      seen.push(n);
    }
  })

  return result;
}

/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.
-----------------------------------------------

INPUT
- integer

OUTPUT
- integer
- represents the next featured number greater than the integer

RULES
- Featured number
  - odd number 
  - multiple of 7
  - all of its digits occur exactly once each.
- Issue an error message if there is no next featured number.
  - The largest possible featured number is 9876543201.
  - "There is no possible number that fulfills those requirements."


QUESTIONS
- negative input
- floating point?
- no input?
- other data types? string, boolean?
- Invalid input?

TEST CASES


APPROACH
  - Start at input argument
  - increment
  - check for featured number conditions
  - return integer if conditions are fufilled

DATA STRUCTURE
- work with integers
- use array to determine if numbers are repeated

ALGO

- create function featured(n)
  - while (n is not a featured number (function: isFeaturedNum)
    - increment by 1
  return n

- create function isFeaturedNum(n)
  - if n is odd AND
  - if n % 7 === 0 AND 
  - if noDuplicateNums(n)
    - return true
    - otherwise false

- example: 133
- create noDuplicateNums(n)
  - set seen to []
  - convert n to string -> array of num chars
  - iterate over chars
    - if seen does not include char
      - push char to seen
    - else
      return false
  - when iteration is complete return true

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

*/

// - create function featured(n)
//   - while (n is not a featured number (function: isFeaturedNum)
//     - increment by 1
//   return n



// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// // console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements.)"