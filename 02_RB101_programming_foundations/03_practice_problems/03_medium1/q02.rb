# The result of the following statement will be an error:

puts "the value of 40 + 2 is " + (40 + 2)

# Why is this and what are two possible ways to fix this?

# The code above will result in an error because ruby doesn't know how to
# add a string to an integer.

# This can be resolved with string interpolation or by invoking String#to_s
# on the (40 + 2) expression.

puts "the value of 40 + 2 is #{40 + 2}"
