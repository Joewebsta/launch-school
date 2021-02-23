NUMBERS = {
  'one' => '1',
  'two' => '2',
  'three' => '3',
  'four' => '4',
  'five' => '5',
  'six' => '6',
  'seven' => '7',
  'eight' => '8',
  'nine' => '9',
  'ten' => '10'
}

def word_to_digit(string)
  converted_string = string.split.map do |word|
    if NUMBERS.key?(word) || NUMBERS.key?(word[0..-2])
      word.end_with?('.') ? "#{NUMBERS[word[0..-2]]}." : NUMBERS[word]
    else
      word
    end
  end

  converted_string.join(' ')
end

p word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'
