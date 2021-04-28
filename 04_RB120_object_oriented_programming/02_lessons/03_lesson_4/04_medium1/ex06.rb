class ComputerA
  attr_accessor :template

  def create_template
    @template = "template 14231"
  end

  def show_template
    template
  end
end

class ComputerB
  attr_accessor :template

  def create_template
    self.template = "template 14231"
  end

  def show_template
    template
  end
end

compa = ComputerA.new
compa.create_template
p compa.show_template

compb = ComputerB.new
compb.create_template
p compb.show_template
