function letterPercentages(string) {
  let totChars = string.length;
  let percentages = {lowercase: '0.00', uppercase: '0.00', neither: '0.00'};
  if (string.length === 0) return percentages;
  
  let totLower = string.match(/[a-z]/g) || [];
  let totUpper = string.match(/[A-Z]/g) || [];
  let totNeither = string.match(/[^A-Za-z]/g) || [];
    
  percentages['uppercase'] = (totUpper.length / totChars * 100).toFixed(2);
  percentages['lowercase'] = (totLower.length / totChars * 100).toFixed(2);
  percentages['neither'] = (totNeither.length / totChars * 100).toFixed(2);
  
  return percentages
}

/*

Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.


INPUT
- String
- may contain letters (upper and lower)
- may contain specicial chars
- will always contain at least one character.

OUTPUT
- object
- contains 3 properties
  - the percentage lowercase letters
  - the percentage uppercase letters
  - the percentage neither

RULES
- white space is counted as 'neither'
- all props are always present
- Prop values are strings
- Prop values always have two digits after the decimal


QUESTIONS


TEST CASES
- Invalid inputs? Special return values
- No argument?
- Empty string?


APPROACH


DATA STRUCTURE
- string -> array
- output and object

ALGO
- create function letterPercentages(string) {};
  - set totChars to string.length
  - set counts var to { lowercase: 0, uppercase: 0, neither: 0 }
  - set percentages to {}
  - convert string to individual chars
    - iterate over each char
      - if char is uppercase counts[upper] += 1
      - if char is lowercase counts[lower] += 1
      - else counts[neither] += 1
  
  - set percentages['uppercase'] = counts['uppercase'] / totChars * 100
  - set percentages['lowercase'] = counts['lowercase'] / totChars * 100
  - set percentages['neither'] = counts['neither'] / totChars * 100

  return percentages



*/




// function letterPercentages(string) {
//   let totChars = string.length;
//   let counts = { lowercase: 0, uppercase: 0, neither: 0 };
//   let percentages = {lowercase: '0.00', uppercase: '0.00', neither: '0.00'};
  
//   if (string.length === 0) return percentages;

//   [...string].forEach(char => {
//     if (/[A-Z]/.test(char)) {
//       counts['uppercase'] += 1;
//     } else if (/[a-z]/.test(char)) {
//       counts['lowercase'] += 1;
//     } else {
//       counts['neither'] += 1;
//     }
//   })

//   percentages['uppercase'] = (counts['uppercase'] / totChars * 100).toFixed(2);
//   percentages['lowercase'] = (counts['lowercase'] / totChars * 100).toFixed(2);
//   percentages['neither'] = (counts['neither'] / totChars * 100).toFixed(2);

  // console.log(percentages)
//   return percentages
// }


console.log(letterPercentages(''));
// { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }

// console.log(letterPercentages()); //???
// // { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages('a'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

console.log(letterPercentages(' '));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('!'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('abCdef 12'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
