// Exercise 1

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);
// undefined undefined is a undefined.

/* 
- On line 15, the `logReturnVal` is invoked and passed the `turk` object's `getDescription` method as an argument. 
- Within the logReturnVal function, the local variable `func` is initialized with the function passed as an argument.
- `func` is then invoked and returns the incorrect output "undefined undefined is a undefined." which is then assigned to the variable `returnVal`.
- We receive this incorrect output because the `getDescription` method has been removed from its containing object and its execution context is implicitly bound to the global object when it is invoked.
- As a result `this` within the function `func` references `window`.
- Thus when we attempt to access the firstName, lastName and occupation properties, `undefined` is returned.



- At this point 
*/