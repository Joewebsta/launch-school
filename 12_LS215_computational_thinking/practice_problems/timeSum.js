/*

Create a function that takes an array of strings representing times ('hours:minutes:seconds') and returns their sum as an array of integers ([hours, minutes, seconds]).

Examples
timeSum(["1:23:45"]) 
// ➞ [1, 23, 45]

timeSum(["1:03:45", "1:23:05"]) 
// ➞ [2, 26, 50]

timeSum(["5:39:42", "10:02:08", "8:26:33"]) 
// ➞ [24, 8, 23]

Notes
If the input is an empty array, return [0, 0, 0].

Read the problem description
Read the fucking test cases!




INPUT
- array
  - contains strings


OUTPUT
- array
  - contains integers

RULES
- '03' is read as 3
- seconds must not exceed 59
- minutes must not exceed 59
- hours must not exceed 24

TEST CASES - PROVIDED --------------------------------------

// 1 string
timeSum(["1:23:45"]) 
// ➞ [1, 23, 45]

// 2 strings
timeSum(["1:03:45", "1:23:05"]) 
// ➞ [2, 26, 50]

//  3 strings
timeSum(["5:39:42", "10:02:08", "8:26:33"]) 
// ➞ [24, 8, 23]

TEST CASES - ADDITIONAL ------------------------------------

// empty array
timeSum[]) 
// ➞ [0, 0, 0]

// 1 string - all zeros
timeSum(["0:00:00"]) 
// ➞ [0, 0, 0]

// 2 strings - 1 string all zeroes
timeSum(["0:00:00", "1:23:05"]) 
// ➞ [1, 23, 05]


// 2 strings - hour 24 resets to hour 1
timeSum(["0:01:00", "24:59:00"]) 
// ➞ [0, 0, 0]

// seconds exceed 59
timeSum(["00:00:59", "00:00:01"]) 
// ➞ [0, 1, 0]

// minutes exceed 59
timeSum(["00:59:00", "00:01:00"]) 
// ➞ [1, 0, 0]

// hours exceed 24
timeSum(["24:00:00", "1:00:00"]) 
// ➞ [0, 0, 0]


ALGO/DATA STRUCTURE

Input - ["00:00:59", "00:00:01"]

- timeSum(arr)

- set initial variables
  - totHours = 0
  - totMinutes = 0
  - totSeconds = 0

- iterate over each timeStr in input arr
  - iteration 1 = "00:00:59"
  - separate timeStr into componenets - split
    - convert to INTEGERS
      - hours -> 0
      - minutes -> 0
      - minutes -> 59
  - add each value to appropriate variables above

- After two iterations:
  - totHours = 0
  - totMinutes = 0
  - totSeconds = 60

- check if totSeconds is greater than 59
  - if true, 
    - increase totMinutes by 1
    - reassign totSecond to totSeconds - 60

- check if totMinutes is greater than 59
  - if true, 
    - increase totHours by 1
    - reassign totMinutes to totMinutes - 60

- check if totHours is greater than 24
  - if true, 
    - reassign totHours to totHours - 24

return [totHours, totMinutes, totSeconds]

Output - [0, 1, 0]
*/

function timeSum(times) {
  let totHours = 0;
  let totMinutes = 0;
  let totSeconds = 0;

  times.forEach(time => {
    let [ hours, minutes, seconds ] = time.split(':').map(numStr => Number(numStr));
    
    totHours += hours;
    totMinutes += minutes;
    totSeconds += seconds;
  })
  
  while (totSeconds > 60) {
    totMinutes += 1;
    totSeconds = totSeconds - 60;
  }

  while (totMinutes > 60) {
    totHours += 1;
    totMinutes = totMinutes - 60;
  }

  return [totHours, totMinutes, totSeconds];
}


// timeSum(['18:54:02', '0:26:28', '11:48:22', '22:26:16', '7:17:05', '8:01:44', '0:35:24', '16:25:11', '9:11:24', '18:30:46', '3:31:51', '16:55:32', '17:59:00', '11:29:30', '3:19:58', '9:12:27', '22:03:34', '1:06:12', '0:44:07', '4:47:46', '10:38:00', '14:26:51', '10:09:07', '5:08:29', '5:29:57', '22:15:03', '20:52:28', '8:42:20', '17:36:32', '9:36:17']);


  // [329, 41, 43],
  // 'Should work with large arrays totaling more than 60 hours'
// );


  // timeSum(['10:11:02', '8:57:30', '10:58:56', '4:04:17', '3:01:13'])
  // [37, 12, 58]



  // timeSum(['10:39:35', '11:33:23', '2:34:52', '9:17:09', '4:41:57', '3:34:19', '1:31:26', '4:06:01'])

//   [47, 58, 42]



// TEST CASES - PROVIDED --------------------------------------

// 1 string
// timeSum(["1:23:45"]) 
// ➞ [1, 23, 45]

// // 2 strings
// timeSum(["1:03:45", "1:23:05"]) 
// // ➞ [2, 26, 50]

// //  3 strings
// timeSum(["5:39:42", "10:02:08", "8:26:33"]) 
// // ➞ [24, 8, 23]

// TEST CASES - ADDITIONAL ------------------------------------

// // empty array
// timeSum([]) 
// // ➞ [0, 0, 0]

// // 1 string - all zeros
// timeSum(["0:00:00"]) 
// // ➞ [0, 0, 0]

// // 2 strings - 1 string all zeroes
// timeSum(["0:00:00", "1:23:05"]) 
// // ➞ [1, 23, 05]


// // 2 strings - hour 24 resets to hour 1
// timeSum(["0:01:00", "24:59:00"]) 
// // ➞ [1, 0, 0]

// // seconds exceed 59
// timeSum(["00:00:59", "00:00:01"]) 
// // ➞ [0, 1, 0]

// // minutes exceed 59
// timeSum(["00:59:00", "00:01:00"]) 
// // ➞ [1, 0, 0]

// // hours exceed 24
// timeSum(["24:00:00", "00:25:00"]) 
// // ➞ [0, 0, 0]