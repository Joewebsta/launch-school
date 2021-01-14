# Alan wrote the following method, which was intended to show all of the factors of the input number:

def factors(number)
  divisor = number
  factors = []

  # return factors if number <= 0

  # MY SOLUTION
  # number.downto(1) do |divisor|
  #   factors << number / divisor if number % divisor == 0
  # end

  # LAUNCHSCHOOL SOLUTION
  while divisor > 0
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end

  factors
end

p factors(0)
p factors(20)
p factors(100)

# Alyssa noticed that this will fail if the input is 0, or a negative number,
# and asked Alan to change the loop. How can you make this work without using
# begin/end/until? Note that we're not looking to find the factors for 0 or
# negative numbers, but we just want to handle it gracefully instead of raising
# an exception or going into an infinite loop.

# Bonus 1
# What is the purpose of the number % divisor == 0 ?
## This conditional statement checks if the number when divided by the current divisor returns a remainder of zero.
## If there is no remainder, then the divisor is a factor of the number and it is appended to the factors array.

# Bonus 2
# What is the purpose of the second-to-last line (line 8) in the method (the factors before the method's end)?
## The last line returns the factors array back to the caller.
