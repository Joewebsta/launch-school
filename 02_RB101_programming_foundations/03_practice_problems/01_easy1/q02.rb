# Describe the difference between ! and ? in Ruby.
## ! - At the end of a method indicates the method modifies the caller.
## ! - At the beginning of an expression converts the object to a boolean value.
## ? - At the end of a method indicates a predicate method - the method returns a
## boolean value

# And explain what would happen in the following scenarios:

# what is != and where should you use it?
## Translates to 'not equal to'. This would be used in a conditional expression.

# put ! before something, like !user_name
## Converts the object to a boolean value

# put ! after something, like words.uniq!
## The uniq method modifies the words object in place.

# put ? before something
## Used in a ternary operator.

# put ? after something
## Indicates a method returns a boolean value.

# put !! before something, like !!user_name
## Converts an object to true or false. Then returns the opposite boolean value
## of the initial evaluation.
