function makeBank() {
  const accounts = [];
  
  return {
    openAccount() {
      const accountNum = accounts.length + 101;
      const newAccount = makeAccount(accountNum);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  }
}

function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({ type: 'deposit', amount });
      return amount;
    },
  
    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }
      
      balance -= amount;
      transactions.push({ type: 'withdraw', amount });
      return amount;
    },

    balance() {
      return balance;
    },
    
    number() {
      return number;
    },

    transactions() {
      return transactions;
    }
  }
}


// let bank = makeBank();
// console.log(bank.accounts);
// undefined

// let bank = makeBank();
// // console.log(bank);
// let account = bank.openAccount();
// // console.log(account);
// console.log(account.balance());
// // 0
// console.log(account.deposit(17));
// // 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // 102
// console.log(account.transactions());
// // [Object]


// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance());
// // 3
// console.log(destination.balance());
// // // 7

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // = 101
// console.log(bank.accounts);
// // = [{...}]
// console.log(bank.accounts[0]);
// // = {number: 101, balance: 0, transactions: Array[0]}
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // = 102

// let account = makeAccount();
// console.log(account.deposit(15));
// // 15
// console.log(account.balance);
// // 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // 0

// console.log(account.balance);
// // // = 100
// console.log(account.withdraw(91));
// // // = 19
// console.log(account.balance);

// console.log(account.deposit(23));
// // 23
// console.log(account.transactions);
// // [{...}]
// console.log(account.transactions[0]);
// // {type: "deposit", amount: 23}
// // // = 81