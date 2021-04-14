=begin

3) You want to create a nice interface that allows you to accurately describe 
the action you want your program to perform. Create a method called spray_paint 
that can be called on an object and will modify the color of the car.

=end

class MyCar
  attr_accessor :speed, :color
  attr_reader :model, :year

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

  def spray_paint(color)
    old_color = @color
    self.color = color
    puts "The color of your car has changed from #{old_color} to #{color}."
  end
end

rav4 = MyCar.new("Toyota Rav4", 2021, "Red")
rav4.spray_paint("Blue")
rav4.spray_paint("Purple")
p rav4.color
