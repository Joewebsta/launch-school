/*



You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.

Example
simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]) 

➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
]

Notes
There will always be one or more element in the given array.
Each element will always have a brand and name property.
All duplicates will be displayed in order.


INPUT


OUTPUT


RULES


QUESTIONS


TEST CASES - PROVIDED


TEST CASES - ADDITIONAL


APPROACH


DATA STRUCTURE


ALGO

- create simplifyList(objArr)
  - set counts var to item counts (countItems function)
  - set result var to empty array
  - set seen to empty array

  - iterate over each item in objArr
    - set brand var to item brand value
    - set name var to item name value

    - check if brand is included in seen array
      - if false (!true)
        - push new brand object to result
          - brand: brand
          - name: name
          - counts: brand count (use counts obj)
  - return result

- create countItems(objArr)
  - set counts var to empty object
  - iterate over each item in objArr
    - count occurences of brand name
  - return counts obj
*/


function simplifyList(objArr) {
  let counts = countItems(objArr)
  let result = [];
  let seen = [];

  objArr.forEach(itemObj => {
    let { brand, name } = itemObj;

    if (!seen.includes(brand)) {
      result.push({ brand, name, count: counts[brand] });
      seen.push(brand);
    }
  })
  return result;
}

function countItems(objArr) {
  let counts = {};
  objArr.forEach(({brand}) => counts[brand] = (counts[brand] || 0) + 1);
  return counts;
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]))

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]