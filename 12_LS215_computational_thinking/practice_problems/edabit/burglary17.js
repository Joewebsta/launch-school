
/*
// The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.

Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.

If you won more rounds than your spouse, return "ME!"
If your spouse won more rounds, return "SPOUSE!"
If you are tied, return "NOBODY!"

Examples

determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}) ➞ "NOBODY!"


determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
}) ➞ "SPOUSE!"


INPUT
- object - obj
  - contains 3 key value pairs
    - keys round name
    - values points for me and spouse
      - values will always be positive integers
  - keys may be the same words but may have different cases

OUTPUT
- String
  - The person who the most rounds
  - If you won more rounds than your spouse, return "ME!"
  - If your spouse won more rounds, return "SPOUSE!"
  - If you are tied, return "NOBODY!"

RULES
- Winner of a round
  - whoever scored the most points in that round.
  - Draws are possible
    - rounds
    - final result.

ALGO/DATA STRUCTURE

- keep track of me round wins
  - set meWins to zero
- keep track of spouse round wins
  - set spouseWins to zero
- Access data for each round
  - iterate over each key value pair in obj
    - save round object to roundData
    - set me points to me var
    - set spouse points to spouse vaar
    - determine winner of each round
      - check who has more points
      - increment meWins or spouseWins by 1
- determine person with most round wins
  - return winner


  round1: {
    me: 10,
    spouse: 0,
  },

  obj[round1]
  roundData = {
    me: 10,
    spouse: 0,
  }

  roundData.me
  roundData.spouse

  
*/

function determineWinnerOfFight(obj) {
  let meWins = 0;
  let spouseWins = 0;

  for (let key in obj) {
    let { me, spouse } = obj[key];

    if (me > spouse) meWins += 1;
    if (me < spouse) spouseWins += 1;
  }

  if (meWins > spouseWins) return "ME!";
  if (meWins < spouseWins) return "SPOUSE!";
  return "NOBODY!";
}


// TEST CASES - PROVIDED ---------------------------------------------

console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 0,
  },
  round2: {
    me: 5,
    spouse: 0,
  },
  round3: {
    me: 10,
    spouse: 0,
  },
})) 
// ➞ "ME!"


console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
})) 
// ➞ "SPOUSE!"


// // TEST CASES - ADDITIONAL ---------------------------------------------
console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
})) 
// // ➞ "NOBODY!"