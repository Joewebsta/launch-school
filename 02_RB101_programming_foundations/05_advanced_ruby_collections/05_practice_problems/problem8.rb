VOWELS = 'aeiou'
hsh = { first: ['the', 'quick'],
        second: ['brown', 'fox'],
        third: ['jumped'],
        fourth: ['over', 'the', 'lazy', 'dog'] }

hsh.each_value do |str_arr|
  str_arr.each do |word|
    word.each_char do |char|
      puts char if VOWELS.include?(char)
    end
  end
end
