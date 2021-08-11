def any?(arr)
  arr.each { |elem| return true if yield(elem) }
  false
end

def none?(arr, &block)
  !any?(arr, &block)
end

p none?([1, 3, 5, 6], &:even?) == false
p none?([1, 3, 5, 7], &:even?) == true
p none?([2, 4, 6, 8], &:odd?) == true
p none?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
p none?([1, 3, 5, 7]) { |_value| true } == false
p none?([1, 3, 5, 7]) { |_value| false } == true
p none?([]) { |_value| true } == true
