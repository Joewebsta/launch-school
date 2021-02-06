arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]

sorted_arr = arr.sort_by do |sub_arr|
  sub_arr.select(&:odd?)
end

p sorted_arr

# [[1, 8, 3], [1, 6, 7], [1, 4, 9]]
