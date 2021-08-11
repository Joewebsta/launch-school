def all?(arr)
  arr.each { |elem| return false unless yield(elem) }
  true
end

p all?([1, 3, 5, 6], &:odd?) == false
p all?([1, 3, 5, 7], &:odd?) == true
p all?([2, 4, 6, 8], &:even?) == true
p all?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
p all?([1, 3, 5, 7]) { |_| true } == true
p all?([1, 3, 5, 7]) { |_| false } == false
p all?([]) { |_value| false } == true
