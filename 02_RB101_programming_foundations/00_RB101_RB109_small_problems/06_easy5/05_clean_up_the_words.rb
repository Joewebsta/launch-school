# Remove duplicate characters (filter.with_index)
# If ord value is not a letter, replace with space

def cleanup(str)
  replace_non_letters(str).squeeze(' ')
end

def replace_non_letters(str)
  str.chars.reduce('') do |result, char|
    if (65..90).cover?(char.ord) || (97..122).cover?(char.ord)
      result + char
    else
      "#{result} "
    end
  end
end

p cleanup("---what's my +*& line?") == ' what s my line '
