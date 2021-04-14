# 2) Override the to_s method to create a user friendly print out of your object.

class MyCar
  attr_accessor :speed, :color
  attr_reader :model, :year

  def self.gas_mileage(miles, gallons)
    puts "The gas mileage is #{miles.to_f / gallons} gallons per mile."
  end

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

  def to_s
    "Your car is a #{color.downcase} #{year} #{model}."
  end
end

rav4 = MyCar.new("Toyota Rav4", 2021, "Red")
puts rav4
