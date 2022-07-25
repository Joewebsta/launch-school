let counterId;

function startCounting() {
  let num = 0;
  counterId = setInterval(() => {
    console.log(num);
    num += 1;
  }, 1000)
}

function stopCounting() {
  clearInterval(counterId);
}

const id = startCounting();