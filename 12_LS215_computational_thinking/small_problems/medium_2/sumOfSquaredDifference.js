function sumSquareDifference(num) {
  if (num === 0) return 0;

  let range = calcRange(num);
  let sumOfSquared = calcSumOfSquared(range);
  let sumOfSquares = calcSumOfSquares(range);
  return sumOfSquared - sumOfSquares;
}

function calcRange(max) {
  let range = [];
  
  for (let i = 1; i <= max; i += 1) {
    range.push(i);
  }

  return range;
}

function calcSumOfSquared(range) {
  let sum = range.reduce((sum, num) => sum + num);
  return sum * sum;
}

function calcSumOfSquares(range) {
  let squares = range.map(num => num * num);
  let sum = squares.reduce((sum, num) => sum + num);
  return sum;
}

/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.
-------------------------


INPUT
 - integer

OUTPUT
- integer
  - represtents the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

RULES
- sum of squared of the first n positive integers
  - range 1 -> n
  - add each element
  - square sume
- sum of the squares of the first n positive integers.
  - range 1 -> n
  - square each element
  - sum each square

QUESTIONS


TEST CASES
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(0);      // 0
sumSquareDifference(100);    // 25164150


APPROACH
- create an arary that contains digits 1 to n
- sum of squared [1,2,3] -> 6 -> 6**2 -> 36
- sum of the squares [1,2,3] -> [1,4,9] -> 14
- subtract 36 - 14 = 22

DATA STRUCTURE
- start with num
- range -> array
- array for sums
- ints for subtraction

ALGO
- create function sumSquareDifference(num)
  - set range to array of digits from 1 to num - function range(max)
  - set sumOfSquared = calcSumOfSquared(range)
  - set sumOfSquares = calcSumOfSquares(range)
  - return sumOfSquared - sumOfSquares;

- create range(max) function
  - set range = []
  - create for loop that started at i === 1 and continues until i <= max
    - push i to range
  - return range

- create calcSumOfSquared(range)
  - reduce range to sum
  - return square of sum

[1,2,3] -> [1,4,9] -> 14
- create calcSumOfSquares(range) function
  - map over range elements
    - return square of element
  - reduce array to sum
  - return sum
*/

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(0));      // 0
console.log(sumSquareDifference(100));    // 25164150
