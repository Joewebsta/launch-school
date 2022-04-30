function triangle(deg1, deg2, deg3) {
  if ([deg1, deg2, deg3].includes(0)) return 'invalid';
  if (deg1 + deg2 + deg3 !== 180) return 'invalid';
  
  if ([deg1, deg2, deg3].includes(90)) return 'right';
  if ([deg1, deg2, deg3].find(deg => deg > 90)) return 'obtuse';
  return 'acute';
}

/*
A triangle is classified as follows:

- Right: One angle is a right angle (exactly 90 degrees).
- Acute: All three angles are less than 90 degrees.
- Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.
-------------------------------------------------


INPUT
- integers (NO floating point values)
- > 0 && <= 90
- represent degrees
- the three angles of a triangle

OUTPUT
- string
- triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

RULES
- Three types of triangles
  - Right: One angle === 90 degrees
  - Acute: All 3 angles are less than 90 degrees.
  - Obtuse: One angle is greater than 90 degrees.
- Invalid triangles
  - the sum of the angles must be exactly 180 degrees
  - every angle must be greater than 0
  - BOTH conditions must be satisfied


QUESTIONS


TEST CASES
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

APPROACH
- every angle greater than 0
- sum of all angles === 180

- check for presence of 90
- check for presence of degree > 90
- 

DATA STRUCTURE
- arrays
- wor with integers
- return strings

ALGO
- create function triangle(deg1, deg2, deg3)
  - check if any degree vars are equal to 0 includes function
    - if true return invalid
  - check if sum of all degree vars is equal to 180
    - if false return invalid

  - check if any degree vars equal 90 - includes function
    - if true return 'right'
  - check if any values are greater than 90
    - if tree return obtuse
  - else return actue
*/

// console.log(triangle(0, 0, 0));       // "acute"
// console.log(triangle(-1, 0, 0));       // "acute"
console.log(triangle(60, 60, 60));       // "acute"
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"