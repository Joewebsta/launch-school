def execute(&block)
  block.call
end

execute { puts 'Hello from inside the execute method!' }

# block.rb1:in `execute': wrong number of arguments (0 for 1) (ArgumentError)
# from test.rb:5:in `<main>'

# We receive an error because the block parameter needs to be proceeded by an ampersand
