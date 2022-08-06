// Problem 1
let myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Launch School');
  }, 2000);
});

myPromise.then((message) => console.log(message));


// Problem 2
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Not Launch School");
  }, 2000);
});

promise.catch(error => console.log(error));


// Problem 3
const promise = new Promise(function (resolve, reject) {
  console.log('I am a promise too')
  resolve("I am a Promise");
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");

// "I am NOT a promise";
// "I am a promise";


// Problem 4
const promise1 = new Promise((resolve, reject) => {
  console.log("foo");
  resolve();
  console.log("bar");
});

promise1.then(() => {
  console.log("baz");
});

console.log("qux");

// foo
// bar
// qux
// baz

// Problem 5
const promise = new Promise((resolve, reject) => {
  console.log("foo");
  reject();
  console.log("bar");
});

promise
  .then(() => {
    console.log("baz");
  })
  .catch(() => {
    console.log("qux");
  });

console.log("abc");

// foo
// bar
// abc
// qux

// Problem 6
const promise = new Promise(res => res(1));
promise
  .then((num) => {
    console.log(num);
    return num + 2;
  })
  .then((num) => {
    console.log(num);
    return num + 3;
  })
  .then((num) => {
    console.log(num);
    return num + 4;
  })
  .finally((num) => {
    console.log(num);
    return num + 5;
  });

  // 1
  // 3
  // 6
  // undefined


// Problem 7
const promise = new Promise((resolve, reject) => {
  resolve("Got it!");
  reject("Oops.");
  resolve("Again!");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Got it!


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

test(3).then((value) => console.log(value));

function test(input) {
  Promise.all([after1s(2), after1s(3)]).then((values) => {
    const [a, b] = values;
    console.log(input * a * b);
  });
}


// Problem 9
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
  return input * (await a) * (await b);
}

test(3).then((value) => console.log(value));


// Problem 10
function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000);
  const b = await after1s(3, 2000);
  return input * a * b;
}

async function test2(input) {
  const a = await after1s(2, 1000);
  const b = await after1s(3, 1000);
  return input * a * b;
}

test1(2).then((value) => console.log(value));
test2(3).then((value) => console.log(value));

// 18 after 2 seconds
// 12 after 4 seconds


// Problem 11

const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

async function test2() {
  console.log(await testPromise());
  console.log("2");
}

test1();
// 2
// 1

test2();
// 1
// 2


// Problem 12
const test = Promise.resolve("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();

// A
// B


// Problem 13
const test = Promise.reject("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();
// E
// B
