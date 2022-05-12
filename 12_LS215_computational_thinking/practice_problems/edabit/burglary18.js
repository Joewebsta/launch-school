/*
The police call. They need a more detailed list of the stolen goods.

You are given an array with nested arrays that represent each room in your mansion where the goods were stolen. Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match, the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.

Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.

Examples

makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])

➞ { kitchen: { piano: 1000, tv: 50 } }


makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]) 


➞ {
  basement: {
    "baseball bat": 500
  },
  garage: {
    horses : 110,
    cadillac: 2000,
    flowers: 30
  }
}

- set resultObj = {}
- iterate over each subArr in arr - forEach
  - set key to first element
  - set items to second element
  - set values to thired element
  - set resultObj[key] to {}

  - iterate over each item in items arr
    - start at i = 0 and continue while index < items.length
      - set itemKey to element at index i in items arr
      - set itemVal to elemetn at index i in values arr
      - set resultObj[key][itemKey] = itemVal
  - return resultObj

*/



function makeDetailedList(arr) {
  const resultObj = {};

  arr.forEach(subArr => {
    const [key, items, values] = subArr;
    resultObj[key] = {};
    
    for (let i = 0; i < items.length; i += 1) {
      const [ itemKey, itemVal ] = [items[i], values[i]]
      resultObj[key][itemKey] = itemVal;
    }
  });
  
  return resultObj;
}


makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])

// ➞ { kitchen: { piano: 1000, tv: 50 } }


makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]) 


// // ➞ {
// //   basement: {
// //     "baseball bat": 500
// //   },
// //   garage: {
// //     horses : 110,
// //     cadillac: 2000,
// //     flowers: 30
// //   }
// // }