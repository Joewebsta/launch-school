# Brute force solution

def sum(num)
  sum = 0

  str_digits = num.to_s.chars

  str_digits.each do |str_digit|
    sum += str_digit.to_i
  end

  sum
end

# def sum(number)
#   number.to_s.chars.reduce(0) { |sum, num| sum + num.to_i }
# end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45
