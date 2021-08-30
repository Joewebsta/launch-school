=begin

***************************** PROBLEM *****************************

- Given a natural number and a set of one or more other numbers
- Find the sum of all the multiples of the numbers in the set that are
  less than the first

****************************** RULES ******************************

Explict
- Input
- Output

- Default set is 3 and 5 IF NOT PROVIDED

Implicit
- There can be two or more arguments
-
-
-

*********************** EXAMPLES/TEST CASES ***********************

Natural num: 20
Multiples: 3 or 5

**************************** ALGORITHM ****************************
Create array of all natural numbers up to but not including argument 1 - 19
Determine which natural numbers when divided leave no remainder
Sum the array of natural numbers

******************************* CODE ******************************
=end

class SumOfMultiples
  def self.to(num)
    SumOfMultiples.new().to(num)
  end

  def initialize(*multiples)
    @multiples = multiples.empty? ? [3, 5] : multiples
  end

  def to(num)
    (1...num).select do |current_num|
      @multiples.any? { |multiple| (current_num % multiple).zero? }
    end.sum
  end
end
