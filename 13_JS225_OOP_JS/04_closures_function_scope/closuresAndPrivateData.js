// // Exercise 1
// function makeCounterLogger(start) {
//   return function(finish) {
//     if (start < finish) {
//       for (let i = start; i <= finish; i+= 1) {
//         console.log(i);
//       }
//     } else if (start > finish) {
//       for (let i = start; i >= finish; i -= 1) {
//         console.log(i);
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8
// countlog(2);
// // 5
// // 4
// // 3
// // 2


// Exercise 2
function makeList() {
  let todoList = [];

  function isInList(todo) {
    return todoList.includes(todo);
  }

  return function(todo) {
    if (!todo) {
      if (todoList.length === 0) {
        console.log('The list is empty.');
      } else {
        todoList.forEach(todo => console.log(todo));
      }

      return;
    }
    
    if (todo && isInList(todo)) {
      let todoIdx = todoList.indexOf(todo);
      todoList.splice(todoIdx, 1);
      console.log(`${todo} removed!`);      
    } else {
      todoList.push(todo);
      console.log(`${todo} added!`);
    }
  }
}

let list = makeList();
// list();
list('make breakfast');
list('read book');
// list();
list('make breakfast');
list();
// list('read book');