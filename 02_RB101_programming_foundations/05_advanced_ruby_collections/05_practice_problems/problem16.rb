def section(length)
  length.times.reduce('') { |section| section << random_hex_char }
end

def random_hex_char
  (('a'..'f').to_a + ('0'..'9').to_a).sample
end

def uuid
  "#{section(8)}-#{section(4)}-#{section(4)}-#{section(4)}-#{section(12)}"
end

p uuid

# print strings of the following lengths: 8 4 4 4 12
# add each string to a new array
# join string using '-'
