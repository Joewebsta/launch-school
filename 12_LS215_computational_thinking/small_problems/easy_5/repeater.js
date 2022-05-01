function repeater(string) {
  return [...string].reduce((result, char) => {
    return result + `${char}${char}`;
  }, '');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""