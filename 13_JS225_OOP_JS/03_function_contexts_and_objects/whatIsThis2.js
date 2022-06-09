// // Exercise 1
// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// myObject.myChildObject.myMethod();
// this => myChildObject
// return => undefined


// // Exercise 2
// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// myObject.myChildObject.myMethod.call(myObject);

// // let myMethod = myObject.myChildObject.myMethod.bind(myObject);
// // myMethod()


// // Exercise 3
// let person = {
//   firstName: 'Peter',
//   lastName: 'Parker',
//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName +
//                 ' is the Amazing Spiderman!');
//   },
// };

// let whoIsSpiderman = person.fullName.bind(person);
// whoIsSpiderman();
// // Peter Parker is the Amazing Spiderman!

// Exercise 4
let computer = {
  price: 30000,
  shipping: 2000,
  
  total() {
    let tax = 3000;
    
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(this);
  }
};

console.log(computer.total());