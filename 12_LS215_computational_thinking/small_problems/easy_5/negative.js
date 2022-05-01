function negative(num) {
  if (String(num)[0] === '-') return num;

  return -num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0