/*

Input:
- String
- A word problem

Output
- Integer

Rules
- Sentence has a consistent structure 
- Plus/minus
  - 1) - Begins with: What is
  - 2) Integer 1 (positive or negative)
  - 3) Operation (plus, minus)
  - 4) Integer 2 (positive or negative)
  - 5) ?
- multiplied / divided
  - 1) - Begins with: What is
  - 2) Integer 1 (positive or negative)
  - 3) Operation (divided by, multiplied by)
  - 5) ?

Data structure
- String to array


'What is 5 plus 13?'            // 18
'What is 7 minus 5?'            // 2
'What is 33 divided by -3?'     // -11
'What is -3 multiplied by -25?' // -75


'What is 5 plus 13?'
'5 plus 13'
'[5, plus, 13]' 

'What is 33 divided by -3?'
'33 divided by -3'
[33, divided, -3]

ALGO
- Create new string that only contains important information (start with num and end with num )
- Remove 'by' from string
- Split string into individual components
- Save components to num1, operation, num2
- Pass num1 and num2 as arguments to an appropriate function based on operation.


- If operation === 'divided' invoke (divide(num1, num2))
- If operation === 'multiplied' invoke (multiply(num1, num2))
- If operation === 'plus' invoke (add(num1, num2))
- If operation === 'minus' invoke (subtract(num1, num2))

- Return return value of method invocations above
*/

function mathSentence(sentence) {
  let cleanSentence = sentence.match(/[\d]+.+[\d]+/g)
                              .join('')
                              .replace('by ', '');
  
  let [ num1, operation, num2 ] = cleanSentence.split(' ');

  if (operation === 'plus') return add(num1, num2);
  if (operation === 'minus') return subtract(num1, num2);
  if (operation === 'divided') return divide(num1, num2);
  return multiply(num1, num2);
}

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

console.log(mathSentence('What is 5 plus 13?'));
console.log(mathSentence('What is 7 minus 5?'));
console.log(mathSentence('What is 33 divided by -3?'));
console.log(mathSentence('What is -3 multiplied by -25?'));
