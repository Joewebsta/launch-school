def multiply_list(arr1, arr2)
  # arr1.map.with_index { |num, i| num * arr2[i] }

  arr1.zip(arr2).map { |num_arr| num_arr.reduce(:*) }
end

p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

# Create array to store product of arr elements
# Iterate over arr1
# Pass index to each block
# Multiply current elem and corresponding elem in arr2
