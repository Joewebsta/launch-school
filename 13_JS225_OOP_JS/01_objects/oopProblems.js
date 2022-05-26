function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Invalid price.');
        return;
      }
    
      this.price = newPrice;
    },

    describe() {
      let description = `=> Name: ${this.name}`   + '\n' +
                        `=> ID: ${this.id}`       + '\n' +
                        `=> Price: ${this.price}` + '\n' +
                        `=> Stock: ${this.stock}`
    
      console.log(description);
    },
  }
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

// console.log(scissors)
// console.log(drill)

// scissors.describe();
// drill.describe();

scissors.setPrice(-100);
scissors.setPrice(100);
console.log(scissors.price)