def times(num)
  (0...num).each { |number| yield(number) }
  num
end

p times(5) { |num| puts num }
