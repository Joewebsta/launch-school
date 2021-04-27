class Fruit
  def initialize(name)
    name = name
  end
end

class Pizza
  def initialize(name)
    @name = name
  end
end

# The Pizza class has an instance variable "@name". You can tell by the "@"
# sign.

# The Fruit class has a local variable "name"

p Pizza.new("cheese").instance_variables
