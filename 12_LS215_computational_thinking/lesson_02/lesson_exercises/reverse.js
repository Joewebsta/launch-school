function reverse(string) {
  return string.split('')
        .reverse()
        // .map(word => word.split('').reverse().join(''))
        .join('');
}

reverse('hello');                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"