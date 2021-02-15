def total_stars(row_num)
  (2 * row_num) - 1
end

def total_spaces(grid_size, total_stars)
  grid_size - (total_stars / 2)
end

def spaces(grid_size, row_num)
  stars = total_stars(row_num)
  ' ' * total_spaces(grid_size, stars)
end

def stars(row_num)
  '*' * total_stars(row_num)
end

def diamond(grid_size)
  mid_row_num = (grid_size / 2.0).ceil

  1.upto(mid_row_num) do |row_num|
    puts spaces(grid_size, row_num) + stars(row_num)
  end

  (mid_row_num - 1).downto(1) do |row_num|
    puts spaces(grid_size, row_num) + stars(row_num)
  end
end

# print n rows of stars

# print first to middle rows of stars
# deterine middle row number
# Print row 1 up to middle row number
# Use 2n-1 formula to determine number of stars

# print middle row + 1 to last row (bottom half)
# decrease middle row number by 1 until row number returns to 1
# Use 2n-1 formula to determine number of stars

diamond(1)
diamond(3)
diamond(9)

# 1     *
# 2    ***
# 3   *****
# 4  *******
# 5 *********
# 6  *******
# 7   *****
# 8    ***
# 9     *

# print 1 star
# print the next odd number of stars (increment previous num by 2)
# Continue to increment stars by two until the middle row is reached
