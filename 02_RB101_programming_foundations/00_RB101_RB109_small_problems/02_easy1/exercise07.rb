def stringy(num)
  output_string = ''

  num.times do |iteration|
    output_string += (iteration + 1).odd? ? '1' : '0'
  end

  output_string
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
