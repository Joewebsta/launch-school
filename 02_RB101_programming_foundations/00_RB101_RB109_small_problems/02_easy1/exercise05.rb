def reverse_sentence(string)
  words = string.split(' ')
  reversed = words.reverse_each.with_object([]) { |word, arr| arr << word }
  reversed.join(' ')
end

puts reverse_sentence('') == ''
puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
