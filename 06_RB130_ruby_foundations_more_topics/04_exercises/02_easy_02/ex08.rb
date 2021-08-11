def max_by(arr)
  return nil if arr.empty?

  max_elem = arr.first
  largest = yield(max_elem)

  arr[1..-1].each do |elem|
    yielded_value = yield(elem)

    if yielded_value > largest
      max_elem = elem
      largest = yielded_value
    end
  end

  max_elem

  # new_vals = []

  # arr.each do |num|
  #   new_vals << yield(num)
  # end

  # max_idx = new_vals.index(new_vals.max)
  # arr[max_idx]
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]], &:size) == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 }.nil?
