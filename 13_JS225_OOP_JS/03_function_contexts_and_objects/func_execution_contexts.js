// // Exercise 1
// function foo() {
//   return this;
// }

// let context = foo();
// console.log(context); // Window


// Exercise 2
// undefined

// Exercise 3
// let obj = {
//   foo() {
//     return this;
//   },
// };

// let context = obj.foo();

// console.log(context); // obj => {foo: f}


// Exercise 4
// function deliverMessage() {
//   console.log(this.message);
// }

// var message; // Becomes property of global object => window.message
// let bar; // TDZ

// message = 'Hello from the global scope!';

// deliverMessage(); // window.message => 'Hello from the global scope!';

// bar = {
//   message: 'Hello from the function scope!',
// };

// bar.deliverMessage = deliverMessage;

// bar.deliverMessage(); // 'Hello from the function scope!'

// Exercise 5A

// var a = 10; // window.a = 10
// let b = 10;
// let c = {
//   a: -10,
//   b: -10,
// };

// function add() {
//   // window.a + b
//   // 10 + 10 = 20

//   // -10 + 10 = 0
//   return this.a + b;
// }

// c.add = add;

// console.log(add()); // 20
// console.log(c.add()); // 0

// Exercise 5B

// let a = 10;
// let b = 10;
// let c = {
//   a: -10,
//   b: -10,
// };

// function add() {
//   return this.a + b;
// }

// c.add = add;

// console.log(add()); // NaN
// console.log(c.add()); // 0

// Exercise 6
// call - comma separated arguments
// apply - array of arguments

// Exercise 7
// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add() {
//      return this.a + this.b;
//    },
// };

// bar.add().call(foo) // 3

// Exercise 8
let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList(...args) {
  console.log(this.title + ':');
  
  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list);
