puts ">> Please enter an integer greater than 0:"
limit = gets.chomp.to_i

puts ">> Enter 's' to compute the sum, 'p' to compute the product."
operation = gets.chomp.downcase

start = 1
result = 0

case operation
when 's'
  start.upto(limit) { |num| result += num }
  puts "The sum of the integers between #{start} and #{limit} is #{result}."
when 'p'
  result = 1
  start.upto(limit) { |num| result *= num }
  puts "The product of the integers between #{start} and #{limit} is #{result}."
end

# puts "The sum of the integers between 1 and 5 is 15."

# >> Please enter an integer greater than 0:
# 5
# >> Enter 's' to compute the sum, 'p' to compute the product.
# s

# >> Please enter an integer greater than 0:
# 6
# >> Enter 's' to compute the sum, 'p' to compute the product.
# p
# The product of the integers between 1 and 6 is 720.
