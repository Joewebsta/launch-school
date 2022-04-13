function octalToDecimal(numberString) {
  let digits = numberString.split('');

  return [...digits].reverse().map(convertToDecimal).reduce(sum);
}

function convertToDecimal(digit, index) {
  let exponent = index;
  return Number(digit) * Math.pow(8, exponent);
}

function sum(sum, digit) {
  return sum + digit;
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

/*

7 4 0 2
0 1 2 3

7 + 32 + 0 + 1024

*/