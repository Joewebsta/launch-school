puts "\nPlease provide a number:"
num1 = gets.chomp.to_i

puts "\nPlease provide a second number:"
num2 = gets.chomp.to_i

puts "\nWhat operation would you like to perform?"
puts 'Options: add, subtract, multiply or divide'

operation = gets.chomp.downcase
puts

loop do
  break if %w[add subtract multiply divide].include?(operation)

  puts
  puts 'You did not provide a valid operaion.'
  puts 'Please select one of the following options:'
  puts 'Add, subtract, multiply or divide'

  operation = gets.chomp.downcase
end

case operation
when 'add' then puts "#{num1} + #{num2} = #{num1 + num2}"
when 'subtract' then puts "#{num1} - #{num2} = #{num1 - num2}"
when 'multiply' then puts "#{num1} * #{num2} = #{num1 * num2}"
when 'divide' then puts "#{num1} / #{num2} = #{num1 / num2}"
end
