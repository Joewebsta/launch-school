class Machine
  def start
    flip_switch(:on)
  end

  def stop
    flip_switch(:off)
  end

  def switch_position
    @switch
  end

  private

  attr_accessor :switch

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

vacuum = Machine.new
p vacuum.switch_position
vacuum.start
vacuum.stop
p vacuum.switch_position
