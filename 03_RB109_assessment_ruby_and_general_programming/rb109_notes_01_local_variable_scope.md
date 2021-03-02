# RB109 Notes

## Local Variable Scope

### Recall Practice - Questions
- What is scope?
- What is a local variable?
- How do local variables interact with method definitions?
- What happens if you attempt to print an object a variable references that you don't have access to?
  
### Recall Practice - Answers
- What is scope?
  - Scope determines where in a program initialized data can be accessed.
- What is a local variable?
  - A local variable adheres to the scoping rules of the environment in which it was initialized.
- How do local variables interact with method invocations with blocks?
  - Local variables or data initialized in the inner scope of a block cannot be accessed by the block's outer scope.
  - Local variables or data initialized in a block's outer scope CAN be accessed in a block's inner scope.
- How do local variables interact with method definitions?
  - Local variables initialized in a method definition's inner scope cannot be accessed by a method definition's outer scope.
  - Local variables initialized in the outer scope of a method definition cannot be accessed in a method definition's inner scope UNLESS it is passed as a parameter.
- What happens if you attempt to print an object a variable references that you don't have access to?
  - An error will occur 

### Recall Practice - Code Examples
