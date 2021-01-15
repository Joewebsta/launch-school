# Alyssa was asked to write an implementation of a rolling buffer. Elements are
# added to the rolling buffer and if the buffer becomes full, then new elements
# that are added will displace the oldest elements in the buffer.

# She wrote two implementations saying, "Take your pick. Do you like << or + for
# modifying the buffer?". Is there a difference between the two, other than what
# operator she chose to use to add an element to the buffer?

def rolling_buffer1(buffer, max_buffer_size, new_element)
  buffer << new_element
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

def rolling_buffer2(input_array, max_buffer_size, new_element)
  buffer = input_array + [new_element]
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

# Both methods return the same value, but the original argument passed to
# the methods are affected differently.

# rolling_buffer1 modifies the buffer parameter in place on line 10. This will
# affect the original argument passed to the method (in the outer scope).

# rolling_buffer2 does not modify the original argument. A new array is created
# when input_array and [new_element] are concatenated. A reference of this new
# array is then bound to the buffer variable.

arr = [1, 2, 3]
p rolling_buffer1(arr, 3, 4)
p arr

arr = [1, 2, 3]
p rolling_buffer2(arr, 3, 4)
p arr
