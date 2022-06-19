// Problem 1
// This is raise an exception. The function expression must be surrounded in parentheses.
// The parentheses will evaluate the function definition as an expression so that 
// it can be immediately invoked.

// // Problem 2
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// Problem 3
// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers)  // ?

// console.log(sum)

// // Problem 4

// let countdown = (function(){
//   return function(start) {
//     for (let i = start; i >= 0; i -= 1) {
//       console.log(i);
//     }
//     console.log('Done!')
//   }
// })();

// // function countdown(start){
// //   (function() {
// //     for (let i = start; i >= 0; i -= 1) {
// //       console.log(i);
// //     }
// //     console.log('Done!')
// //   })();
// // };

// countdown(7);
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // 0
// // Done!

// Problem 5

