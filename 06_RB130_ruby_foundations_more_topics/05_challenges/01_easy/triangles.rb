=begin
# UNDERSTAND THE PROBLEM

# Input
- 3 integers or floats that represent the side lengths of a triangle

# Output
- String: equilateral, isosceles, scalene

# Explicit rules
- All side lengths must be greater than 0
- Sum of two SHORTEST side lengths must be >= third side length
- equilateral - all side lengths are equal
- isosceles - 2 side lengths are equal, third side length is unique
- scalene - all side lengths are differnt

# Implicit rules
- Triangle object
  - Has a "kind" attribute
- Side length of zero raises ArgumentError
- Side length less than zero raises ArgumentError
- !Sum of two SHORTEST side lengths must be >= third side length raises ArgumentError

EXAMPLES
222 => equi
101010 => equi

3,4,4 => isoc
4,3,4 => isoc
4,4,3 => isoc

3,4,5 => scal
10,11,12 => scal
4,4,2 => scal

ALGORITHM

- Create a Triangle object
  - Initialize
    - side1
    - side2
    - side3
    - kind = determine_kind (method)
- create determine_method
  - Guard clause => ArgumentError
  - Create an array that contains the three side lengths
    - If all? values are equal return "equilateral"
    - If the count of any side is equal exactly to 2 return 'isoceles'
      -
    - Otherwise return scalene
=end

class Triangle
  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3]
    raise ArgumentError, "Invalid triangle lengths" if invalid_sides?
  end

  def kind
    case @sides.uniq.count
    when 1 then "equilateral"
    when 2 then "isosceles"
    else "scalene"
    end
  end

  private

  def invalid_sides?
    sorted_sides = @sides.sort
    sides1_2 = sorted_sides[0..1]
    side3 = sorted_sides[2]

    @sides.include?(0) || sides1_2.sum <= side3
  end
end
