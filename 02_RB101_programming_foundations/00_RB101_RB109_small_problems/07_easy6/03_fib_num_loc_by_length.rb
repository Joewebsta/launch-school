# Understand the problem
# - Find the index of first fib number thats digit length is equal to the argument

# Explicit requirements
# - Argument is greater than or equal to 2
# -

# Implicit requirements

# Input: integer (digit length)
# Ouput: integer (index)

# Algorithm
# 1 1 2 3 5 8 13

# 1) Print fib numbers
# - Initialize variable to store sum = 1
# - Initialize variable to store current_num = 1
# - Initialize variable to store iteration = 1
# - Create loop

# if iteration == 1
# - print current_num
# - prev_num = current_num

# if iteration > 1
# print current_num
# prev_num = current_num
# current_num = current_num + prev_num

# - print current_num
# - sum = current_num
# - current_num = current_num + sum
# - iteration += 1
# -

# 2) Determine index of provided argument

def find_fibonacci_index_by_length(num_digits)
  # 1 1 2 3 5 8 13

  current_num = 1
  prev_num = 1
  iteration = 2

  while current_num.digits.length < num_digits
    iteration += 1
    sum = current_num + prev_num

    prev_num = current_num
    current_num = sum
  end

  iteration
end

p find_fibonacci_index_by_length(2) == 7 # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12 # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
# p find_fibonacci_index_by_length(10000) == 47847
