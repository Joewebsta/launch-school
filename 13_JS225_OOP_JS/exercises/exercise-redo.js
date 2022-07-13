// // const invoices = {
// //   unpaid: [],
// //   paid: [],

// //   add(name, amount) {
// //     this.unpaid.push({
// //       name,
// //       amount,
// //     })
// //   },

// //   payInvoice(clientName) {
// //     const paid = this.unpaid.filter(({name}) => name === clientName);
// //     const unpaid = this.unpaid.filter(({name}) => name !== clientName);
// //     this.paid = this.paid.concat(paid);
// //     this.unpaid = unpaid;
// //   },

// //   totalPaid() {
// //     return this.paid.reduce((sum, { amount }) => sum + amount, 0);
// //   },

// //   totalDue() {
// //     return this.unpaid.reduce((sum, { amount }) => sum + amount, 0);
// //   }
// // };

// const invoices = (() => {
//   let unpaid = [];
//   let paid = [];
  
//   return {
//     add(name, amount) {
//       unpaid.push({
//         name,
//         amount,
//       })
//     },
  
//     payInvoice(clientName) {
//       const paidInvoices = unpaid.filter(({name}) => name === clientName);
//       const unpaidInvoices = unpaid.filter(({name}) => name !== clientName);
//       paid = paid.concat(paidInvoices);
//       unpaid = unpaidInvoices;
//     },
  
//     totalPaid() {
//       return paid.reduce((sum, { amount }) => sum + amount, 0);
//     },
  
//     totalDue() {
//       return unpaid.reduce((sum, { amount }) => sum + amount, 0);
//     }
//   };
// })();


// invoices

// console.log(invoices.paid);
// console.log(invoices.unpaid);

// invoices.add('Due North Development', 250);
// invoices.add('Moonbeam Interactive', 187.50);
// invoices.add('Slough Digital', 300);

// console.log(invoices.totalDue());
// invoices.payInvoice('Due North Development');
// invoices.payInvoice('Slough Digital');

// console.log(invoices.totalPaid());
// console.log(invoices.totalDue());

// invoices;


// let animal = {
//   name: 'Pumbaa',
//   species: 'Phacochoerus africanus',
// };

// let menagerie = {
//   warthog: animal,
// };

// animal = {
//   name: 'Timon',
//   species: 'Suricata suricatta',
// };

// menagerie.meerkat = animal;

// console.log(menagerie.warthog);
// console.log(menagerie.meerkat);

// animal

// menagerie.warthog === animal; // false
// menagerie.meerkat === animal; // true


// function makeCar(accelRate, brakeRate) {
//   return {
//     speed: 0,
//     accelRate,
//     brakeRate,
//     accelerate() {
//       this.speed += this.accelRate;
//     },
//     brake() {
//       this.speed -= this.brakeRate;
//       if (this.speed < 0) {
//         this.speed = 0;
//       }
//     },
//   };
// }

// const MakeCar2 = (() => {
//   let speed = 0;
//   let accelRate;
//   let brakeRate;

//   return function(aRate, bRate) {
//     accelRate = aRate;
//     brakeRate = bRate;

//     this.speed = function() {
//       return speed;
//     }

//     this.accelerate = function() {
//       speed += accelRate;
//     };
    
//     this.brake = function() {
//       speed -= brakeRate;
//       if (speed < 0) {
//         speed = 0;
//       }
//     };
//   }
// })();

// MakeCar2

// function MakeCar(accelRate, brakeRate) {
//   this.speed = 0;
//   this.accelRate = accelRate;
//   this.brakeRate = brakeRate;
// };

// MakeCar.prototype.accelerate = function() {
//   this.speed += this.accelRate;
// };

// MakeCar.prototype.brake = function() {
//   this.speed -= this.brakeRate;
//   if (this.speed < 0) {
//     this.speed = 0;
//   }
// };

// class MakeCar {
//   constructor(accelRate, brakeRate) {
//     this.speed = 0;
//     this.accelRate = accelRate;
//     this.brakeRate = brakeRate;
//   }
  
//   accelerate() {
//     this.speed += this.accelRate;
//   };
  
