/*

Create a function that finds each number in the given array that is greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.

Examples
leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.

leader([1, 2, 3, 4, 5]) ➞ [5]
// 5 is technically greater than the (zero) remaining items.

leader([8, 7, 1, 2, 10, 3, 5]) ➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.


Notes
Add elements in the new array in the same order they occur in the input array.

INPUT
- array
  - contains integers
  - may be positive, negative, 0, fractional, Infinity
  - what about NaN?


OUTPUT
- array
  - contains numbers from input array that are greater than every number that comes after it.


RULES
- Add elements in the new array in the same order they occur in the input array.


QUESTIONS
- am i modifity the input array or am I returning a new aray?
- do i need to account for sparse arrays or non-index properties?
- do i need to account for invalid input values?

DATA STRUCTURE/ALGO

leader([2, 3, 20, 15, 8, 3]) 
2 ---  3, 20, 15, 8, 3 - max val 20 ----> 2 > 20 - false
20 ---  15, 8, 3 - max val 15 ----> 20 > 15 - true


- leader(arr)
  - create empty array to store leader values
  - Iterate over num in arr - track index - forEach
    - if index is equal to array length - 1
      - push elem to leader values array
    - else 
      - create a slice of elements starting at index + 1 to end of array
      - determine max value of array slice
      - if current num is greater than max value, push num to leader values array
      - 


*/

function leader(arr) {
  let leaderVals = [];

  arr.forEach((num, index) => {
    if (index == arr.length - 1) {
      leaderVals.push(num);
    } else {
      let elemsToRight = arr.slice(index + 1);
      let max = Math.max(...elemsToRight)

      if (num > max) leaderVals.push(num);
    }
  });

  return leaderVals;
}

// TEST CASES - PROVIDED ------------------------------------------------

// console.log(leader([2, 3, 20, 15, 8, 3]) )
// ➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

// console.log(leader([2, 3, 20, 15, 8, 25, 3]) )
// // ➞ [25, 3]
// // Note that 20 cannot be added because it is not greater than 25.

// console.log(leader([1, 2, 3, 4, 5]) )
// // ➞ [5]
// // 5 is technically greater than the (zero) remaining items.

// console.log(leader([8, 7, 1, 2, 10, 3, 5]) )
// // ➞[10, 5]
// // 10 is greater than all items to the right of it, so include.
// // 3 is not greater than all items to the right of it, so exclude.
// // 5 is greater than the remaining items, so include.


//   // - contains integers
//   // - may be positive, negative, 0, fractional, Infinity
//   // - what about NaN?

// // TEST CASES - ADDITONAL ------------------------------------------------
  
// console.log(leader([]) )
// // ➞ []

// console.log(leader([50]) )
// // ➞ [50]

// console.log(leader([50, 3]) )
// // ➞ [50, 3]

// console.log(leader([50, 3, 20, 15, 8, 3]) )
// // ➞ [50, 20, 15, 8, 3]

// console.log(leader([3, 20, 15, 8, 3, 50]) )
// // ➞ [50]

// console.log(leader([3, 20, 15, 8, -10, -20]) )
// // ➞ [20, 15, 8, -10, -20]

// console.log(leader([3, 20.5, 15, 8, -10, -20]) )
// // ➞ [20.5, 15, 8, -10, -20]

// console.log(leader([3, 20.5, 15, 8, -Infinity, -10]) )
// // ➞ [20.5, 15, 8, -10]

// console.log(leader([3, 20.5, 15, 8, -Infinity]) )
// // ➞ [20.5, 15, 8, -10]

// console.log(leader([Infinity, 20, 15, 8, 3, 50]) )
// // ➞ [Infinity, 50]

// console.log(leader([3, 3, 3, 3, 3, 3]) )
// // ➞ [3]
