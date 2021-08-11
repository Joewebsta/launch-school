def one?(arr)
  seen_one = false
  arr.each do |elem|
    next unless yield(elem)
    return false if seen_one
    seen_one = true
  end

  seen_one

  # true_count = 0
  # arr.each { |elem| true_count += 1 if yield(elem) }
  # true_count == 1
end

p one?([1, 3, 5, 6], &:even?) == true # -> true
p one?([1, 3, 5, 7], &:odd?) == false # -> false
p one?([2, 4, 6, 8], &:even?) == false # -> false
p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true # -> true
p one?([1, 3, 5, 7]) { |_value| true } == false # -> false
p one?([1, 3, 5, 7]) { |_value| false } == false # -> false
p one?([]) { |_value| true } == false # -> false
