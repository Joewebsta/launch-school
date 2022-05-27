/*

Modify input or return new value?
Account for invalid input?
Account for missing arguments?

INPUT
- 1 - Object
  - keys - strings
  - values primitive value

  - may be empty
  - may have 1 property
  - may have many properties

- 2 - Object
  - keys - strings
  - values primitive value

  - may be empty
  - may have 1 property
  - may have many properties

OUTPUT
- true/false


RULES
- check if two objects have the same key/value pairs.


TEST CASES - PROVIDED ---------------------
1 - 0
2 - 0
console.log(objectsEqual({}, {}));                                      
// true

1 - 1
2 - 1
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      
// true

1 - many
2 - 1
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            
// false

1 - many
2 - many
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  
// false

TEST CASES - ADDITIONAL ---------------------



DATA STRUCTURE / ALGO

- FUNCTION: objectsEqual(obj1, obj2);

Input - ({a: 'foo', b: 'bar'}, {a: 'foo'}));            

- Check if the number of keys in both objects is equal
  - if false, return false

- set allKeys
  - Create an array that contains all unique keys from both objects ['a', 'b']

- iterate over each key in allKeys
  - check if obj1 and obj2 contain the current key - object.hasOwnProperty
    - if true
      - access the value at the current key in each object
      - compare values
        - if false, return false
    - if false
      - return false

- return true

Output - false

*/

// function objectsEqual(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//   const allKeys = Object.keys({...obj1, ...obj2});

//   for (let i = 0; i < allKeys.length; i += 1) {
//     const key = allKeys[i];
    
//     if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
//       if (obj1[key] !== obj2[key]) return false;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  const allKeys = Object.keys({...obj1, ...obj2});

  return allKeys.every(key => {
    return (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) && 
    (obj1[key] === obj2[key]);
  })
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false