//   brake() {
//     this.speed -= this.brakeRate;
//     if (this.speed < 0) {
//       this.speed = 0;
//     }
//   };
// };
  

// const Car = (() => {
//   let accelRate;
//   let brakeRate;
//   let speed = 0;

//   return {
//     init(aRate, bRate) {
//       accelRate = aRate;
//       brakeRate = bRate;
//     },
  
//     speed() {
//       return speed;
//     },

//     accelerate() {
//       speed += accelRate;
//     },
  
//     brake() {
//       speed -= brakeRate;
//       if (speed < 0) {
//         speed = 0;
//       }
//     },
//   };
// })();




// let sedan = Object.create(Car)
// sedan.init(8,6);
// sedan.accelerate();
// console.log(sedan.speed()); 
// // 8
// sedan.brake();
// console.log(sedan.speed()); 
// // 2
// sedan.brake();
// console.log(sedan.speed()); 
// // 0

// let coupe = Object.create(Car)
// coupe.init(10,2);
// sedan.accelerate();
// console.log(coupe.speed()); 
// // 8
// coupe.brake();
// console.log(coupe.speed()); 
// // 2
// coupe.brake();
// console.log(coupe.speed()); 


// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add() {
//      return this.a + this.b;
//    },
// };


// console.log(bar.add.call(foo))

// let fruitsObj = {
//   list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
//   title: 'A Collection of Fruit',
// };

// function outputList(...args) {
//   console.log(this.title + ':');

//   args  

//   args.forEach(function(elem) {
//     console.log(elem);
//   });
// }

// // invoke outputList here

// outputList.call(fruitsObj, ...fruitsObj.list)


// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod.call(myObject));


// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function(number) {
//     return number % 2 === 0;
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven));; // [2, 4]
// // console.log(numbers.filter(); // [2, 4]

// function execute(func, operand) {
//   return func(operand);
// }

// let t1 = execute(function(number) {
//   return number * 2;
// }, 10); // 20

// t1

// let t2 = execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy'); // "HEY THERE BUDDY"

// t2


// let timesTwo = function(numbers) {
//   return numbers.map(function(number) { return number * 2});
// }


// function makeListTransformer(func) {
//   return function(numbers) {
//     return numbers.map(func);
//   }
// }

// let timesTwo = makeListTransformer(function(number) {
//   return number * 2;
// }); 

// console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]

// function makeMultipleLister(num) {
//   let total = num;

//   return function() {
//     while(total <= 100) {
//       console.log(total)
//       total += num;
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister
// lister();
// // 13
// // 26
// // 39
// // 52
// // 65
// // 78
// // 91

// const math = (function(){
//   let total = 0;

//   return {
//     add(num) {
//       return total += num;
//     },
    
//     subtract(num) {
//       return total -= num;
//     }
//   }
// })();

// const add = math.add;
// const subtract = math.subtract;

// console.log(add(1));
// console.log(add(42));
// console.log(subtract(39));
// console.log(add(6));


// function makeList() {
//   const list = [];

//   return {
//     add(item) {
//       if (!list.includes(item)) {
//         list.push(item);
//         console.log(`${item} added!`)
//       }
//     },
    
//     list() {
//       list.forEach((item) => console.log(item))
//     },
    
//     remove(itemName) {
//       list.splice(list.findIndex(item => item === itemName), 1);
//       console.log(`${itemName} removed!`);
//     }
//   }
// };

// const List = (() => {
//   const itemList = [];
  
//   return {
//     add(item) {
//       if (!itemList.includes(item)) {
//         itemList.push(item);
//         console.log(`${item} added!`)
//       }
//     },
    
//     list() {
//       if (itemList.length === 0) {
//         console.log('empty list')
//       } else {
//         itemList.forEach((item) => console.log(item))
//       }
//     },
    
//     remove(itemName) {
//       itemList.splice(itemList.findIndex(item => item === itemName), 1);
//       console.log(`${itemName} removed!`);
//     },
//   }

// })();

// // List

// let list = Object.create(List);

// list.add('apples');
// list.add('peas');
// list.add('peas');
// // // = peas added!

// list.list();
// // // = peas

