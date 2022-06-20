function newStack() {

  let stack = [];

  return {
    push(elem) {
      stack.push(elem);
    },
    
    pop() {
      return stack.pop();
    },
    
    printStack() {
      stack.forEach(elem =>  {
        console.log(elem);
      })
    },
  }
}

let myStack = newStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.pop());
console.log(myStack.pop());
myStack.printStack();
console.log(myStack.stack);