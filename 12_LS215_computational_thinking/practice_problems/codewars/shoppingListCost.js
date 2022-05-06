/*

var groceries = {
  "Orange Juice": {
      "price" : 1.5,
      "discount": 10, 
      "bogof": false
  },
    
  "Chocolate": {
      "price" : 2,
      "discount" : 0,
      "bogof": true
  },
  
  // more items...
}

round to 2 decimal places

shoppingListCost([]) // 0
shoppingListCost([["Chocolate", 5],["Orange Juice", 15]]) // 26.25
shoppingListCost([["Orange Juice", 2],["Chocolate", 4]]) // 6.7
shoppingListCost([["Chocolate", 4]]) // 4


ALGO
- create shoppingListCost(items)
  if (items.length === 0) return [];

  - set totCost = 0
  - iterate over each item(name, qty) in items
    - set price = groceries[name].price
    - set discount = groceries[name].discount
    - set bogof = groceries[name].bogof

    - check if bogof
      - if true, qty = Math.ceil(qty / 2)
    - check if discount
      - if true, price = price - (price * discount / 100)
    - add qty * price to totCost
  - return totCost
*/



function shoppingListCost(items) {


  let totCost = 0;
  items.forEach(([name, qty]) => {
    let itemInfo = groceries[name];
    let { price, discount, bogof } = itemInfo;

    if (bogof) qty = Math.ceil(qty / 2);
    if (discount) price = price - (price * discount / 100);

    totCost += qty * price;
  });

  return Number(totCost.toFixed(2));
}


var groceries = {
  "Orange Juice": {
      "price" : 1.5,
      "discount": 10, 
      "bogof": false
  },
    
  "Chocolate": {
      "price" : 2,
      "discount" : 0,
      "bogof": true
  },
  
  // more items...
}

console.log(shoppingListCost([])) // 0
console.log(shoppingListCost([["Chocolate", 5],["Orange Juice", 15]])) // 26.25
console.log(shoppingListCost([["Orange Juice", 2],["Chocolate", 4]])) // 6.7
console.log(shoppingListCost([["Chocolate", 4]])) // 4