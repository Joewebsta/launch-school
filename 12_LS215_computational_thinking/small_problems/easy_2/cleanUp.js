function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ')
}

// function cleanUp(string) {
//   let cleanedString = '';

//   for (let i = 0; i < string.length; i += 1) {
//     if (/[a-z0-9]/.test(string[i]) ) {
//       cleanedString += string[i]
//     } else if (cleanedString.at(-1) !== ' ') {
//       cleanedString += ' ';
//     }
//   }

//   return cleanedString;
// }

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

/*
- set cleanedString1 to ''
- Create for loop that starts at index = 0 and repeats while index < string.length
- On each loop execution
  - Check if string[index] is a special char (NOT a-z0-9)
    - if true, append space to cleanedString1
    - if false, append char to cleanedString1

- set cleanedString2 to ''
- Create a loop that starts at index = 0 and repeats while index < cleanedString1.length
 - Set currentChar to string[index]
 - Set nextChar to string[index + 1]
 - Check if currentChar === ' ' && nextChar === ''
  - if true, continue
  - if false, append single space to cleanedString
 */


  // - set cleanedString1 to ''
  // - Create for loop that starts at index = 0 and repeats while index < string.length
  // - On each loop execution
  //   - Check if string[index] is a special char (NOT a-z0-9)
  //     - if true, append space to cleanedString1
  //     - if false, append char to cleanedString1

