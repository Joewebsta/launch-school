/*
Given a list of admins, return the admins where matching keys in `data` have truthy values.

let list = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: '', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'yes' }
];


console.log(findAdmin(list, ['country', 'githubAdmin']));

// [
//  {fullName: 'Harry K.', country: 'Brazil', githubAdmin: 'yes' },
//  {fullName: 'Jing X.', country: 'China', githubAdmin: 'yes'},  
// ]

INPUT
- array of objects 
  - each object represents an admin
    - object properties are consistent across all objects
    - some properties have a falsy value
  - array will never be empty
  - array will never contain empty objects

- array of strings
  - each string represents a key present within an admin object
  - this array may be empty
  - this array may have 1 string
  - this array may have 1+ strings
  - SKIP ME - case sensitivity must be accounted for
  - this array will NOT contain values other than strings
  - this array will NOT contain property names that are not present in admin objects
  - key will always be 1 word

OUTPUT 
- NEW array of objects
  - each object corresponds to an object in the input array of objects
  - data from original object is only included if all keys in second array have truthy values
  - each object contains the following properties:
    - fullName (firstName + lastName)
    - any property from the array of strings that has a truthy value in admin obj
  - github admin property may only have some variation of yes/no for prop value. 
    - other strings should be considered falsy
  - Property order should be consistent with property order in original object??

RULES
- Input arguments should not be mutated
- falsy
  - false
  - 0
  - ''
  - undefined
  - NaN
  - null
  - strings
    - no/No/NO/nO
- truthy
  - includes y/Y/Yes/YES/YeS/YEs/yES
    
DATA STRUCTURE
Input
list = [{}, {}, ...]
keys = ['', '']

Create empty array
[]

Iterate over each object in list
{} - { firstName: 'Harry', lastName: 'K.', country: 'Brazil',  githubAdmin: 'y' }
{}
...

Create new object
{}

Iterate over each key
['country', 'githubAdmin']

Check if all key value are truthy in current object
- helper function - isTruthy

Populate new object
{fullName: ... , country: ..., githubAdmin: ...}

Output
[{}, {}, ...]
  
  
APPROACH
- Create empty object
- Iterate over each object in list
  - Create new object
  - Iterate over each key
  - Check if all key value are truthy in current object ** helper function - isTruthy
    - If true
      - Populate new object
      - Append new object to 
- return output array
  
ALGO

1 Create empty array
  - Set result var to []
- Return empty array if second input array is empty
2 Iterate over each obj in list - forEach
  3 Create new object
    - set newObj var to {}
    - set allTruthy = true
    4 Iterate over each key - forEach or for loop?
    - set fullName = obj.firstName + obj.lastName
    5 Check if all key values are truthy in current object ** helper function - isTruthy
      - pass key and val to is isTruthy
        - if isTruthy returns true
          - add key value pair to newObj
        - if - isTruthy is false
          - allTruthy = false
          - break

    - If allTruthy
      - Append new object to result array
- return output array

- isTruthy(key, val) // none
  if key is githubAdmin
    - if /\bno?\b/i.test(val) return false
    - if /\by(es)?\b/img.test(val) return true
    - else false
  else
  - return !!val

  - return false if val is:
    - no/No/NO/nO/n/N
      - 
    - false
    - 0
    - ''
    - undefined
    - NaN
    - null
  - return true if 
    - y/Y/Yes/YES/YeS/YEs/yES
      - 
  - else return true



*/




// TEST CASES - PROVIDED ************************************

let keys = ['country', 'githubAdmin'];
let list = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: '', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'yes' }
];

// [
//  {fullName: 'Harry K.', country: 'Brazil', githubAdmin: 'yes' },
//  {fullName: 'Jing X.', country: 'China', githubAdmin: 'yes'},  
// ]



// TEST CASES - ADDITIONAL **************************************

// // empty keys
// keys = []
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
// ];

// // []

// // 1 key - truthy value
// keys = ['country']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
// ];

// // [
// //  {fullName: 'Harry K.', country: 'Brazil' },
// // ]

// // // 1 key - truthy value - UPPERCASE
// keys = ['COUNTRY']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yEs' },
// ];

// // []

// // // 2 keys - truthy value - y
// keys = ['country', 'githubAdmin']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'y' },
// ];

// // [
// //  {fullName: 'Harry K.', country: 'Brazil', githubAdmin: 'yes' },
// // ]

// // // 3 keys  - truthy values - YES
// // keys = ['country', 'githubAdmin', 'age']
// // list = [
// //   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'YES' },
// // ];

// // // [
// // //  {fullName: 'Harry K.', country: 'Brazil', githubAdmin: 'yes', age: 22 },
// // // ]


// // // 2 keys - 1 truthy value - 1 falsy value - false
// keys = ['country', 'githubAdmin']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: false },
// ];

// // // []


// // // 2 keys - 1 truthy value - 1 falsy value - false
// keys = ['country', 'githubAdmin']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: '' },
// ];

// // // []


// // // 2 keys - 1 truthy value - 1 falsy value - nO
// keys = ['country', 'githubAdmin']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'nO' },
// ];

// // // []

// // // 2 keys - 1 truthy value - 1 falsy value - N
// keys = ['country', 'githubAdmin']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'N' },
// ];

// // // []

// // // 2 keys - 1 truthy value - 1 falsy value - githubAdmin 'none'
// keys = ['country', 'githubAdmin']
// list = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'none' },
// ];

// // []

// CODE **************************************

function findAdmin(list, keys) {
  let results = [];
  if (keys.length === 0) return results;

  list.forEach(adminObj => {
    let newObj = {};
    let allTruthy = true;
    
    for (let i = 0; i < keys.length; i += 1) {
      newObj.fullName = `${adminObj.firstName} ${adminObj.lastName}`;
      let key = keys[i];
      let val = adminObj[keys[i]];

      if (isTruthy(key, val)) {
        newObj[key] = val;
      } else {
        allTruthy = false;
      }
    }

    if (allTruthy) {
      results.push(newObj)
    }
  })
  console.log(results)
}



function isTruthy(key, val) {
  if (key === 'githubAdmin') {
    if (/\bno?\b/i.test(val)) return false;
    if (/\by(es)?\b/i.test(val)) return true;
    return false;
  } else {
    return !!val;
  }
}

console.log(findAdmin(list, keys));
// console.log(isTruthy('age', null))
// console.log(isTruthy('githubAdmin', 'yeS'))