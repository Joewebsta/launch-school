class Light
  attr_accessor :brightness, :color

  def initialize(brightness, color)
    @brightness = brightness
    @color = color
  end

  def self.information
    light = Light.new("super high", "green")
    "I want to turn on the light with a brightness level of #{light.brightness} and a color of #{light.color}"
  end
end

p Light.information
