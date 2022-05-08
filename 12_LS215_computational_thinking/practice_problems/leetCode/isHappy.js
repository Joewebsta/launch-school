/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true

Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


Example 2:

Input: n = 2
Output: false

INPUT
- Positive integer

OUTPUT
- Return true if n is a happy number, and false if not.

RULES
- happy number
  - Starting with any positive integer, replace the number by the sum of the squares of its digits.
  - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
   - Those numbers for which this process ends in 1 are happy.




QUESTIONS


TEST CASES - PROVIDED

Example 1:

Input: n = 19
Output: true

Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


Example 2:

Input: n = 2
4
16
1 + 36 = 37
9 + 49 = 58
25 + 64 = 89
Output: false

TEST CASES - ADDITIONAL


APPROACH
Input: n = 19
Output: true

Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


DATA STRUCTURE
 - Strings
 - Array

ALGO
- create isHappy(n)
  // set sum = n;

  while n !== 1
    - set n = sumOfDigitSquares(n)
      - convert n to string '19'
      - num string into arr of chars ['1', '9']
      - map arr of chars to integers  and squares [1, 9] -> [1, 81]
      - return sum of integers

  return true

*/

var isHappy = function(n) {
  let seen = {};

    while (n !== 1) {
      if (seen[n] > 1) return false;

      n = sumOfDigitSquares(n)
      seen[n] = (seen[n] || 0) + 1;
    }

  return true;
};

function sumOfDigitSquares(n) {
  return [...String(n)].map(strNum => Number(strNum) ** 2)
                       .reduce((sum, num) => sum + num);

}

console.log(isHappy(7))