// // console.log(list2.items);
// list.add('corn');
// // // = corn added!

// list2.list();
// // // = peas
// // // = corn

// list.remove('apples');
// // // = peas removed!

// list.list();
// // // = corn


// let list2 = Object.create(List);
// list2.list()

// let list3 = new MakeList2();
// list3

// list3.add('peas');
// list3.list()


// let list2 = new MakeList2();
// // list2

// list2.add('apples');
// // list2.add('peas');
// // list2.add('peas');
// // // = peas added!

// list2.list();
// // // = peas

// // console.log(list2.items);
// list2.add('corn');
// // // = corn added!

// list2.list();
// // // = peas
// // // = corn

// list2.remove('peas');
// // // = peas removed!

// list2.list();
// // // = corn

// let list3 = new MakeList2();
// list3

// list3.list()

// list3.add('apples');
// list3.add('apples');
// list3.add('apples');
// // = apples added!

// console.log(list3.list()); 
// // = apples

// // console.log(list3.items);
// list3.add('corn');
// // // = corn added!

// list3.list();
// // // = apples
// // // = corn

// list3.remove('apples');
// // // = apples removed!

// list3.list();
// // = corn



// function makeList() {
//   const list = [];

//   return {
//     add(item) {
//       if (!list.includes(item)) {
//         list.push(item);
//         console.log(`${item} added!`)
//       }
//     },
    
//     list() {
//       list.forEach((item) => console.log(item))
//     },
    
//     remove(itemName) {
//       list.splice(list.findIndex(item => item === itemName), 1);
//       console.log(`${itemName} removed!`);
//     }
//   }
// };


// let list = makeList();
// list

// list.add('peas');
// list.add('peas');
// list.add('peas');
// // = peas added!

// list.list();
// // = peas

// console.log(list.items);
// list.add('corn');
// // // = corn added!

// list.list();
// // // = peas
// // // = corn

// list.remove('peas');
// // // = peas removed!

// list.list();
// // // = corn


// Project: Banking with Objects and Closures



// let bank = makeBank();
// console.log(bank.accounts);
// []




// const makeBank = function() {
//   let accountNumber = 101;
//   const accounts = [];
  
//   const createTransaction = function(type, amount) {
//     return {type, amount};
//   }
  
//   const makeAccount = function(accountNumber) {
//     let number = accountNumber;
//     let balance = 0;
//     const transactions = [];
    
//       return {
//       number() {
//         return number;  
//       },
      
//       balance() {
//         return balance;  
//       },
      
//       transactions() {
//         return transactions;  
//       },
    
//       deposit(amount) {
//         balance += amount;
//         transactions.push(createTransaction('deposit', amount));
//         return amount;
//       },
    
//       withdraw(amount) {
//         if (amount > balance) {
//           amount = balance;
//         }
    
//         balance -= amount;
//         transactions.push(createTransaction('withdraw', amount));
//         return amount;
//       }
//     };
//   }


//   return {
//     openAccount() {
//       const account = makeAccount(accountNumber);
//       accounts.push(account);
//       accountNumber += 1;
//       return account;
//     },

//     transfer(source, destination, amount) {
//       source.withdraw(amount);
//       destination.deposit(amount);
//       return amount;
//     }
//   }
// }


// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.balance());
// console.log(account.number());
// // = 0
// console.log(account.deposit(17));
// // = 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // = 102
// console.log(account.transactions());
// // = [Object]

// console.log(bank.accounts)
// let bank = makeBank();
// let account = bank.openAccount();
// account
// console.log(account.number);
// // = 101
// console.log(bank.accounts);
// // = [{...}]
// console.log(bank.accounts[0]);
// // = {number: 101, balance: 0, transactions: Array[0]}
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // = 102


// const account = makeAccount();

// console.log(account.deposit(100));
// console.log(account.transactions);
// console.log(account.balance);
// // = 100
// console.log(account.withdraw(190));
// console.log(account.transactions);
// // = 19
// console.log(account.balance);
// // = 81

// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// 0

// console.log(account.balance);
// // = 0
// console.log(account.deposit(12));
// // = 12
// console.log(account.balance);
// // = 12
// console.log(account.deposit(10));
// // = 10
// console.log(account.balance);
// // = 22


