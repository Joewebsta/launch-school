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

class BeerSong
  def self.verse(verse_num)
    verse_text(verse_num)
  end

  def self.verses(verse_start_num, verse_end_num)
    all_verses = []

    verse_start_num.downto(verse_end_num) do |verse_num|
      all_verses << verse_text(verse_num)
    end

    all_verses.join("\n")
  end

  def self.lyrics
    verses(99, 0)
  end

  def self.verse_text(verse_num)
    case verse_num
    when 2 then verse2
    when 1 then verse1
    when 0 then verse0
    else verse_normal(verse_num)
    end
  end

  def self.verse_normal(verse_num)
    "#{verse_num} bottles of beer on the wall, #{verse_num} bottles of beer.\n" +
      "Take one down and pass it around, #{verse_num - 1} bottles of beer on the wall.\n"
  end

  def self.verse2
    "2 bottles of beer on the wall, 2 bottles of beer.\n" \
    "Take one down and pass it around, 1 bottle of beer on the wall.\n"
  end

  def self.verse1
    "1 bottle of beer on the wall, 1 bottle of beer.\n" \
    "Take it down and pass it around, no more bottles of beer on the wall.\n"
  end

  def self.verse0
    "No more bottles of beer on the wall, no more bottles of beer.\n" \
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
  end
end

# puts BeerSong.verse(99)
# puts BeerSong.verse(3)
# puts BeerSong.verse(2)
# puts BeerSong.verse(1)
# # puts BeerSong.verse(0)
puts BeerSong.verses(99, 98)
# puts BeerSong.verses(2, 0)
# puts BeerSong.lyrics
