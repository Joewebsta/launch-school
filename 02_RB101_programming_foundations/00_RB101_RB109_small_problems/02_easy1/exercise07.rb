def stringy(size, initial_int = 1)
  alt_int = (initial_int == 1 ? 0 : 1)

  size.times.reduce([]) do |arr, index|
    arr << (index.even? ? initial_int : alt_int)
  end.join
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'

puts stringy(6, 0) == '010101'
puts stringy(9, 0) == '010101010'
puts stringy(4, 0) == '0101'
puts stringy(7, 0) == '0101010'
