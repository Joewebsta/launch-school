'use strict'

// 1

// let firstName = 'Joe';
// let lastName = 'Webster';
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// 2

// let firstName = 'Joe';
// let lastName = 'Webster';
// let fullName = firstName.concat(lastName) `${firstName} ${lastName}`;
// console.log(firstName.concat(` ${lastName}`));

// 3
// let firstName = 'Joe';
// let lastName = 'Webster';
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName.split(' '));

// // 4
// let language = 'JavaScript';
// let idx = language.indexOf('S');
// console.log(idx);

// // 5
// let language = 'JavaScript';
// let idx = language.indexOf('S');
// let charCode = language.charCodeAt(idx);
// console.log(charCode);

// // 6
// let language = 'JavaScript';
// let idx = language.indexOf('S');
// let charCode = language.charCodeAt(idx);

// console.log(String.fromCharCode(charCode));

// 7
// let language = 'JavaScript';
// let lastIdx = language.lastIndexOf('a');
// console.log(lastIdx);

// 8
// let a = 'a';
// let b = 'b';
// console.log(a > b);
// b = 'B';
// console.log(a > b);

// 9
// let language = 'JavaScript';
// let aIndex = language.indexOf('a');
// let vIndex = language.indexOf('v');

// console.log(language.substr(aIndex, 4));
// console.log(language.substr(vIndex, 4));

// 10
// let language = 'JavaScript';
// let aIndex = language.indexOf('a');
// let vIndex = language.indexOf('v');

// console.log(language.substring(aIndex, 4));
// console.log(language.substring(vIndex, 4));

// 11
// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// let compoundSentence = `${fact1} and ${fact2.toLowerCase()}.`;
// console.log(compoundSentence);

// 12
// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// console.log(fact1[0], fact2[0]);

// // 13
// let pi = 22 / 7;
// let lastIndex = pi.toString().lastIndexOf('14');
// console.log(lastIndex);

// // 14
// let boxNumber = (356).toString();
// console.log(boxNumber);

// 14
let boxNumber = (356).toString();
boxNumber = parseInt(boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);