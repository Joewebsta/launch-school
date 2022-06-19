// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// franchise.allMovies

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

/*
The code above will not return the desired object because the callback function
passed as an argument to the map method on line 4 loses the surrounding context. 
As a result the `this` keyword resolves to the implicit global object (window) 
instead of the containing object (franchise).
*/

// Solution 1 - thisArg
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }, this);
//   },
// };

// // Solution 2 - bind
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }.bind(this));
//   },
// };


// Solution 3 - self
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     });
//   },
// };

// Solution 4 - Arrow function
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(number => {
      return `${this.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies())

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]