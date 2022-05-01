function swapName(name) {
  let [ first, second ] = name.split(' ');

  return `${second}, ${first}`;
  
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"