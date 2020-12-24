def execute(&block)
  block
end

p execute { puts 'Hello from inside the execute method!' }

# The block is not activated on line 2 so nothing is printed to the screen.
# A proc object is returned
