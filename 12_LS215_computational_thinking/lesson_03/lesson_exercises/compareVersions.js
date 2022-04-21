'use strict'

function compare(version1, version2) {
  if (invalidVersion(version1) || invalidVersion(version2)) return null;

  let ver1Digits = convertToDigits(version1);
  let ver2Digits = convertToDigits(version2);

  let numDigits = Math.max(ver1Digits.length, ver2Digits.length);

  for (let i = 0; i < numDigits; i += 1) {
    let ver1Digit = ver1Digits[i] || 0;
    let ver2Digit = ver2Digits[i] || 0;

    if (ver1Digit > ver2Digit) return 1;
    if (ver1Digit < ver2Digit) return -1;
  }

  return 0;
}

function convertToDigits(version) {
  return version.split('.').map(digit => Number(digit));
}

function invalidVersion(version) {
  return /[^\d\.]|\.$|^\.|\.{2,}/.test(version);
}

console.log(compare('1', '1'));            // 0
console.log(compare('1.1', '1.0'));        // 1
console.log(compare('2.3.4', '2.3.5'));    // -1
console.log(compare('1.a', '1'));          // null
console.log(compare('.1', '1'));           // null
console.log(compare('1.', '2'));           // null
console.log(compare('1..0', '2.0'));       // null
console.log(compare('1.0', '1.0.0'));      // 0
console.log(compare('1.0.0', '1.1'));      // -1
console.log(compare('1.0', '1.0.5'));      // -1

// console.log(compare('.1.0', '1.0'));
// console.log(compare('1.0.', '1.0'));
// console.log(compare('0...1', '1.0'));
// console.log(compare('!1.0', '1.0'));

// console.log(compare('1.0', '1.0'));
// console.log(compare('0.954', '1.0'));
// console.log(compare('1', '1.0'));
// console.log(compare('1.0', '1.1'));
// console.log(compare('1.0.0.0', '1'));
// console.log(compare('1.1', '1.2'));
// console.log(compare('1.1', '1.2.0.0'));
// console.log(compare('1.2.0.0', '1.1'));
// console.log(compare('1.2.0.0', '1.18.2'));
// console.log(compare('1.18.2', '1.2.0.0'));
// console.log(compare('1.18.2', '13.37'));
// console.log(compare('2.3.4', '2.3.5'));



/*
0.1 < 1 = 1.0 < 1.1.3 < 1.1.4 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

- Compare the first digit in each version
- 
['0', '1']
['1']


[1, 0 , 0]
[1] 

If accessing an index returns undefined then set the value equal to 0

Will compare 0 to undefined
If one of the two numbers is undefined
Then the two numbers are equal - Return 0

V1 [1, 1, 4]
V2 [1, 1, 3] Return 1

V1 [1, 1, 3]
V2 [1, 1, 4] Return -1

V1 [1, 2, 0, 0]
V2 [1, 1, 4] 

V1 [13, 37]
V2 [1,  1, 4] 


Split each string by period
set ver1Digits to array of digits
set ver2Digits to array of digits

Determine the longest of the two arrays
  set numDigits = ver1.length > ver2.length ? ver1.length : ver2.length

- FOR LOOP
  - Initialize i to 0
  - Loop until i < numDigits
  - Increase i by 1

On each iteration
- set ver1Digit to Number(ver1Digits[i]) || 0
- set ver2Digit to Number(ver2Digits[i]) || 0

- if ver1Digit > ver2Digit return 1
- if ver1Digit < ver2Digit return -1

If loop completes iteration without returning a value then return 0

*/