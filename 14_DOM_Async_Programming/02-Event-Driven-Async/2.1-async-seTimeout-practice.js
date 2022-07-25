// Problem 1
(() => {
  function delayLog() {
    for (let i = 1; i <= 10; i += 1) {
      setTimeout(() => {
        console.log(i)
      }, (i * 1000))
    }
  }

  delayLog();
})

// Problem 2
(() => {
  setTimeout(() => {      // 1
    console.log('Once');  // 5
  }, 1000);
  
  setTimeout(() => {      // 2
    console.log('upon');  // 7
  }, 3000);
  
  setTimeout(() => {      // 3
    console.log('a');     // 6
  }, 2000);
  
  setTimeout(() => {      // 4
    console.log('time');  // 8
  }, 4000);
});

// Problem 3

(() => {
  setTimeout(() => {
    setTimeout(() => {
      q();
    }, 15);
  
    d();
  
    setTimeout(() => {
      n();
    }, 5);
  
    z();
  }, 10);
  
  setTimeout(() => {
    s();
  }, 20);
  
  setTimeout(() => {
    f();
  });
  
  g();
})

/*
g - immediate
f - almost immediate
d - 10
z - 10
n - 15
s - 20
q - 25
*/

// Problem 4

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}