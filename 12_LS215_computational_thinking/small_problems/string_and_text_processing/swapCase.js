function swapCase(string) {
  return string.split('')
               .map(oppositeCase)
               .join('');
}

function oppositeCase(char) {
  if (/[a-z]/.test(char)) return char.toUpperCase();
  if (/[A-Z]/.test(char)) return char.toLowerCase();
  return char;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"