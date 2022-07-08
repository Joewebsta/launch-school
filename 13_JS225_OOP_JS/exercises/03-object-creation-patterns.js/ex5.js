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

// Invalid name - 'asd'
// Missing value
// Invalid category - 'cooking items'

const ItemCreator = (function() {
  function isValidItem(name, category, quantity) {
    return isValidName(name) &&  isValidCategory(category) && !!quantity;
  };

  function isValidName(name) {
    // should not start with a space or end with a space.
    if (name === undefined) return false;

    const cleanName = name.replace(/\s{2,}/, ' ').replaceAll(' ', '');
    // const cleanNameNoSpaces = cleanName.replaceAll(' ', '');
    // console.log(cleanName)
    // const regex = new RegExp(/^([a-z0-9]+\s)+[a-z0-9]+$/, 'i');      
    // console.log(regex)
    // regex.test(cleanName)

    return cleanName.length >= 5;
  };
  
  function isValidCategory(category) {
    if (category === undefined) return false;
  
    return /^[a-z0-9]+$/.test(category) && category.length >= 5;
  };
  
  return {
    create(name, category, quantity) {
      if (isValidItem(name, category, quantity)) {
        return { name, category, quantity };
      } else {
        return { notValid: true };
      }
    }
  }
})();

const ItemManager = (function() {
  const items = [
    {
      name: 'basket ball',
      category: 'sports',
      quantity: 0,
    }
  ];

  return {
    create(name, category, quantity) {
      const item = ItemCreator.create(name, category, quantity);

      if (item.notValid)
        return false;
      else {
        items.push(item);
      }
    },

    items() {
      items.forEach(item => console.log(item))
      // return items;
    }
  }
})()


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('football', 'sports');
ItemManager.create('kitchen pot', 'cooking items', 0);

ItemManager.items()


