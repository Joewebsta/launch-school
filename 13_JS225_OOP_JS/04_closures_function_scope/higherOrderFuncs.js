
// Exercise 3
// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   // ... implement this function
//   return function(num) {
//     return num % 2 === 0;
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven)); // [2, 4]


// // Exercise 4
// function execute(func, operand) {
//   // ... implement this function
//   return func(operand);
// }

// console.log(execute(function(number) {
//   return number * 2;
// }, 10)); // 20 

// console.log(execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy')); // "HEY THERE BUDDY"


// Exercise 5
function makeListTransformer(func) {
  // ... implement this function
  return function(arr) {
    return arr.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]