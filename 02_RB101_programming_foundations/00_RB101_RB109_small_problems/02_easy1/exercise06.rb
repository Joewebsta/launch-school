def reverse_words(string)
  words = string.split(' ')
  reversed_words = words.map do |word|
    word.length >= 5 ? word.reverse : word
  end
  reversed_words.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS
