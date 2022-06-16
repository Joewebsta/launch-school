// Exercise 1
/*
Yes, JS is a garbage-collected language. JS will allocate memory for objects and then reclaim memory when the objects are no longer accessible (i.e. a program no longer maintains references to the object.)
*/

// // Exercise 2
// let myNum = 1;

// function foo() {
//   let myArr = ['this is an array'];
//   // what is eligible for GC here?
//   // Nothing
// }

// foo();

// // what is eligible for GC here?
// // ['this is an array'] is eligible for GC after the function foo returns.
// // 1 is not eligible for GC until the program finishes running.

// // more code

// // Exercise 3
// function makeGreeting() {
//   let foo = { greeting: 'hello' };
//   return function(name) {
//     foo.name = name;
//     return foo;
//   };
// }

// let greeting = makeGreeting();

// // is the object eligible for GC here?
// /*
// No, the closure returned by the function makeGreeting and assigned to the global variable greeting contains its own variable foo that references the variable foo on line 2. As a result, foo is still available to the code is not eligible for garbage collection.
// */
// // more code

// Exercise 4
let bash = {};
// the object referenced by bash will not be eligible for garbage collection until the program finishes running.
