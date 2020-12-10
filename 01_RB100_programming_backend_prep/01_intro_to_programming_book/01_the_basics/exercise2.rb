number = 1589

puts "thousands place is #{number / 1000}"
puts "hundreds place is #{number % 1000 / 100}"
puts "tens place is #{number % 1000 % 100 / 10}"
puts "ones place is #{number % 1000 % 100 % 10}"
