=begin

***************************** PROBLEM *****************************

Compute the scrabble score for a word

****************************** RULES ******************************

Explict
- Input: String or nil
- Ouput: Integer

- Score => the sum of all the char values in a word

Implicit
- String is case insensitive
- Empty string returns 0
- Whitespace (tab/new line) return 0
- Nil argument returns 0

*********************** EXAMPLES/TEST CASES ***********************

CABBAGE
C - 1 => 3 points * 1  3
A - 2 => 1 point * 2   2
B - 2 => 3 points * 2  6
G - 1 => 2 points * 1  2
E - 1 => 1 point * 1   1
14 points total

**************************** ALGORITHM ****************************
CLASS: Scrabble

Constructor
- Assign argument.downcase to "word"

METHOD: score
-

- Determine total count of each letter in a word
- Use the total count to determine the total value of each char
- Sum the values of all characters

******************************* CODE ******************************
=end

class Scrabble
  LETTERS = {
    ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"] => 1,
    ["D", "G"] => 2,
    ["B", "C", "M", "P"] => 3,
    ["F", "H", "V", "W", "Y"] => 4,
    ["K"] => 5,
    ["J", "X"] => 8,
    ["Q", "Z"] => 10
  }

  def initialize(word)
    @word = word
    @letter_count = letter_count
  end

  def score
    return 0 if @word.nil?

    final_sum = 0
    letter_count.each do |letter, letter_count|
      LETTERS.each do |letter_array, letter_value|
        if letter_array.include?(letter)
          final_sum += letter_count * letter_value
        end
      end
    end

    final_sum
  end

  def self.score(word)
    Scrabble.new(word).score
  end

  private

  def letter_count
    return '' if @word.nil?
    @word.chars.each_with_object(Hash.new(0)) do |letter, count|
      count[letter.upcase] += 1
    end
  end
end
