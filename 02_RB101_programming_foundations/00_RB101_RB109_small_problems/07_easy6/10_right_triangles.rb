def triangle(num_rows)
  1.upto(num_rows) do |num_stars|
    spaces = " " * (num_rows - num_stars)
    stars = '*' * num_stars
    puts "#{spaces}#{stars}"
  end
end

triangle(5)
triangle(9)

#     *
#    **
#   ***
#  ****
# *****
