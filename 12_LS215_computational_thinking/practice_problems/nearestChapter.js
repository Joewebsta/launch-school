function nearestChapter(chapters, page) {
  if (page < 1) return "Invalid page number";
  
  let chapterNames = Object.keys(chapters);
  let pageVals = Object.values(chapters);
  
  for (let i = 0; i < pageVals.length; i += 1) {
    let chapAPage = pageVals[i];
    let chapBPage = pageVals[i + 1] || Infinity;
    
    if (page >= chapAPage && page <= chapBPage) {
      let distanceToA = Math.abs(chapAPage - page);
      let distanceToB = Math.abs(chapBPage - page);

      if (distanceToA < distanceToB) {
        return chapterNames[i];
      } else {
        return chapterNames[i + 1];
      }
    }
  }
}


console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 0)) // ➞ "Invalid page number"

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, -10)) // ➞ "Invalid page number"

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 1)) // ➞ "Chapter 1"

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10)) // ➞ "Chapter 2"

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)) // ➞ "The End?"

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 500)) // ➞ "The True Ending"

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 1000)) // ➞ "The True Ending"

console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3)) // ➞ "Chapter 1b"


// Nearest Chapter
// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

// Examples
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) // ➞ "Chapter 2"

// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) // ➞ "The End?"

// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 500) // ➞ "The True Ending"

// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) // ➞ "Chapter 1b"

/*
INPUT
- 2 args
- obj - represents chapter names and starting page number
- num - represents selected page

OUTPUT
- String - represents nearest chapter name


RULES
- If two chapters are equidistant 
  - return the chapter with the higher page number.
- 

QUESTIONS
- invalid inputs? How to handle?
- empty hash as input?

TEST CASES
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 0) // ➞ "Invalid page number"

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, -10) // ➞ "Invalid page number"

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) // ➞ "Chapter 2"

// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) // ➞ "The End?"

// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 500) // ➞ "The True Ending"

// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 1000) // ➞ "The True Ending"

// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) // ➞ "Chapter 1b"

APPROACH

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) // ➞ "Chapter 2"

10
Find two chapters target is between
"Chapter 1" : 1,
"Chapter 2" : 15

Find difference between target and two chapters

set keys = chapters.keys
Iterate over each key, keep track of each index
set chap 1 = obj[keys[i]]
set chap 2 = obj[keys[i + 1]] || Infinity

if target > chap1 val && target < chap2 val

if abs(distance to chap2) <= abs(distance to chap1 return chap1)


DATA STRUCTURE


ALGO

*/

