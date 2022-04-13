function sum(num) {
  return num.toString()
     .split('')
     .map(numChar => Number(numChar))
     .reduce((sum, num) => num + sum);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45