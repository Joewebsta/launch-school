class Person
  attr_writer :name

  def name
    @name.prepend("Mr. ")
  end
end

person1 = Person.new
person1.name = 'James'
puts person1.name
