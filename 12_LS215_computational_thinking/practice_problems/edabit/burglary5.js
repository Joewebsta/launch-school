function thirdMostExpensive(obj) {
  if (Object.keys(obj).length < 3) return false;
  let thirdItem = Object.values(obj).sort((a, b) => a - b).at(-3);

  for (let key in obj) {
    if (thirdItem === obj[key]) return key;
  }
}

console.log(thirdMostExpensive({}))
console.log(thirdMostExpensive({piano: 100}))
console.log(thirdMostExpensive({piano: 100, stereo: 200 }))
console.log(thirdMostExpensive({piano: 100, stereo: 200, tv: 10 }))
console.log(thirdMostExpensive({piano: 100, stereo: 200, tv: 10, timmy: 500 }))
console.log(thirdMostExpensive({computer: 1000, piano: 500, stereo: 200, tv: 10, timmy: 1 }))

// console.log(thirdMostExpensive({}))
// //➞ false

// console.log(thirdMostExpensive({ piano: 100, tv: 200 }))
// //➞ false

// console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 }))  
// //➞ "stereo"

// console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }))
// //➞ "mirror"