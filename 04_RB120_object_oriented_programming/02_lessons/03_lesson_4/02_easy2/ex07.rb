class Cat
  @@cats_count = 0

  def initialize(type)
    @type = type
    @age  = 0
    @@cats_count += 1
  end

  def self.cats_count
    @@cats_count
  end
end

# @@cats_count is a class variable
# When a new cat object is instantiated the value of the @@cats_count varibale
# will increase by 1.

p Cat.cats_count
Cat.new('black')
p Cat.cats_count
Cat.new('white')
p Cat.cats_count
