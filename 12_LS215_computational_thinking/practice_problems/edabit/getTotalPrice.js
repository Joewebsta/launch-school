/*

Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

Examples
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3


Notes
There might be a floating point precision problem in here...

INPUT
  - array
    - may be empty
    - may contain 1 object
    - may contain 1+ objects
    - always objects


  - array contains objects
    - keys: product, qty, price
    - undefined, null?
  

OUTPUT
- Number
  - May be whole or fractional number

RULES
- Calculate the total price and returns it as a number

TEST CASES - PROVIDED ------------------------------

// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) 
// ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) 
// ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) 
// ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) 
// ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) 
// ➞ 0.3


TEST CASES - ADDITIONAL ------------------------------

getTotalPrice([]) 
// ➞ 0

getTotalPrice([
  { product: "Chocolate", quantity: 1, price: .10 },
]) 
// ➞ 0.1

getTotalPrice([
  { product: "Chocolate", quantity: 1, price: null },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) 
// ➞ 0.2


DATA STRUCTURE / ALGO

- FUNCTION - getTotalPrice(groceries)

Input
  [
    { product: "Chocolate", quantity: 1, price: null },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ] 

  - Create total variable - set to 0
  - Iterate over each product in groceries
    - multiple qty by price (or 0)
    - add prodcut to total

  - Number(total.toFixed()

  - return total

Output
0.2

*/

function getTotalPrice(groceries) {
  let total = 0;

  groceries.forEach(({ quantity, price }) => {
    quantity = quantity || 0;
    price = price || 0;
    
    total += quantity * price;
  })
  
  return Number(total.toFixed(1));
}



// TEST CASES - PROVIDED ------------------------------

// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) 
// ➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) 
// // ➞ 4

// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) 
// // ➞ 4.5

// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) 
// // ➞ 10.4

// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) 
// // ➞ 0.3


// TEST CASES - ADDITIONAL ------------------------------

// getTotalPrice([]) 
// // ➞ 0

// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: .10 },
// ]) 
// // ➞ 0.1

// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: null },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) 
// // ➞ 0.2