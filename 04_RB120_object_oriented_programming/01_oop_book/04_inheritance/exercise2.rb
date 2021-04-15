=begin

Add a class variable to your superclass that can keep track of the number of
objects created that inherit from the superclass. Create a method to print out
the value of this class variable as well.

=end

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

puts MyCar.new("Toyota Rav4", 2021, "red")
puts Vehicle.total_vehicles_created
puts MyTruck.new("Toyota Tacoma", 2022, "blue")
puts Vehicle.total_vehicles_created
