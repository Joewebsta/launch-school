class GroceryList {
  constructor(listContainerItem) {
    this.list = document.querySelector(listContainerItem);
  }

  addItem(name, quantity) {
    let listItem = document.createElement('li');
    listItem.textContent = `${quantity} ${name}`;

    this.list.append(listItem);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let groceryList = new GroceryList('#grocery-list');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(groceryList);
    console.log(groceryList.list);
    
    let itemName = document.querySelector('#name').value;
    let itemQuantity = document.querySelector('#quantity').value || '1';
  
    groceryList.addItem(itemName, itemQuantity);
    form.reset()
  });
});