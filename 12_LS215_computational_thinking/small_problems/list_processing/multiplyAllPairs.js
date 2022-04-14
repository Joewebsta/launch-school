
function multiplyAllPairs(arr1, arr2) {
  let products = [];
  
  arr1.forEach(arr1Num => {
    arr2.forEach(arr2Num => products.push(arr1Num * arr2Num));
  });

  products.sort((num1, num2) => num1 - num2)

  console.log(products);
}



multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]