// const greet = function(greeting, name) {
//   greeting = greeting[0].toUpperCase() + greeting.substring(1);
//   console.log(`${greeting} ${name}!`)
// }

// // greet('howdy', 'Joe');
// // // Howdy, Joe!
// // greet('good morning', 'Sue');
// // // Good morning, Sue!

// const makeGreeting = function(func, greeting) {
//   return function(name) {
//     func(greeting, name);
//   }
// }

// const sayHello = makeGreeting(greet, 'Hello');
// const sayHi = makeGreeting(greet, 'Hi');

// sayHello('Brandon');
// // Hello, Brandon!
// sayHi('Sarah');
// // Hi, Sarah!

// function partial(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// Practice Problems: Partial Function Application

// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5);
// }



// console.log(sub5(10)); // 5
// console.log(sub5(20)); // 15


// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(b) {
//   return function(a) {
//     return subtract(a, b)
//   }
// }

// let sub5 = makeSubN(5);
// console.log(sub5(10)); // 5

// function makePartialFunc(func, b) {
//   return function(a) {
//     return func(a, b);
//   }
// }

// function multiply(a, b) {
//   return a * b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);

// console.log(multiplyBy5(100)); // 500

// let subjects = {
//   English: ['Bob', 'Tyrone', 'Lizzy'],
//   Math: ['Fatima', 'Gary', 'Susan'],
//   Biology: ['Jack', 'Sarah', 'Tanya'],
// };

// function rollCall(subject, students) {
//   console.log(subject + ':');
//   students.forEach(function(student) {
//     console.log(student);
//   });
// }

// function makeMathRollCall() {
//   return function(students) {
//     rollCall('Math', students);
//   }
// }

// let mathRollCall = makeMathRollCall();
// mathRollCall(subjects['Math']);
// // => Math:
// // => Fatima
// // => Gary
// // => Susan


// Practice Problems: IIFEs

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// sum

// const countdown = (function(num) {
//   return function() {
//     for (let i = num; i >= 0; i -= 1) {
//       console.log(i)
//     }
  
//     console.log('Done!')
//   }
// })()


// countdown(7);
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // 0
// // Done!


// Practice Problems: Create Objects with Factory Functions

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo(); // 2

// foo.bar(); // 2
// Foo(); // 2

// obj = {}; 
// Foo.call(obj); // 2
// obj.bar(); // 2

// console.log(this.a);
// console.log(this)

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();


// Ninja.prototype.swingSword = function() {
//   return this.swung;
// },


// console.log(Ninja.prototype)

// console.log(ninja.swingSword());

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true


// let ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// let ninjaB = new ninjaA.constructor()

// // create a ninjaB object

// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true


// function createObject(obj) {
//   function F() {};
//   F.prototype = obj;
//   return new F();
  
//   // const obj2 = {};
//   // Object.setPrototypeOf(obj2, obj)
//   // return obj2;
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true


// Object.prototype.begetObject = function() {
//   const F = function() {};
//   F.prototype = this;
//   return new F();
// }

// let foo = {
//   a: 1,
// };

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true


// function neww(constructor, args) {
//   constructor
//   args

//   return Object.create(constructor.prototype)
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// john.greeting();          // => Hello, John Doe
// john.constructor;         // Person(firstName, lastName) {...}


// Student


const createStudent = (name, year) => {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${name} is a ${year} year student`)
    },

    listCourses() {
      return this.courses;
    },

    getCourse(courseCode) {
      return this.courses.find(({ code }) => code === courseCode);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      const course = this.getCourse(code);
      if (course.note) {
        course.note.push(note);
      } else {
        course.note = [note];
      }
    },

    viewNotes() {
      this.listCourses().filter(({ note }) => note).forEach(({ name, note }) => {
        console.log(`${name}: ${note.join('; ')}`)
      });
    },

    updateNote(code, newNote) {
      const course = this.getCourse(code);
      if (course) {
        course.note = [newNote];
      }
    }
  }
}

let foo = createStudent('Foo', '1st');
foo
foo.info();
// "Foo is a 1st year student"
console.log(foo.listCourses());
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"