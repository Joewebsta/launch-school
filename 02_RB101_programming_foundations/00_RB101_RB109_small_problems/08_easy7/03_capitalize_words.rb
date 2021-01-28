def word_cap(string)
  string.split.map(&:capitalize).join(' ')
end

p word_cap('the javaScript language') == 'The Javascript Language'
p word_cap('four score and seven') == 'Four Score And Seven'
p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# Separate string into array of individual words
# Initialize variable 'capital words' and assign to empty array
# Iterate over each word
# Convert each word to all lowercase
# Convert first letter of each word to capital
# Add new word to 'capital words' array
# Convert 'capital words' into a string
# Return string
