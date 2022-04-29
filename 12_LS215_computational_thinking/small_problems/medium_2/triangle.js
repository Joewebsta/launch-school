/*

INPUT
- 3 integers
- represent triangle side lengths

OUTPUT 
- string
- represents type of triangle OR 
- indicates input is invalid


RULES
- valid triangles - both conditions must be satisfied
  - sum of two shortest sides > length of longest side
  - every side must have length greater than 0

- Equilateral: All three sides are of equal length.
- Isosceles: Two sides are of equal length, while the third is different.
- Scalene: All three sides are of different lengths.

QUESTIONS
- negative numbers
- NaN, infinity
- Other data types



TEST CASES 
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

APPROACH
- determine two shortest sides
- determine 1 longest side
- validate inputs

DATA STRUCTURE


ALGO
- create function triangle(side1, side2, side3)
  - let sortedSides to [side1, side2, side3].sort()
  - let [ shortSide1, shortSide2, longSide ] = sortedSides;

  - if (shortSide1 + shortSide2 < longest) return 'invalid'
  - if ([shortSide1, shortSide2, longSide].includes(0)) return 'invalid'

  - if (shortSide1 === shortSide2 && shortSide2 === longSide) return "equilateral"
  - if (shortSide1 === shortSide2 && shortSide2 !== longSide) return "isosceles"
  - if (shortSide1 !== shortSide2 && shortSide2 !== longSide) return "scalene"

*/

function triangle(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort();
  let [ shortSide1, shortSide2, longSide ] = sortedSides;

  if (shortSide1 + shortSide2 < longSide) return 'invalid'
  if ([shortSide1, shortSide2, longSide].includes(0)) return 'invalid'
  
  if (shortSide1 === shortSide2 && shortSide2 === longSide) return "equilateral"
  if (shortSide1 !== shortSide2 && shortSide2 === longSide) return "isosceles"
  if (shortSide1 !== shortSide2 && shortSide1 !== longSide) return "scalene"
  // console.log(shortSide1, shortSide2, longSide);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(1.5, 3, 3));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"
