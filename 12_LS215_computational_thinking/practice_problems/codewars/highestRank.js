/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3






[[12 2], [10,1]]
[[12 2], [10,1]][0][0] => 12


FILTER BY counts[key] - key  

[12, 10, 12, 10, 9]              -->  12


counts = {
  12: 2,
  10: 2,
   9: 1,
}

[[12,2], [10,2] [9,1]]
[12, 10, 12, 10, 9]              -->  12



- create counts obj
- set maxValue to
  - determine max value in counts obj
    - create array of counts values - Object.values
- set mostFrequent to []
- create array that contains counts keys that have a value that match the max value
  - iterate over counts object
    - if val === maxValue, push key to 
- return the largest value from most frequent



ALGO
- create myFunc(numArr) 
  - create counts obj
  - set seen = []
  - set numFrequencyArr = [];
  - set maxFrequencyNum = Math.max(...Object.values(count))
  - iterate over each num in numArr 
    - if num is not included in seen array
      - push num to seen
      - push [num, count[String(num)] to numFreqArray
  - sort numFreq by value of number (descending)
    - sort((a,b) => a[0] - b[0])
  - return the largest number with the greatest frequency
*/



function highestRank(numArr) {
  let numCounts = counts(numArr);
  let seen = [];
  let numFrequency = [];
  let maxFrequencyNum = Math.max(...Object.values(numCounts));

  numArr.forEach(num => {
    if (!seen.includes(num) && numCounts[String(num)] === maxFrequencyNum) {
      let frequency = numCounts[String(num)];
      seen.push(num);
      numFrequency.push([num, frequency]);
    }
  });

  return numFrequency.sort(([numA],[numB]) => numB - numA)[0][0];
}

function counts(numArr) {
  let counts = {};

  numArr.forEach(num => {
    counts[num] = counts[num] || 0;
    counts[num] += 1;
  });

  return counts;
}

let arr = [9, 12, 10, 12, 10];

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]              //-->  12
arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          //-->  12
arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  //-->   3

console.log(highestRank(arr))
