/*

Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".



INPUT
- 3 arrays
  - any one array may have 0 elems
  - any one array may have 1 elem
  - any one array may have many elems
- data types
  - input arrays may contain any data type
    - number
    - string
    - boolean
    - undefined
    - null
    - object
    - array

OUTPUT
- new 2d array


RULES
- all passed input arrays are combined into nested arrays
- combined based on indexes: 
  - the first nested array contain items on index 0, 
  - the second array on index 1
  - and so on
- If any array contains fewer items than necessary, supplement the missing item with "*".

False values
- 0
- false
- ''
- NaN
- undefined
- null

DATA STRUCTURE/ALGO
- combineArrays(arr1, arr2, arr3)
  - Set resultArr var equal to empty array 
  - Identify array with the longest length - maxLength
  - Create a for loop - start at i = 0 - stop when i < maxLength
    - set subArr to empty array
    - On each iteration
      - check if i >= arr(1,2,3).length and arr[i] === undefined
        - push '*'to subArr
      - else
        - push elem at index i to sub arr
    - push subArr to resultArr
  - return resultArr

*/

function combineArrays(arr1, arr2, arr3) {
  let resultArr = [];
  let maxLength = Math.max(arr1.length, arr2.length, arr3.length);

  for (let i = 0; i < maxLength; i += 1) {
    let subArr = [];

    if (i >= arr1.length && arr1[i] === undefined) {
      subArr.push('*');
    } else {
      subArr.push(arr1[i])
    }

    if (i >= arr2.length && arr2[i] === undefined) {
      subArr.push('*');
    } else {
      subArr.push(arr2[i])
    }

    if (i >= arr3.length && arr3[i] === undefined) {
      subArr.push('*');
    } else {
      subArr.push(arr3[i])
    }

    resultArr.push(subArr);
  }

  return resultArr;
}


// TEST CASES - PROVIDED ----------------------------------
// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) 
// ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) 
// // ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) 
// // ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

// // TEST CASES - ADDITIONAL ----------------------------------

// combineArrays([], [], []) 
// // ➞ []

// combineArrays([0, "false"], ["true", true, "bool"], ["null", "undefined"]) 
// // ➞ [[0, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays(['', "false"], ["true", true, "bool"], ["null", "undefined"]) 
// // ➞ [['', "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([undefined, "false"], ["true", true, "bool"], ["null", "undefined"]) 
// // ➞ [[undefined, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([null, "false"], ["true", true, "bool"], ["null", "undefined"]) 
// // ➞ [[null, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([[], "false"], ["true", true, "bool"], ["null", "undefined"]) 
// // // ➞ [[[], "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([{}, "false"], ["true", true, "bool"], ["null", "undefined"]) 
// ➞ [[[], "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]