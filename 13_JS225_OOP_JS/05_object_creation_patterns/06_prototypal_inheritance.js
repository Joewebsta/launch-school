// // Problem 1
// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a); // 1


// // Problem 2
// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a); // 2

// Problem 3

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code
console.log(boo.hasOwnProperty('myProp'))

far.myProp;       // 1