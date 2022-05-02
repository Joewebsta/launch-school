function isAntiArray(arr1, arr2) {
  let arr1ElemCounts = arrElemCounts(arr1);
  let arr2ElemCounts = arrElemCounts(arr2);
  
  if (arr1.length === 0 || arr2.length === 0) return false;
  if (arr1.length !== arr2.length) return false;
  if (Object.keys(arr1ElemCounts).length !== 2 || Object.keys(arr2ElemCounts).length !== 2) return false;
  if (Object.keys(arr1ElemCounts).sort().join('') !== Object.keys(arr2ElemCounts).sort().join('')) return false;
  
  let val1 = arr1[0];
  let val2 = arr1.filter(elem => elem !== val1)[0];

  let swappedArr = [];

  arr1.forEach(elem => {
    if (elem === val1) {
      swappedArr.push(val2)
    } else {
      swappedArr.push(val1)
    }
  });
  
  return arr1.every((elem, index) => {
    return elem !== arr2[index];
  }) 
}

function arrElemCounts(arr) {
  let counts = {};

  arr.forEach(elem => {
    counts[elem] = counts[elem] || 0;
    counts[elem] += 1;
  });

  return counts;
}


console.log(isAntiArray([{age: 34}, []], [[], {age: 34}])) // ➞ true
console.log(isAntiArray([{}, []], [[], {}])) // ➞ true
console.log(isAntiArray([true, false], [false, true])) // ➞ true
console.log(isAntiArray(["1", "0"], ["0", "1"])) // ➞ true
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])) // ➞ true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])) // ➞ true



console.log(isAntiArray([3.14, "True", 3.14], [3.14, "False", 3.14])) // ➞ false
console.log(isAntiArray([], [])) //➞ false

// // Invalid - 1 unqiqe value
console.log(isAntiArray([null, null], [null, null])) //➞ false

// // Invalid - 3 unique values
console.log(isAntiArray([3.14, "True", 34], [3.14, "False", 3.14])) //➞ false

// // Invalid - Differnt array lengths
console.log(isAntiArray([3.14, "True", 34], [1, 2, 3, 4])) //➞ false

// // Invalid - Same array lengths, different values in each array
console.log(isAntiArray([3.14, "True"], [1, 2])) //➞ false


/*

Anti Array
Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

Examples
isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true
isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true
isAntiArray([3.14, True, 3.14], [3.14, False, 3.14]) ➞ false


INPUT
- Two arrays
- can contain an arbitrary number of elements - aka array length is arbitrary
- element can be any data
- arrays contain only two different values
- array lengths are equal

OUTPUT
- Boolean true or false
  - Represents whether the two arrays are opposites of each other.


RULES
- Opposite arrays
  - both arrays are comprised only from elements a and b 
  - the occurrences of these elements are swapped between the two arrays.


QUESTIONS
- return new array?
- invalid input? How to handle?

- data types
  - number - NaN, fractional, 0, infinity
  - string - empty, uppercase and lowercase, all characters
  - boolean
  - object - empty and with properties
  - array - empty and with elements




TEST CASES

isAntiArray([{age: 34}, []], [[], {age: 34}]) ➞ true
isAntiArray([{}, []], [[], {}]) ➞ true
isAntiArray([true, false], [false, true]) ➞ true
isAntiArray(["1", "0"], ["0", "1"]) ➞ true
isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true
isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true
isAntiArray([3.14, "True", 3.14], [3.14, "False", 3.14]) ➞ false

isAntiArray([], []) ➞ false

// Invalid - 1 unqiqe value
isAntiArray([null, null], [null, null]) ➞ false

// Invalid - 3 unique values
isAntiArray([3.14, "True", 34], [3.14, "False", 3.14]) ➞ false

// Invalid - Differnt array lengths
isAntiArray([3.14, "True", 34], [1, 2, 3, 4]) ➞ false

// Invalid - Same array lengths, different values in each array
isAntiArray([3.14, "True"], [1, 2]) ➞ false


APPROACH
- check for invalid input
  - only 1 value
  - more than 2 different values
  - arrays have two different values, but they are not consistent
- if exactly two values
  - determine what the two unique elements are
  - swap elems in first array
  - convert first array to string and second array to string and then compare 

["apples", "bananas", "bananas"]
["bananas", "apples", "apples"]
"bananasapplesapples" === "bananasapplesapples"


DATA STRUCTURE
array -> string -> boolean

obj to keep track of elem value counts

ALGO

- create function isAntiArray(arr1, arr2)
  - check if the two arrays have the same number of elements
    - if false, return false

  - create objects that countain the counts of each value in the arrays
  - check if there are exactly 2 unique values in each array - function?
    - if false, return false
  - check if the two unique values in each array are equal to eachother
    if false, return false
  
  - set unique vals to val1 and val2
  - create a new array - swapped array
  - iterate over the first  array
    - if arr elemnt is val1, push val2 to array
    - if arr element is val2, push val1 to array
  - convert swapped array to string and arr2 to string
  - return a comparison of the string


  - create objects that countain the counts of each value in the arrays

  - check if there are exactly 2 unique values in each array - function?
    - compare Object.keys.length of each objects
    - return true or false

  - check if the two unique values in each array are equal to eachother
    - compare Object.keys.length of each objects
    - return true or false

    - create an object
    - iterate over array
    - create a key for each value and count the occurence of each value

*/

