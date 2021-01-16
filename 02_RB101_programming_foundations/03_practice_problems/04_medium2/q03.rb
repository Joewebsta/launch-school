# Let's call a method, and pass both a string and an array as arguments and
# see how even though they are treated in the same way by Ruby, the results can
# be different.

# Study the following code and state what will be displayed...and why:

def tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param << "rutabaga"
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method(my_string, my_array)

puts "My string looks like this now: #{my_string}"
# "pumpkins"
# "rutabaga" is concatenated with a_string_param but it is then assigned to a new
# variable which is not a mutating operation. As a result this action does not modify
# my_string in the outer scope.

puts "My array looks like this now: #{my_array}"
# ["pumkins", "rutabaga"]
# Rutabaga is appended to the an_array_param and modifies the array in place.
# my_array in the outer scope is modified because my_array and an_array_param
# reference the same object.
