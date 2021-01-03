# P: Understand the Problem


## 1 - EXPLICIT REQUIREMENTS

### Rephrase the problem in your own words
- Ask for room length and width (meters)
- Display area of room (square meters and square feet)

### Inputs
- user input: length - STRING
- user input: width - STRING

### Outputs
- STRING


## 2 - IMPLICIT REQUIREMENTS

### Rules
- Length and width are provided by user
- Length can be integer or float
- Width can be integer or float
- 1 square meter == 10.7639 square feet

### Clarifying questions
- 

### Edge cases
- Length is 0
- Width is 0


## 3 - MENTAL MODEL
- Calculate the square meters and square feet of a room based on user provided
inputs. 

---

# E: Examples / Test Cases

### Example 1:
- Inputs
  - Length: 10
  - Width: 7
- Outputs
  - Square meters: 70.0
  - Square feet: 753.47

### Example 2:
- Inputs
  - Length: 0
  - Width: 7
- Outputs
  - Square meters: 0
  - Square feet: 0

---
# D: Data Structure

### Select a data structure
- array
- hash
- string *

---
# A: Algorithm
- Ask user for length
- Save to variable 'length'
- Ask user for width
- Save to variable 'width'
- Calculte square meters by multiplying length by width
- Save to variable 'sq_meters'
- Calculate Square feet by multiplying sq_meters variable by 10.7639
- Save to sq_feet variable
- Round sq_meters to 2 decimal places

---
# C: Code 


