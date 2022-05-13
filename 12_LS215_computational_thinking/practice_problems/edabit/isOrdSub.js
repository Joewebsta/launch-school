/*
Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.

Examples:

[4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same 
- [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].
Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

Examples
isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) ➞ true

current - 4 -> 1
next    - 3 -> 2
nextIdx > currentIdx then continue


isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) ➞ true

isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) ➞ false

isOrdSub([1, 2, 3], [1, 3, 2, 1, 2, 3]) ➞ true

Notes
Be careful of examples like the fourth example, where the elements of smarr appear multiple times in bigarr.


INPUT
- 2 arrays
  - bigArr
  - smArr

OUTPUT
- true/false

RULES
- return true if elements of smArr can be found in bigArr, and in the same order.


DATA STRUCTURE/ALGO

current - 4 -> 1
next    - 3 -> 2
nextIdx > currentIdx then continue

- isOrdSub(smArr, bigArr)
- return false if smARr or bigArr are empty
- if smArr and bigArr have 1 element
  - includes?
  - if the elements have the same value return true, otherwise false
- if smArr has length of 1 and smArr elem is not in bigArr 
  - return false otherwise true

  - iterate over each elem in smArr - for
  - start at i = 0. Continue while i < smArr.length - 1
  - set currentIdx to index of current element in bigArr
  - set nextIdx to index of next elem in bigArr
  - if nextIdx < current idx return false
- return true;


*/

function isOrdSub(smarr, bigarr) {
  if (smarr.length === 0 || bigarr.length === 0) return false;
  if (smarr.length === 1 || bigarr.length === 1) return bigarr.includes(smarr[0]);
  let indexFrom = 0;

  for (let i = 0; i < smarr.length - 1; i += 1) {
    let currentIdx = bigarr.indexOf(smarr[i], indexFrom);
    let nextIdx = bigarr.indexOf(smarr[i + 1], currentIdx + 1);
    
    indexFrom = currentIdx + 1;

    if (nextIdx < currentIdx) return false;
  }

  return true;
}


console.log(isOrdSub([0, 1, 0, 1], [1, 1, 1, 1, 0, 0, 0, 1, 1, 0]), false)
console.log(isOrdSub([0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0]), false)
console.log(isOrdSub([1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1]), false)



// TEST CASES - PROVIDED------------------------

// console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) )
// // // ➞ true

// console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) )
// // // ➞ false

// console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]) )
// // ➞ true

// // TEST CASES - ADDITONAL------------------------

// console.log(isOrdSub([], [1, 3, 2, 1, 2, 3]) )
// // ➞ false

// console.log(isOrdSub([4, 3, 2], []) )
// // ➞ false

// console.log(isOrdSub([4], [1]) )
// // ➞ false

// // element in first array not present in second array!!
// console.log(isOrdSub([4], [1, 2, 3]) )
// // ➞ false

// // 1 element in each array - values identical!
// console.log(isOrdSub([4], [4]) )
// // ➞ true

// console.log(isOrdSub([4, 1], [4, 1]) )
// // ➞ true

// console.log(isOrdSub([-1, 3, 2], [5, -1, 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub([null, 3, 2], [5, null, 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub(["null", 3, 2], [5, "null", 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub([NaN, 3, 2], [5, NaN, 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub([true, 3, 2], [5, true, 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub([Infinity, 3, 2], [5, Infinity, 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub([undefined, 3, 2], [5, undefined, 3, 2, 1]) )
// // ➞ true

// console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) )
// // ➞ true



// /*
// Emptiness
// Duplication
// Repetition
// */