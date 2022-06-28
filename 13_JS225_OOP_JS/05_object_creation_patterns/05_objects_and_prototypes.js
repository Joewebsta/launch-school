// // Problem 1
// let prot = {};
// let foo = Object.create(prot);
// // foo is assigned to a new Object with 'prot' as its prototype.

// // Problem 2
// console.log(Object.getPrototypeOf(foo) === prot)

// // Problem 3
// console.log(prot.isPrototypeOf(foo))

// Problem 4
let prot = {};
let foo = Object.create(prot);
console.log(Object.prototype.isPrototypeOf(foo)); // true