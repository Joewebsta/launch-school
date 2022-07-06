const Person = function(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.communicate = function() {
  return 'Communicating';
}

Person.prototype.eat = function() {
  return 'Eating';
}

Person.prototype.sleep = function() {
  return 'Sleeping';
}

module.exports = Person;