stoplight = %w[green yellow red].sample

# case stoplight
# when 'green'
#   puts 'Go!'
# when 'yellow'
#   puts 'Slow down!'
# else
#   puts 'Stop!'
# end

puts 'Go!' if stoplight == 'green'
puts 'Slow down!' if stoplight == 'yellow'
puts 'Stop!' if stoplight == 'red'
