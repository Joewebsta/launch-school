/*

INVENTORY MANAGEMENT SYSTEM

ITEM CREATOR --------------------------------------------------
- Necessary info is present
- Necessary info is valid

- If info is invalid, return an object with a `notValid` property with a value of true
  - { notValid: true }

ITEM MANAGER --------------------------------------------------
- Create items
- update item info
- delete items
- query info about items

ITEM MANAGER METHODS --------------------------------------------------

- may add new methods 

- create
  - creates new item
  - input
    - none
  - output
    - return object if creation is successful
    - return false if creation is unsuccessful

- update
  - updates item info
  - input
    - SKU Code
    - (item) object
    - VALID VALUE WILL BE PROVIDED
  - output
    - what is returned???
- delete
  - input
    - SKU Code
    - item object
    - VALID VALUE WILL BE PROVIDED
  - Output
    - what is returned??
- items
  - This property contains a list of all the items.
  - In what form is this info returned?
  - input
    - none
  - output
    - console text
- inStock
  - Lists all items with quantity > 0
  - input
    - none
  - output
    - console text
- itemsInCategory
  - List a all the items for a given category
  - input
    - category
  - Output
    - console text

REPORTS MANAGER --------------------------------------------------
- generate report for specific item
- generated from report objects created from the report manager
- generate report for ALL items
- responsible for reports for all items

REPORTS MANAGER METHODS --------------------------------------------------
- init
  - input
    - ItemManager object
  - output
    - ???
  - assigns "ItemManager" object to the "items" property
- createReporter
  - input
    - SKU code
  - output
    - object
      - method: itemInfo
        - logs to console all properties of an object
        - format -> "key:value"
        - 1 property per line
      - no other properties or methods are on the returned object
- reportInStock
  - logs item names of all items that are in stock
  - format: comma separated values


ITEM INFORMATION --------------------------------------------------
- each piece of item info corresponds to one property

- 
REQUIRED ------------
- Item name
  - minimum 5 characters
  - spaces no counted as characters
  - INPUT MAY BE INVALID?
- Category
  - Minimum of characters
  - MUST be 1 word
  - INPUT MAY BE INVALID?
- Quantity
  - MUST not be blank
  - Valid number provided

DYNAMIC ----------------
- SKU Code
  - DO NOT NEED TO VALIDATE UNIQUENESS OF SKU. DUPLICATES OK
  - generated from item name and category
  - unique identifier for product
    - first 3 letters of item name + first 2 letters of category
*/

const ItemCreator = (function() {
  function isValidItem(name, category, quantity) {
    return isValidName(name) &&  isValidCategory(category) && isValidQuantity(quantity);
  };

  function isValidName(name) {
    // should not start with a space or end with a space.
    if (name === undefined) return false;

    const cleanName = name.replace(/\s{2,}/, ' ').replaceAll(' ', '');
    return cleanName.length >= 5;
  };
  
  function isValidCategory(category) {
    if (category === undefined) return false;
    return /^[a-z0-9]+$/.test(category) && category.length >= 5;
  };

  function isValidQuantity(quantity) {
    if (quantity === undefined) return false;
    return quantity >= 0;
  }

  function generateSku(name, category) {
    return (name.substring(0,3) + category.substring(0,2)).toUpperCase();
  }
  
  return function(name, category, quantity) {
    if (isValidItem(name, category, quantity)) {
      this.sku = generateSku(name, category);
      this.name = name;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  }
})();

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    const item = new ItemCreator(name, category, quantity);

    if (item.notValid)
      return false;
    else {
      this.items.push(item);
    }
  },

  delete(sku) {
    const skus = this.items.map(({sku}) => sku)
    const indexToRemove = skus.indexOf(sku);
    return this.items.splice(indexToRemove, 1)[0];
  },

  update(selectedSku, propObj) {
    const item = this.items.find(({ sku }) => sku === selectedSku);
    
    for (let key in propObj) {
      item[key] = propObj[key];
    }
    
    return item;
  },

  list() {
    return this.items;
  },

  inStock() {
    return this.items.filter(({ quantity }) => quantity > 0);
  },

  itemsInCategory(selectedCategory) {
    const categoryItems = this.items.filter(({ category }) => category === selectedCategory);
    
    return (categoryItems.length > 0) ? categoryItems : 'No items in category.';
  }
  }

const ReportManager = (function() {
  return {
    init(itemManager) {
      this.items = itemManager;
    },

    reportInStock() {
      const items = this.items.inStock();
      console.log(items.map(({name}) => name).join());
    },

    createReporter(selectedSku) {
      const item = this.items.items.find(({ sku }) => sku === selectedSku);
       
      function Reporter() {};

      Reporter.prototype.itemInfo = function() {
        for(let key in item) {
          console.log(`${key}: ${item[key]}`);
        }
      }

      return new Reporter();
    }
  };
})();


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
// console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
// console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)



const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10