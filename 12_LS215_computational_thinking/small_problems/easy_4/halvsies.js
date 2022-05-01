function halvsies(...arr) {
  if (!Array.isArray(arr[0])) {
    return split(arr);
  } else {
    return split(arr[0]);
  }
}

function split(arr) {
  if (arr.length % 2 === 0) {
    return [arr.slice(0, (arr.length / 2)), arr.slice(arr.length/2)]
  } else {
    return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))]
  }
}

console.log(halvsies(5));                // ??
console.log(halvsies('hello', 'world', 'tonight'));                // ??

// console.log(split([1, 2, 3, 4, 5]));       // [[1, 2], [3, 4]]

// // // EVEN
// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]

// // // ODD
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]

// // // EMPTY
// console.log(halvsies([]));                 // [[], []]

/*
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.


INPUT
- Array
- element of any data type

OUTPUT
- A new array that contains 2 sub arrays
- First half of the original array elements => first element of the return value
- Second half => second element.

RULES
- Returns
- Original array contains an odd number of elements, 
  - place the middle element in the first half array
- Empty array as input returns an array of 2 empty arrays

QUESTIONS
- Sparse array
- Invalid input - input values other than arrays?
- What do we do with invalid input?



TEST CASES
// EVEN
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]

// ODD
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]

// EMPTY
halvsies([]);                 // [[], []]

// INVALID
halvsies(5);                // ??
halvsies('hello', 'world');                // ??

APPROACH
- Check if input is array
  - if true, continue
  - if false, turn into array
- Split input array into two
- Return array of subarrays


DATA STRUCTURE
- string
- array
- object


ALGO
- create function halvsies(arr)
  - Check if input is array
    - if true, continue
    - if false, turn into array - reassign arr
  - set half1, half2 = Split arr into two - *function
  - Return array of subarrays

- create function splitArr(arr)
  - if arr has even num of elements
      return [arr.slice(0, (arr.length / 2))], arr.slice(arr.length/2)]
  - else
    - return [arr.slice(0, Math.ceil(arr.length / 2))], arr.slice(aMath.ceil(arr.length / 2))]
*/

