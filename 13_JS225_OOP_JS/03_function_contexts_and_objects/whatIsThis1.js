// // Exercise 1
// function whatIsMyContext() {
//   return this;
// }
// // Unknown - We don't know a function's execution context until it is invoked.


// // Exercise 2
// function whatIsMyContext() {
//   return this;
// }

// whatIsMyContext();
// // window - the global object (the global context)


// // Exercise 3
// function foo() {
//   function bar() {
//     function baz() {
//       console.log(this);
//     }

//     baz();
//   }

//   bar();
// }

// foo();

// // this => window - the global object
// // functions are implicitly bound to the global object when they are invoked.


// // Exercise 4
// let obj = {
//   count: 2,
//   method() {
//     return this.count;
//   },
// };

// obj.method();
// // this => obj


// // Exercise 5
// function foo() {
//   console.log(this.a);
// }

// let a = 2;
// foo();
// // this => undefined
// // This code raises an exception and does not log anything to the console


// // Exercise 6
// let a = 1;

// function bar() {
//   console.log(this.a);
// }

// let obj = {
//   a: 2,
//   foo: bar,
// };

// obj.foo();
// // 2

// Exercise 7
let foo = {
  a: 1,
  
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo.bar(); // foo object
let qux = foo.bar; 
qux(); // raise an exception