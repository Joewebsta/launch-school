// CONVERT TO CLASS
const ItemCreator = (function() {
  function generateSKU(itemName, category) {
    itemName = itemName.toUpperCase().replace(' ', '').substring(0, 3);
    category = category.toUpperCase().substring(0, 2);
    
    return itemName + category;
  }
  
  function isValidName(itemName) {
    return itemName.replace(' ', '').length >= 5;
  }
  
  function isValidCategory(category) {
    return category.split(' ').length === 1 && 
           category.replace(' ', '').length >= 5;
  }

  return function(itemName, category, quantity) {
    if (isValidName(itemName) && isValidCategory(category) && quantity >= 0) {
      this.sku = generateSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;

    } else {
      return { notValid: true };
    }
  }
})();

const ItemCreator2 = class {
  constructor(itemName, category, quantity) {
    if (this.#isValidName(itemName) && this.#isValidCategory(category) && quantity >= 0) {
      this.sku = this.#generateSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;

    } else {
      return { notValid: true };
    }
  }

  generateSKU(itemName, category) {
    itemName = itemName.toUpperCase().replace(' ', '').substring(0, 3);
    category = category.toUpperCase().substring(0, 2);
    
    return itemName + category;
  }
  
  #isValidName(itemName) {
    return itemName.replace(' ', '').length >= 5;
  }
  
  #isValidCategory(category) {
    return category.split(' ').length === 1 && 
           category.replace(' ', '').length >= 5;
  }
}

const ItemManager = (function() {
  return {
    items: [],
    create(itemName, category, quantity) {
      const item = new ItemCreator2(itemName, category, quantity);
      
      if (item.notValid) {
        return false;
      } else {
        this.items.push(item);
      }
    },

    getItem(skuCode) {
      return this.items.find(({ sku }) => sku === skuCode);
    },

    update(sku, properties) {
      const item = this.getItem(sku);
      
      Object.keys(properties).forEach(key => {
        item[key] = properties[key];
      });
    },

    delete(itemSku) {
      this.items.forEach(({ sku }, index) => {
        if (sku === itemSku) {
          this.items.splice(index, 1);
        }
      });
    },

    inStock() {
      return this.items.filter(({quantity}) => quantity > 0 );
    },

    itemsInCategory(itemCategory) {
      return this.items.filter(({ category }) => category === itemCategory);
    },
  }
})();

const ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  reportInStock() {
    const inStockItems = this.items.inStock().map(({itemName}) => itemName);
    console.log(inStockItems.join(', '));
  },

  createReporter(sku) {
    const item = this.items.getItem(sku);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`)
        });
      }
    }
  },

}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('football', 'sports');
// ItemManager.create('kitchen pot', 'cooking items', 0);

console.log(ItemManager.items);
// // returns list with the 4 valid items

console.log(ItemCreator.generateSKU('football', 'sports', 10));

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot


ItemManager.update('SOCSP', { quantity: 0 });
// ItemManager.update('SOCSP', { category: 'fun' });
// ItemManager.update('SOCSP', { quantity: 20, category: 'water' });

// console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot


// ReportManager.reportInStock();
// // logs football,kitchen pot

// console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football

// console.log(ItemManager.items.length)
// ItemManager.delete('SOCSP');
// console.log(ItemManager.items)
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)


const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10