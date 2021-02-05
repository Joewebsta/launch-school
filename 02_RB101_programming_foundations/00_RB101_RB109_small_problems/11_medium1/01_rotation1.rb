def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']

p x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1] # => true
p x == [1, 2, 3, 4] # => true

# Remove and store first element of array
# Create new empty array to store new rotated array
# Iterate over original array
# Add each remaining element to new rotated array
# Append first element of original array to new rotated array
