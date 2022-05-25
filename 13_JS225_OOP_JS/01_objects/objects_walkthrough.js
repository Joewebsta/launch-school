let me = {
  firstName: 'Joe',
  lastName: 'Webster',
};

let scott = {
  firstName: 'Scott',
  lastName: 'Webster',
};

let gloria = {
  firstName: 24,
  lastName: 'Webster',
};


let people = {
  collection: [],
  
  rollCall() {
    this.collection.forEach(this.fullName);
  },

  fullName({ firstName, lastName }) {
    console.log(firstName + ' ' + lastName);
  },

  add(person) {
    if (this.isInValidPerson(person.firstName, person.lastName)) return;

    this.collection.push(person)
  },

  getIndex(fName, lName) {
    let idx = -1;

    this.collection.forEach(({ firstName, lastName }, i) => {
      if (firstName === fName && lastName === lName) {
        idx = i;
      }
    });

    return idx;
  },

  remove({ firstName, lastName } ) {
    let idx;
    if (this.isInValidPerson(firstName, lastName)) return;
    
    idx = this.getIndex(firstName, lastName);    
    if (idx === -1) return;

    this.collection.splice(idx, 1);
  },

  isInValidPerson(firstName, lastName) {
    return ![typeof(firstName), typeof(lastName)].every(item => item === 'string');
  },

  get(person) {
    if (this.isInValidPerson(person.firstName, person.lastName)) return;

    let idx = this.getIndex(person.firstName, person.lastName);
    return this.collection[idx];
  },

  update(person) {
    if (this.isInValidPerson(person.firstName, person.lastName)) return;

    let existingPersonId = this.getIndex(person.firstName, person.lastName);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
}

// people.remove(scott)

// people.remove(me);
// console.log(people.isValidPerson(gloria))
// people.remove(gloria)
// people.rollCall()
// console.log(people.get(me))