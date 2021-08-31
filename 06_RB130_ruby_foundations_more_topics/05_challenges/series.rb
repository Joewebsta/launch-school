=begin

***************************** PROBLEM *****************************

****************************** RULES ******************************

Explict
- Input string
- Output multi dimensional array

-

Implicit
-
-
-
-

*********************** EXAMPLES/TEST CASES ***********************

**************************** ALGORITHM ****************************

CONSTRUCTOR
Accept argument and assign to @series

SLICE (CLASS METHOD)

******************************* CODE ******************************
=end

class Series
  def initialize(num)
    @num = num
  end

  def slices(elem_num)
    raise ArgumentError if elem_num > @num.size
    @num.chars.map(&:to_i).each_cons(elem_num).to_a
  end
end