def double_number?(str)
  first_half, second_half = str.chars.partition.with_index do |_num, i|
    i < str.length / 2
  end

  first_half == second_half
end

def twice(number)
  number_str = number.to_s

  double_number?(number_str) ? number : number * 2
end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10
