puts 'What is your name?'
name = gets.chomp
greeting = "Hello #{name}."

if name[-1] == '!'
  name = name.chop.upcase
  greeting = "HELLO #{name}. WHY ARE WE SCREAMING?"
end

puts greeting

# What is your name? Bob
# Hello Bob.

# What is your name? Bob!
# HELLO BOB. WHY ARE WE SCREAMING?
