/*
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]

Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]


Examples

countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]) 
// [3, 7, 3], [1, 5, 1], [2, -2, 2]
// ➞ 3

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) 
// ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) 
// ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) 
// ➞ 0

countBoomerangs([5, 5, 5]) 
// ➞ 0

Notes
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.


INPUT
  - an array
    - contains intergers
      - positive
      - negative
      - 0
    - What about other values?
      - NaN
      - Infinity
      - null


OUTPUT
  - integer - represents total number of boomerangs in array

RULES
- boomerang
  - sub-array of length 3, 
    - first and last digits being the same
    - the middle digit being different.
  - triple identical digits is NOT a boomerang
  - boomerangs can overlap

DATA STRUCTURE/ALGO

countBoomerangs(arr)
  - set boomerangCount = 0
  - Iterate over each val in arr
    - start at index 0 and continue until index is 3 less than array length
      - create a sub array that contains 3 elems
        - slice from index i to index i + 3
        - check if 3 elem slice is a boomerang (isBoomerang helper)
          - if true, increment boomerang count by 1
  - return boomerangCount length

- isBoomerang([elem1, elem2, elem3])
  - if String elem1 === String elem2 AND String elem2 !== String elem3
    - return true
    - otherwise false

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) 

  - 5, 6, 6 -> f
  - 6, 6, 7 -> f
  - 6, 7, 6 -> t
  - 7, 6, 3 -> f
  - 6, 3, 9 -> f

*/

function countBoomerangs(arr) {
  let boomerangCount = 0;

  for (let i = 0; i <= arr.length - 3; i += 1) {
    let subArr = arr.slice(i, i + 3);

    if (isBoomerang(subArr)) boomerangCount += 1;
  }

  return boomerangCount;
}

function isBoomerang([el1, el2, el3]) {
  return String(el1) === String(el3) && String(el1) !== String(el2);
}
// TEST CASES - PROVIDED ****************************

countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]) 
// [3, 7, 3], [1, 5, 1], [2, -2, 2]
// ➞ 3

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) 
// // ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) 
// // ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) 
// // ➞ 0

countBoomerangs([5, 5, 5]) 
// // ➞ 0


// // TEST CASES - ADDITIONAL ****************************
countBoomerangs([]) 
// // ➞ 0

countBoomerangs([-2, 5, -2]) 
// // ➞ 1

countBoomerangs([0, 5, 0]) 
// // ➞ 1

countBoomerangs([NaN, 5, NaN]) 
// // ➞ 1

countBoomerangs([Infinity, 5, Infinity]) 
// // ➞ 1

countBoomerangs([null, 5, null]) 
// // ➞ 1

countBoomerangs(['hello', 5, 'hello']) 
// // ➞ 1