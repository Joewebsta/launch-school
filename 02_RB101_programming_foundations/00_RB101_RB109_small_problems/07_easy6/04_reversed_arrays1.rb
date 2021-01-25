# P - Understand the problem

# Explicit requirements
# - Reverse the elements of an array
# - Passed array is mutated/modified in place
#   - Passed array and return value should be the same object
# Input: An array
# Output: An array of reversed elements

# Implicit requirements
# - Array argument can have 0, 1 or multiple elements
# - Total number of array elements can be even an odd
# - Array elements can be strings or integers, but not a mix of the two

# Algorithm
# Return passed array if array length is 1 or 0.
# 1. Swap the postions of the first and last elements of the array
# 2. Swap the position of the second and second to last elments of the array
# 3. Continue swapping positions until:
#   a. All elements excluding the the middle element have swapped positions - odd length
#   b. All elements have been swapped

def reverse!(arr)
  return arr if arr.size <= 1

  swap_count = arr.size / 2
  first = 0
  last = -1

  while swap_count > 0
    arr[first], arr[last] = arr[last], arr[first]
    first += 1
    last -= 1
    swap_count -= 1
  end

  arr
end

list = [1, 2, 3, 4]
result = reverse!(list)
p result == [4, 3, 2, 1] # true
p list == [4, 3, 2, 1] # true
p list.equal?(result) # true

list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

list = []
p reverse!(list) == [] # true
p list == [] # true
