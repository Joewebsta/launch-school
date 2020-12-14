def shout(string)
  return string.upcase if string.length > 10

  string
end

puts shout('hello world')
puts shout('joe')
