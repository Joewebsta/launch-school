# Create variable to store sum
# Print numbers from 1 to limit
# Check if number is divisble by 3 or 5
  # Add valid number to sum variable
# Return sum


def multisum(limit)
  # sum = 0

  # 2.upto(limit) do |int|
  #   sum += int if ((int % 3).zero? || (int % 5).zero?)
  # end
  
  # sum

  1.upto(limit).reduce(0) do |sum, int| 
    sum = sum + int if ((int % 3).zero? || (int % 5).zero?)
    sum
  end
end

p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168