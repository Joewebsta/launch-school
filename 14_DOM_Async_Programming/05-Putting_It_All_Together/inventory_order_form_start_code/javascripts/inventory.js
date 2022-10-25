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
      update: function($item) {
        var id = this.findID($item),
            item = this.get(id);
  
        item.name = $item.find("[name^=item_name]").val();
        item.stock_number = $item.find("[name^=item_stock_number]").val();
        item.quantity = $item.find("[name^=item_quantity]").val();
      },
  
      newItem: function(e) {
        e.preventDefault();

        console.log('hello there!');
        console.log(this);
        var item = this.add(),
            $item = $(this.template.replace(/ID/g, item.id));
  
        $("#inventory").append($item);

        console.log(this)
        console.log(this.template)
      },
      
      findParent: function(e) {
        return $(e.target).closest("tr");
      },
      
      findID: function($item) {
        return +$item.find("input[type=hidden]").val();
      },
      
      deleteItem: function(e) {
        e.preventDefault();
        var $item = this.findParent(e).remove();
  
        this.remove(this.findID($item));
      },
      
      updateItem: function(e) {
        console.log('hello');
        var $item = this.findParent(e);
  
        this.update($item);
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
        this.cacheTemplate();
        this.bindEvents();
      }
    };
  })();

  inventory.init();
});
