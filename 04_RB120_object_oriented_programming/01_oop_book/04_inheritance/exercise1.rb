=begin

1) Create a superclass called Vehicle for your MyCar class to inherit from and move
the behavior that isn't specific to the MyCar class to the superclass.

Create a constant in your MyCar class that stores information about the vehicle
that makes it different from other types of Vehicles.

Then create a new class called MyTruck that inherits from your superclass that
also has a constant defined that separates it from the MyCar class in some way.

=end

class Vehicle
  attr_accessor :speed, :color, :model, :year

  def self.gas_mileage(miles, gallons)
    puts "The gas mileage is #{miles.to_f / gallons} gallons per mile."
  end

  def initialize(model, year, color)
    self.model = model
    self.year = year
    self.color = color
    self.speed = 0
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

puts rav4 = MyCar.new("Toyota Rav4", 2021, "red")
puts taco = MyTruck.new("Toyota Tacoma", 2022, "blue")
