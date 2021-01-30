def sum_of_sums(numbers)
  sum_total = 0

  1.upto(numbers.size) do |count|
    sum_total += numbers.first(count).sum
  end

  sum_total
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35

# Initialize varibale 'sum' to store sum of elements
# Start with the first element in 'numbers'
# Add first element in 'numbers' to 'sum'
# Add sum of first and second elements in 'numbers' to 'sum'
# Add sum of first, second and third elements in 'numbers' to 'sum'

# APPROACHES
# sum numbers.first.sum + numbers.first(2).sum + numbers.first(3).sum

# sum numbers.slice(0, 1) + numbers.slice(0, 2) + numbers.slice(0, 3)
