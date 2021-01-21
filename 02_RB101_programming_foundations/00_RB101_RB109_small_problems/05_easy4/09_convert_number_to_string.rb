def integer_to_string(num)
  digits = []

  loop do
    num, remainder = num.divmod(10)
    digits.unshift(remainder)
    break if num.zero?
  end

  digits.join
end

p integer_to_string(4321) == '4321'
p integer_to_string(0) == '0'
p integer_to_string(5000) == '5000'
