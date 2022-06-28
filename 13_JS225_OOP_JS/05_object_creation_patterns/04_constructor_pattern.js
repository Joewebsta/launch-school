// Problem 1
// Constructor functions are start with a capital letter

// // Problem 2
// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // TypeError

// Problem 3
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper();