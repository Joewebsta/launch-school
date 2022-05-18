/*
YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

Pressing a button, which is already active, will undo your press.
If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
Create a function that takes an array of button inputs and returns the final state.

Examples
likeOrDislike(["Dislike"]) ➞ "Dislike" Length 1 - return last element

likeOrDislike(["Like", "Like"]) ➞ "Nothing" Last two elements the same -  Nothing

likeOrDislike(["Dislike", "Like"]) ➞ "Like" - Last two element different - last element

likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing" Last two elements the same -  Nothing


Notes
If no button is currently active, return "Nothing".
If the array is empty, return "Nothing".

2 Important questions

- Beware different data types
- Read all the fucking test cases

INPUT  
- array of button inputs
  - contains strings
  - string values are 'Like' or 'Dislike'

OUTPUT
- final state
- String
  - Dislike
  - Like
  - Nothing

RULES
- Dislike -> like restuls in like
- Like -> dislike restuls in dislike
- like -> like results in like
- dislike -> dislike results in dislike

- If length is 1, return element
- If array is empty return nothing


TEST CASES - PROVIDED -----------------------------

likeOrDislike(["Dislike"]) 
// ➞ "Dislike" Length 1 - return last element

likeOrDislike(["Like", "Like"]) 
// ➞ "Nothing" Last two elements the same -  Nothing

likeOrDislike(["Dislike", "Like"]) 
// ➞ "Like" - Last two element different - last element

likeOrDislike(["Like", "Dislike", "Dislike"]) 
// ➞ "Nothing" Last two elements the same -  Nothing


TEST CASES - ADDITIONAL -----------------------------

likeOrDislike([]) 
// ➞ "Nothing" Length 1 - return last element

likeOrDislike(["Like", "Dislike", "Dislike", "Like", "Like", "Dislike"]) 
// ➞ "Dislike"


DATA STRUCTURE / ALGO


- input: ["Like", "Dislike", "Dislike", "Like", "Like", "Dislike"]

- check if input array is empty
  - if true, return 'nothing'

- check if input array length is 1
  - if true, return element at index 0

- set lastButton to last string
- set secondLastButton to second to last string
- check if lastButton and secondLastButton string are equal
  - if true, return 'nothing'
  - if false, return return lastButton


- Output: "Dislike"
*/

function likeOrDislike(buttons) {
  if (buttons.length === 0) return "Nothing";
  if (buttons.length === 1) return buttons[0];

  let lastButton = buttons.at(-1);
  let secondLastButton = buttons.at(-2);

  if (lastButton === secondLastButton) {
    return "Nothing";
  } else {
    return lastButton;
  }
}

// TEST CASES - PROVIDED -----------------------------

// console.log(likeOrDislike(["Dislike"]) )
// // ➞ "Dislike" Length 1 - return last element

// console.log(likeOrDislike(["Like", "Like"]) )
// // ➞ "Nothing" Last two elements the same -  Nothing

// console.log(likeOrDislike(["Dislike", "Like"]) )
// ➞ "Like" - Last two element different - last element

// console.log(likeOrDislike(["Like", "Dislike", "Dislike"]) )
// // ➞ "Nothing" Last two elements the same -  Nothing


// // TEST CASES - ADDITIONAL -----------------------------

// console.log(likeOrDislike([]) )
// // ➞ "Nothing" Length 1 - return last element

// console.log(likeOrDislike(["Like", "Dislike", "Dislike", "Like", "Like", "Dislike"]) )
// // ➞ "Dislike"