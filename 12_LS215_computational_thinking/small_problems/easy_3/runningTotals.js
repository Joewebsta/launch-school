/* 
INPUT
- array
- contains numbers

OUTPUT
- array

RULES/REQUIREMENTS
- output array contains same number of elements as input array
- each element's value in output array represents the running total of the array
- Running total
  - First element in array remains the same
  - Running total starts with second element
    - Running total is the value at the previous index + the value at the current 

QUESTIONS
- negative numbers?




EXAMPLES/TEST CASES


DATA STRUCTURE/ALGO
- Array

APPROACH
- create function runningTotal(arr)
  - map over the array, keeping track of index and original array
    - on each iteration 
      - set currentElem to elem
      - set prevElem to array[index - 1] || 0
      - return the value of currentElem + the value of the prevElem

*/

// function runningTotal(arr) {
//   let result = [];
  
//   for (let i = 0; i < arr.length; i += 1) {
//     let current = arr[i]
//     let prev = result[i - 1] || 0

//     result.push(current + prev);
//   }

//   return result;
// }

function runningTotal(arr) {
  let currentTotal = 0

  return arr.map(elem => {
    let prev = currentTotal;
    let total = elem + prev;

    currentTotal = total;

    return total;
  })
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []