function staggeredCase(string) {
  let uppercase = true;

  return string.split('')
               .map((char) => {
                if (/[^a-z]/i.test(char)) return char;

                if(uppercase) {
                  uppercase = !uppercase;
                  return char.toUpperCase();
                } else {
                  uppercase = !uppercase;
                  return char.toLowerCase();
                }
               })
               .join('');
}


function staggeredCase2(str) {
  let needsUpper = true;
  let newChar = '';

  return str.split('')
     .map(char => {
      if (/[a-z]/i.test(char)) {
        if (needsUpper) {
          newChar = char.toUpperCase();
        } else {
          newChar = char.toLowerCase();
        }

        needsUpper = !needsUpper;
        return newChar;
      } else {
        return char;
      }
     })
     . join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!");        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS");                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs");   // "IgNoRe 77 ThE 4444 nUmBeRs"