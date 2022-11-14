document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector('#message');
  const letters = document.querySelector('#spaces');
  const guesses = document.querySelector('#guesses');
  const apples = document.querySelector('#apples');
  const replay = document.querySelector('#replay');


  let randomWord = (() => {
    var words = ['apple', 'banana', 'orange', 'pear'];
  
    return function() {
      var word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);
      return word;
    }
  })();

  function Game() {
    this.incorrect = 0;
    this.lettersGuessed = [];
    this.correctSpaces = 0;
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }
    this.word = this.word.split("");
    this.init();
  }
  
  Game.prototype.createBlanks = function() {
    let spaces = (new Array(this.word.length + 1)).join("<span></span>");
    let spans = letters.querySelectorAll("span");

    spans.forEach(span => span.remove());
    letters.insertAdjacentHTML("beforeend", spaces);
    this.spaces = document.querySelectorAll("#spaces span");
    console.log(this);
  }

  Game.prototype.init = function() {
    this.createBlanks();
  }

  Game.prototype.displayMessage = function(text) {
    message.innerText = text;
  }
  
  new Game();
});