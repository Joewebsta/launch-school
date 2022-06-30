// Problem 1
const shape = {
  getType() {
    return this.type;
  },
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

let t = new Triangle(3, 4, 5);

console.log(Object.getPrototypeOf(t))
console.log(Object.getPrototypeOf(t) === shape)

console.log(t.constructor);    // Triangle(a, b, c)
console.log(t.constructor === Triangle);    
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"

// Problem 2
function User(first, last) {
  let user = Object.create(User.prototype);
  user.name = first + ' ' + last;
  return user;
}

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

// Problem 3
function createObject(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
  
  // let newObj = {};
  // Object.setPrototypeOf(newObj, foo);
  // return newObj;
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true


// Problem 4
let foo = {
  a: 1,
};

foo.begetObject = function() {
  function F() {};
  F.prototype = this;
  return new F();
}

let bar = foo.begetObject();

console.log(foo.isPrototypeOf(bar));         // true

// // Problem 5
// function neww(constructor, args) {
//   let obj = Object.create(constructor.prototype);
//   let result = constructor.apply(obj, args);

//   return typeof result === 'object' ? result : obj;
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// john
// console.log(john.constructor)
// console.log(john.greeting()); // => Hello, John Doe
