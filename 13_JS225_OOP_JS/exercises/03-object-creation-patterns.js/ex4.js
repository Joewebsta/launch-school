/*
INPUT


OUTPUT


RULES
- account prototype object
  - makes user objects anonymous

- 16 character sequence composed of letters and numbers

- functions
  - public
    - init
    - reanonymize



TEST CASES


DATA STRUCTURE/ALGO


generateDisplayName()

INPUT
- none

OUTPUT
- string
- 16 characters long
- contains letters and numbers
- uppercase and lowercase letters

RULES


TEST CASES


DATA STRUCTURE/ALGORITHM

*/

const Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function anonymize() {
    const characters = "012345679abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sequence = '';

    for (let i = 1; i <= 16; i += 1) {
      sequence += characters[getRandomIndex(0, 60)];
    } 

    return sequence;
  };

  function isValidPassword(password) {
    return password === userPassword;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    email(password) {
      return isValidPassword(password) ? userEmail : 'Invalid Password';
    },
    
    firstName(password) {
      return isValidPassword(password) ? userFirstName : 'Invalid Password';
    },
    
    lastName(password) {
      return isValidPassword(password) ? userLastName : 'Invalid Password';
    },
    
    password(password) {
      return isValidPassword(password) ? userPassword : 'Invalid Password';
    },

    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPassword, newPassword) {
      if (isValidPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    }
  }
})();

// let fooBar = Object.create(Account)
// fooBar.init('foo@bar.com', '123456', 'foo', 'bar');
// fooBar
// // console.log(fooBar.email('123456'))
// // console.log(fooBar.firstName('123456'))
// // console.log(fooBar.lastName('123456'))
// console.log(fooBar.password('123456'))
// // console.log(fooBar.displayName)
// console.log(fooBar.resetPassword('123456', '1234'))
// console.log(fooBar.password('1234'))

// console.log(fooBar.displayName)


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false