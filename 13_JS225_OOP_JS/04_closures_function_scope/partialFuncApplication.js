// // Problem 1

// function greet(greeting, name) {
//   let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
//   console.log(`${capitalized}, ${name}!`);
// }

// greet('howdy', 'Joe');
// // Howdy, Joe!
// greet('good morning', 'Sue');
// // Good morning, Sue!


// // Problem 2
// // Create a function where greeting is private, but name can be whatever.
// // Private data for an object vs private data for a function?

// function greet(greeting, name) {
//   let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
//   console.log(`${capitalized}, ${name}!`);
// }

function makeGreeting(greeting) {
  return function(name) {
    return greet(greeting, name);
  }
}

// let sayHello = makeGreeting('hello');
// // let sayHi = null;

// sayHello('Brandon');
// // Hello, Brandon!
// // sayHi('Sarah');
// // Hi, Sarah!

// Problem 2
// Create a function where greeting is private, but name can be whatever.
// Private data for an object vs private data for a function?

function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(`${capitalized}, ${name}!`);
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');


sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!