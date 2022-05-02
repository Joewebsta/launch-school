function stairCases(numCoins) {
  let usedCoins = 0;
  let stairNum = 0;
  let coins = 1;
  
  while (true) {
    usedCoins += coins;
    
    if (usedCoins > numCoins) return stairNum;
    
    stairNum += 1;
    coins += 1;
  }
}

console.log(stairCases(8))
console.log(stairCases(5))

/*

You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
Given the integer n, return the number of complete rows of the staircase you will build.
Example 1:
O
OO
OO
Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:
O
OO
OOO
OO
Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.


*/

