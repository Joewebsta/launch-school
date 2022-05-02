function cleanUp(files, method) {  
  if (method === 'prefix') {
    return organizeByMethod(files, method);
  } else if (method === 'suffix') {
    return organizeByMethod(files, method);
  }
}

function organizeByMethod(files, method) {
  let fileNamePortion = (method === 'prefix' ? 0 : 1);
  let organizedFiles = [];
  let seen = [];

  files.forEach(fileName => {
    let filePrefix = fileName.split('.')[fileNamePortion];

    if (!seen.includes(filePrefix)) {
      let regex = new RegExp(filePrefix)
      organizedFiles.push(files.filter(file => file.match(regex)));
    }

    seen.push(filePrefix)
  });
  
  return organizedFiles;
}

/*

Create a function that takes in the current folder sorts the files according to the organization method (prefix or suffix). 

Examples
// Sorting by project name (ex1 and ex2)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") // ➞ [
  ["ex1.html", "ex1.js"],
  ["ex2.html", "ex2.js"]
]

cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix") // ➞ [
  ["music_app.js", "music_app.png", "music_app.wav"],
  ["tetris.png", "tetris.js"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") // ➞ [
  ["_1.rb"], ["_2.rb"],
  ["_3.rb"], ["_4.rb"]
]

// Sorting by extension (.html and .js)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") // ➞ [
  ["ex1.html", "ex2.html"],
  ["ex1.js", "ex2.js"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") // ➞ [
  ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
]

Notes
Keep elements in the same relative order.


INPUT
- An array
- contains strings -> reprsent file names

OUTPUT
- An array of arrays
- a folder is a sub array
- A folder is a grouping of files in the same array.

RULES
- Two organizational methods
  - The prefix method: You will group all files with the same project name under the same folder.
  - The suffix method: You will group all files with the same extension under the same folder. 
- Keep elements in the same relative order.

- There are as many sub arrays as there are suffixes
- There are as many sub arrays as there are prefixes


QUESTIONS
- Return new array?
- What counts as valid input?

# PREFIX --------------------

TEST CASES
// Sorting by project name (ex1 and ex2)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") // ➞ [
  ["ex1.html", "ex1.js"],
  ["ex2.html", "ex2.js"]
]

cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix") // ➞ [
  ["music_app.js", "music_app.png", "music_app.wav"],
  ["tetris.png", "tetris.js"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") // ➞ [
  ["_1.rb"], ["_2.rb"],
  ["_3.rb"], ["_4.rb"]
]

# SUFFIX --------------------

// Sorting by extension (.html and .js)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") // ➞ [
  ["ex1.html", "ex2.html"],
  ["ex1.js", "ex2.js"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") // ➞ [
  ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
]

APPROACH

- iterate
- first elem
- check if fileName has already been seen
- get file name
- filter by file name -> append to result array
- add filename to seen array


DATA STRUCTURE
- arrays
- regex

ALGO

- create cleanUp(files, method)
  - check for method type
    - prefix
      - set seen to []
      - iterate over files array. On each iteration
        - determine file name - split
        - check if fileName has already been seen
          - if true, continue
          - if false,
            - filter by file name
              - append to result array
            - add filename to seen array
      - suffix
        - set seen to []
        - iterate over files array. On each iteration
          - determine suffix - regex - substring following the '.'
          - check if suffix has already been seen
            - if true, continue
            - if false,
              - filter by suffix
                - append to result array
              - add filename to seen array

*/

// function organizeBySuffix(files) {
//   let organizedFiles = [];
//   let seen = [];

//   files.forEach(fileName => {
//     let filePrefix = fileName.split('.')[1];

//     if (!seen.includes(filePrefix)) {
//       let regex = new RegExp(filePrefix)
//       organizedFiles.push(files.filter(file => file.match(regex)));
//     }

//     seen.push(filePrefix)
//   });
  
//   return organizedFiles;
// }

// # PREFIX --------------------

// TEST CASES
// Sorting by project name (ex1 and ex2)

console.log(cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix")) 
// ➞ [
//   ["ex1.html", "ex1.js"],
//   ["ex2.html", "ex2.js"]
// ]

console.log(cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix"))

// ➞ [
//   ["music_app.js", "music_app.png", "music_app.wav"],
//   ["tetris.png", "tetris.js"]
// ]

console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix")) 

// // ➞ [
//   ["_1.rb"], ["_2.rb"],
//   ["_3.rb"], ["_4.rb"]
// ]

// # SUFFIX --------------------

// Sorting by extension (.html and .js))

console.log(cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix")) 

// // ➞ [
//   ["ex1.html", "ex2.html"],
//   ["ex1.js", "ex2.js"]
// ]

console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix")) 

// // ➞ [
//   ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
// ]