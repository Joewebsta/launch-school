function showMultiplicativeAverage(numArr) {
  if (numArr.length === 0) return '0.000';

  let product = numArr.reduce((total, num) => total * num);
  let avg = product / numArr.length;
  return avg.toFixed(3);
}


console.log(showMultiplicativeAverage([]));                   // "7.500"
console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

