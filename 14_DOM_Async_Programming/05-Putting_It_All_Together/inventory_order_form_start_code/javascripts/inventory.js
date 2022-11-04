document.addEventListener('DOMContentLoaded', () => {
  var inventory;

  (function() {
    inventory = {
      lastId: 0,
      collection: [],
  
      setDate: function() {
        var date = new Date();
        document.querySelector('#order_date').textContent = date.toUTCString();
      },
  
      cacheTemplate: function() {
        this.template = document.querySelector('#inventory_item').innerHTML;
      },
  
      // CREATE
      add: function() { 
        this.lastId++;
        var item = {
          id: this.lastId,
          name: "",
          stock_number: "",
          quantity: 1
        };
        this.collection.push(item);
  
        return item;
      },
      
      // DELETE
      remove: function(idx) { 
        this.collection = this.collection.filter(function(item) {
          return item.id !== idx;
        });
      },
  
      // READ
      get: function(id) {
        var found_item;
  
        this.collection.forEach(function(item) {
          if (item.id === id) {
            found_item = item;
            return false;
          }
        });
  
        return found_item;
      },
  
      // UPDATE
      update: function(itemTR) {
        var id = this.findID(itemTR);
        var item = this.get(id);
  
        // item.name = $item.find("[name^=item_name]").val();
        item.name = itemTR.querySelector("[name^=item_name]").value;
        // item.stock_number = $item.find("[name^=item_stock_number]").val();
        item.stock_number = itemTR.querySelector("[name^=item_stock_number]").value;
        // item.quantity = $item.find("[name^=item_quantity]").val();
        item.quantity = itemTR.querySelector("[name^=item_quantity]").value;
      },
  
      newItem: function(e) {
        e.preventDefault();
        
        let item = this.add();
        let inventoryItemTemplate = document.querySelector('#inventory_item_template');
        let inventoryItemTemplateFunc = Handlebars.compile(inventoryItemTemplate.innerHTML);
        document.querySelector('#inventory').insertAdjacentHTML('beforeend', inventoryItemTemplateFunc({id: item.id}));

        // let item = this.add();
        // console.log(this.template.replace(/ID/g, item.id));
        // let $item = $(this.template.replace(/ID/g, item.id));
        // $("#inventory").append($item);
      },
      
      findParent: function(e) {
        // return $(e.target).closest("tr");
        return e.target.closest('tr');
      },
      
      findID: function(item) {
        return Number(item.querySelector('input[type="hidden"]').value);
      },
      
      deleteItem: function(e) {
        e.preventDefault();
        var $item = this.findParent(e).remove();
  
        this.remove(this.findID($item));
      },
      
      updateItem: function(e) {
        var item = this.findParent(e);
  
        this.update(item);
      },
      
      bindEvents: function() {
        // $("#add_item").on("click", $.proxy(this.newItem, this));
        document.querySelector('#add_item').addEventListener('click', this.newItem.bind(this));
        
        // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
        document.querySelector('#inventory').addEventListener('click', e => {
          if (e.target.className === 'delete') {
            this.deleteItem.call(this, e);
          }
        });

        // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
        document.querySelector('#inventory').addEventListener('focusout', e => {
          if (e.target.tagName === 'INPUT') {
            this.updateItem(e);
          }
        });
      },
  
      init: function() {
        this.setDate();
        // this.cacheTemplate();
        this.bindEvents();
      }
    };
  })();

  inventory.init();
});
