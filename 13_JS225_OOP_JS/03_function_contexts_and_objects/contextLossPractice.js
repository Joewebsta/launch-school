// // Exercise 1

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);
// // undefined undefined is a undefined.

/* 
- On line 15, the `logReturnVal` is invoked and passed the `turk` object's `getDescription` method as an argument. 
- Within the logReturnVal function, the local variable `func` is initialized with the function passed as an argument.
- `func` is then invoked and returns the incorrect output "undefined undefined is a undefined." which is then assigned to the variable `returnVal`.
- We receive this incorrect output because the `getDescription` method has been removed from its containing object and its execution context is implicitly bound to the global object when it is invoked.
- As a result `this` within the function `func` references `window`.
- Thus when we attempt to access the firstName, lastName and occupation properties, `undefined` is returned.



- At this point 
*/


// // Exercise 2

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// // Exercise 3
// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// let getTurkDescription = turk.getDescription.bind(turk);
// console.log(getTurkDescription())
// console.log(getTurkDescription())

// // Exercise 4/5
// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
  
//   listGames() {
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();


// // Exercise 6
// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     let self = this;

//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();

// // Exercise 7
// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// // Exercise 8
// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a)

// /*
// - The value of `foo.a` will be 0.
// - This occurs because function defined and invoked within a method are implicitly bound to the global object and not the not the context of the enclosing method.
// - As a result, `this` within increment resolves to `window` and the `a` property of window is modified, not the a property of foo.
// */

// // Exercise 9
// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   }
// };

// // call
// // bind - function expression
// // self/that
// // arrow function

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo)

// Exercise 10

let foo = {
  a: 0,
  incrementA() {
    let increment = function() {
      this.a += 3;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};

foo.incrementA();
console.log(foo.a);