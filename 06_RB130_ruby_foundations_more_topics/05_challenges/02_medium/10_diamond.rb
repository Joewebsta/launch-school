=begin

***************************** PROBLEM *****************************

****************************** RULES ******************************

Explict
- Input
- Output

-

Implicit
-
-
-
-

*********************** EXAMPLES/TEST CASES ***********************

**************************** ALGORITHM ****************************

******************************* CODE ******************************
=end

class Diamond
  ALPHABET = { "A" => 1, "B" => 2, "C" => 3, "D" => 4, "E" => 5, "F" => 6, "G" => 7, "H" => 8, "I" => 9, "J" => 10, "K" => 11, "L" => 12, "M" => 13, "N" => 14, "O" => 15, "P" => 16, "Q" => 17, "R" => 18, "S" => 19, "T" => 20, "U" => 21, "V" => 22, "W" => 23, "X" => 24, "Y" => 25, "Z" => 26 }

  def self.make_diamond(letter)
    results = ""
    left_spaces = ALPHABET[letter] - 1
    center_spaces = 1

    ("A"..letter).each do |let|
      results += " " * left_spaces

      # FIRST LETTER
      results += let

      if let != "A"

        # CENTER SPACES
        results += " " * center_spaces

        # SECOND LETTER
        results += let

        center_spaces += 2 if let != letter
      end

      results += "\n"

      left_spaces -= 1 if let != letter
    end

    left_spaces += 1
    center_spaces -= 2

    ("A"..."E").reverse_each do |let|
      results += " " * left_spaces

      # FIRST LETTER
      results += let

      if let != "A"

        # CENTER SPACES
        results += " " * center_spaces

        # SECOND LETTER
        results += let

        center_spaces -= 2
      end
      results += "\n"

      left_spaces += 1
    end

    puts results
  end
end

# puts Diamond.make_diamond("A")
puts Diamond.make_diamond("B")
puts Diamond.make_diamond("E")
