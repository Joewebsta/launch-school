# Correct the program
# Assume Customer and Employee have complete implementation
# Make smallest possible change so both object types have access to #print_address

module Mailable
  def print_address
    puts name.to_s
    puts address.to_s
    puts "#{city}, #{state} #{zipcode}"
  end
end

class Customer
  include Mailable
  attr_reader :name, :address, :city, :state, :zipcode
end

class Employee
  include Mailable
  attr_reader :name, :address, :city, :state, :zipcode
end

betty = Customer.new
bob = Employee.new
betty.print_address
bob.print_address
