/*

You are given a list of numbers in a "short-hand" range where only the significant 
part of the next number is written because we know the numbers are always 
increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). 

Some people use different separators for their ranges 
(ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). 

Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

Input
- String
- Represents a short-hand range

Output
- Array
- Contains all numbers in the range

Rules
- Shorthand range only includes the significant par of the next number
- Numbers are always increasing
- Range limits are inclusive
- Ranges may use different separators - , : ..
- Comma separates individual ranges

Clarifying questions
- Empty string?
- Special characters other than valid separators?
- Data type of output? string or array? or print each number on separate line?
- Invalid range? () - Not possible?
- Back to back separators? 1:5:2? 1-5-2 also valid?

EXAMPLES / TEST CASES


DATA STRUCTURE/ALGO
- If input string includes a special char other than ','
  - set rangeNums to -> split input string by special char (- : ..)
  - set completeNumbers = []
  - iterate over rangeNums (for loop)
    - for each iteration
      - set currentNum to rangeNums[i]
      - set nextNum to rangeNums[i + 1]
      - if !nextNum break loop

      - if currentNum doesn't already included in completeNumbers
        - push currentNum to completeNumbers array
      - while (currentNum <= nextNum && currentNum doesn't match match the last digit of nextNum )
      - while (ne <= nextNum && currentNum doesn't match match the last digit of nextNum )
        - increase currentNum by 1 
        - push currentNum to completeNumbers
 */

// Single digit or no comma
console.log(completeRange("1, 3, 7, 2, 4, 1")); // --> [1, 3, 7, 2, 4, 1] --> [1, 3, 7, 12, 14, 21]
console.log(completeRange("7, 2")); // --> [7, 12]
console.log(completeRange("1")); // --> [1]

// Special chars
console.log(completeRange("1-3")); //        --> [1, 3]          --> [1, 2, 3]
console.log(completeRange("1:5:2")); //      --> [1, 5, 2]       --> [1, 2, 3, 4, 5, 6, ... 12]
console.log(completeRange("1-3, 1-2")); //   --> [1, 3, 1, 2]    --> [1, 2, 3, 11, 12]
console.log(completeRange("104-2")); //      --> [104, 2]        --> [104, 112] --> 104, 105, ... 112
console.log(completeRange("104-02")); //     --> [104, 02]       --> [104, 202] --> 104, 105, ... 202
console.log(completeRange("545, 64:11")); // --> [545, [64, 11]]   --> [545, 564, 565, .. 611]

// "545, 64:11"
// "545, 564:611"
// --> 545, 64, 11, .. 611 
// --> 545, 564, 611, .. 611 

// --> 545, 564, 565, .. 611


