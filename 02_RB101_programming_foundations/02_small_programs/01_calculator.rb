puts "\nPlease provide a number:"
num1 = gets.chomp.to_i

puts "\nPlease provide a second number:"
num2 = gets.chomp.to_i

puts "\nWhat operation would you like to perform?"
puts 'Options: 1) add, 2) subtract, 3) multiply or 4) divide'

operator = gets.chomp
puts

# loop do
#   break if %w[1 2 3 4].include?(operator)

#   puts
#   puts 'You did not provide a valid operaion.'
#   puts 'Please select one of the following options:'
#   puts '1) add, 2) subtract, 3) multiply or 4) divide'

#   operator = gets.chomp
# end

case operator
when '1' then puts "#{num1} + #{num2} = #{num1 + num2}"
when '2' then puts "#{num1} - #{num2} = #{num1 - num2}"
when '3' then puts "#{num1} * #{num2} = #{num1 * num2}"
when '4' then puts "#{num1} / #{num2} = #{num1.to_f / num2}"
end
