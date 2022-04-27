/*
INPUT


OUTPUT


RULES


QUESTIONS


TEST CASES
maxRotation(735291);          // 321579
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

APPROACH
735291
  
6 735291 => 352917
  ^
5 352917 => 329175
   ^
4 329175 => 321759
    ^
3 321759 => 321597
     ^ 

2 321597 => 321579 
      ^

105
051
015

DATA STRUCTURE/ALGO

- create function maxRotation(num)
  - set numString to string version of num
  - set currentRotation = numString
  - create a for loop that starts at n = numString.length and repeats until n >= 2
    - on each iteration
      - reassign currentRotation to return val of rotateRightmostDigits(currentRotation , n)
  - return currentRotation;

*/

function maxRotation(num) {
  let numString = String(num);
  let currentRotation = numString;

  for (let n = numString.length; n >= 2; n -= 1) {
    currentRotation = rotateRightmostDigits(currentRotation, n);
  }
  return currentRotation;
}

function rotateRightmostDigits(num, n) {
  let numString = String(num);
  let startNum = numString.slice(0, numString.length - n);
  let endNum = rotate(numString.slice(-n));

  return Number(startNum + endNum);
}

function rotate(num) {
  return num.slice(1).concat(num[0]);
}

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845