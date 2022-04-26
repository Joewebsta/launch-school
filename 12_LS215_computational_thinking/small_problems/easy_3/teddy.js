function randomAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function printTeddyAge() {
  console.log(`Teddy is ${randomAge(20, 200)} years old!`)
}

printTeddyAge();