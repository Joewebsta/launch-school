document.addEventListener('DOMContentLoaded', () => {
  // let answer = calculateAnswer();
  const form = document.querySelector('form');
  const input = document.getElementById('guess');
  const messagePara = document.querySelector('p');
  const link = document.querySelector('a');
  let answer;
  let guesses;
  
  function newGame() {
    answer = calculateAnswer();
    guesses = 0;
    messagePara.textContent = "Guess a number from 1 to 100";
  }

  function calculateAnswer() {
    return Math.floor(Math.random() * 100) + 1;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const guess = parseInt(input.value, 10);
    let message;

    guesses += 1;

    if (guess < answer) {
      message = `My number is higher than ${guess}`;
    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else {
      message = `You guessed it! It took you ${guesses} guesses.`
    }
    
    messagePara.textContent = message;
  });

  link.addEventListener('click', (e) => {
    e.preventDefault();
    newGame();
  });

  newGame();
});


