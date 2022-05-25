// // Problem 1
// let message = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(message);
// console.log(message);

// // 'Hello from the function scope!'
// // 'Hello from the global scope!';

// // Problem 2
// let myObj = { message: 'Greetings from the global scope!' };

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj);

// console.log(myObj.message);
// // 'Greetings from the function scope!'
// // 'Greetings from the function scope!'

// // Problem 3
// let message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func();
// console.log(message);

// // 'Hello from the function scope!'
// // 'Hello from the function scope!'

// // Problem 4
// let a = 10;
// let obj = {a: a}
// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a, a); // 20, 10
// console.log(obj.a === a); //false

// console.log(newObj.a, obj.a); // 20, 20
// console.log(newObj.a === obj.a); // true


// // Problem 5
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

// menagerie.warthog === animal; // false
// menagerie.meerkat === animal; // true
