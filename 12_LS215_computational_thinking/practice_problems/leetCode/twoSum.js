/*


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


INPUT
- array of integers nums 
- an integer target

OUTPUT
- array
  - contains indices of the two numbers such that they add up to target.

RULES
- each input has exactly one solution
- same element may not be used twice.


QUESTIONS


TEST CASES - PROVIDED

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

TEST CASES - ADDITONAL

Input: nums = [11, 15, 7, 2], target = 9
Output: [0, 3]

Input: nums = [], target = 6
Output: []


APPROACH
- Identify two numbers that when combined are equal to targer
[3,2,4], target = 6

3 - 2
3 - 4

Input: nums = [11, 15, 7, 2], target = 9
Output: [0, 3]

11 + 5
11 + 15
11 + 7
11 + 2

15 + 7
15 + 2

7 + 2 = 9




DATA STRUCTURE
- arrays

ALGO

- create function 
- set indices = []
- set sumNums = []
- iterate over each num in nums array - forEach((num, idx, arr)) [11, 15, 7, 2]
  - create copy of array [11, 15, 7, 2]
  - create subArray of copy that contains elements excluding current element  [15, 7, 2] copy.splice(idx, 1)
  - iterate over subarray 
    - check if current num and elem in subarray combine to equal target
    - if true, sumNums.push(num, elem)

- iterate over each num in sumNums
  - push index of num (within input array) into indices array
- return indices array
 

*/

var twoSum = function(nums, target) {
  if (nums.length === 0) return [];
  const sumNums = [];

  nums.forEach((num, idx, arr) => {
    const numsCopy = [...nums];
    numsCopy.splice(idx, 1);

    numsCopy.forEach(numCopy => {
      if ((num + numCopy === target) && !sumNums.includes(num) && !sumNums.includes(numCopy)) {
        sumNums.push(num, numCopy);
      }
    })
  })

  return [nums.indexOf(sumNums[0]), nums.lastIndexOf(sumNums[1])]
};


// Example 1:

let nums = [2,7,11,15]; let target = 9;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

nums = [3,2,4]
target = 6
// Output: [1,2]
// Example 3:

nums = [3,3]
target = 6
// Output: [0,1]

// TEST CASES - ADDITONAL

nums = [11, 15, 7, 2]
target = 9

nums = []
target = 6
// Output: []


console.log(twoSum(nums, target))
