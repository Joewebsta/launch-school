function isRealPalindrome(string) {
  let cleanString = string.replace(/[^a-z]/gi, '')
                          .replace(/[A-Z]/g, replacer);

  return cleanString === cleanString.split('').reverse().join('');
}

function replacer(char) {
  return char.toLowerCase();
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter))
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter))
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

// 