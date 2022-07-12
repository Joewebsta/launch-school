// // const invoices = {
// //   unpaid: [],
// //   paid: [],

// //   add(name, amount) {
// //     this.unpaid.push({
// //       name,
// //       amount,
// //     })
// //   },

// //   payInvoice(clientName) {
// //     const paid = this.unpaid.filter(({name}) => name === clientName);
// //     const unpaid = this.unpaid.filter(({name}) => name !== clientName);
// //     this.paid = this.paid.concat(paid);
// //     this.unpaid = unpaid;
// //   },

// //   totalPaid() {
// //     return this.paid.reduce((sum, { amount }) => sum + amount, 0);
// //   },

// //   totalDue() {
// //     return this.unpaid.reduce((sum, { amount }) => sum + amount, 0);
// //   }
// // };

// const invoices = (() => {
//   let unpaid = [];
//   let paid = [];
  
//   return {
//     add(name, amount) {
//       unpaid.push({
//         name,
//         amount,
//       })
//     },
  
//     payInvoice(clientName) {
//       const paidInvoices = unpaid.filter(({name}) => name === clientName);
//       const unpaidInvoices = unpaid.filter(({name}) => name !== clientName);
//       paid = paid.concat(paidInvoices);
//       unpaid = unpaidInvoices;
//     },
  
//     totalPaid() {
//       return paid.reduce((sum, { amount }) => sum + amount, 0);
//     },
  
//     totalDue() {
//       return unpaid.reduce((sum, { amount }) => sum + amount, 0);
//     }
//   };
// })();


// invoices

// console.log(invoices.paid);
// console.log(invoices.unpaid);

// invoices.add('Due North Development', 250);
// invoices.add('Moonbeam Interactive', 187.50);
// invoices.add('Slough Digital', 300);

// console.log(invoices.totalDue());
// invoices.payInvoice('Due North Development');
// invoices.payInvoice('Slough Digital');

// console.log(invoices.totalPaid());
// console.log(invoices.totalDue());

// invoices;


// let animal = {
//   name: 'Pumbaa',
//   species: 'Phacochoerus africanus',
// };

// let menagerie = {
//   warthog: animal,
// };

// animal = {
//   name: 'Timon',
//   species: 'Suricata suricatta',
// };

// menagerie.meerkat = animal;

// console.log(menagerie.warthog);
// console.log(menagerie.meerkat);

// animal

// menagerie.warthog === animal; // false
// menagerie.meerkat === animal; // true


// function makeCar(accelRate, brakeRate) {
//   return {
//     speed: 0,
//     accelRate,
//     brakeRate,
//     accelerate() {
//       this.speed += this.accelRate;
//     },
//     brake() {
//       this.speed -= this.brakeRate;
//       if (this.speed < 0) {
//         this.speed = 0;
//       }
//     },
//   };
// }

// const MakeCar2 = (() => {
//   let speed = 0;
//   let accelRate;
//   let brakeRate;

//   return function(aRate, bRate) {
//     accelRate = aRate;
//     brakeRate = bRate;

//     this.speed = function() {
//       return speed;
//     }

//     this.accelerate = function() {
//       speed += accelRate;
//     };
    
//     this.brake = function() {
//       speed -= brakeRate;
//       if (speed < 0) {
//         speed = 0;
//       }
//     };
//   }
// })();

// MakeCar2

// function MakeCar(accelRate, brakeRate) {
//   this.speed = 0;
//   this.accelRate = accelRate;
//   this.brakeRate = brakeRate;
// };

// MakeCar.prototype.accelerate = function() {
//   this.speed += this.accelRate;
// };

// MakeCar.prototype.brake = function() {
//   this.speed -= this.brakeRate;
//   if (this.speed < 0) {
//     this.speed = 0;
//   }
// };

// class MakeCar {
//   constructor(accelRate, brakeRate) {
//     this.speed = 0;
//     this.accelRate = accelRate;
//     this.brakeRate = brakeRate;
//   }
  
//   accelerate() {
//     this.speed += this.accelRate;
//   };
  
//   brake() {
//     this.speed -= this.brakeRate;
//     if (this.speed < 0) {
//       this.speed = 0;
//     }
//   };
// };
  

// const Car = (() => {
//   let accelRate;
//   let brakeRate;
//   let speed = 0;

//   return {
//     init(aRate, bRate) {
//       accelRate = aRate;
//       brakeRate = bRate;
//     },
  
//     speed() {
//       return speed;
//     },

//     accelerate() {
//       speed += accelRate;
//     },
  
//     brake() {
//       speed -= brakeRate;
//       if (speed < 0) {
//         speed = 0;
//       }
//     },
//   };
// })();




// let sedan = Object.create(Car)
// sedan.init(8,6);
// sedan.accelerate();
// console.log(sedan.speed()); 
// // 8
// sedan.brake();
// console.log(sedan.speed()); 
// // 2
// sedan.brake();
// console.log(sedan.speed()); 
// // 0

// let coupe = Object.create(Car)
// coupe.init(10,2);
// sedan.accelerate();
// console.log(coupe.speed()); 
// // 8
// coupe.brake();
// console.log(coupe.speed()); 
// // 2
// coupe.brake();
// console.log(coupe.speed()); 


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


// console.log(bar.add.call(foo))

// let fruitsObj = {
//   list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
//   title: 'A Collection of Fruit',
// };

// function outputList(...args) {
//   console.log(this.title + ':');

//   args  

//   args.forEach(function(elem) {
//     console.log(elem);
//   });
// }

// // invoke outputList here

// outputList.call(fruitsObj, ...fruitsObj.list)


// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod.call(myObject));


// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function(number) {
//     return number % 2 === 0;
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven));; // [2, 4]
// // console.log(numbers.filter(); // [2, 4]

// function execute(func, operand) {
//   return func(operand);
// }

// let t1 = execute(function(number) {
//   return number * 2;
// }, 10); // 20

// t1

// let t2 = execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy'); // "HEY THERE BUDDY"

// t2


// let timesTwo = function(numbers) {
//   return numbers.map(function(number) { return number * 2});
// }


function makeListTransformer(func) {
  return function(numbers) {
    return numbers.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]