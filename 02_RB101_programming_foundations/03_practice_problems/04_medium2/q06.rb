# How could the unnecessary duplication in this method be removed?

def color_valid(color)
  %w(blue green).include?(color)
end

p color_valid('green')
p color_valid('red')
