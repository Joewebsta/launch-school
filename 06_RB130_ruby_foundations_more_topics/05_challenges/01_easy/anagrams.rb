=begin
Two inputs
- String
- array - that represents potential matches

Output
- array of matches sorted alphabetically

Rules
- no matches returns an empty array

ALGO

constructor
- @word
- save the argument in lowercase

METHOD: match
- input: potential_matches
- split @word into invidual chars and sort alphabetically
- iterate over each potentical match
  - convert each word into in array of sorted characters
  - compare @word with potential match ==
  - return new array that contains a sorted collection of matches (select)

=end

class Anagram
  def initialize(word)
    @word = word.downcase
  end

  def match(words)
    matches = words.select do |word|
      next if @word == word.downcase
      @word.downcase.chars.sort == word.downcase.chars.sort
    end

    matches.sort
  end
end
