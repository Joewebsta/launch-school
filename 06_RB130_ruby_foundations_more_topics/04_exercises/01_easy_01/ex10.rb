def count(arr)
  true_count = 0
  idx = 0

  while idx < arr.size
    true_count += 1 if yield(arr[idx])
    idx += 1
  end

  true_count

  # true_count = 0
  # arr.each { |elem| true_count += 1 if yield(elem) }
  # true_count
end

p count([1, 2, 3, 4, 5], &:odd?) == 3
p count([1, 2, 3, 4, 5]) { |value| value % 3 == 1 } == 2
p count([1, 2, 3, 4, 5]) { |_value| true } == 5
p count([1, 2, 3, 4, 5]) { |_value| false } == 0
p count([], &:even?) == 0
p count(%w(Four score and seven)) { |value| value.size == 5 } == 2
