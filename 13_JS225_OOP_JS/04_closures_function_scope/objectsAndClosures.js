function makeList() {
  let  items =  [];

  return {  
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },
    
    add(item) {
      if (!items.includes(item)) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },
    
    remove(item) {
      if (items.includes(item)) {
        let itemIdx = items.indexOf(item);
        items.splice(itemIdx, 1);
        console.log(`${item} removed!`);
      }
    },
  }
}

let list = makeList();
list.add('peas');
// peas added!
// list.list();
// peas
list.add('corn');
// corn added!
// list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn