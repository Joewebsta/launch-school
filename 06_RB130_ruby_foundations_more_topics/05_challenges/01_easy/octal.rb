=begin

***************************** PROBLEM *****************************

****************************** RULES ******************************

Explict
- Input
- Output

- Invalid output is ocatal 0

Implicit
- Non numerical strings return 0
-
-
-

*********************** EXAMPLES/TEST CASES ***********************

  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

233

Iterate 223.to_s.size - 3 times => 0 to 2

Round 0 - 233 / 10**0 % 10 => 3
Round 1 - 233 / 10**1 % 10 => 2
Round 2 - 233 / 10**2 % 10 => 2

**************************** ALGORITHM ****************************
Split string into chars
Convert chars back into numbers
Iterate over the numbers keeping track of the value of iteration

******************************* CODE ******************************
=end

class Octal
  def initialize(string_num)
    @string_num = string_num
  end

  def to_decimal
    return 0 if @string_num.match?(/[a-z8-9]/i)

    num_array = @string_num.chars.map(&:to_i)

    total = 0
    num_array.reverse.each_with_index do |num, idx|
      total += num * 8**idx
    end

    total
  end
end

# 233 # octal
# = 2*8^2 + 3*8^1 + 3*8^0
# = 2*64  + 3*8   + 3*1
# = 128   + 24    + 3
# = 155

# 233

# p Octal.new('1').to_decimal
# p Octal.new('10').to_decimal
# p Octal.new('17').to_decimal
# p Octal.new('11').to_decimal
# p Octal.new('130').to_decimal
# p Octal.new('2047').to_decimal
# p Octal.new('7777').to_decimal
# p Octal.new('1234567').to_decimal
# p Octal.new('carrot').to_decimal
# p Octal.new('abc1z').to_decimal
# p Octal.new('234abc').to_decimal
# p Octal.new('011').to_decimal

# p Octal.new('8').to_decimal
# p Octal.new('9').to_decimal
# p Octal.new('6789').to_decimal
