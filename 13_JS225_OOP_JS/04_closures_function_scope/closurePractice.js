// // Exercise 1
// function makeMultipleLister(num) {
//   return function() {
//     for (let i = num; i < 100; i += num) {
//       console.log(i);
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();
// // 13
// // 26
// // 39
// // 52
// // 65
// // 78
// // 91


// Exercise 2
// function calculate() {
//   let total = 0;

//   function add(num) {
//     total += num;
//     return total;
//   }
  
//   function subtract(num) {
//     total -= num;
//     return total;
//   }

//   return [add, subtract];
// }

// let [add, subtract] = calculate();

// console.log(add(1));
// // 1
// console.log(add(42));
// // 43
// console.log(subtract(39));
// // 4
// console.log(add(6));
// // 10
