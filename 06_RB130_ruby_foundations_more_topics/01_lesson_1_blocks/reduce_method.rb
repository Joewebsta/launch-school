def reduce(arr, default = 0)
  index = default.zero? ? 1 : 0
  acc = default.zero? ? arr[0] : default

  while index < arr.size
    current_elem = arr[index]
    acc = yield(acc, current_elem)
    index += 1
  end

  acc
end

# def reduce(arr, result = 0)
#   index = default.zero? ? 1 : 0
#   acc = default.zero? ? arr[0] : default

#   arr.each { |elem| acc = yield(acc, elem) }
#   result
# end

array = [1, 2, 3, 4, 5]
p reduce(array) { |acc, num| acc + num }                    # => 15
p reduce(array, 10) { |acc, num| acc + num }                # => 25
# reduce(array) { |acc, num| acc + num if num.odd? } # => NoMethodError: undefined method `+' for nil:NilClass

p reduce(['a', 'b', 'c']) { |acc, value| acc + value } # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']
