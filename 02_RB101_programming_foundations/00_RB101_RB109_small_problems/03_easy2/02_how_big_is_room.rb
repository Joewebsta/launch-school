SQMETERS_TO_SQFEET = 10.7639

def calculate_room_size
  prompt('Enter the length of the room (meters):')
  length = get_dimension

  prompt('Enter the width of the room (meters):')
  width = get_dimension

  sq_meters = calculate_sq_meters(length, width)
  sq_feet = calculate_sq_feet(sq_meters)

  print_results(sq_meters, sq_feet)
end

def get_dimension
  gets.chomp.to_f
end

def prompt(message)
  puts "=>#{message}"
end

def calculate_sq_meters(length, width)
  (length * width).round(2)
end

def calculate_sq_feet(sq_meters)
  (sq_meters * SQMETERS_TO_SQFEET).round(2)
end

def print_results(sq_meters, sq_feet)
  results = "The area of the room is #{sq_meters} " \
            "square meters (#{sq_feet} square feet)."
  prompt(results)
end

calculate_room_size
