let randomWord = (() => {
  var words = ['apple', 'banana', 'orange', 'pear'];

  return function() {
    var word = words[Math.floor(Math.random() * words.length)];
    words.splice(words.indexOf(word), 1);
    return word;
  }
})();

console.log(randomWord());
console.log(randomWord());
console.log(randomWord());
console.log(randomWord());
console.log(randomWord());