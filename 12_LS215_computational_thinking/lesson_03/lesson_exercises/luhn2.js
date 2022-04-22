'use strict'

/*

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

function makeValid(numString) {
  if (luhn(numString)) return numString;

  for (let digit = 0; digit <= 9; digit += 1) {
    let validString = numString + String(digit);
    
    if (luhn(validString)) {
      return validString;
    }
  }
}



console.log(makeValid('2323 2005 7766 3554')); // '2323 2005 7766 3554'
console.log(makeValid('2323 2005 7766 355')); // '2323 2005 7766 3554'
console.log(makeValid('876')); // 8763
console.log(makeValid('1111')); // false


// console.log(luhn()); // false
// console.log(luhn('')); // false
// console.log(luhn('0')); // true ?
// console.log(luhn('0000')); // true ?
// console.log(luhn('1111')); // false
// console.log(luhn('1111')); // false
// console.log(luhn('8763')); // true
// console.log(luhn('!8763!')); // true
// console.log(luhn('87   63')); // true
// console.log(luhn('87*^%63')); // true
// console.log(luhn('2323 2005 7766 3554')); // true


// console.log(checksum(double2ndDigit('8763')));
// console.log(checksum(double2ndDigit('1111'))); 

// console.log(removeSpecialChars('!8763!'));
// console.log(removeSpecialChars('87   63'));
// console.log(removeSpecialChars('87*^%63'));
// console.log(removeSpecialChars('2323 2005 7766 3554'));

