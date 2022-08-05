// // Problem 1
// let myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Launch School');
//   }, 2000);
// });

// myPromise.then((message) => console.log(message));


// Problem 2
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error: Not Launch School");
//   }, 2000);
// });

// promise.catch(error => console.log(error));


// // Problem 3
// const promise = new Promise(function (resolve, reject) {
//   console.log('I am a promise too')
//   resolve("I am a Promise");
// });

// promise.then(value => console.log(value));
// console.log("I am NOT a Promise");

// // "I am NOT a promise";
// // "I am a promise";


// // Problem 4
// const promise1 = new Promise((resolve, reject) => {
//   console.log("foo");
//   resolve();
//   console.log("bar");
// });

// promise1.then(() => {
//   console.log("baz");
// });

// console.log("qux");

// // foo
// // bar
// // qux
// // baz

// // Problem 5
// const promise = new Promise((resolve, reject) => {
//   console.log("foo");
//   reject();
//   console.log("bar");
// });

// promise
//   .then(() => {
//     console.log("baz");
//   })
//   .catch(() => {
//     console.log("qux");
//   });

// console.log("abc");

// // foo
// // bar
// // abc
// // qux

// // Problem 6
// const promise = new Promise(res => res(1));
// promise
//   .then((num) => {
//     console.log(num);
//     return num + 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 3;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 4;
//   })
//   .finally((num) => {
//     console.log(num);
//     return num + 5;
//   });

//   // 1
//   // 3
//   // 6
//   // undefined


// // Problem 7
// const promise = new Promise((resolve, reject) => {
//   resolve("Got it!");
//   reject("Oops.");
//   resolve("Again!");
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Got it!


// Problem 8
function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * a * b;
}

// test(3).then((value) => console.log(value));


// let a;

// after1s(2).then(val1 => {
//   a = val1;
// })

// console.log(a);

// makeRequest('Google').then((response) => {
//   console.log('Response received');
//   return processRequest(response);
// }).then((processedResponse) => {
//   console.log(processedResponse);
// }).catch(err => {
//   console.log(err);
// })


// 18
