// Problem 1
// function getDefiningObject(object, propKey) {
//   let proto = Object.getPrototypeOf(object);

//   while (proto && !proto.hasOwnProperty(propKey)) {
//     proto = Object.getPrototypeOf(proto);
//   }

//   return proto;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c'));     // => true
// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null


// Problem 2

// function shallowCopy(object) {
//   let result = Object.create(Object.getPrototypeOf(object));
//   let prop;

//   for (prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       result[prop] = object[prop];
//     }
//   }

//   return result;
// }

// function shallowCopy(object) {
//   let copy = Object.create(Object.getPrototypeOf(object));
  
//   let a = Object.getOwnPropertyNames(object).forEach(prop => {
//     copy[prop] = object[prop];
//   })
  
//   return copy
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;

// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// console.log(baz.say());                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false

// Problem 3
function extend(destination) {
  const objects = [...arguments].slice(1);

  objects.forEach(obj => {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        destination[key] = obj[key];
      }
    }
  });
  
  return destination
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe