# Initialize an empty hash. Assign to variable word_length_counter
# Split string into array of substrings
# Iterate over substrings
# invoke String#size method on substring
# Update hash and increase count of substring with current substring length
# If key exists with current subtring length - update key's value by 1
# If key does not exist with current substring length, then assign hash[subtring.size] to 1

def word_sizes(string)
  string.split.each_with_object(Hash.new(0)) do |word, counts|
    counts[word.length] += 1
  end
end

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1,
                                                                7 => 2 }
p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
p word_sizes('') == {}
