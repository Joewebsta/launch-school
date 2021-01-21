def integer_to_string(num)
  digits = []

  loop do
    num, remainder = num.divmod(10)
    digits.unshift(remainder)
    break if num.zero?
  end

  digits.join
end

def signed_integer_to_string(num)
  case num <=> 0
  when -1 then "-#{integer_to_string(num.abs)}"
  when  1 then "+#{integer_to_string(num)}"
  else         integer_to_string(num)
  end
end

p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'
