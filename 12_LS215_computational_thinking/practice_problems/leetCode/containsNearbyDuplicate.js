/*

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:
Input: nums = [1,2,3,1], k = 3
               0 1 2 3
               3 - 0 <= 3
Output: true


Example 2:
Input: nums = [1,0,1,1], k = 1
               0 1 2 3
               3 - 2 = 1 <= 1

Output: true


Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
               0 1 2 3 4 5 
Output: false

INPUT
 - an integer array nums 
 - an integer k

OUPUT
- true or false

RULES
 - return true if 
  - two distinct indices i and j in the array such that 
    - nums[i] == nums[j]
    - abs(i - j) <= k.

QUESTIONS


TEST CASES - PROVIDED

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true


Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true


Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

TEST CASES - ADDITIONAL
Input: nums = [], k = 3
Output: false

APPROACH
- 


DATA STRUCTURE
- Array

ALGO
- create containsNearbyDuplicate(nums, k)
  - iterate over each num in nums - for loop i
    - iterate over each num in nums (starting with i + 1) - for loop - j
      - check if nums[i] === nums[j]
        - if true, check if abs(i - j) <= target
          -if true true
  - return false.



*/

var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] === nums[j] && (Math.abs(i - j)) <= k) {
        return true;
      }
    }
  }
  return false;
};


let nums = [1,2,3,1]; 
let k = 3;
// Output: true


nums = [1,0,1,1] 
k = 1
// Output: true


nums = [1,2,3,1,2,3]
k = 2
// Output: false

// TEST CASES - ADDITIONAL
nums = []
k = 3
// Output: false

console.log(containsNearbyDuplicate(nums, k))