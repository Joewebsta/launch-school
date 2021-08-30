=begin

***************************** PROBLEM *****************************

****************************** RULES ******************************

Explict
- Perfect: result == agument
- Abundant: result > argument
- Deficient: result < argument

- Prime numbers always deficient

Implicit
- RAISE Standard Error if argument is negative
-
-
-

*********************** EXAMPLES/TEST CASES ***********************

**************************** ALGORITHM ****************************
count from 1 to argument - 1 (NOT 6!)
1 6 % 1 == 0
2 6 % 2 == 0
3 6 % 3 == 0
4
5
6

[1, 2, 3].sum == 6 vs ORIGINAL 6

count from 1 to argument - 1 (NOT 6!)
Create array of values from 1 to argument - 1
Select array values that are positive divisors
Sum array of positive divisors
Compare sum to original argument
Return type of number

******************************* CODE ******************************
=end

class PerfectNumber
  def self.classify(number)
    raise StandardError if number <= 0

    aliquot_number = aliquot_num(number)

    if aliquot_number == number
      "perfect"
    elsif aliquot_number > number
      "abundant"
    else
      "deficient"
    end
  end

  def self.aliquot_num(number)
    (1...number).to_a.select { |num| number % num == 0 }.sum
  end
end
