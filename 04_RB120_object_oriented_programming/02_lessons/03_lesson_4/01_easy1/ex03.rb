module Speed
  def go_fast
    puts "I am a #{self.class} and going super fast!"
  end
end

class Car
  include Speed
  def go_slow
    puts "I am safe and driving slow."
  end
end

small_car = Car.new
small_car.go_fast
# I am a Car and going super fast!

# Line 3 uses the 'self' keyword to access the calling object which in this
# case is a Car instance object 'small_car'. The #class method is then called
# on small_car which returns it's parent class which is Car.
