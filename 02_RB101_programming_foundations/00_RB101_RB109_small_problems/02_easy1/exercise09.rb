# Brute force solution

# def sum(num)
#   numbers = []
#   idx = 0
#   sum = 0

#   loop do
#     remainder, num = num.divmod(10)
#     numbers.unshift(num)
#     num = remainder
#     break if remainder.zero?
#   end

#   while idx <= (numbers.length - 1)
#     sum += numbers[idx]
#     idx += 1
#   end

#   sum
# end

def sum(number)
  number.to_s.chars.reduce(0) { |sum, num| sum + num.to_i }
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45
