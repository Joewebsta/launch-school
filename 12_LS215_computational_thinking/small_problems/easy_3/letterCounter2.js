function wordSizes(string) {
  let wordsArr = string.replace(/[^a-z ]/gi, '').split(' ');
  let sizesObj = {};

  if (string.length === 0) return sizesObj;

  wordsArr.forEach(word => {
    let size = word.length;

    sizesObj[size] ||= 0
    sizesObj[size] += 1
  });

  return sizesObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}

/* 
INPUT
- string

OUTPUT
- object
- keys: length a word
- values: the total number of words that share the same length

RULES/REQUIREMENTS
- words consist of any sequence of non-space chars (special chars are included in the length of the word))
- empty string returns and empty hash
- key are ordered from smallest to largest 

QUESTIONS


APPROACH
'Four score'
['Four', 'score']
{"4":1, "5":1}

EXAMPLES/TEST CASES

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

DATA STRUCTURE/ALGO
- create a function wordSizes(string)
  - set wordsArr = split string into array of words
  - set sizesObj = {}
  - iterate over each word in wordsArray (forEach)
    - set size = determine the size of the word
    - check if sizesObj[size] returns a truthy value
      - if true, increase sizesObj[size] by 1
      - if false, set sizesObj[size] to 1
  - return sizesObj
*/
