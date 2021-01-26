# Create new 'reversed_arr' array
# Push the last index of array to the 'reversed array'
# Continue to push elements from right to left
# Stop appending elements to 'reveresed' array when reversed_arr.size == size of original array
# Return reversed array

def reverse(arr)
  arr.reverse_each.each_with_object([]) do |elem, reversed_arr|
    reversed_arr << elem
  end
end

p reverse([1, 2, 3, 4]) == [4, 3, 2, 1] # => true
p reverse(%w(a b e d c)) == %w(c d e b a)  # => true
p reverse(['abc']) == ['abc']              # => true
p reverse([]) == []                        # => true

p list = [1, 3, 2]                      # => [1, 3, 2]
p new_list = reverse(list)              # => [2, 3, 1]
p list.object_id != new_list.object_id  # => true
p list == [1, 3, 2]                     # => true
p new_list == [2, 3, 1]                 # => true
