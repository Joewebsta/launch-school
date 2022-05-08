/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


INPUT


OUTPUT


RULES


QUESTIONS


TEST CASES - PROVIDED


TEST CASES - ADDITIONAL


APPROACH


DATA STRUCTURE


ALGO

- create containsDuplicate(nums)
  - set seen = []
  - Iterate over each num in nums
    - if num is not included within seen
      - add num to seen
    - else (if num IS included within seen)
      - return true


  - return false


*/

// var containsDuplicate = function(nums) {
//   // let seen = [];

//   // for (let i = 0; i < nums.length; i += 1) {
//   //   if (!seen.includes(nums[i])) {
//   //     seen.push(nums[i]);
//   //   } else {
//   //     return true;
//   //   }
//   // }

//   // return false;

// };

var containsDuplicate = function(nums) {
  return nums.length !== [...new Set(nums)].length;
};


let nums = [1,2,3,1]
// Output: true

nums = [1,2,3,4]
// Output: false

nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

console.log(containsDuplicate(nums))