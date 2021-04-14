=begin

1) How do we create an object in Ruby? Give an example of the creation of an object.

Joe Answer

- You create an object by 1) defining a class and then 2) instantiating an
  instance object by using the ::new method.
- A class is created by using the 'class' reserved word and providing a class name
  using the camelCase convetion. The end of class denoted by using the reserved
  word 'end'.

LS Answer

We create an object by defining a class and instantiating it by using the .new
method to create an instance, also known as an object.

=end

# Example

# class Dog
#   def initialize(name, age)
#     @name = name
#     @age = age
#   end
# end

# p tanka = Dog.new("Tanka", 4)

=begin

#2) What is a module? What is its purpose? How do we use them with our classes?
  Create a module for the class you created in exercise 1 and include it properly.

  Joe answer
  - A module is a collection of behaviors (methods) that be added or "mixed-in"
    to a class and as a result made available to the class's instance objects.

  LS Answer
  A module allows us to group reusable code into one place. We use modules in
  our classes by using the include method invocation, followed by the module name.
  Modules are also used as a namespace.
=end

module Speak
  def speak
    "woof!"
  end
end

class Dog
  include Speak

  def initialize(name, age)
    @name = name
    @age = age
  end
end

p tanka = Dog.new("Tanka", 4)
p tanka.speak
