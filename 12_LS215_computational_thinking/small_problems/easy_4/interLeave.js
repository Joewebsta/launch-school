function interleave(arr1, arr2) { 
  let result = [];
  let maxArrLength = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < maxArrLength; i += 1) {
    if (arr1[i]) result.push(arr1[i]);
    if (arr2[i]) result.push(arr2[i]);
  }

  console.log(result)
}

interleave([], ['a', 'b', 'c', 'd']);    // [ 1, 'a', 'b', 'c', 'd' ]
interleave([1], ['a', 'b', 'c', 'd']);    // [ 1, 'a', 'b', 'c', 'd' ]
interleave([1, 2, 3], ['a', 'b', 'c', 'd']);    // [  1, 'a', 2, 'b', 3, 'c', 'd' ]
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]