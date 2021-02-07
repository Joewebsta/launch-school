# - - - - -
# T T T T T

#           1 2 3 4 5
# Roudn 1 - T T T T T
# Roudn 2 - T F T F T
# Roudn 3 - T F F T F

# If the (index + 1) is divisible by the round number
# Convert to opposite boolean value

def toggle_lights(num_lights)
  lights = num_lights.times.each_with_object([]) { |_, arr| arr << true }

  2.upto(num_lights) do |round|
    lights = lights.map.with_index do |light, i|
      ((i + 1) % round).zero? ? !light : light
    end
  end

  lights = lights.map.with_index { |light, i| (i + 1) if light }
  lights.compact
end

p toggle_lights(5)
p toggle_lights(10)
p toggle_lights(1000)

[1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324,
 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961]
