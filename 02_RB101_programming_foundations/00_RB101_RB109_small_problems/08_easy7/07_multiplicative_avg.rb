def show_multiplicative_average(array)
  product = array.reduce(:*)
  average = product / array.size.to_f

  puts "The result is #{format('%.3f', average)}"
end

show_multiplicative_average([3, 5])                # => The result is 7.500
show_multiplicative_average([6])                   # => The result is 6.000
show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667

# Multiply array elements
# Divide sume by total num elements
# Round to 3 decimal places
