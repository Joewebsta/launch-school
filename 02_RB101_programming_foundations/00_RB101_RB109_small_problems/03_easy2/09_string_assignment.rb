name = 'Bob'
save_name = name
name.upcase!
puts name, save_name

# This code prints "BOB" and "BOB"
# This occurs because both name and save_name variables both point to the same reference
# of 'Bob' which is then mutated by the upcase! method. The original object is modified
# and this is reflected when the variables are printed
