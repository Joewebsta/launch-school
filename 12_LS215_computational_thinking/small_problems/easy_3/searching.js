let rlsync = require('readline-sync');

let num1 = rlsync.question('Enter the 1st number: ');
let num2 = rlsync.question('Enter the 2nd number: '); 
let num3 = rlsync.question('Enter the 3rd number: '); 
let num4 = rlsync.question('Enter the 4th number: '); 
let num5 = rlsync.question('Enter the 5th number: ');
let num6 = rlsync.question('Enter the last number: '); 

let numArr = [num1, num2, num3, num4, num5];

if (numArr.includes(num6)) {
  console.log(`The number ${num6} appears in [${numArr.join(', ')}].`)
} else {
  console.log(`The number ${num6} does not appear in [${numArr.join(', ')}].`)
}



/* 

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/