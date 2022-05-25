let invoices = {
  unpaid: [],
  paid: [],

  add(name, amount) {
    this.unpaid.push({ name, amount })
  },

  totalDue() {
    return this.unpaid.reduce((total, { amount }) => {
      return total + amount;
    }, 0)
  },

  totalPaid() {
    return this.paid.reduce((total, { amount }) => {
      return total + amount;
    }, 0)
  },

  payInvoice(name) {
    let tempUnpaid = [];
    this.unpaid.forEach(invoice => {
      if (name === invoice.name) {
        this.paid.push(invoice);
      } else {
        tempUnpaid.push(invoice);
      }
    });
    
    this.unpaid = tempUnpaid;
  },
}

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

// console.log(invoices.totalDue())

invoices.payInvoice("Due North Development")
invoices.payInvoice("Due North Development")
invoices.payInvoice("Slough Digital")
console.log(invoices.totalDue())
console.log(invoices.totalPaid())