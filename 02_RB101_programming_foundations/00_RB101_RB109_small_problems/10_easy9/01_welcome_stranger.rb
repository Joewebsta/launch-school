def greetings(name, details)
  name = name.join(' ')
  full_title = "#{details[:title]} #{details[:occupation]}"
  "Hello, #{name}! Nice to have a #{full_title} around."
end

p greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
# => Hello, John Q Doe! Nice to have a Master Plumber around.
