def crunch(string)
  string.chars.reduce('') do |clean_string, char|
    clean_string << char unless char == clean_string.chars.last
    clean_string
  end
end

p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''
