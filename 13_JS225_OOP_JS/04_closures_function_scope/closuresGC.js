// // Exercise 1
// let a = [1];

// function add(b) {
//   a = a.concat(b); // [1] can be marked for garbage collection after line 4 executes
// }

// function run() {
//   let c = [2];
//   let d = add(c);
// }

// run();
// // [2] can be garbage collected when `run` returns

// // [1, 2] cannot be garbage collected until the program finishes running



// Exercise 2
function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);

// ["Steve", "Edie"] can be marked for garbage collection after the program finishes running.