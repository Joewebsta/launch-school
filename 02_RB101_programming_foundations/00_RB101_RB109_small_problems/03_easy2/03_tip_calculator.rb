puts 'What is the bill?'
bill_amount = gets.chomp.to_f

puts 'What is the tip percentage?'
tip_percentage = gets.chomp.to_f

tip_amount = ((tip_percentage / 100) * bill_amount).round(2)
bill_total = (bill_amount + tip_amount).round(2)

puts "The tip is: #{tip_amount}"
puts "The total is: #{bill_total}"

# What is the bill? 200
# What is the tip percentage? 15

# The tip is $30.0
# The total is $230.0
