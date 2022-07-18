const Account = (() => {
  let email;
  let firstName;
  let lastName;
  let password;
  
  function anonymize() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let displayName = '';

    for (let i = 1; i <= 16; i += 1) {
      displayName += chars[Math.floor(Math.random() * 62)];
    }

    return displayName;
  }

  function correctPassword(password, guess) {
    return password === guess;
  }

  return {
    init(AcctEmail, AcctPassword, AcctFirstName, AcctLastName) {
      email = AcctEmail;
      firstName = AcctFirstName;
      lastName = AcctLastName;
      password = AcctPassword;
      this.displayName = anonymize();
      return this;
    },

    firstName(passwordGuess) {
      if (correctPassword(password, passwordGuess)) {
        return firstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(passwordGuess) {
      if (correctPassword(password, passwordGuess)) {
        return lastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(passwordGuess) {
      if (correctPassword(password, passwordGuess)) {
        return email;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPassword, newPassword) {
      if (correctPassword(password, currentPassword)) {
        password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    reanonymize(passwordGuess) {
      if (correctPassword(password, passwordGuess)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    }
  }
})();



let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
fooBar
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.lastName('123456'));           // logs 'foo'
// console.log(fooBar.lastName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.email('123456'));           // logs 'foo'
// console.log(fooBar.email('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false