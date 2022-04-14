
function buyFruit(groceries) {
  return groceries.reduce((list, [ item, qty ]) => {
    for (let i = 1; i <= qty; i += 1) {
      list.push(item)
    }  

    return list;
  }, []);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]