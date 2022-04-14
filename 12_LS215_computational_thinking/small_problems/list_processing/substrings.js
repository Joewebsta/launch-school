function leadingSubstrings(str) {
  return str.split('').map((char, index) => str.slice(0, index + 1));
}

function substrings(str) {
  return str.split('')
     .map((char, index) => leadingSubstrings(str.slice(index)))
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]