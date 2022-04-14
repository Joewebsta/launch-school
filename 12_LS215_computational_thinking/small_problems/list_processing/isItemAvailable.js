'use strict'

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let transactionsByItem = transactionsFor(inventoryItem, transactions);
  let currentQty = calcCurrentQty(transactionsByItem);
  
  return currentQty > 0
}

function calcCurrentQty(transactions) {
  return transactions.reduce((totQty, { movement, quantity }) => {
    return totQty + (movement === 'in' ? quantity : -quantity);
  }, 0);
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));