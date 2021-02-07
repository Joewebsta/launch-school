def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

def rotate_rightmost_digits(num, n)
  all_digits = num.to_s.chars
  all_digits[-n..-1] = rotate_array(all_digits[-n..-1])
  all_digits.join.to_i
end

def max_rotation(num)
  num_digits = num.to_s.length
  num_digits.downto(1) do |n|
    num = rotate_rightmost_digits(num, n)
  end

  num
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845

# 0 735291 => 352917 - 6
# 1 352917 => 329175 - 5
# 2 329175 => 321759 - 4
# 3 321759 => 321597 - 3
# 4 321597 => 321579 - 2
# 5 321579 => 321579 - 1
