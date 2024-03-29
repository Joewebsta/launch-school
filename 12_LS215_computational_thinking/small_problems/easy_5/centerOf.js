function centerOf(string) {
  if (string.length % 2 === 1) {
    return string[Math.floor(string.length / 2)];
  } else {
    return string.substring((string.length / 2 - 1), string.length / 2 + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"