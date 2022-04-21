'use strict'


/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. 
Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
For bad numbers, just a return a string of 10 0s. 
If the phone number is more than 11 digits, assume that it is a bad number.

If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.

INPUT
- Data type: string
- Contains digits
- May also contain special chars: spaces, dash, dot, parentheses
  - Non digits should be ignored
  - Non digits do not necessarily make a number 'bad'

OUTPUT
- Data type: string
- Good numbers
  - Contain only digits
  - Contain NO special characters
- Bad numbers
  - RETURN: 10 zeros 

RULES
- Bad numbers
  - Fewer than 10 digits
  - More than 10 digits
  - 11 digits that start with a digit other than 1
  
- Good numbers
 - 10 digits exactly
 - 11 digits that start with 1

- 11 digit strings
  - If starts with 1
    - Remove the 1 and use the remaining 10 digits
  - If does NOT start with 2-9
    - Bad string

  - Understand the problem
  - examples
  - Data structure
  - Algo
  - Code

  - Remove special characters from string '1617-824-0131' -> '16178240131'
    - REGEX: Replace any character that is not a number with and empty string
  - Test if number is less than 10 -> return 10 zeros
  - Test if number is greater than 11 -> return 10 zeros
  - Test is number is exactly 11 characters
    - If 11 chars and starts with 1 then remove 1: '16178240131' -> '6178240131'
      - Return number
    - If 11 chars and starts with 2-9
      Return 10 zeros
  - Return number
*/

function cleanPhoneNum(numString) {
  let cleanNumString = numString.replace(/[^\da-z]/ig, '');
  
  if (cleanNumString.length > 11 || 
      cleanNumString.length < 10 ||
      cleanNumString.length === 11 && cleanNumString[0] !== '1') 
    {
      return '0'.repeat(10);
  }

  if (cleanNumString.length === 11) {
    cleanNumString = cleanNumString.substring(1);
  }

  return cleanNumString;
}

// GOOD
console.log(cleanPhoneNum('(617)8240131')); // '6178240131' 
console.log(cleanPhoneNum('617 824 0131')); // '6178240131' 
console.log(cleanPhoneNum('617.824.0131')); // '6178240131' 
console.log(cleanPhoneNum('617-824-0131')); // '6178240131' 
console.log(cleanPhoneNum('16178240131')); // '6178240131' 
console.log(cleanPhoneNum('1617-824-0131')); // '6178240131' 

// BAD
// console.log(cleanPhoneNum('')); // '0000000000' 
// console.log(cleanPhoneNum('!!!!')); // '0000000000' 
// console.log(cleanPhoneNum('8240131')); // '0000000000' 
// console.log(cleanPhoneNum('6176178240131')); // '0000000000' 
// console.log(cleanPhoneNum('617617.824.0131')); // '0000000000' 
// console.log(cleanPhoneNum('26178240131')); // '0000000000' 
// console.log(cleanPhoneNum('96178240131')); // '0000000000'

