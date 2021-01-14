# Starting with the string:

famous_words = "seven years ago..."
# show two different ways to put the expected "Four score and " in front of it.

beginning = 'Four score and '

# puts "#{beginning}#{famous_words}"
# puts famous_words.insert(0, beginning)
puts famous_words.prepend(beginning)
# p famous_words.split.unshift(beginning.split).flatten.join(' ')
