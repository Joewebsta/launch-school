/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2


INPUT
- array (nums)

OUTPUT
- integer
  - represents majority element


RULES
- Majority element
  - the element that appears more than ⌊n / 2⌋ times. 
- The majority element always exists in the array.

QUESTIONS


TEST CASES - PROVIDED

// Example 1:
nums = [2,3,3]
// Output: 3

// Example 2:
nums = [1,1,1,2,2,2,2]
Output: 2


TEST CASES - ADDITIONAL

// Example 3:
nums = [2]
// Output: 2

nums = [true, true, true, false, false]
Output: true


APPROACH
nums = [2,3,3]
// Output: 3


{ 
  2:1,
  3:2,
}

[1, 2]

1 / 3 = .3333
2 / 3 = .6666


DATA STRUCTURE
- Object and arrays

ALGO
- create function majorityElement(nums)
  - set counts = {}
  - set majorityVal

  - iterate over each num in nums
    - counts[num] = (counts[num] || 0) + 1
  
  - set countVals to values within counts
  - iterate over each val in countVals
    - if val / nums.length > .5
      - majorityVal = val;

  - Iterate over each property(key, val) in counts
    - if val === majority value
      - nums.filter(num)
        - key === String(num)
      return first element in returned array
*/

var majorityElement = function(nums) {
  const counts = {};
  nums.forEach(num => {
    counts[num] = (counts[num] || 0) + 1; 
  });

  let majorityVal = Math.max(...Object.values(counts))
  for (let key in counts) {
    if (counts[key] === majorityVal) {
      let majElems = nums.filter(num => {
        return String(num) === key;
      });

      return majElems[0];
    }
  }
};



// TEST CASES - PROVIDED

// Example 1:
let nums = [2,3,3]
// Output: 3

// Example 2:
nums = [1,1,1,2,2,2,2]
// Output: 2


// TEST CASES - ADDITIONAL

// Example 3:
nums = [2]
// Output: 2

nums = [true, true, true, false, false]
// Output: true

console.log(majorityElement(nums))