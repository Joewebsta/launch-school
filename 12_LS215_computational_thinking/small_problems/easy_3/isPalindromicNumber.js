'use strict'

function isPalindromicNumber(num) {
  return String(num) === String(num).split('').reverse().join('');
}

console.log(isPalindromicNumber(034543));        // true
console.log(isPalindromicNumber(000123210));       // false
console.log(isPalindromicNumber(022));           // true
console.log(isPalindromicNumber(005));            // true