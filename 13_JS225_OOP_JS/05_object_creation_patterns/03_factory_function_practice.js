// Problem 1
/*
1. Objects created from factory functions share the same behavior (methods)
which can lead to redundancy.
2. Objects created from factory functions can not be identified as a particular
type of object.
*/

// // Problem 2
// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// Problem 3
// let invoice = {
//   phone: 3000,
//   internet: 6500,
// };
// let payment = {
//   phone: 1300,
//   internet: 5500,
// };
// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700


// function createInvoice(services = {}) {
//   return {
//     phone: services.phone || 3000,
//     internet: services.internet || 5500,
    
//     total() {
//       return this.phone + this.internet;
//     }
//   }
// }

// function invoiceTotal(invoices) {
//   let total = 0;
//   let i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({
//   internet: 6500,
// }));

// invoices.push(createInvoice({
//   phone: 2000,
// }));

// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices));             // => 31000

// // Problem 4

// function createPayment(services = {}) {
//   return {
//     internet: services.internet || 0,
//     phone: services.phone || 0,
//     amount: services.amount,
    
//     total() {
//       return this.amount || (this.phone + this.internet);
//     }
//   }
// }

// function paymentTotal(payments) {
//   let total = 0;
//   let i;

//   for (i = 0; i < payments.length; i += 1) {
//     total += payments[i].total();
//   }

//   return total;
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000


// Problem 5

function createInvoice(services = {}) {
  const payments = [];
  
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    
    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      payments.push(payment)
    },

    addPayments(payments) {
      payments.forEach(payment => this.addPayment(payment));
    },

    amountDue() {
      let due = this.total();
      payments.forEach(payment => due -= payment.total());

      return due;
    }
  }
}

function createPayment(services = {}) {
  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount,
    
    total() {
      return this.amount || (this.phone + this.internet);
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0