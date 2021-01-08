def compute_sum(limit)
  Array(1..limit).reduce(:+)
end

def compute_product(limit)
  Array(1..limit).reduce(:*)
end

def print_result(operation_type, limit, result)
  puts "The #{operation_type} of the integers between 1 and " \
       "#{limit} is #{result}."
end

puts ">> Please enter an integer greater than 0:"
limit = gets.chomp.to_i

operation = ''
loop do
  puts ">> Enter 's' to compute the sum, 'p' to compute the product."
  operation = gets.chomp.downcase
  break if ['s', 'p'].include?(operation)
end

case operation
when 's'
  result = compute_sum(limit)
  print_result('sum', limit, result)
when 'p'
  result = compute_product(limit)
  print_result('product', limit, result)
end
