/*
// Exercise 1
With strict mode not enabled, what object serves as the implicit execution context? 
  - The window object serves as the implicit execution context.

What happens when strict mode is enabled?
  - The global object is not used as the implicit execution context. Instead `undefined` is the implicit context.


// Exercise 2
a = 10;

console.log(window.a === a);
// true


// Exercise 3
"use strict"

a = 10;

console.log(window.a === a);
// Reference error


// Exercise 4
function func() {
  let b = 1;
}

func();

console.log(b);
// reference error



// Exercise 5
function func() {
  b = 1;
}

func();

console.log(b);
// 1



// Exercise 6
"use strict"

function func() {
  b = 1;
}

func();

console.log(b);
Reference error
*/