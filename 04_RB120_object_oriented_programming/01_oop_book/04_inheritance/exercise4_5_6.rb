=begin

4) Print to the screen your method lookup for the classes that you have created.

5) Move all of the methods from the MyCar class that also pertain to the MyTruck
   class into the Vehicle class. Make sure that all of your previous method
   calls are working when you are finished.

6) Write a method called age that calls a private method to calculate the age
   of the vehicle. Make sure the private method is not available from outside
   of the class.
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

  def age
    puts "Your #{model} is #{calculate_age} years old."
  end

  private

  def calculate_age
    Time.now.year - year
  end
end

class MyCar < Vehicle
  include Convertible

  TOTAL_DOORS = 4

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

rav4 = MyCar.new("Toyota Rav4", 2019, "red")
taco = MyCar.new("Toyota Tacoma", 1990, "blue")

# puts MyCar.ancestors
# puts MyTruck.ancestors
# puts Vehicle.ancestors
# puts Convertible.ancestors
# puts taco.ancestors

taco.age
rav4.age
