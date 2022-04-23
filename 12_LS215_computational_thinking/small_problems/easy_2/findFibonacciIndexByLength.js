'use strict'

/*
Input:
- Integer
- Represents the total number of digits (length) of a Fibonacci number

Output
- Integer
- Represents the the index of the first Fibonacci number 
  that has the number of digits specified by the argument.


Rules/Requirements
- The first Fibonacci number has an index of 1.
- Fib sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...

Data structure / algo
- Array to contain fibonacci numbers
- Array index to determine output value

While loop
- Create fibonacci number
- append fib num to array
- check if fib num length is equal to input val
- if true
  - return index of fib num + 1
- if false
  continue


Create fib num

set index = 0
set fibNums to []

While true
- if index 0: Append 1 to array
- if index 1: Append 1 to array
- index 2+:
  - (Index: 2)
  - prev1 = [index - 1]
  - prev2 =[index - 2]
  - currentNum = prev1 + prev2
  
  - if currentNum length is equal input val
    - return index

  - append currentNum to fibNums
  - increase index by 1

- Function: Determine index of fib number thats length matches input integer

// 1 1 2 3 5 8 13
*/

function findFibonacciIndexByLength(fibNumlength) {
  let fibNums = [];
  let index = 0;
  let prev1, prev2, currentNum;
  
  while (true) {
    if (index <= 1) {
      currentNum = 1;
      fibNums.push(currentNum);
    } 
    
    if (index >= 2){
      prev1 = fibNums[index - 1];
      prev2 = fibNums[index - 2];
      currentNum = prev1 + prev2;
      fibNums.push(currentNum);
    }


    if (String(currentNum).length === fibNumlength) {
      break;
    }
    // console.log(currentNum);
    // console.log(String(currentNum).length);

    index += 1;
  }

  return index + 1;
}

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);pwd
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// console.log(findFibonacciIndexByLength(1));    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(2));    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10));
// console.log(findFibonacciIndexByLength(16));
// console.log(findFibonacciIndexByLength(100));
// console.log(findFibonacciIndexByLength(1000));
// console.log(findFibonacciIndexByLength(10000));

// The last example may take a minute or so to run.