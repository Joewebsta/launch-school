let rlsync = require('readline-sync');

let age = Number(rlsync.question('What is your age? '));
let retireAge = Number(rlsync.question('At what age would you like to retire? '));
let yearsToRetire = retireAge - age;

let currentYear = new Date().getFullYear();
let retireYear = currentYear + yearsToRetire;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`)
console.log(`You have only ${yearsToRetire} years of work to go!`)
