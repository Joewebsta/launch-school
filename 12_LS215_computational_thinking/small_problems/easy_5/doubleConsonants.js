function doubleConsonants(string) {
  return [...string].reduce((result, char) => {
    // if ((/[a,e,i,o,u\d\s]]/i).test(char)) {
    if ((/[b-df-hj-np-tv-z]/i).test(char)) {
      result += char.repeat(2);
    } else {
      result += char;
    }
    return result;
  }, '');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""