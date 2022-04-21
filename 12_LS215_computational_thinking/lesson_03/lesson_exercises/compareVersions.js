'use strict'


/*
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

1.0 => 1
1.2.0.0 => 1.2

0.1 < 1 < 1.1 < 1.2 < 1.18.2 < 13.37
.1 < 1 < 11 < 12 < 

.9534

.1 .9543  1  11  12  118  1337

formatVersion
remove one or more '.0'

If version contains character other than 0-9 or . - return null
Split each version into array of individual numbers [1], [1,1], [1,2], [1,18,2]

Count min number of periods
Match numbers to either side of period count
compare two numbers


Remove the periods

0.1 < 1 = 1.0 < 1.1.3 < 1.1.4 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
0.1 < 1 < 1.1.3 < 1.1.4 < 1.2 < 1.18.2 < 13.37
0.1 < 1 < 1.1.3 < 1.1.4 < 1.2 < 1.18.2 < 13.37
['0.1'] < ['1'] < ['1', '1', '3'] < ['1', '1', '4'] < ['1', '2'] < [`1`, `18`, `2`] < ['13', '37']

Return null if either version contains characters other than digits and period

Remove any trailing zeros
If version is less than zero -> multiply by 100
If version is less than one
  - Do not alter version
If version is greater than 1
  - Split by period '.'
If version1.length === version2.length
  - join strings, convert to number and compare versions
If version1.length !== version2.length
  - Reduce larger array to length of smaller array
  join strings, convert to numbers and compare versions


Split string by period

10  < 100 < 

([^\d\.]|\.{2,}|^\.|\.$)

\.$|^\.|\.{2,}

[^\.\d]
*/

function compare(version1, version2) {
  if (invalidVersion(version1) || invalidVersion(version2)) return null;

//  let [ ver1, ver2 ] = [format(version1), format(version2)];
 let ver1 = format(version1); 
 let ver2 = format(version2);

 
 if (ver1.length !== ver2.length) {
   let smallLength = (ver1.length < ver2.length) ? ver1.length : ver2.length;
   ver1.length = smallLength;
   ver2.length = smallLength;
  }
  
  console.log(ver2);
  
  ver1 = Number(ver1.join(''))
  ver2 = Number(ver2.join(''))

  if (ver1 > ver2) return 1;
  if (ver1 === ver2) return 0;
  if (ver1 < ver2) return -1;
}

function format(version) {
  if (Number(version) < 1) return [version]; 

  return removeExtraZeros(version).split('.');
}

function removeExtraZeros(version) {
  return version.replace(/(\.0)+$/, '')
}

function invalidVersion(version) {
  return /[^\d\.]|\.$|^\.|\.{2,}/.test(version);
}

// console.log(removeExtraZeros('1.2.0.0'));
// console.log(removeExtraZeros('1.0'));

// function compare(version1, version2) {
//   if (!(/\./.test(version1))) {
//     version1 = version1 + '.0'; 
//   }
  
//   if (!(/\./.test(version2))) {
//     version2 = version2 + '.0'; 
//   }

//   let v1PeriodCount = version1.match(/\./g).length;
//   let v2PeriodCount = version2.match(/\./g).length;
//   let minPeriodCount = Math.min(v1PeriodCount, v2PeriodCount)
  
//   let versionRegex = new RegExp(`(\\d+\.){${minPeriodCount}}\\d+`)
  
//   let v1Formatted = Number(version1.match(versionRegex)[0].toString().replace('.', ''))
//   let v2Formatted = Number(version2.match(versionRegex)[0].toString().replace('.', ''))
  
//   if (v1Formatted > v2Formatted) return 1;
//   if (v1Formatted === v2Formatted) return 0;
//   if (v1Formatted < v2Formatted) return -1;
// }

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37


// console.log(compare('.1.0', '1.0'));
// console.log(compare('1.0.', '1.0'));
// console.log(compare('0...1', '1.0'));
// console.log(compare('!1.0', '1.0'));
// console.log(compare('1.0', '1.0'));
// console.log(compare('0.954', '1.0'));
// console.log(compare('1', '1.0'));
console.log(compare('1.0', '1.1'));
// console.log(compare('1.1', '1.2'));
// console.log(compare('1.1', '1.2.0.0'));
// console.log(compare('1.2.0.0', '1.18.2'));
// console.log(compare('1.18.2', '13.37'));

// function formatVersion(version) {
  //   return version.toString().replace(/(.0)+/, '');
  // }

// console.log(formatVersion('1.0'));
// console.log(formatVersion('1.2.0.0'));