=begin

Create a class called MyCar. When you initialize a new instance or object of the
class, allow the user to define some instance variables that tell us the year,
color, and model of the car. Create an instance variable that is set to 0 during
instantiation of the object to track the current speed of the car as well.
Create instance methods that allow the car to speed up, brake, and shut the car off.
=end

class MyCar
  attr_accessor :speed
  attr_reader :model, :year, :color

  def initialize(model, year, color)
    @model = model
    @year = year
    @color = color
    @speed = 0
  end

  def accelerate(num)
    self.speed += num
  end

  def brake(num)
    self.speed -= num
  end

  def turn_off
    self.speed = 0
    puts "The #{year} #{color} #{model} is now turned off."
  end
end

rav4 = MyCar.new("Toyota Rav4", 2021, "Red")
5.times { rav4.accelerate }
3.times { rav4.brake }
p rav4.speed
p rav4.turn_off
