/*
INPUT
- arg 1 - a number
- arg 2 - the last number (n) of digits to be rotated

OUTPUT
- A rotated number


RULES
- If the value of n is 1, return number
- The last n digits are rotated
  - digits are rotated by moving the first digit to the end of the number 
- The remaining digits are unchanged
- The value of n is <= the length of the input number

QUESTIONS
- What happens if n is greater than the length of the number?
- n === 0?
- n < 0?

TEST CASES
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

APPROACH
n = 4 
735291
start = 73
end = 5291 => 2915
start + end => 732915

DATA STRUCTURE / ALGO
- String

- create function called rotateRightmostDigits(num, n)
  - set numString = string version of num
  - set startNum = numString.slice(numString.length - n)
  - set endNum = numString.slice(-n)
    - endNum = rotate(endNum)
  return startNum + endNum
  
- create function rotate(num)
  - return num.slice(1).concat(num[0])
*/

function rotateRightmostDigits(num, n) {
  let numString = String(num);
  let startNum = numString.slice(0, numString.length - n);
  let endNum = rotate(numString.slice(-n));

  return Number(startNum + endNum);
}

function rotate(num) {
  return num.slice(1).concat(num[0]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917