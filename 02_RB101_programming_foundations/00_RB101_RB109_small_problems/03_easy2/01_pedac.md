# P: Understand the Problem


## 1 - EXPLICIT REQUIREMENTS

### Rephrase the problem in your own words
- Create a method that prints a message that conveys the age of Teddy
- Teddy's age is a randomly generated number that is between 20 and 200

### Inputs
- No inputs

### Outputs
- String


## 2 - IMPLICIT REQUIREMENTS

### Rules
- Age is an integer (no floats)

### Clarifying questions
- Are 20 and 200 included in the possible ages?

### Edge cases
- No edge cases


## 3 - MENTAL MODEL
- Randomly generate a number between 20 and 200 and interporlate it into a string which is then printed to the screen.

---

# E: Examples / Test Cases

### Example 1:
- Inputs
  - [INPUT]
- Outputs
  - "Teddy is 69 years old!"

### Example 2:
- Inputs
  - [INPUT]
- Outputs
  - "Teddy is 21 years old!"

---
# D: Data Structure

### Select a data structure
- array
- hash
- string *

---
# A: Algorithm
- Create local varibale called ***rand_age***
- Create local variable called ***message*** and assign hardcoded message text
- Use the random method to generate a number between 20 and 200
- Assign random number to ***rand_age***
- Interporate ***rand_age*** into ***message*** string

---
# C: Code 


