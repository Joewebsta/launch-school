
/*
Empty arrays
Sparse arrays
Other data types
Invalid
*/

function union(...arrays) {
  let result = [];
  let flatArr = arrays.flat();
  
  flatArr.forEach(elem => {
    if (!result.includes(elem)) result.push(elem);
  });

  return result.sort((a,b) => a - b);
}

console.log(union([null], [3, 6, 9], [3, 2, 3]));    // [null, 3, 6, 9, 2]
console.log(union([NaN], [3, 6, 9]));    // [NaN, 3, 6, 9]
console.log(union([undefined], [3, 6, 9]));    // [undefined, 3, 6, 9]
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([], [3, 6, 9]));    // [3, 6, 9]
console.log(union([1, 3, 5], []));    // [1, 3, 5]
console.log(union([1], [3]));    // [1, 3]
console.log(union([5, 3, 1], [3, 6, 9]));    // [1, 3, 5, 6, 9]