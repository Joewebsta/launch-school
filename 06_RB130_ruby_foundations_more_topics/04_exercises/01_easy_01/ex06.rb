def any?(arr)
  arr.each { |elem| return true if yield(elem) }
  false
end

p any?([1, 3, 5, 6], &:even?) == true
p any?([1, 3, 5, 7], &:even?) == false
p any?([2, 4, 6, 8], &:odd?) == false
p any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
p any?([1, 3, 5, 7]) { |value| value; true } == true
p any?([1, 3, 5, 7]) { |value| value; false } == false
p any?([]) { |value| value; true } == false
