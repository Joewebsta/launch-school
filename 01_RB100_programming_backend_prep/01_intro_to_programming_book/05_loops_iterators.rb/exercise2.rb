answer = ''

while answer != 'stop'
  puts 'Please enter a name:'
  answer = gets.chomp.downcase

  break if answer == 'stop'

  puts "Hello #{answer}"
end
