=begin

2) Add an accessor method to your MyCar class to change and view the color of your
car.

Then add an accessor method that allows you to view, but not modify, the year
of your car.

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
end

rav4 = MyCar.new("Toyota Rav4", 2021, "Red")
p rav4.color = "Green"
p rav4.color
p rav4.year
