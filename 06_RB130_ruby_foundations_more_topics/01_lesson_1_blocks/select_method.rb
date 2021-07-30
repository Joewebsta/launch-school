def select(arr)
  new_arr = []
  index = 0

  while index < arr.size
    elem = arr[index]

    new_arr << elem if yield(elem)
    index += 1
  end

  new_arr
end

# def select(arr)
#   new_arr = []
#   index = 0

#   arr.each { |num| new_arr << num if yield(num) }
#   new_arr
# end

array = [1, 2, 3, 4, 5]

p select(array, &:odd?) # => [1, 3, 5]
p select(array) { |num| puts num }      # => [], because "puts num" returns nil and evaluates to false
p select(array) { |num| num + 1 }       # => [1, 2, 3, 4, 5], because "num + 1" evaluates to true
