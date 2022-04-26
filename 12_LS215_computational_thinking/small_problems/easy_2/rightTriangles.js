function triangle(n) {
  for (let row = 1; row <= n; row += 1) {
    let stars = '*'.repeat(row);
    let spaces = ' '.repeat(n - row);
    
    console.log(spaces + stars);
  }
}


triangle(5);
triangle(9);