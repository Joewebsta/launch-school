function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  const totalSeconds = callbacks.length * 2; // secondsEnd
  let currentSecond = 0; // secondsElapsed
  
  let secondsInterval = setInterval(() => {
    currentSecond += 1;
    console.log(currentSecond);

    if (currentSecond === totalSeconds) {
      clearInterval(secondsInterval);
    }
  }, 1000);

  callbacks.forEach(callback => {
    const executeTime = Math.floor(Math.random() * totalSeconds * 1000);

    setTimeout(callback, executeTime);
  });
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6