def each(arr)
  index = 0

  while index < arr.length
    yield(arr[index])
    index += 1
  end

  arr
end

# def each(arr)
#   arr.each { |num| yield(num) }
#   arr
# end

p([1, 2, 3].each { |num| puts "Num: #{num}" })
p([1, 2, 3].each { |_num| "do nothing" }) # still returns [1, 2, 3]
p([1, 2, 3].each { |_num| "do nothing" }.select(&:odd?)) # => [1, 3]
