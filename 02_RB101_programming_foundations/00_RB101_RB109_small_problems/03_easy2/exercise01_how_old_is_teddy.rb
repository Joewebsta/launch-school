def teddy_age(name)
  name = 'Teddy' if name.empty?
  rand_age = rand(20..200)
  "#{name} is #{rand_age} years old!"
end

def prompt_name
  puts 'What is your name?'
end

def name
  gets.chomp
end

prompt_name
puts teddy_age(name)
