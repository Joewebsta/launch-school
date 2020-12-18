words = %w[demo none tied evil dome mode live
           fowl veil wolf diet vile edit tide
           flow neon]

anagrams = words.each_with_object({}) do |word, hash|
  key = word.split('').sort.join

  if hash[key]
    hash[key] << word
  else
    hash[key] = [word]
  end
end

anagrams.each_value { |val| p val }
