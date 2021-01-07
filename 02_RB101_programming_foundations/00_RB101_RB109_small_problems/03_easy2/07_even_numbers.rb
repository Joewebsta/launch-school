# value = 1

# while value <= 99
#   puts value if value.even?
#   value += 1
# end

puts Array(1..99).filter(&:even?)
