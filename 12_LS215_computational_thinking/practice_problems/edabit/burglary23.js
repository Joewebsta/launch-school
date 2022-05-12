/*

The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.

Examples
findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  }) 
  
  // ➞ {
  //   bedroom: {
  //     slippers: 10000,
  //     piano: 5500,
  //   },
  // }
 
 
  findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "550",
      notes: "ga0r76ba22g4e",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
  }) 
  
  // ➞ {
  //   kitchen: {
  //     ["gold spoons"]: 900,
  //     piano: 550,
  //   },
  //   cellar: {
  //     bottle: 750,
  //   },
  // }

INPUT
- object - obj
  - contains nested objects with strings as values
  - contains room keys and values that are objects (room items)

OUTPUT
- An object with nested objects

RULES
- Find and removed properties that have associated prop values that are not number values
- If a string value evaluates to NaN when converted to a number, the property should be removed

DATA STRUCTURE/ALGO

- set resultObj to an empty object
- iterate over each key in obj - kitchen, cellar
- iterate over each roomKey in roomObj -  goldSpoons, piano
  - check if string value is a numeric value
    - if true, check if resultObj[key]
      - if false
        - set resultObj[key] to empty object
        - set resultObj[key][roomKey] = value
      - if true, check if resultObj[key]
        - if true, set resultObj[key][roomKey] = value
- return resultObj
*/

function findAndRemove(obj) {
  const resultObj = {};

  for (let key in obj) {
    let roomObj = obj[key];
    
    for (let roomKey in roomObj) {
      let itemVal = roomObj[roomKey];
      if (!resultObj[key]) {
        resultObj[key] = {};
      } 
      
      if (Number(itemVal)) {
        resultObj[key][roomKey] = Number(itemVal);
      }
    }
  }
  console.log(resultObj)
}

// function findAndRemove(obj) {
//   for (let key in obj) {
//     let roomObj = obj[key];
    
//     for (let roomKey in roomObj) {
//       let itemVal = roomObj[roomKey];
      
//       if (!Number(itemVal)) {
//         delete(obj[key][roomKey])
//       }

//       if (Object.keys(roomObj).length === 0) {
//         delete(obj[key]);
//       }
//     }
//   }
// }

// TEST CASES - PROVIDED --------------------------------------


const random = Math.random()
// const randomString = Test.randomToken()

const obj = {
    bedroom: {
      slippers: "10000",
      piano: String(random),
      call: "vet",
      travel: "world",
    },
  }

  const obj2 = {
      kitchen: {
        ["gold spoons"]: "900",
        piano: "550",
        notes: 'randomString',
      },
      cellar: {
        reminder: "dog",
        bottle: "750",
    },
  }
const obj3 = {attic: { node: "js", },};

const obj4 = {
    bedroom: {
      slippers: "10000",
      pen: "570",
      call: "v0g89t7t",
      travel: "wo1a3d5d",
    },
  }

  const obj5 = {
    bedroom: {
      guitar: "900000",
      pen: "570",
      call: `${random * 100000}`,
      travel: "wo245t61d",
    },
  }

  findAndRemove(obj5)

// Test.assertSimilar(findAndRemove(obj5), {
//     bedroom: {
//       guitar: 900000,
//       pen: 570,
//     },
//   })
// Test.assertSimilar(findAndRemove(obj4), {
//     bedroom: {
//       slippers: 10000,
//       pen: 570,
//     },
//   })
// Test.assertSimilar(findAndRemove(obj3), {attic: {}})
// Test.assertSimilar(findAndRemove(obj2), {
//     kitchen: {
//       ["gold spoons"]: 900,
//       piano: 550,
//     },
//     cellar: {
//       bottle: 750,
//     },
//   })
// Test.assertSimilar(findAndRemove(obj), {
//     bedroom: {
//       slippers: 10000,
//       piano: random,
//     },
//   })


// findAndRemove({
//     bedroom: {
//       slippers: "10000",
//       piano: "550",
//       call: "vet",
//       travel: "world",
//     },
//   }) 
  
  // ➞ {
  //   bedroom: {
  //     slippers: 10000,
  //     piano: 5500,
  //   },
  // }

 
 
  // findAndRemove({
  //   kitchen: {
  //     ["gold spoons"]: "900",
  //     piano: "550",
  //     notes: "ga0r76ba22g4e",
  //   },
  //   cellar: {
  //     reminder: "dog",
  //     bottle: "750",
  //   },
  // }) 
  
  // ➞ {
  //   kitchen: {
  //     ["gold spoons"]: 900,
  //     piano: 550,
  //   },
  //   cellar: {
  //     bottle: 750,
  //   },
  // }


// TEST CASES - ADDITIONAL --------------------------------------
// findAndRemove({
//   bedroom: {
//     slippers: "vet",
//     piano: "vet",
//     call: "vet",
//     travel: "world",
//   },
// }) 

// // ➞ {}


// findAndRemove({}) 

// // ➞ {}