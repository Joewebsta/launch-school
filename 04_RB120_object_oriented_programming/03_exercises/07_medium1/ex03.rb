class Student
  def initialize(name, year)
    @name = name
    @year = year
  end
end

class Graduate < Student
  # Parking = yes
  def initialize(name, year, parking)
    super(name, year)
    @parking = parking
  end
end

class Undergraduate < Student
end

p under1 = Undergraduate.new("Ricky", 2021)
p grad1 = Graduate.new("Brendan", 2023, true)
