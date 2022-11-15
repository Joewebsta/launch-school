// document.addEventListener('DOMContentLoaded', e => {
//   let form = document.querySelector('form');
//   let ul = document.querySelector('ul');
//   // let add = document.querySelector('input[type="submit"]');
  

//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     let itemName = document.querySelector('#name');
//     let quantity = document.querySelector('#quantity');

//     if (!itemName.value) return;

//     let li = document.createElement('li');
//     li.innerText = `${quantity.value || "1"} ${itemName.value}`;
//     ul.append(li);

//     form.reset();
//   });
// });

// ------------------------------------------------------------

// (function groceryListManager() {
//   class GroceryList {
//     constructor(listContainerElement) {
//       this.list = document.querySelector(listContainerElement);
//     }

//     addItem(name, quantity) {
//       var listItem = document.createElement("li");
//       listItem.append(`${quantity} ${name}`);

//       this.list.append(listItem);
//     }
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     let form = document.querySelector("form");
//     let myGroceryList = new GroceryList("#grocery-list");
//     const getValueOf = (selector) => form.querySelector(selector).value;

//     form.addEventListener("submit", function (event) {
//       event.preventDefault();

//       let name = getValueOf("#name");
//       let quantity = getValueOf("#quantity") || "1";

//       myGroceryList.addItem(name, quantity);
//       form.reset();
//     });
//   });
// })();


class Model {
  constructor() {
    this.items = []
  }

  bindItemListChanged(callback) {
    this.onItemListChanged = callback;
  }

  addItem(name, quantity) {
    quantity = Number(quantity);
    this.items.push({ name, quantity });

    this.onItemListChanged(this.items);
  }
}

class View {
  constructor() {
    // SHOULD I MAKE ALL OF THE HTML IN THE VIEW?
  }

  createItemTemplate(items) {
    let itemTemplate = document.querySelector('#itemTemplate');
    let itemTemplateFunc = Handlebars.compile(itemTemplate.innerHTML);
    return itemTemplateFunc({items});
  }

  displayItems(items) {
    // DELETE EXISTING TODOS BEFORE EXECUTING THE CODE BELOW?

    let ul = document.querySelector('.grocery-list-ul');
    ul.innerHTML = this.createItemTemplate(items);
  }

  _getValueOf(selector, parentElem) {
    return parentElem.querySelector(selector).value;
  }

  bindAddItem(handler) {
    let form = document.querySelector('form');

    form.addEventListener('submit', e => {
      e.preventDefault();

      let name = this._getValueOf("#name", form);
      let quantity = this._getValueOf("#quantity", form) || "1";

      if (!name) return;

      handler(name, quantity);
      form.reset();
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindItemListChanged(this.onItemListChanged);
    this.view.bindAddItem(this.handleAddItem);

    this.onItemListChanged(this.model.items);
  }

  onItemListChanged = items => {
    this.view.displayItems(items);
  }

  // Event Handlers
  handleAddItem = (name, quantity) => {
    this.model.addItem(name, quantity);
  }
}

const app = new Controller(new Model(), new View());