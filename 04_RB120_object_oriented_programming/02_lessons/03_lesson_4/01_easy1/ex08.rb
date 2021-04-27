class Cat
  attr_accessor :type, :age

  def initialize(type)
    @type = type
    @age  = 0
  end

  def make_one_year_older
    self.age += 1
  end
end

# Self on line 10 refers to the instance object that is calling the age= setter
# method which in this case would be a Cat object.