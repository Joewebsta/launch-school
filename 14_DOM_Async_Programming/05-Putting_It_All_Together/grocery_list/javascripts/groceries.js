class Model {
  constructor() {
    this.items = [
      { name: 'Apples', quantity: 20 },
      { name: 'Bananas', quantity: 2 },
    ];
  }

  addItem(name, quantity) {
    quantity = Number(quantity) || 1;

    this.items.push({ name, quantity });

    this.onTodoListChanged(this.items);

    // this.onItemListChanged = callback;
    // NEED TO UPDATE THE VIEW
    // need to call displayItems(items) again
  }

  bindItemListChanged(callback) {
    this.onTodoListChanged = callback;
  }
}

class View {
  constructor() {
    let app = document.querySelector('.app');
    let groceryTemplate = document.querySelector("#groceryTemplate");
    let groceryTemplateFunc = Handlebars.compile(groceryTemplate.innerHTML);
    app.innerHTML = groceryTemplateFunc();

    // NEEDS TO BE IN CONTROLLER
    // this.bindAddItem()
  }

  displayItems(items) {
    console.log(items);
    let groceryList = document.querySelector('#grocery-list');
    let itemListTemplate = document.querySelector('#itemListTemplate');
    let itemListTemplateFunc = Handlebars.compile(itemListTemplate.innerHTML);
    
    groceryList.innerHTML = itemListTemplateFunc({ items });
  }

  bindAddItem(handler) {
    let form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let name = document.querySelector('#name');
      let quantity = document.querySelector('#quantity');

      handler(name.value, quantity.value);
      form.reset();
    })
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // explicit bindings
    // When the view adds an item, the model adds an item
    // The view needs behavior from the model

    // binding methods that are listening for the events to the view
    this.view.bindAddItem(this.handleAddItem);

    // When the model adds an item, the view displays the item (all the items)
    // The model needs behavior from the view
    this.model.bindItemListChanged(this.view.displayItems);
    // this.model.onItemListChanged(this.view.displayItems);

    // display existing todos
    this.view.displayItems(this.model.items);
  }

  handleAddItem = (name, quantity) => {
    this.model.addItem(name, quantity);
  }
}

const app = new Controller(new Model(), new View());

