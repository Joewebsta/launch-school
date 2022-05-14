/*
- READ THE FULL PROBLEM AND TEST CASES BEFORE DOING ANYTHING!
- ASK PRELIM QUESTIONS
  - MODIFY INPUT OR NEW OUTPUT ARRAY
  - DO I NEED TO ACCOUNT FOR INVALID INPUTS
  - DO I NEED TO WORRY ABOUT SPARSE ARRAYS OR NON INDEX PROPERTIES
- THEN FILL OUT INPUT/OUTPUT/RULES
  - DO I NEED TO WORRY ABOUT NEGATIVE VALUES
*/


/*


Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos. Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.

A tree is hidden if it is shorter or the same height as the tree in front.

Given an array of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.

Worked Example
conso([1, 3, 6, 5]) ➞ "left"
// If I stand on the left, I can see trees of heights 1, 3 and 6.
// If I stand on the right, I can see trees of heights 5 and 6.
// Return "left" because I would see more trees.

Examples
treePhotography([5, 6, 5, 4]) ➞ "right"

treePhotography([1, 2, 3, 3, 3, 3, 3]) ➞ "left"

treePhotography([3, 1, 4, 1, 5, 9, 2, 6]) ➞ "left"

Notes
There will always be a best side.


INPUT
- array of integers - reprsent tree heights

OUTPUT
- string
  - left, right, both

RULES
- Hidden tree
  - if it is shorter or the same height as the tree in front.
  - left to right
    - tree is hidden if i + n  is less than i
- Seeing the most trees
  - the total number of trees before the remaining trees are hidden
  - returns "left" or "right", depending on which side allows me to see as many trees as possible.


DATA STRUCTURE / ALGO

- treePhotography(trees)
  - if trees is empty - return there are no trees

  - set left var to trees
  - set right var to trees - create copy of trees and reverse

  - set leftCount var to 0;
  - set leftMaxHeight = first element of left array
  - iterate over each height in trees. start at i = 0, continue until i < trees.length - 1
    - if height at current index is >= leftMaxHeight
      - increment leftCount by 1
      - set leftMaxHeight to current height

  - leftCount and rightCount
  - if leftCount < rightCount return 'left'
  - if leftCount > rightCount return 'right'
  - return both

*/


function treePhotography(trees) {
  if (trees.length === 0) return 'There are no trees.';

  let left = trees;
  let right = [...trees].reverse();
  let leftCount = 0;
  let rightCount = 0;
  let leftMaxHeight = left[0];
  let rightMaxHeight = right[0];


  left.forEach(height => {
    if (height > leftMaxHeight) {
      leftCount += 1;
      leftMaxHeight = height;
    }
  })

  right.forEach(height => {
    if (height > rightMaxHeight) {
      rightCount += 1;
      rightMaxHeight = height;
    }
  })

  if (leftCount < rightCount) return 'right';
  if (leftCount > rightCount) return 'left';
  return 'both';
}

// TEST CASES - PROVIDED------------------------------------

// console.log(treePhotography([5, 6, 5, 4]) )
// ➞ "right"

// console.log(treePhotography([1, 2, 3, 3, 3, 3, 3]) )
// ➞ "left"

// console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6]) )
// ➞ "left"


// TEST CASES - ADDITIONAL------------------------------------

/*
Data types - integer
special input values - emptiness, sparse arrays, non-index prop values
invalid input
boundary conditoins
repetition/duplication
*/

// console.log(treePhotography([1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2]) )
// left

// console.log(treePhotography([]) )
// // // ➞ "there are no trees"

// console.log(treePhotography([5]) )
// // // ➞ "Both"

// console.log(treePhotography([5, 6]) )
// // // ➞ "left"

// console.log(treePhotography([9, 6, 5, 4]) )
// // // right

// console.log(treePhotography([5, 6, 5, 9]) )
// // // ➞ "left"