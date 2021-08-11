def drop_while(arr)
  arr.each_with_index do |elem, idx|
    return arr[idx..-1] unless yield(elem)
  end

  []
end

p drop_while([1, 3, 5, 6], &:odd?) == [6]
p drop_while([1, 3, 5, 6], &:even?) == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |_value| true } == []
p drop_while([1, 3, 5, 6]) { |_value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |_value| true } == []
