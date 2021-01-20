# Leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100.
# If the year is evenly divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.

# If divisible by 4 -> leap year
# If divisble by 100 && divisible by 400 - leap year
# If divisible by 4 && divisible by 100 - NOT leap year

def leap_year?(year)
  (year % 400).zero? || (!(year % 100).zero? && (year % 4).zero?)
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true
