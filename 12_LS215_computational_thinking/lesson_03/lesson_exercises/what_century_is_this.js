/*

Input
- integer (year)

Output
- String that begins with century number
- String ends with 'st', 'nd', 'rd' or 'th'

Rules
- new centuries begin in years tha end with 01.
- Example: 1901-2000 => 20th century.

Determine century integer
// Math.ceil(year / 100)

Determine ending
// set lastDigits to last two digits of year

*/

/*
1st
2nd
3rd
4-9th
10-20th
21st
22nd
23rd
24-30th

set yearString to year.toString()
if yearString.length is 1, return year
if yearString.length ? 1 return last two numbers

*/


function century(year) {
  let centuryNum = Math.ceil(year / 100);
  
  return `${centuryNum}${ending(centuryNum)}`;
}

function ending(century) {
  if (/1[1-3]/.test(century)) return 'th';
  if (/1$/.test(century)) return 'st';
  if (/2$/.test(century)) return 'nd';
  if (/3$/.test(century)) return 'rd';
  return 'th';
}

// console.log(century(0)); // ???
console.log(century(1)); // 1st
console.log(century(100)); // 10th
console.log(century(101)); // 11th
console.log(century(133)); // 14th
console.log(century(245)); // 19th
console.log(century(356)); // 20th
console.log(century(1052)); // 20th
console.log(century(1152)); // 21st
console.log(century(1252)); // 100th
console.log(century(2012)); // 100th
console.log(century(2112)); // 101st
console.log(century(22222)); // 101st
console.log(century(22512)); // 101st
// console.log(century(1)); // 1st
// console.log(century(1000)); // 10th
// console.log(century(1001)); // 11th
// console.log(century(1301)); // 14th
// console.log(century(1900)); // 19th
// console.log(century(1901)); // 20th
// console.log(century(2000)); // 20th
// console.log(century(2020)); // 21st
// console.log(century(9999)); // 100th
// console.log(century(10000)); // 100th
// console.log(century(10001)); // 101st


