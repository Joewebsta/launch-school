def step(start_num, end_num, step)
  val = start_num

  while val <= end_num
    yield(val)
    val += step
  end

  val
end

p step(1, 10, 3) { |value| puts "value = #{value}" }

# value = 1
# value = 4
# value = 7
# value = 10
