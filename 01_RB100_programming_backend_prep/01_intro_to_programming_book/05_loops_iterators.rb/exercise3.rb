def countdown(num)
  puts num

  countdown(num - 1) if num.positive?
end

countdown(100)
