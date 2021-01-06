# num = 1

# while num <= 99
#   puts num
#   num += 2
# end

# 1.upto(99) do |index|
#   puts index if index.odd?
# end

puts Array(1..99).filter(&:odd?)
