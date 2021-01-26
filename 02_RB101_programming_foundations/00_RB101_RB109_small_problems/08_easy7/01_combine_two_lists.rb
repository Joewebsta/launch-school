def interleave(arr1, arr2)
  combined_arr = []

  arr1.each_with_index do |elem, idx|
    combined_arr << elem << arr2[idx]
  end

  combined_arr
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# Create empty array - will hold new combined array
# Create a loop
# Append first element of array 1 and array2 to empty array
# Each loop iteration append additional elements
