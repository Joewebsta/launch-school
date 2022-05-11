/* 

Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

Examples
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null

Notes

All wines will be different prices, so there is no confusion in the ordering.

INPUT
- an array of objects
  - represent bottles of wine
  - All wines will be different prices
  - The objects will never be empty
  - object keys will always be lowercase ****!!!
  - Prices will not be
    - negative
    - undefined, null, NaN
  
OUTPUT
- A string 
  - represents the name of the wine 
  - This wine is the second most expensive wine


RULES
- If array is empty, return null
- If array only has 1 element (obj), return the wine name
- If array has two or more elements return the second least expensive.

APPROACH
Input - [{wine1}, {wine2}, {wine3}]

Get array of prices
[8.99, 13.99, 10.99]

Sort array of prices - .sort((a,b) => +a - +b)
[8.99, 10.99, 13.99]

Get second most expensive wine - second to last wine
10.99

Idenfity name of wine that's price is 10.99
"Wine 9"

Output - string

DATA STRUCTURES


ALGO
- if wineList.length === 0
  - return null
- if wineList.length === 1
  - return wineList[0].name

- set prices var to array of prices
  - wineList.map(({price}) => price)
- sort prices - descending
  - sort((a,b) => Number(b) - Number(a))
- set secondHighestPrice var to second element prices[1]
- Iterate over each wineObj in wineList - for loop
  - check if wineObj[price] === secondHighestPrice
    if true, return wineObj[name]


EXTRA 
- same prices - return array of wines OR single string
- 


    CODE
*/

function chosenWine(wines) {
  if (wines.length === 0) return null;
  if (wines.length === 1) return wines[0].name;

  let prices = wines.map(({price}) => price).sort((a, b) => Number(a) - Number(b));
  let secondCheapestPrice = prices[1];
  
  let secondCheapestWine = wines.filter(({price}) => price === secondCheapestPrice);
  return secondCheapestWine[0].name;
}
  // for (let i = 0; i < wines.length; i += 1) {
  //   let wineObj = wines[i];
  //   if (wineObj.price === secondHighestPrice) { 
  //     secondHighestWines.push(wineObj.name);
  //   }
  // }

  // if (secondHighestWines.length > 1) {
  //   return secondHighestWines;
  // } else {
  //   return secondHighestWines[0]
  // }

  // console.log(secondHighestWines)
// }


// TEST CASES - PROVIDED *******************
// console.log(chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]))
// ➞ "Wine 9"

// console.log(chosenWine([{ name: "Wine A", price: 8.99 }]))
// // ➞ "Wine A"

// console.log(chosenWine([]))
// // ➞ null

// TEST CASES - ADDITIONAL *******************

console.log(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 32", price: 13.99}, {name: "Wine 9", price: 10.99}]))
//  "Wine 9");

console.log(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine B", price: 9.99}]))
// //  "Wine B");

console.log(chosenWine([{name: "Wine A", price: 8.99}])) 
// // "Wine A");

console.log(chosenWine([]))
// //  null);

console.log(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 389", price: 109.99}, {name: "Wine 44", price: 38.44}, {name: "Wine 72", price: 22.77}]))
// // "Wine 72");