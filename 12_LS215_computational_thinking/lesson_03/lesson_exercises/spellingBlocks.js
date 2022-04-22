/**
 * UNDERTSTAND
 * 
 * Input
 * - String
 * - 
 * 
 * Output
 * - true/false
 * - true - word can be spelled using the set of blocks
 * - false - word cannot be spelled using the set of blocks
 * 
 * Rules
 * - Input string is case insensitive
 * - A collection of spelling blocks 
 * - Two letters per block
 * - You can only use each block once
 * 
 * EXAMPLES
 * 
 * console.log(isBlockWord('BATCH'));      // true
 * console.log(isBlockWord('BUTCH'));      // false
 * console.log(isBlockWord('jest'));       // true
 * 
 * DATA STRUCTURE / ALGO
 * 
 * Block data structure!
 * 
 * Array
 * 
 * Object
 * 
 * Option 1 - Keep track of all letters that have been used
 * Option 2 - Remove blocks from collection
 * 
 * 
 * - Upcase string
 * - Iterate over each character
 *   - Check if current character is available
 *     - Remove block that contains character from collection
 *     - Continue to next character
 *   - Else 
 *    - Return false
 *  - Once iteration is complete, return true
 * 
 * - Check if char is available
 *   - Iterate over each block and keep track of index
 *     - If char is present in individual block array
 *     - splice block array out of blocks array 
 * 
 * 
 * CODE
 * 
 */

//  * - Upcase string
//  * - Iterate over each character
//  *   - Check if current character is available
//  *     - Remove block that contains character from collection
//  *     - Continue to next character
//  *   - Else 
//  *    - Return false
//  *  - Once iteration is complete, return true

function isBlockWord(word) {
  let BLOCKS = [['B','O'], ['X','K'], ['D','Q'], ['C','P'], ['N','A'], ['G','T'], ['R','E'], ['F','S'], ['J','W'], ['H','U'], ['V','I'], ['L','Y'], ['Z','M']];
  let upcaseWord = word.toUpperCase();

  for (let i = 0; i < upcaseWord.length; i += 1) {
    let char = upcaseWord[i];
    if (BLOCKS.flat().includes(char)) {
      removeBlock(BLOCKS, char);
    } else {
      return false;
    }
  }
  
  return true;
}

function removeBlock(blocks, char) {
  blocks.forEach((block, index) => {
    if (block.includes(char)) {
      blocks.splice(index, 1);
    }
  });
}

// * - Check if char is available
// *   - Iterate over each block and keep track of index
// *     - If char is present in individual block array
// *     - splice block array out of blocks array 

// console.log(removeBlock(blocks, 'B'));

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('DEATH'));      // true
console.log(isBlockWord('BABY'));      // false
console.log(isBlockWord('jest'));       // true