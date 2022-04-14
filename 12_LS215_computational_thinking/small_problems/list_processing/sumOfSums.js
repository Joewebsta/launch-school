

function sumOfSums(arr) {
  let sum = 0;

  arr.forEach((num, index) => {
    let subArr = arr.slice(0, index + 1);
    sum += subArr.reduce((sum, num) => num + sum);
  })

  console.log(sum);
  return sum;
}

// function sumOfSums(numbers) {
//   return numbers.map((number, index) => numbers.slice(0, index + 1)
//                                                 .reduce((sum, value) => sum + value))
//                                                 .reduce((sum, value) => sum + value);
// }

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

