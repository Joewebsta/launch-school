def numberReport
  puts 'Please enter a number between 0 and 100'
  num = gets.chomp.to_i

  if num.negative?
    loop do
      puts 'Please enter a positive number.'
      num = gets.chomp.to_i
      break if num.positive?
    end
  end

  if num <= 50
    puts "#{num} is between 0 and 50"
  elsif num <= 100
    puts "#{num} is between 51 and 100"
  else
    puts "#{num} is greater than 100"
  end
end

numberReport
