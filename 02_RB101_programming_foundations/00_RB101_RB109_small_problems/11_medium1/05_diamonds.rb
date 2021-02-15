def diamond(grid_size)
  mid_row_num = (grid_size / 2)

  (0...mid_row_num).each do |row_num|
    tot_stars = (2 * row_num) + 1
    tot_spaces = grid_size - tot_stars / 2
    puts (' ' * tot_spaces) + ('*' * tot_stars)
  end

  (0...(mid_row_num - 1)).reverse_each do |row_num|
    tot_stars = (2 * row_num) + 1
    tot_spaces = grid_size - tot_stars / 2
    puts (' ' * tot_spaces) + ('*' * tot_stars)
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
# diamond(3)
# diamond(9)

#     *
#    ***
#   *****
#  *******
# *********
#  *******
#   *****
#    ***
#     *

# print 1 star
# print the next odd number of stars (increment previous num by 2)
# Continue to increment stars by two until the middle row is reached
