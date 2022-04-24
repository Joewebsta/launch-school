/*
- You have a bank of switches before you, numbered from 1 to n. 
- Every switch is connected to exactly one light that is initially off. 

- Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

- You walk down the row of switches and toggle every one of them. 
- You walk back to the beginning of the row and start another pass. 
- On this second pass, you toggle switches 2, 4, 6, and so on. 
- On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
- You continue to repeat this process until you have gone through n repetitions.



INPUT
- Integer
 - The total number of switches (i.e. the bank of switches) 

 OUTPUT
- Array
- The lights that are on after n repetitions
  - The switch number associated with the light
  
RULES/REQUIREMENTS

CONCEPTS/MODELING
- Bank of switches
  - Switches are numbered from 1 to n (1 to 5)
  - Every switch is associated with 1 light's on/off state.
  - All lights are initially off
- Toggling pass
  - The switches are passed over the same number of times as the input integer (n)
- Toggling switches
  - 'pass' value increase by one on each subsequent pass
  - On each pass, the switches that are evenly divisible by the pass number are toggled 

    1 2 3 4 5
  1 t t t t t
  2 t f t f t
  3 t f f f t
  4 t f f t t
  5 t f f t f


  DATA STRUCTURE / ALGO
  - Object
    - switch numbers associated with boolean values
  
  - Create an object with keys from 1 to n
  - Set each key value to false
  - set lights = {}

  for loop
  iterate from 1 to n
  on each iteration set key to n and value to false

  - set passNum to 1
  - Iterate over each object property (for in)
  - if property name % passNum === 0, set property value to opposite of current property value
  - Increase passNum by 1
  

  - When iteration is complete
  - set onLights to []
  - iterate over object properties
  - if prop val is true, then push prop name to array 

  - return onLights
  */

function lightsOn(switches) {
  let lights = {};
  for (let i = 1; i <= switches; i += 1 ) {
    lights[String(i)] = false;
  }
  
  let passNum = 1;
  while( passNum <= switches) {
    for (let switchNum in lights) {
      if (switchNum % passNum === 0) {
        lights[switchNum] = !lights[switchNum];
      }
    }
    passNum += 1;
  }

  let onLights = [];
  for (let switchNum in lights) {
    if (lights[switchNum]) {
      onLights.push(switchNum);
    }
  }

  return onLights.map(lightNum => Number(lightNum))
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]