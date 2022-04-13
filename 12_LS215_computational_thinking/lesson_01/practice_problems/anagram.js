function anagram(word, list) {
  return list.filter(listWord => isAnagram(word, listWord));
}

function isAnagram(word, listWord) {
    return word.split('').sort().join() === listWord.split('').sort().join();
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]

// 'inlets'.split('').sort().join() === 'listen'.split('').sort().join()