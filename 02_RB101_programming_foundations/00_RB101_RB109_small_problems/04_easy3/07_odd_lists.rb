def oddities(arr)
  arr.filter.with_index { |_elem, i| i.even? }
end

# def oddities(arr)
#   every_other_elem = []
#   elem_index = 0

#   while elem_index < arr.length
#     every_other_elem << arr[elem_index] if elem_index.even?
#     elem_index += 1
#   end

#   every_other_elem
# end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []
