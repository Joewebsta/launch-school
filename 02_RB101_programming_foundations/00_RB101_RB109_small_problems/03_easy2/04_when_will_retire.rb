puts 'What is your age?'
age = gets.chomp.to_i

puts 'At what age would you like to retire?'
retirement_age = gets.chomp.to_i

current_year = Time.now.year
years_to_retire = retirement_age - age
retirement_year = current_year + years_to_retire

puts "It's #{current_year}. You will retire in #{retirement_year}."
puts "You have only #{years_to_retire} years of work to go!"

# What is your age? 30
# At what age would you like to retire? 70

# It's 2016. You will retire in 2056.
# You have only 40 years of work to go!
