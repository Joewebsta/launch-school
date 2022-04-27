/*
String (empty)
Number
Boolean
Array
Object

Falsy values
- 0
- ''
- undefined
- null
- false
- NaN

INPUT
- Any data type
- Should be an array

OUTPUT
- An array 


RULES
- Write a function that rotates an input array
  - The first element (of the input array) is moved to the end of the array
  - The input array must not be modified. 
  - Output array is a new array

Validation
- If input arg is NOT an array -> return undefined
- If input arg is [] -> return []
- In no argument is provided -> return undefined


- Input array may contain
  - integers
  - strings
  - arrays (including empty)
  - objects

QUESTIONS


APPROACH
[7, 3, 5, 2, 9, 1]
[3, 5, 2, 9, 1]
[3, 5, 2, 9, 1, 7]


TEST CASES
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

DATA STRUCTURE / ALGO

- create function rotateArray(array)
  - Check if !Array.isArray(array) 
    - if true, return undefined
  
  Check array.length === 0 ?

  - set rotated = []
  - set firstElem = array[0]

  - slice array from index 1 to the end of the array
  - concat returned array with rotated
  - push first to rotated
  - return rotated


*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let rotated = array.slice(1)
  return rotated.concat(array[0]);
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined
// console.log(rotateArray('hello'));                        // undefined


// the input array is not mutated
// const array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]