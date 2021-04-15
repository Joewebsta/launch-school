=begin

3) Create a module that you can mix in to ONE of your subclasses that describes
   a behavior unique to that subclass.

=end

module Convertible
  def top_down
    "Your top is now down!"
  end

  def top_up
    "Your top is back up..."
  end
end

class Vehicle
  attr_accessor :speed, :color, :model, :year

  @@total_vehicles_created = 0

  def self.total_vehicles_created
    @@total_vehicles_created
  end

  def self.gas_mileage(miles, gallons)
    puts "The gas mileage is #{miles.to_f / gallons} gallons per mile."
  end

  def initialize(model, year, color)
    self.model = model
    self.year = year
    self.color = color
    self.speed = 0
    @@total_vehicles_created += 1
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

class MyCar < Vehicle
  include Convertible

  TOTAL_DOORS = 30

  def to_s
    "Your car is a #{color.downcase} #{year} #{model}."
  end
end

class MyTruck < Vehicle
  TRUCK_BED_LENGTH = 6

  def to_s
    "Your truck is a #{color.downcase} #{year} #{model}."
  end
end

rav4 = MyCar.new("Toyota Rav4", 2021, "red")
puts rav4.top_down
puts rav4.top_up
