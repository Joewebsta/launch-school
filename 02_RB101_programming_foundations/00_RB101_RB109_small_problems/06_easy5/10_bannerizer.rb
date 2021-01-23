def print_in_box(string)
  str_size = string.size

  print_dashed_row(str_size)
  print_blank_row(str_size)
  print_string_input(string)
  print_blank_row(str_size)
  print_dashed_row(str_size)
end

def print_dashed_row(size)
  puts "+#{'-' * (size + 2)}+"
end

def print_blank_row(size)
  puts "|#{' ' * (size + 2)}|"
end

def print_string_input(string)
  puts "| #{string} |"
end

print_in_box('To boldly go where no one has gone before.')
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

print_in_box('')
# +--+
# |  |
# |  |
# |  |
# +--+
